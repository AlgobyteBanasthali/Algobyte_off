import React from 'react'
import './footer.css'
import AlgoByteLogo from '../../assets/algobyte.png';

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#whatAlgoByte">What is AlgoByte?</a></p>
  <p><a href="#features">TakeAways</a></p>
  <p><a href="#blog">Library</a></p>
  {/* <p><a href="#team">Our Team</a></p> */}
  <p><a href="#contact">Contact Us</a></p>
  </>
)

const Socials = () => (
  <>
  <p><a href="https://instagram.com/algobyte.bv" target="_blank">Instagram</a></p>
  <p><a href="mailto:algobytebv@gmail.com" target="_blank">Mail Us</a></p>
  <p><a href="https://www.linkedin.com/company/algobyte/" target="_blank">LinkedIn</a></p>
  </>
)

const Footer = () => {
  return (
    <div className='algobyte__footer section__padding' id="footer">
      <div className="algobyte__footer-heading">
        <h1 className="gradient__text">
        Join Us AlgoByte and shape the future of technology!
        </h1>
      </div>
      <div className="algobyte__footer-links">
        <div className="algobyte__footer-links_logo">
          <img src={AlgoByteLogo} alt="logo" />
        </div>
        <div></div>
        <div className="algobyte__footer-links_div">
          <h4>Links</h4>
          <Menu />
        </div>
        <div className="algobyte__footer-links_div">
          <h4>Socials</h4>
          <Socials />
        </div>
      </div>

      <div className="algobyte__footer-copyright">
        <p>&copy; 2023 AlgoByte. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer