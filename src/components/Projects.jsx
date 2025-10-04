import React from "react";
import { projects } from "../data";

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((p) => (
          <div className="card" key={p.title}>
            <img src={p.image} alt="" />
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <a href={p.link} target="_blank" rel="noreferrer" className="btn">View</a>
          </div>
          
        ))}
      </div>
    </section>
  );
}

export default Projects;
