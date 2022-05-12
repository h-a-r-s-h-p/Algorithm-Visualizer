import React, { useEffect, useRef } from 'react'
import { DataSet, Network } from 'vis-network/standalone/esm/vis-network';
import "./PlotGraph.css"

export default function PlotGraph(props) {

    const domNode = useRef(null);

    const network = useRef(null);
    const graph = props.plotGraphProps.graph;

    var vertexCount = graph.vertexCount;
    // console.log("vertexCount inside plotGraph = "+ vertexCount);
    var edgeCount = graph.edgeCount;
    var startingVertices = graph.startingVertices;

    var endingVertices = graph.endingVertices;


    var weights = graph.weights;
    var source = graph.source;
    var sink = graph.sink;

    var nodesColor= props.plotGraphProps.dynamic.nodesColor

    var edgesFlow = props.plotGraphProps.dynamic.edgesFlow
    var edgesCapacity = props.plotGraphProps.dynamic.edgesCapacity
    var edgesColor = props.plotGraphProps.dynamic.edgesColor

    var xPos = 0;
    var nodesArray = [];
    for (var i = 1; i < vertexCount; i++) {
        if (i % 2 === 1) {
            xPos++;
            nodesArray[i] = {
                id: i,
                label: i.toString(),
                y: 0,
                x: xPos,
                color:{
                    background: nodesColor[i]
                }
            }
        }
        else {
            nodesArray[i] = {
                id: i,
                label: i.toString(),
                y: 2,
                x: xPos,
                color:{
                    background: nodesColor[i]
                }
            }
        }
    }

    nodesArray[0] = {
        id: 0,
        label: "0",
        y: 1,
        x: 0,
        color:{
            background:nodesColor[0]
        }
    }

    if (vertexCount % 2 === 0) {
        nodesArray[vertexCount - 1] = {
            id: vertexCount - 1,
            label: (vertexCount - 1).toString(),
            y: 1,
            x: xPos,
            color:{
                background:nodesColor[vertexCount-1]
            }
        }
    }

    var edges = [];
    for (var j = 0; j < edgeCount; j++) {
        edges[j] = {
            id: i++,
            from: startingVertices[j],
            to: endingVertices[j],
            arrows: {
                to: {
                    enabled: true,
                    type: "arrow",
                },
            },
            label: edgesFlow[startingVertices[j]][endingVertices[j]].toString()+"/"+edgesCapacity[startingVertices[j]][endingVertices[j]].toString(),
            font: {
                align: "top",
                color: edgesColor[startingVertices[j]][endingVertices[j]]
            },
            color: edgesColor[startingVertices[j]][endingVertices[j]]
        };
    }

    for (var k = 0; k < edgeCount; k++) {
        edges[j++] = {
            id: i++,
            from: endingVertices[k],
            to: startingVertices[k],
            arrows: {
                to: {
                    enabled: true,
                    type: "arrow",
                },
            },
            label: edgesFlow[endingVertices[k]][startingVertices[k]].toString()+"/"+edgesCapacity[endingVertices[k]][startingVertices[k]].toString(),
            font: {
                align: "top",
                color: edgesColor[endingVertices[k]][startingVertices[k]]
            },
            hidden: props.plotGraphProps.reverseEdgesHidden,
            color: edgesColor[endingVertices[k]][startingVertices[k]],
            group: "reverse"
        }
    }

    var nodes = new DataSet(nodesArray);
    edges = new DataSet(edges);

    const data = {
        nodes,
        edges
    };

    const options = {}

    useEffect(
        () => {
            network.current = new Network(domNode.current, data, options);
        },
        [domNode, network, data, options]
    );


    return (
        <div className="thegraph" ref={domNode}></div>
    );
};
