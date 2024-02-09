import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='wrap-contact' id='contact'>
      <div className='container'>
        <div className="row align-items-center">
          <div className="contact-head col-md-6 pe-md-5">
              <h1>Contact Me</h1>
              <p>Welcome to my website! If you have any questions, feedback, or just want to say hello, feel free to reach out. I'm here to help you in any way I can.</p>
              <Link to='/about' className="btn btn-custom-primary">About Me</Link>
          </div>

        <div className="col-md-6 ps-md-5">
          <form>
            <div className="mb-3">
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Name'/>
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email'/>
            </div>
            <div className="mb-3">
              <input type="tel" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Phone Number'/>
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Subject'/>
            </div>
            <div className="mb-3">
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Enter Your Message'></textarea>
            </div>
            <button type="submit" className="btn btn-custom-primary w-100">Submit</button>
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
