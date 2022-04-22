import getSteps from "../GeneratingSteps/GenerateSteps"

import React, { Component } from 'react'

export class HandleActions extends Component {

    async start(currState, func1, func2) {
        console.log(`start button clicked`)
        var time = 5;
        // console.table( `currState inside start action: ${currState}`);
        await new Promise((resolve, reject) => setTimeout(resolve, time*1000));
        func1(false);
        var graph = new getSteps(currState.graph);
        graph.constructAdjList();
        graph.bfs();
        var bfsDfs = graph.allSteps.bfsdfs;

        var updatedColors = currState.dynamic;

        for(var i=0;i<bfsDfs.length;i++){
            updatedColors.nodesColor[bfsDfs[i][0]]= 'blue';
            await new Promise((resolve, reject) => setTimeout(resolve, time*1000));
            func2(updatedColors);
            for(var j=1;j<bfsDfs[i].length;j++){
                if(bfsDfs[i][j]=== currState.graph.sink){
                    updatedColors.nodesColor[bfsDfs[i][j]]='yellow';
                    await new Promise((resolve, reject) => setTimeout(resolve, time*1000));
                    func2(updatedColors);
                }
                else{
                    updatedColors.nodesColor[bfsDfs[i][j]]='orange';
                    await new Promise((resolve, reject) => setTimeout(resolve, time*1000));
                    func2(updatedColors);
                }
            }
            updatedColors.nodesColor[bfsDfs[i][0]]='green';
            for(j=1; j<bfsDfs[i].length;j++){
                updatedColors.nodesColor[bfsDfs[i][j]]='#D2E5FF';
            }
        }

        // console.log(bfsDfs);
    }
    render() {
        return (
            <div className="control-bar">
                <button className="buttonstart" onClick={() => this.start(this.props.currState, this.props.func1, this.props.func2)} >Start Visualization</button><br />
                <button className="buttonresume" >Resume</button>
                <button className="buttonpause" >Pause</button>
                <button className="buttonreset" >Reset</button>
            </div>
        )
    }
}

export default HandleActions
