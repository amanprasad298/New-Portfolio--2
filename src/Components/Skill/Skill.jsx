import React from 'react'
import './Skill.css'

const Skill = () => {
  return (
    <div className='wrap-skill'>
        
        <div className="text-head d-flex justify-content-center align-items-center flex-column mb-md-5">
            <h1>What I do for you?</h1>
            <p>Unlocking Potential: Showcase of My Skills</p>
        </div>

        <div className="container d-flex justify-content-center"><hr /></div>
        
        <div className="container item-wrap d-flex justify-content-center align-items-center">

            

            <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="box ">
                <div className="content">
                    <h2>01</h2>
                    <h3>Graphic Design</h3>
                    <p>Craft MVPs that captivate, securing funding and customers through innovative design and strategic positioning.</p>
                </div>
            </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="box ">
                <div className="content">
                    <h2>02</h2>
                    <h3>UI Design</h3>
                    <p>Specialize in creating visually appealing designs that enhance UX, blending aesthetics with functionality.</p>
                </div>
            </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="box ">
                <div className="content">
                    <h2>03</h2>
                    <h3>Content Writing</h3>
                    <p>Crafting compelling content that leaves a lasting impression, from blog articles to brand messaging.</p>
                </div>
            </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="box ">
                <div className="content">
                    <h2>04</h2>
                    <h3>Frontend Dev</h3>
                    <p>Translating design visions into interactive web experiences with responsive layouts and seamless user interactions.</p>
                </div>
            </div>
            </div>

            </div>
        </div>
      
    </div>
  )
}

export default Skill
