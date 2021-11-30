import React from 'react'

const Side = () => {
  return(
    <section id='Side'>
      <h1>Richard Medina</h1>
      <img id='profile' src='./profile.png'></img>
      <h1>
        About Me
        <hr></hr>
      </h1>
      <p id='aboutMe'>
        I am a Full Stack Software Engineer. I enjoy the process of creating websites from scratch. My coding journey started in the year of 2019. I currently go to Cal Poly Pomona where I took a Web Development course and decided I want to get into that field. I am up for any challenge and love to learn new skills. For my free time I like to watch movies or play video games. One of my favorite movie series to watch every year is Harry Potter.
      </p>
      <h1>Media
        <hr></hr>
      </h1>
      <div id='social'>
      <a href="github/richard960" target="_blank">
      <img src='./github.png'></img>
      </a>
      <a href="https://www.linkedin.com/in/richard-jesus-medina?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BYfDkWIc7T2qyT0QE8geH%2BA%3D%3D" target="_blank">
      <img src='./linkedin.png'></img>
      </a>
      </div>
    </section>
  )
}

export default Side