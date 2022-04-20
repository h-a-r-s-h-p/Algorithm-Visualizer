import getSteps from "../GeneratingSteps/GenerateSteps"

import React, { Component } from 'react'

export class HandleActions extends Component {

  start(input, func){
    console.log(`start button clicked`)
    // console.table( `input inside start action: ${input}`);
    setTimeout(()=>{
      func(false);
    }, 2*1000)
    var graph = new getSteps(input);
    graph.constructAdjList();
    graph.bfs();
    var visualizingSteps = graph.allSteps;
    // console.log(visualizingSteps);
  }
  render() {
    return (
      <div className="control-bar">
        <button className="buttonstart" onClick={() => this.start( this.props.graph, this.props.func)} >Start Visualization</button><br />
        <button className="buttonresume" >Resume</button>
        <button className="buttonpause" >Pause</button>
        <button className="buttonreset" >Reset</button>
      </div>
    )
  }
}

export default HandleActions
