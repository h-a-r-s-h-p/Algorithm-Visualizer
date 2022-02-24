import React, { Component } from 'react';
import { Route, withRouter } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Home from "./Algorithms/Home"
import EdmondsKarp from "./Algorithms/EdmondsKarp/Input"
import FordFulkerson from "./Algorithms/FordFulkerson/FordFulkerson"
import "./App.css"

class DropDown extends Component {
    onChange = (e) => {
        this.props.history.push(`${e.target.value}`)
    }

    render = () => {
        return (
            <div className="drop-down" >
                <select id="options" onChange={this.onChange}>
                    <option value="/"  > Home</option>
                    <option value="edmondskarp"> Edmond's Karp </option>
                    <option value="fordfulkerson" > Ford Fulkerson </option>
                </select>
            </div>
        );
    }

}

const Menu = withRouter(DropDown);

function App() {
    return (
        <BrowserRouter>
            <div>
                <Menu />
                <Route exact path="/" render={() => <Home />} />
                <Route exact path="/edmondskarp" render={() => <EdmondsKarp />} />
                <Route exact path="/fordfulkerson" render={() => <FordFulkerson />} />
            </div>
        </BrowserRouter>
    )
}

export default App

