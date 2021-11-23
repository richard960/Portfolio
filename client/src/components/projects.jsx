import React from 'react';
import projectsData from './projectsData.js';

const Projects = () => {
  return(
    <section id="projects">
      <h1>Projects</h1>
      <div id="videos">
      {projectsData.map((project, index) => {
        return <div id="video" key={index}>
          <iframe src={project.link} width="380" height="262" frameBorder="0"></iframe>
          {project.description}
        </div>
      })}
      </div>
    </section>
  )
}

export default Projects