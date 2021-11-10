import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
import Nav from "./components/Nav/index";
import About from "./components/Aboutme/About";

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
