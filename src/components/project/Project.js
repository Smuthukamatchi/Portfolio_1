import React from 'react'
import { Element } from 'react-scroll'
import './project.css'

const Project = () => {
  return (
    <Element className="projects" id="projects">
        <div className="projects">
            <div className="text">
                <h1><b>P</b>rojects</h1>        
            </div>
            <div className="project-text">
                <p className="disease">Detecting Disease in <br/>Livestock</p>
                <p className="travels">School/College Private <br/>Transport Management System</p>
                <p className="employee">Employee Payroll<br/> Management System</p>
            </div>
        </div>
    </Element>
  )
}

export default Project
