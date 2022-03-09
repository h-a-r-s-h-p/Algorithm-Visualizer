import React, { Component } from 'react'
import "./Input.css"
import PlotGraph from '../PlotGraph/PlotGraph';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
    console.log("inside constructor\n");

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  print(){
    console.log("The function inside any class component is auto called")
  }

  handleChange(event) {
    this.setState({ data: event.target.value });
  }

  // handleSubmit(event) {
  //   this.props.his
  // }

  render() {
    return (
      <>
        <div className="instructions">
          <h2> Please provide your input in the following format: </h2>
          <p> In the first line provide two space separated integers V, E, denoting the number of vertices and the number of edges</p>
          <p> Next provide E edges, each line containg three integers denoting the start vertex number, the end vertex number and the weight of the edge </p>
          <div className="sampleinput">
            <p> Sample Input:</p>
            <p> 4 6 </p>
            <p> 1 2 4 </p>
            <p> 1 3 8 </p>
            <p> 1 4 1</p>
            <p> 2 3 3</p>
          </div>
        </div>
        <div className="graphInput">
          <form onSubmit={this.handleSubmit}>
            <textarea value={this.state.data} onChange={this.handleChange} />
            <button className="btn btn-success" type="submit">Submit</button>
          </form>
        </div>
      </>
    );
  }
}
