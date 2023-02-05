import "./App.css";
import Landing from "./components/landing.js";
import NavBar from "./components/nav";
import React from "react";

import About from "./components/about";
import Portfolio from "./components/portfolio/portfolio";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/about" element={<About/>}/> */}
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
