import getSteps from "../GeneratingSteps/GenerateSteps"

import React, { Component } from 'react'

export class HandleActions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchIndex1: 0,
            searchIndex2: 1
        }
    }

    async Search(currState, func2, bfsDfs, updatedColors) {
        var time = 5;
        // console.table( `currState inside start action: ${currState}`);


        for (var i = this.state.searchIndex1; i < bfsDfs.length; i++) {
            updatedColors.nodesColor[bfsDfs[i][0]] = 'blue';
            await new Promise((resolve, reject) => setTimeout(resolve, time * 1000));
            func2(updatedColors);
            for (var j = this.state.searchIndex2; j < bfsDfs[i].length; j++) {
                if (bfsDfs[i][j] === currState.graph.sink) {
                    updatedColors.nodesColor[bfsDfs[i][j]] = 'yellow';
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


    async Start(currState, func1, func2, execute) {
        if (execute) {
            console.log(`start button clicked`)
            await new Promise((resolve, reject) => setTimeout(resolve, 5 * 1000));
            func1(false);
            var graph = new getSteps(currState.graph);
            graph.constructAdjList();
            graph.bfs();
            var bfsDfs = graph.allSteps.bfsdfs;
            var path = graph.allSteps.path;

            var updatedColors = currState.dynamic;
            this.Search(currState, func2, bfsDfs, updatedColors);
        }
        // console.log(bfsDfs);
    }
    render() {
        return (
            <div className="control-bar">
                {console.log(`check1`)}
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
