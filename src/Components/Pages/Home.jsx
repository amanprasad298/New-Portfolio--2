import React from 'react'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Skill from '../Skill/Skill'
import Software from '../Software/Software'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Skill/>
      <Projects/>
      <Contact/>
      <Software/>
      <Footer/>
    </div>
  )
}

export default Home
