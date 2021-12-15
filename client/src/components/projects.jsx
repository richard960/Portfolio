import React from 'react';
import projectsData from './projectsData.js';

const Projects = () => {
  return(
    <section id="projects">
      <h1>Projects</h1>
      <hr></hr>
      <div id="videos">
      {projectsData.map((project, index) => {
        return <div id="video" key={index}>
          <h3>{project.title}</h3>
          <a href={project.href} target="_blank">
          <img className="giphy" src={project.src} width="380" height="220"></img></a>
          <hr></hr>
          <p id='projectDescrip'>{project.description}</p>
        </div>
      })}
        <img src="./icon.png" width='390' style={{padding: "0px 5px 10px 5px"}}></img>
      </div>
    </section>
  )
}

export default Projects