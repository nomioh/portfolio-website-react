import React from "react";

function Nav() {
  return (
    <header>
      <h2>
        <a href="/">Nomi</a>
      </h2>
      <nav>
        <ul>
          <li>
            <a href="#About">About Me</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
          <li>
            <a href="#Portfolio">Projects</a>
          </li>
          <li>
            <a href="#Resume">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
