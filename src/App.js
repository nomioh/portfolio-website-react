import React, { useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";
import Nav from "./components/Nav/index";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact/index";
import About from "./components/Aboutme/About";
import Footer from "./components/Footer/index";
import Header from "./components/Header/index";
import Resume from "./components/Resume/index";

function App() {
  const [aboutSelected, setAboutSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <div className="App">
      {/* <header className="Header">insert logo</header> */}
      <Nav
        setAboutSelected={setAboutSelected}
        setPortfolioSelected={setPortfolioSelected}
        setContactSelected={setContactSelected}
        setResumeSelected={setResumeSelected}
      />
      <main>
        {!portfolioSelected &&
          !contactSelected &&
          !resumeSelected &&
          !aboutSelected && <About />}
        {aboutSelected && <About />}
        {portfolioSelected && <Portfolio />}
        {contactSelected && <Contact />}
        {resumeSelected && <Resume />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
