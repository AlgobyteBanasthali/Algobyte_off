import React from 'react'
import './header.css'
import IMG from '../../assets/header2.png'

const Header = () => {
  return (
    <div className='algobyte__header section__padding' id="home">
      <div className="algobyte__header-content">
        <h1 className="gradient__text">
          Driven By Tech, For Tech
        </h1>
        <p>Our first ever official and open source club facilitated by the Computer Science department of Banasthali Vidyapith. For all the muddled tech enthusiasts, AlgoByte has got your back!</p>
        <a href="#contact">Get in touch</a>
      </div>
      <div className="algobyte__header-img">
        <img src={IMG} alt="" />
      </div>
    </div>
  )
}

export default Header