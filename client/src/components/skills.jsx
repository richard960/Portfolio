import React from 'react';
import skillsData from './skillsData.js'
const Skills = () => {
  return(
    <section  id="skills">
      <h1>Skills</h1>
      <hr></hr>
      {skillsData.map((skill) => {
        return <div className='skill'>
              <text>{skill}</text>
          </div>
      })}
    </section>
  )
}

export default Skills