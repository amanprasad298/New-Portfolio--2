import React from 'react'
import './About.css'
import about from '../Assets/about.jpg'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='container wrap-1' id='about'>
      <div className="row justify-content-center align-items-center">

        <div className="col-lg-6 col-md-7 text-wrap-1">
          <h1>Curious <span><i class="fa-solid fa-laptop-code"></i></span> to Know More About Me?</h1>
          <p className='mt-lg-4'>Hey there, I'm Aman Kumar Prasad, an Electronics and Telecommunication Engineering graduate with a passion for creating captivating user experiences. As a Frontend Developer and UI Designer, I specialize in bringing ideas to life using technologies like React.js, Python, and JavaScript. My creative journey extends to design tools such as Figma and Adobe XD.<br/><br/> Let's connect and explore the possibilities together!</p>
          <Link to='/about' className='click-me-1'>Click me <i class="fa-solid fa-code"></i></Link>
        </div>

        <div className="col-lg-6 col-md-5 img-wrap-1">
          <img src={about} alt="" />
        </div>

      </div>
    </div>
  )
}

export default About
