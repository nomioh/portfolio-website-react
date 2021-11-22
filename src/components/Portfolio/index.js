import React from "react";

function Portfolio() {
  return (
    <section className="my-5">
      <h1 className="center" id="about">
        My Projects
      </h1>
      <div className="flex-row center">
        <img
          src={require(`../../assets/images/foodielove.png`).default}
          alt="FoodieLove project 1"
          style={{ width: 400, height: 400 }}
        />
        <img
          src={require(`../../assets/images/budget.png`).default}
          alt="Budget Tracker"
          style={{ width: 400, height: 400 }}
        />
        <img
          src={require(`../../assets/images/password-gen.png`).default}
          alt="Password generator"
          style={{ width: 400, height: 400 }}
        />
        <img
          src={require(`../../assets/images/tracker.png`).default}
          alt=" Employee Tracker"
          style={{ width: 400, height: 400 }}
        />
      </div>
    </section>
  );
}

export default Portfolio;
