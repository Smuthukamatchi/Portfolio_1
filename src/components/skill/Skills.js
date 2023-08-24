import React from 'react'
import { Element } from 'react-scroll'
import './skills.css'
import LinearProgress  from '@mui/material/LinearProgress';


const Skills = () => {
  return (
    <Element className="skills" id="skills">
        <div className="skills">
            <div className="texts">
                <h1><b>S</b>kills</h1>      
            </div>
            <div>
                <img class="skill-img" src="./images/back2.jpg" alt="project"/>
            </div>
            <div className="skill">
                <h1>HTML</h1>
                <div>
                    <LinearProgress variant="determinate" value={90} />
                </div>
                
                <h1>CSS</h1>
                <div>
                    <LinearProgress variant="determinate" value={85} />
                </div>
                <h1>REACT JS</h1>
                <div>
                    <LinearProgress variant="determinate" value={60} />
                </div>
                <h1>JAVASCRIPT</h1>
                <div>
                    <LinearProgress variant="determinate" value={60} />
                </div>
                <h1>MANGO DB</h1>
                <div>
                    <LinearProgress variant="determinate" value={60} />
                </div>
                <h1>MYSQL</h1>
                <div>
                    <LinearProgress variant="determinate" value={85} />
                </div>
                <h1>JAVA</h1>
                <div>
                    <LinearProgress variant="determinate" value={70} />
                </div>
            </div>
        </div>
    </Element>
  )
}

export default Skills
