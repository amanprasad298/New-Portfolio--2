import React from 'react'
import './Skill.css'

const Skill = () => {
  return (
    <div className='wrap-skill'>
        <hr />
        <div className="container py-5">
            <p>What I do for you?</p>
            <div className="wrapper-skill">

                <div className="d-flex align-items-center justify-content-between skill-text">
                    <h2>Graphic Design</h2>
                    <p>I craft MVPs that captivate, securing funding and customers through innovative design and strategic positioning.</p>
                </div>

                <div className="d-flex align-items-center justify-content-between skill-text">
                    <h2>UI Design</h2>
                    <p>I specialize in creating visually appealing designs that enhance user experience, blending aesthetics with functionality.</p>
                </div>

                <div className="d-flex align-items-center justify-content-between skill-text">
                    <h2>Content Writing</h2>
                    <p>Crafting compelling content that leaves a lasting impression, from blog articles to brand messaging.</p>
                </div>

                <div className="d-flex align-items-center justify-content-between skill-text">
                    <h2>Frontend Development</h2>
                    <p>Translating design visions into interactive web experiences with responsive layouts and seamless user interactions.</p>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Skill
