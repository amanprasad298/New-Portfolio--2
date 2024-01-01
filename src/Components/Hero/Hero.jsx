import React from 'react'
import './Hero.css'
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import { Link } from 'react-router-dom'
import line from '../Assets/line.png'

const Hero = () => {

  const [text] = useTypewriter({
    words: ['A Frontend Developer', 'A UI Designer', 'A Content Writer', 'An ExTC Engineer', 'A Graphic Designer'],
    loop: {},
    typeSpeed: 80,
    deleteSpeed: 30
  })


  return (
    <div className='hero-wrap'>
      <div className="container text-center hero-container-wrap">
        <p>Hi, I'm</p>
        <h1>Aman Kumar Prasad</h1>
        <p>
          <span>{text}</span>
          <span>
          <Cursor cursorStyle="</>" cursorColor='lightgreen'/>
          </span>
          </p>
          <img className='line' src={line} alt="" />
      </div>
      <div className="container d-flex justify-content-center">
        <hr />
      </div>
      <div className="container social text-center pb-lg-5">
        <div className="d-flex justify-content-center">
        <Link to="https://wa.me/919678560357?text=Hi%20Aman%2C%20%0A" target="_blank"><i className="fa-brands fa-whatsapp px-2"></i></Link>
        <Link to="https://www.linkedin.com/in/amankumarprasad/" target="_black"><i className="fa-brands fa-linkedin-in px-2"></i></Link>
        <Link to="https://github.com/amanprasad298" target="_black"><i className="fa-brands fa-github px-2"></i></Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
