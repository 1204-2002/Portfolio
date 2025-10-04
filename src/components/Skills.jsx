import React from "react";

function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React.js", "Git", "Tailwind"];
  return (
    <section id="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill} className="skill">{skill}</div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
