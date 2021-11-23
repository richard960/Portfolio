import React from 'react';
import projectsData from './projectsData.js';

const Projects = () => {
  return(
    <section id="projects">
      <h1>Projects</h1>
      <div id="videos">
      {projectsData.map((project, index) => {
        return <div id="video" key={index}>
          <a href={project.href} target="_blank">
          <iframe src={project.link} width="380" height="240" frameBorder="0"></iframe></a>
          <hr></hr>
          <p>{project.description}</p>
        </div>
      })}
      </div>
    </section>
  )
}

export default Projects