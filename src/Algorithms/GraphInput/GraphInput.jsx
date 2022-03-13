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
    };
    console.log("inside constructor\n");

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
    // alert("The graph entered is : "+ this.state.data);
    console.log("the graph component should be called");
    event.preventDefault();
    this.props.func(this.state.vertexCount,
                    this.state.edgeCount,
                    this.state.startingVertices,
                    this.state.endingVertices,
                    this.state.weights,
                    true);
    // return (<PlotGraph value={this.state.data} />);

  }

  render() {
    return (
        <div className="inputGraph">
          <p> <b> Please provide the number of vertices, number of edges in the respective entries </b></p>
          <p> <b> To provide edges, provide tails of all edges in "Starting Vertices" entry, and heads of all edges in "Ending Vertices" entry, separated by space </b> </p> 
          <p> <b> In the weights entry, provide space separated weights corresponding to the edges you entered </b> </p>
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
            <button className="btn btn-success" >Submit </button>
          </form>
        </div>
    );
  }
}
