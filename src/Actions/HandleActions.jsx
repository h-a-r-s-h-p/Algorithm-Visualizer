import getSteps from "../GeneratingSteps/GenerateSteps"

import React, { Component } from 'react'

export class HandleActions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchIndex1: 0,
            searchIndex2: 1,
            dfsIndex:0
        }
    }

    async SearchBfs(currState, func2, bfsDfs, updatedColors) {
        var time = 5;
        // console.table( `currState inside start action: ${currState}`);


        for (var i = this.state.searchIndex1; i < bfsDfs.length; i++) {
            // console.log(`step = ${bfsDfs[i]}`)
            updatedColors.nodesColor[bfsDfs[i][0]] = 'blue';
            await new Promise((resolve, reject) => setTimeout(resolve, time * 1000));
            func2(updatedColors);
            for (var j = this.state.searchIndex2; j < bfsDfs[i].length; j++) {
                console.log(`vertex = ${bfsDfs[i][j]}`)
                if (bfsDfs[i][j] === currState.graph.sink) {
                    updatedColors.nodesColor[bfsDfs[i][j]] = 'pink';
                    await new Promise((resolve, reject) => setTimeout(resolve, time * 1000));
                    func2(updatedColors);
                }
                else {
                    updatedColors.nodesColor[bfsDfs[i][j]] = 'orange';
                    await new Promise((resolve, reject) => setTimeout(resolve, time * 1000));
                    func2(updatedColors);
                }
            }
            updatedColors.nodesColor[bfsDfs[i][0]] = 'green';
            for (j = 1; j < bfsDfs[i].length; j++) {
                updatedColors.nodesColor[bfsDfs[i][j]] = '#D2E5FF';
            }
        }

    }

    async SearchDfs(currState, func2, bfsDfs, updateColors){
        var time = 5;
        await new Promise((resolve, reject) => setTimeout(resolve, time * 1000));
        for(var i=this.state.dfsIndex;i<bfsDfs.length;i++){
            updateColors.nodesColor[bfsDfs[i]]='blue'
            func2(updateColors)
            await new Promise((resolve, reject) => setTimeout(resolve, time * 1000));
            if(bfsDfs[i+1]===currState.graph.sink){
                updateColors.nodesColor[bfsDfs[i+1]]='pink'
                func2(updateColors)
                await new Promise((resolve, reject) => setTimeout(resolve, time * 1000));
                break
            }
            if(updateColors.nodesColor[bfsDfs[i+1]]==='green'){
                updateColors.nodesColor[bfsDfs[i]]='green'
                continue;
            }
            else{
                updateColors.nodesColor[bfsDfs[i+1]]='orange'
                func2(updateColors)
                await new Promise((resolve, reject) => setTimeout(resolve, time * 1000));
            }
            updateColors.nodesColor[bfsDfs[i]]='green'
        }
    }


    async Start(currState, func1, func2, execute) {
        console.log(`start button clicked`)
        await new Promise((resolve, reject) => setTimeout(resolve, 5 * 1000));
        func1(false);

        var graph = new getSteps(currState.graph);
        graph.constructAdjList();
        if(this.props.algorithm ==="EdmondsKarp"){
            graph.bfs();
        }
        else{
            var visited=[]
            for(var i=0;i<currState.graph.vertexCount;i++){
                visited[i]=false
            }
            graph.dfs(currState.graph.source, visited)
        }
        var bfsDfs = graph.allSteps.bfsdfs;
        console.log(`bfsDfs = ${bfsDfs}`)
        var path = graph.allSteps.path;

        var updatedColors = currState.dynamic;
        if(this.props.algorithm==="EdmondsKarp"){
            this.SearchBfs(currState, func2, bfsDfs, updatedColors);
        }
        else{
            this.SearchDfs(currState, func2, bfsDfs, updatedColors);
        }
    
        // console.log(bfsDfs);
    }
    render() {
        return (
            <div className="control-bar">
                <button className="buttonstart" onClick={() => this.Start(this.props.currState, this.props.func1, this.props.func2, true)} >Start Visualization</button><br />

                <button className="buttonresume" onClick={() => this.Start(this.props.currState, this.props.func1, this.props.func2, true)} >Resume</button>
                <button className="buttonpause" onClick={() =>  this.Start(this.props.currState, this.props.func1, this.props.func2, false)  }>Pause</button>
                <button className="buttonreset" onClick={() => {
                    this.setState(prevState => ({ searchIndex1: 0 }))
                    this.setState(prevState => ({ searchIndex2: 1 }))
                    this.Start(this.props.currState, this.props.func1, this.props.func2, false) 
                }}>Reset</button>
            </div>
        )
    }
}

export default HandleActions
