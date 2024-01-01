import React, { useState, useEffect } from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

    const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClasses = `navbar navbar-expand-lg navigation-wrap fixed-top ${scrolling ? 'scrolled' : ''}`

  return (
    <div className='container'>
        <nav className={navbarClasses}>
            <div className="container">
                <NavLink className="navbar-brand" to="/">Aman</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="fa-solid fa-bars"></span>
                </button>
                
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-link ms-2" aria-current="page" to="/">Home</NavLink>
                    <NavLink className="nav-link ms-2" to="/about">About Me</NavLink>
                    <NavLink className="nav-link ms-2" to="/contact">Let's Talk</NavLink>
                    <NavLink className="nav-link ms-2" to="/projects">My Projects</NavLink>
                    <NavLink className="nav-link ms-2" to="mailto:amanprasad1502@gmail.com">Mail me: amanprasad1502@gmail.com</NavLink>
                </div>
              </div>
              </div>
                
        </nav>      
    </div>
  )
}

export default NavBar
