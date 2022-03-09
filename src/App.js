import React from 'react';
import { Route, Routes, useNavigate} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Home from "./Algorithms/Home"
import Input from "./Algorithms/EdmondsKarp/Input"
import FordFulkerson from "./Algorithms/FordFulkerson/FordFulkerson"
import "./App.css"


function DropDown() {
    var navigate = useNavigate();                                      // Any keyword which starts with "use" is a hook and hooks can only be used inside a functional component
    return (
        <div className="drop-down" >
            <select id="algorithm" onChange={(e)=>{navigate(e.target.value)}} >
                <option value="/"  > Home</option>
                <option value="edmondskarp/input"> Edmond's Karp </option>
                <option value="fordfulkerson/input" > Ford Fulkerson </option>
            </select>
        </div>
    );

}


function App() {
    return (
        <BrowserRouter>
            <div>
                <DropDown />
                <Routes>                                            {/* Routes is wrapped because everything outside routes will be present in every component */}
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/edmondskarp/input" element={ <Input />} />
                <Route exact path="/fordfulkerson/input" element={<FordFulkerson />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App

