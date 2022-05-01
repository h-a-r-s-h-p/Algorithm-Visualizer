import React from 'react'
import "./EdmondsKarpPseudo.css"
import CommonCode from './CommonCode'

function EdmondsKarpPseudo() {
  return (
    <div>
        <CommonCode/>
        <h4>Algorithm: </h4>
        <div className="pseudocode">
            <p id={1}>{"1. Construct the residual graph"}</p>
            <p id={2}>{"2. while (there is a path from source to sink){"} </p>
            <p id={3}>{"3. "} <span className="tab"></span> {"Find the bottleneck capacity"}</p>
            <p id={4}>{"4. "} <span className="tab"/> {"subtract the bottleneck capacity from all forward edges along the path"} </p>
            <p id={5}>{"5. "} <span className="tab"/> {"add the bottleneck capacity from all backward edges along the path"} </p>
            <p id={6}>{"6. }"}</p>
            <p id={6}>{"7. Return the flow"} </p>
        </div>
    </div>
  )
}

export default EdmondsKarpPseudo