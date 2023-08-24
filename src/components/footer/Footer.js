import React from 'react'
import { Link } from 'react-scroll'
import './footer.css'
import { Element } from 'react-scroll'

const Footer = () => {
  return (
    <div className="footer1" id="footer1">
      <Element className="footer1" id="footer1">

      </Element>
        <div className="footer">
            <h2><b>Q</b>uick <b>L</b>inks</h2>
            <div className="footers">
                <Link to="main" smooth={true} duration={500}>
                    <h4>
                    Home
                    </h4>
                </Link>
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
            </div>
        </div>

        <div className="footer-mail">
            <h3><b>C</b>ontact :</h3>
            <ul>
                <ul><h2>smkamatchi20@gmail.com</h2></ul>
                <ul><h2>smuthukamatchi20@gmail.com</h2></ul>
            </ul>
        </div>
        <div className="footer-bottom">
            <span>Copyright &copy; 2023 Muthu Kamatchi. All Rights Reserved.</span>
        </div>
    </div>

  )
}

export default Footer
