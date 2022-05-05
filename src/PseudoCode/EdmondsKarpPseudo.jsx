import React from 'react'
import "./EdmondsKarpPseudo.css"
import CommonCode from './CommonCode'

function EdmondsKarpPseudo() {
  return (
    <div>
        <h4>Algorithm: </h4>
        <div className="pseudocode">
            <p id={1}>{"1. Construct the residual graph"}</p>
            <p id={2}>{"2. func Bfs(source, sink){"} </p>
            <p id={3}>{"3. "} <span className="tab"></span> {"var queue=[]"}</p>
            <p id={4}>{"4. "} <span className="tab"></span> {"var visited=[]"}</p>
            <p id={5}>{"5. "} <span className="tab"></span> {"var parent=[]"}</p>
            <p id={6}>{"6. "} <span className="tab"></span> {"queue.push(source)"}</p>
            <p id={7}>{"7. "} <span className="tab"/> {"while(!queue.empty()){"} </p>
            <p id={8}>{"8. "} <span className="tab"/><span className="tab"/> {"currNode=queue.front()"} </p>
            <p id={9}>{"9. "} <span className="tab"/><span className="tab"/> {"for(neighbour in neighbours[currNode]){"} </p>
            <p id={10}>{"10. "} <span className="tab"/><span className="tab"/> <span className="tab"/> {"if(neighbour===sink){ "} </p>
            <p id={11}>{"11. "} <span className="tab"></span> <span className="tab"/> <span className="tab"/> <span className="tab"/> {"parent[neighbour]=currNode; return true"}</p>
            <p id={12}>{"12. "} <span className="tab"/><span className="tab"/> <span className="tab"/> {"} "} </p>
            <p id={13}>{"13. "} <span className="tab"/><span className="tab"/> <span className="tab"/> {"if(!visited[neighbour]){ "} </p>
            <p id={14}>{"14. "} <span className="tab"/><span className="tab"/> <span className="tab"/> <span className="tab"/> {"parent[neighbour]=currNode; queue.push(neighbour)"} </p>
            <p id={15}>{"15. "} <span className="tab"/><span className="tab"/> <span className="tab"/> {"} "} </p>
            <p id={16}>{"16. "} <span className="tab"/><span className="tab"/>  {"}"} </p>
            <p id={17}>{"17. "} <span className="tab"/>  {"}"} </p>
            <p id={17}>{"17. "} <span className="tab"/>  {"return false"} </p>
            <p id={18}>{"18. }"}</p>
        </div>
        <CommonCode/>
    </div>
  )
}

export default EdmondsKarpPseudo