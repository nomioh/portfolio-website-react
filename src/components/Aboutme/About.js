import React from "react";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About me</h1>
      {/* <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" /> */}
      <div className="my-2">
        <p className="about-text">
          Hello! I'm Noyemi aka Nomi I'm a full-stack web developer with a
          graphic design background. I focus on developing user-centered
          applicatioons and designs.
        </p>
      </div>
    </section>
  );
}

export default About;
