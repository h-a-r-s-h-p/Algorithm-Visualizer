import React, { Component } from 'react'
// import "./GraphInput.css"

export default class GraphInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vertexCount: null,
      edgeCount:null,
      startingVertices: null,
      endingVertices: null,
      weights:null,
      source: null,
      sink: null
    };
    // console.log("inside GraphInput constructor\n");

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var name = event.target.name;
    var value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    var simplifiedState={
      vertexCount: null,
      edgeCount:null,
      startingVertices: null,
      endingVertices: null,
      weights:null,
      source: null,
      sink: null
    }
    simplifiedState.vertexCount = parseInt(this.state.vertexCount);
    simplifiedState.edgeCount = parseInt(this.state.edgeCount);
    simplifiedState.startingVertices = this.state.startingVertices.split(" ");
    simplifiedState.endingVertices = this.state.endingVertices.split(" ");
    simplifiedState.weights = this.state.weights.split(" ");
    simplifiedState.source = parseInt(this.state.source);
    simplifiedState.sink = parseInt(this.state.sink);

    var nodesColor = []
    var edgesColor = []
    var edgesCapacity = []
    var edgesFlow=[]
    for (var i = 0; i < simplifiedState.vertexCount; i++) {
        nodesColor.push('#D2E5FF');
        edgesColor[i]=new Array(simplifiedState.vertexCount)
        edgesCapacity[i]=new Array(simplifiedState.vertexCount)
        edgesFlow[i]=new Array(simplifiedState.vertexCount)
    }
    nodesColor[simplifiedState.source]='green';
    nodesColor[simplifiedState.sink]='red';

    for (i = 0; i < simplifiedState.edgeCount; i++) {
        edgesColor[simplifiedState.startingVertices[i]][simplifiedState.endingVertices[i]]='#1a8cff';
        edgesColor[simplifiedState.endingVertices[i]][simplifiedState.startingVertices[i]]='black';
        edgesCapacity[simplifiedState.startingVertices[i]][simplifiedState.endingVertices[i]]=simplifiedState.weights[i]
        edgesFlow[simplifiedState.startingVertices[i]][simplifiedState.endingVertices[i]]=0
        edgesCapacity[simplifiedState.endingVertices[i]][simplifiedState.startingVertices[i]]=0;
        edgesFlow[simplifiedState.endingVertices[i]][simplifiedState.startingVertices[i]]=0
    }

    var dynamicState = {
        nodesColor: nodesColor,
        edgesColor: edgesColor,
        edgesCapacity: edgesCapacity,
        edgesFlow: edgesFlow
    }
    this.props.func(simplifiedState, dynamicState, true);
    // return (<PlotGraph value={this.state.data} />);

  }

  render() {
    return (
        <div className="inputGraph">
          <p> <b> Please provide the number of vertices, number of edges in the respective entries </b></p>
          <p> <b> To provide edges, provide tails of all edges in "Starting Vertices" entry, and heads of all edges in "Ending Vertices" entry, separated by space </b> </p> 
          <p> <b> In the weights entry, provide space separated weights corresponding to the edges you entered </b> </p>
          <p> <b> Finally provide the source and sink</b></p>
          {/* {console.log(`GraphInput called`)} */}
          <form onSubmit={this.handleSubmit}>
            <input type="text"
                name="vertexCount"
                placeholder="No. of vertices"
                value={this.state.vertexCount}
                onChange={this.handleChange}
            />
            <input type="text"
                name="edgeCount"
                placeholder="No. of edges"
                value={this.state.edgeCount}
                onChange={this.handleChange}
            />
            <input type="text"
                name="startingVertices"
                placeholder="Starting Vertices"
                value={this.state.startingVertices}
                onChange={this.handleChange}
            />
            <input type="text"
                name="endingVertices"
                placeholder="Ending Vertices"
                value={this.state.endingVertices}
                onChange={this.handleChange}
            />
            <input type="text"
                name="weights"
                placeholder="weights"
                value={this.state.weights}
                onChange={this.handleChange}
            />
            <input type="text"
                name="source"
                placeholder="source"
                value={this.state.source}
                onChange={this.handleChange}
            />
            <input type="text"
                name="sink"
                placeholder="sink"
                value={this.state.sink}
                onChange={this.handleChange}
            />
            <button className="btn btn-success" >Submit </button>
          </form>
        </div>
    );
  }
}
