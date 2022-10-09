import logo from './logo.svg';
import './App.css';
import Signin from './components/signin.js'
import Landing from './components/landing.js'
import NavBar from "./components/nav";
import React from "react";

import About from "./components/about"
import {Route, Routes} from "react-router-dom"


function App() {
    return (
        <>
            <NavBar/>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Landing/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </div>
        </>
    );
}

export default App;
