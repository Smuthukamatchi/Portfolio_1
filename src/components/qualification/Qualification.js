import React from 'react'
import './qualification.css'
import { Element } from 'react-scroll'

const Qualification = () => {
  
  return (
    <Element className="qualification" id="qualification">
      <div className="qual">
          <div className="qualification">
              <h1><b>Q</b>ualification</h1>      
          </div>
          <div className="content">
              <h1 className="be"><p>CGPA</p><b>B.E</b><i>8.58</i></h1>
              <h1 className="dip"><p>Percentage</p><b>DIPLOMA</b><i>89.04%</i></h1>
              <h1 className="hs"><p>Percentage</p><b>HSC</b><i>67%</i></h1>
              <h1 className="ss"><p>Percentage</p><b>SSLC</b><i>81.2%</i></h1>
            {/* <ul>
              <li><h1 className="be"><p>CGPA</p><b>B.E</b><i>8.57</i></h1></li>
              <li><h1 className="dip"><p>Percentage</p><b>DIPLOMA</b><i>89.04%</i></h1></li>
              <li><h1 className="hs"><p>Percentage</p><b>HSC</b><i>67%</i></h1></li>
              <li><h1 className="ss"><p>Percentage</p><b>SSLC</b><i>81.2%</i></h1></li>
            </ul> */}
          </div>
      </div>
    </Element>
  )
}

export default Qualification
