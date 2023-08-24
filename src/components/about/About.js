import React from 'react'
import { Element } from 'react-scroll'
import './about.css'

const About = () => {
  return (
    <Element className="about" id="about">
      <div className="about-container">
          <h1>About&nbsp;<b>ME</b></h1>
          <p>
            <h2>Hello Everyone <br/></h2>
            <h3>
              <p>
                I am a B.E<b>,</b> Computer Science and Engineering Graduate<b>. </b>
                I am currently looking for an organization where i can enhance my skills and contribute my best<b>. </b>
                I have more intrest in webdevelopment and i have learned ReactJS from the official react documentation website<b>. </b>
                So i have some basic knowledge of ReactJS and created a portfolio in react to showcase my skills<b>. </b>
              </p>
            </h3>
          </p>      
      </div>
    </Element>
  )
}

export default About
