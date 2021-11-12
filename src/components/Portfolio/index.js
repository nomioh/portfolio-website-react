import React, { useRef } from "react";
// import ProjectCards from "../../components/Portfolio";

function Portfolio() {
  const projectRef = useRef([
    [
      {
        id: 0,
        name: "Budget Tracker",
        giturl: "https://github.com/nomioh/budget-tracker",
        deploy: "https://sheltered-crag-25149.herokuapp.com/",
      },
      {
        id: 1,
        name: "FoodieLove",
        giturl: "https://github.com/jasongrossman/team-2",
        deploy: "https://jasongrossman.github.io/team-2/",
      },
      {
        id: 2,
        name: "Password Generator",
        giturl: "https://github.com/nomioh/password-generator",
        deploy: "https://nomioh.github.io/password-generator/",
      },
      {
        id: 3,
        name: "Employee Tracker",
        giturl: "https://github.com/nomioh/employee-tracker-12",
        deploy: "https://watch.screencastify.com/v/ziIVoB2YLFRyDdrhi67e",
      },
      {
        id: 4,
        name: "Next Step",
        giturl: "https://github.com/BootcampProject/next-step",
        deploy: "https://watch.screencastify.com/v/ziIVoB2YLFRyDdrhi67e",
      },
    ],
  ]);

  return (
    <section className="portfolio-container row">
      {projectRef.current.map((project) => (
        <div className="project-list" style={{ width: "50%" }} key={project.id}>
          <div className="project-container">
            <a href={project.deployed_link}>
              <img
                src={require(`.././${project.id}.JPG`).default}
                alt={project.name}
                className="img-thumbnail col mx-2"
                key={project.name}
                href={project.deployed_link}
              />
            </a>
            <div>
              <a href={project.github}>
                <img
                  // src={require(`../../images/github-logo`).default}
                  alt="github"
                  className="github-icon col mx-2"
                />
              </a>
              <a href={project.deployed_link} className="project-name col mx-2">
                {project.name}
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Portfolio;
