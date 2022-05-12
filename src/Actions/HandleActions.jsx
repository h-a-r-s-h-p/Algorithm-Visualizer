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

    async SearchBfs(currState, func2, bfsDfs, updatedColors, path, time) {

        for (var i = this.state.searchIndex1; i < bfsDfs.length; i++) {
            updatedColors.nodesColor[bfsDfs[i][0]] = 'blue';
            await new Promise((resolve, reject) => setTimeout(resolve, time * 1000));
            func2(updatedColors);
            for (var j = this.state.searchIndex2; j < bfsDfs[i].length; j++) {
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
        await new Promise((resolve, reject) => setTimeout(resolve, time * 1000));
        this.ColorPath(func2, path, updatedColors, time)
    }

    async SearchDfs(currState, func2, bfsDfs, updateColors, path, time){
        
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
        await new Promise((resolve, reject) => setTimeout(resolve, time * 1000));
        for (var j = 0; j < currState.graph.vertexCount; j++) {
            updateColors.nodesColor[j] = '#D2E5FF';
        }
        this.ColorPath(func2, path, updateColors, time)
    }

    async UpdateEdges(func2, path, updateColors, time){
        var bottleneck=1000;
        for(var i=path.length-1;i>0;i--){
            
        }
    }

    async ColorPath(func2, path, updatedColors, time){
        for(var i=0;i<path.length;i++){
            updatedColors.nodesColor[path[i]]='pink'
        }

        func2(updatedColors)
        await new Promise((resolve, reject) => setTimeout(resolve, time * 1000));
    }

    async Start(currState, func1, func2, execute) {   
        
        var time = 5;
        await new Promise((resolve, reject) => setTimeout(resolve, time * 1000));
        func1(false);

        var graph = new getSteps(currState.graph);
        graph.constructAdjList();
        if(this.props.algorithm ==="EdmondsKarp"){
            graph.bfs();
        }
        else{
            graph.dfs(currState.graph.source)
        }
        var bfsDfs = graph.allSteps.bfsdfs;
        var path = graph.allSteps.path;
        console.log(`path= ${path}`)
        var updatedColors = currState.dynamic;
        if(this.props.algorithm==="EdmondsKarp"){
            this.SearchBfs(currState, func2, bfsDfs, updatedColors, path, time);
        }
        else{
            this.SearchDfs(currState, func2, bfsDfs, updatedColors, path, time);
        }
    }


    render() {
        return (
            <div className="control-bar">
                <button className="buttonstart" onClick={() => this.Start(this.props.currState, this.props.func1, this.props.func2, true)} >Start Visualization</button><br />

            </div>
        )
    }
}

export default HandleActions
