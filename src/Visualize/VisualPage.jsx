import React, { Component } from 'react'
import "./VisualPage.css"
import PlotGraph from '../PlotGraph/PlotGraph';
import GraphInput from '../GraphInput/GraphInput';
import EdmondsKarpPseudo from '../PseudoCode/EdmondsKarpPseudo';
import HandleActions from '../Actions/HandleActions'

export default class EdmondsKarp extends Component {
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
      reverseEdgesHidden: true,
      isClicked: false
    };
    // console.log("inside constructor\n");

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleChangeVisualization = this.handleChangeVisualization.bind(this);
  }

  handleChangeInput(graph, isClicked) {
    this.setState(prevState => {
      return {
        graph: graph,
        isClicked: isClicked,
        reverseEdgesHidden: true
      }
    })
  }

  handleChangeVisualization(reverseEdgesHidden) {
    this.setState(prevState => {
      return {
        reverseEdgesHidden: reverseEdgesHidden
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

               console.log(`reverseEdgesHidden = ${this.state.reverseEdgesHidden}`);
               console.log(`isClicked = ${this.state.isClicked}`) ;
               console.log(`graph.vertexCount= ${this.state.graph.vertexCount}`) 
               console.log(`graph.edgeCount = ${this.state.graph.edgeCount}`) 
               console.log(`graph.startingVert = ${this.state.graph.startingVertices}`) 
               console.log(`endingVertices = ${this.state.graph.endingVertices}`) 
               console.log(`weights = ${this.state.graph.weights}`) 
               console.log(`source = ${this.state.graph.source}`) 
               console.log(`sink = ${this.state.graph.sink}`) 
               console.log(`props = ${this.props.algorithm}`)
              if (this.state.isClicked) {
                return (
                  <div>
                    <PlotGraph plotGraphProps={this.state} />
                    <HandleActions graph={this.state.graph} func={this.handleChangeVisualization} />
                  </div>
                )
              }

              return null;
            })()}
          </div>

          <div className="pseudocode">
            {this.state.isClicked ? <EdmondsKarpPseudo /> : ''}
          </div>

        </div>
      </>
    );
  }
}
