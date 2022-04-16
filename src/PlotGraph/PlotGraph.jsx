import React, { useEffect, useRef } from 'react'
import { DataSet, Network } from 'vis-network/standalone/esm/vis-network';
import "./PlotGraph.css"

export default function PlotGraph(props) {

  const domNode = useRef(null);

  const network = useRef(null);

  var vertexCount = props.graph.vertexCount;
  var edgeCount = props.graph.edgeCount;
  console.log("type of vertexCount = "+ typeof vertexCount);
  var startingVertices = props.graph.startingVertices;

  var endingVertices = props.graph.endingVertices;

  var weights = props.graph.weights;
  var source = props.graph.source;
  var sink = props.graph.sink;

  var nodesArray = [];
  for (var i = 0; i < vertexCount; i++) {
    nodesArray[i] = {
      id: i,
      label: i.toString(),
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
      label: weights[j],
      font: {
        align: "top"
      }
    };
  }

  var nodes = new DataSet(nodesArray);
  edges = new DataSet(edges);

  const data = {
    nodes,
    edges
  };

  const options = {}

  var sourceNode = nodes.get(source);
  sourceNode.color = {
    background: 'green'
  }

  var sinkNode = nodes.get(sink);
  sinkNode.color={
    background: 'red'
  }
  nodes.update(sourceNode);
  nodes.update(sinkNode);

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
