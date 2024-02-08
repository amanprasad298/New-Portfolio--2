import React from 'react'
import './Projects.css'
import { Link } from 'react-router-dom'


const Projects = () => {
  return (
    <div className='container'>
      <div className='wrap-projects'>
        <div className="project-head mb-md-5 d-flex justify-content-center align-items-center flex-column">
            <h1>My featured Projects</h1>
            <p>A Glimpse into My Portfolio</p>
        </div>

          <div className="row project-boxes">

            <div className='col-md-6'>
              <Link to='https://github.com/amanprasad298/Authentication' target='_blank'><div className="img1"></div></Link>
            </div>

            <div className='col-md-6'>
              <Link to='https://github.com/amanprasad298/New-Portfolio--2' target='_blank'><div className="img2"></div></Link>
            </div>

            <div className='col-md-6'>
              <Link to='https://github.com/amanprasad298/React-Portfolio--1' target='_blank'><div className="img3"></div></Link>
            </div>
 
            <div className='col-md-6'>
              <Link to='https://github.com/amanprasad298/E-Commerce-Frontend-using-React' target='_blank'><div className="img4"></div></Link>
            </div>


          </div>

        

    </div>
    </div>
  )
}

export default Projects
