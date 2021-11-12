import React from "react";

const Nav = (props) => {
  const {
    setAboutSelected,
    setPortfolioSelected,
    setContactSelected,
    setResumeSelected,
  } = props;

  return (
    <header className="flex-row space-between px-1">
      <h2>
        <a href="/">
          <span role="img" aria-label="name">
            Noyemi Ohanyan
          </span>
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li
            className="mx-2"
            onClick={() => {
              setAboutSelected(true);
              setPortfolioSelected(false);
              setContactSelected(false);
              setResumeSelected(false);
            }}
          >
            About me
          </li>
          <li
            className="mx-2"
            onClick={() => {
              setPortfolioSelected(true);
              setAboutSelected(false);
              setContactSelected(false);
              setResumeSelected(false);
            }}
          >
            Portfolio
          </li>
          <li
            className="mx-2"
            onClick={() => {
              setContactSelected(true);
              setPortfolioSelected(false);
              setAboutSelected(false);
              setResumeSelected(false);
            }}
          >
            Contact me
          </li>
          <li
            className="mx-2"
            onClick={() => {
              setResumeSelected(true);
              setContactSelected(false);
              setPortfolioSelected(false);
              setAboutSelected(false);
            }}
          >
            Resume
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
