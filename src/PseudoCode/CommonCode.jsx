import React, { Component } from 'react'

export class CommonCode extends Component {
  render() {
    return (
    <div className="pseudocode">
        <p id={1}>{"1. func FlowVisualization(graph, source, sink){"}</p>
        <p id={2}>{"2. "}<span className="tab"/> {"var TotalFlow=0"}</p>
        <p id={2}>{"3. "}<span className="tab"/> {"while(source to sink path){"}</p>
        <p id={2}>{"4. "}<span className="tab"/><span className="tab"/> {"var bottleneck = min(all capacities along path)"} </p>
        <p id={3}>{"5. "} <span className="tab"/><span className="tab"/> {"TotalFlow+=bottleneck"}</p>
        <p id={3}>{"6. "} <span className="tab"/><span className="tab"/> {"forwardFlow-=bottleneck"}</p>
        <p id={4}>{"7. "} <span className="tab"></span> <span className="tab"/> {"reverseFlow+=bottleneck"}</p>
        <p id={4}>{"8. "} <span className="tab"></span> {"}"}</p>
        <p id={4}>{"9. "} <span className="tab"></span> {"return TotalFlow"}</p>
        <p id={4}>{"10. "}  {"}"}</p>
    </div>
    )
  }
}

export default CommonCode