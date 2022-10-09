import logo from './logo.svg';
import './App.css';
import Signin from './components/signin.js'
import NavBar from "./components/nav";
import React from "react";

function App() {
  return (
    <div className="App">
        <div>
            <NavBar/>
            <Signin/>
        </div>
    </div>
  );
}

export default App;
