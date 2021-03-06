import React from 'react';
import skillsData from './skillsData.js'
const Skills = () => {
  return(
    <section  id="skills_section">
      <h1>Skills</h1>
      <hr></hr>
      <div id="skills">
      {skillsData.map((skill, index) => {
        return <div key={index} className='skill'>
              <text>{skill}</text>
          </div>
      })}
      </div>
    </section>
  )
}

export default Skills