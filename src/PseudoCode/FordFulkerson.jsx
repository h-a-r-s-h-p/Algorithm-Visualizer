import React, { Component } from 'react'
import CommonCode from './CommonCode'

export class FordFulkerson extends Component {
  render() {
    return (
        <div>
        <h4>Ford Fulkerson Pseudo Code </h4>
        <div className="pseudocode">
            <p id={1}>{"1. Construct the residual graph"}</p>
            <p id={2}>{"2. var visited=[]"}</p>
            <p id={2}>{"2. func Dfs(source, visited){"} </p>
            <p id={3}>{"3. "} <span className="tab"></span> {"for(neighbour in adjacent[source]){"}</p>
            <p id={4}>{"4. "} <span className="tab"></span> <span className="tab"/> {"if(!visited[neighbour]){"}</p>
            <p id={5}>{"5. "} <span className="tab"></span> <span className="tab"/> <span className="tab"/> {"Dfs(neighbour, visited)"}</p>
            <p id={4}>{"4. "} <span className="tab"></span> <span className="tab"/> {"}"}</p>
            <p id={4}>{"4. "} <span className="tab"></span> {"}"}</p>
            <p id={4}>{"4. "}  {"}"}</p>
        </div>
        <CommonCode/>
    </div>
    )
  }
}

export default FordFulkerson