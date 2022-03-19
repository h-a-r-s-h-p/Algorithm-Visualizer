import React, { Component } from 'react'
import "./FordFulkerson.css"
import PlotGraph from '../PlotGraph/PlotGraph';
import GraphInput from '../GraphInput/GraphInput';

export default class FordFulkerson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vertexCount: null,
      edgeCount:null,
      startingVertices: null,
      endingVertices: null,
      weights:null,
      isClicked : false
    };
    console.log("inside constructor\n");

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(vertexCount, edgeCount, startingVertices, endingVertices,weights, isClicked){
    this.setState(prevState => {
      return {
        vertexCount : vertexCount,
        edgeCount : edgeCount,
        startingVertices : startingVertices,
        endingVertices : endingVertices,
        weights : weights,
        isClicked : isClicked
      }
    })
  }

  render() {
    return (
      <>
        <GraphInput func ={this.handleChange} />
        {console.log(this.state.vertexCount)}
        {console.log(this.state.edgeCount)}
        <div>
          {this.state.isClicked? <PlotGraph graph={this.state}/>:''}
        </div>
      </>
    );
  }
}
