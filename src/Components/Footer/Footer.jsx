import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='wrap-footer'>
        <div className="container foot-text text-center">
            <p>©Aman Kumar Prasad 2024. All rights reserved. Unauthorized use and/or duplication of this material without express and written permission is strictly prohibited.</p>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <hr/>
        </div>
        <div className="container social-f text-center">
        <div className="d-flex social-ff justify-content-center pt-3">
        <Link to="https://wa.me/919678560357?text=Hi%20Aman%2C%20%0A" target="_blank"><i className="fa-brands fa-whatsapp px-2"></i></Link>
        <Link to="https://www.linkedin.com/in/amankumarprasad/" target="_black"><i className="fa-brands fa-linkedin-in px-2"></i></Link>
        <Link to="https://github.com/amanprasad298" target="_black"><i className="fa-brands fa-github px-2"></i></Link>
        </div>
      </div>
    </div>
  )
}

export default Footer