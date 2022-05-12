import React, { Component } from 'react'
import "./VisualPage.css"
import PlotGraph from '../PlotGraph/PlotGraph';
import GraphInput from '../GraphInput/GraphInput';
import EdmondsKarpPseudo from '../PseudoCode/EdmondsKarpPseudo';
import HandleActions from '../Actions/HandleActions'
import FordFulkerson from '../PseudoCode/FordFulkerson';

export default class VisualPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            graph: {
                vertexCount: null,
                edgeCount: null,
                startingVertices: null,
                endingVertices: null,
                weights: null,
                source: null,
                sink: null,
            },
            dynamic: {
                nodesColor: [],
                edgesColor: [],
                edgesCapacity: [],
                edgesFlow: [],
                bottleneck: null,
                maxFlow: 0
            },
            reverseEdgesHidden: true,
            isClicked: false
        };
        // console.log("inside constructor\n");
        
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleChangeVisualization = this.handleChangeVisualization.bind(this);
        this.handleChangeReverseEdges = this.handleChangeReverseEdges.bind(this);
    }

    handleChangeInput(graph, dynamic, isClicked) {
        this.setState(prevState => {
            return {
                graph: graph,
                dynamic: dynamic,
                isClicked: isClicked,
                reverseEdgesHidden: true
            }
        })
    }

    handleChangeReverseEdges(reverseEdgesHidden) {
        this.setState(prevState => {
            return {
                reverseEdgesHidden: reverseEdgesHidden
            }
        })
    }

    handleChangeVisualization(dynamic) {
        this.setState(prevState => {
            return {
                dynamic: dynamic
            }
        })
    }

    render() {
        return (
            <>
                <h1>{this.props.algorithm}</h1>
                <GraphInput func={this.handleChangeInput} />
                <div className="container">
                    <div className="visual">
                        {(() => {
                            if (this.state.isClicked) {
                                return (
                                    <div>
                                        <PlotGraph plotGraphProps={this.state} />

                                        <div className="bottleneck">
                                            <h3>Bottleneck Capacity = {this.state.dynamic.bottleneck}</h3>
                                            <h3> Max Flow= {this.state.dynamic.maxFlow}</h3>
                                        </div>
                                            
                                        <HandleActions algorithm={this.props.algorithm} currState={this.state} func1={this.handleChangeReverseEdges} func2={this.handleChangeVisualization} />
                                    </div>
                                )
                            }

                            return null;
                        })()}
                    </div>

                    <div className="pseudocode">
                        {(() => {
                            if(this.state.isClicked){
                                if(this.props.algorithm==="EdmondsKarp"){
                                    return <EdmondsKarpPseudo/>
                                }
                                else{
                                    return <FordFulkerson/>
                                }
                            }
                        })()}
                    </div>

                </div>
            </>
        );
    }
}
