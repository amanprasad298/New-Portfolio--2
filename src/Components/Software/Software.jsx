import React from 'react'
import './Software.css'
import one from '../Assets/1.png'
import two from '../Assets/2.png'
import three from '../Assets/3.png'
import four from '../Assets/4.png'
import five from '../Assets/5.png'
import six from '../Assets/6.png'
import seven from '../Assets/7.png'
import eight from '../Assets/8.png'
import nine from '../Assets/9.png'

const Software = () => {
  return (
    <div className='wrap-software'>

        <div className="container softwares d-flex justify-content-between">
            <img src={one} alt="" />
            <img src={two} alt="" />
            <img src={three} alt="" />
            <img src={four} alt="" />
            <img src={five} alt="" />
            <img src={six} alt="" />
            <img src={seven} alt="" />
            <img src={eight} alt="" />
            <img src={nine} alt="" />
        </div>

    </div>
  )
}

export default Software