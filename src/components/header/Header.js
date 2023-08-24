import React from 'react'
import { Link } from 'react-scroll'
// import { Element } from 'react-scroll'
// import 'bootstrap/dist/js/bootstrap.min.js';
import './header.css'
const Header = () => {
  return (
    // <div style={{backgroundImage:'url(./images/back2.jpg)', backgroundRepeat:'no-repeat', backgroundSize:'cover' }}>
    <div className="main" id="main"> 
      <div className="container">
        <div className="nav-left">
          <h1><b>M</b>uthu <b>K</b>amatchi</h1>
        </div>
        <div className="nav-right">
          <Link to="about" smooth={true} duration={500}>
            <h4>
              About Me
            </h4>
          </Link>
          <Link to="qualification" smooth={true} duration={500}>
            <h4>
              Qualification
            </h4>
          </Link>
          <Link to="skills" smooth={true} duration={500}>
            <h4>
              Skills
            </h4>
          </Link>
          <Link to="projects" smooth={true} duration={500}>
            <h4>
              Projects
            </h4>
          </Link>
          <Link to="footer1" smooth={true} duration={500}>
            <h4>
              Contact
            </h4>
          </Link>
          <a href="https://www.linkedin.com/in/muthu-kamatchi-a4ba441b8" target="_blank" rel="noreferrer">
            <h5>in</h5>
          </a>
        </div>
      </div>
      <div className="profile">
        <p><b>"</b> A dream doesn't become reality through magic;<br/> it takes sweat, determination and hard work. <b>"</b><br/><span>-Colin Powell</span></p>
        <img className="prof" src="./images/prof.jpg" alt="profile"/>
        <h2>S.Muthu Kamatchi <b>B.E.,</b></h2>
      </div>
      <a href="https://drive.google.com/drive/folders/1-hTsmgNIHhEFESsDJZpwhMJad6VZNKcf?usp=sharing" target="_blank" rel="noreferrer">
        <button class="btn" ><i class="fa fa-download"></i> RESUME</button>
      </a>
    </div>
  )
}

export default Header
