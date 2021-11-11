import React from "react";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About me</h1>
      {/* <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" /> */}
      <div className="my-2">
        <p className="about-text">
          I'm a full-stack web developer with a graphic design background.
        </p>
      </div>
    </section>
  );
}

export default About;
