import { useState } from "react";
import Navbar from "./components/Nav";
import Aboutme from "./components/Aboutme";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import "./App.css";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [home, setHome] = useState("About");
  const renderTab = () => {
    switch (home) {
      case "about":
        return <Aboutme />;
      case "portfolio":
        return <Portfolio />;
      case "resume":
        return <Resume />;
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar home={home} setHome={setHome}></Navbar>
      <main>{renderTab()}</main>
      <Footer home={home} setHome={setHome}></Footer>
    </div>
  );
}

export default App;
