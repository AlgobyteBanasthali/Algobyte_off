import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {SiInstagram} from 'react-icons/si'
import {useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
//   const form = useRef();

//     const sendEmail = (e) => {
//         e.preventDefault();
    
//         emailjs.sendForm('service_w4477kk', 'template_jx0e8k8', form.current, 'OmTW7vj7vU6cWBCNw')
//           .then((result) => {
//               console.log(result.text);
//           }, (error) => {
//               console.log(error.text);
//           });
//     };

    return (
        <div className="algobyte__contact section__padding" id="contact">
            <div className="algobyte__contact-heading">
                <h1 className='gradient__text'>Get In Touch</h1>
            </div>
            <div className="algobyte__contact-container">
                <div className="algobyte__contact-contact__options">
                    <div className="algobyte__contact-contact__option">
                        <HiOutlineMail className="contact__option-icons"/>
                        <h4>Email</h4>
                        <h5>algobytebv@gmail.com</h5>
                        <a href="mailto:algobytebv@gmail.com" target="_top">Send a message</a>
                    </div>
                    <div className="algobyte__contact-contact__option">
                        <SiInstagram className="contact__option-icons"/>
                        <h4>Instagram</h4>
                        <h5>@algobyte.bv</h5>
                        <a href="https://instagram.com/algobyte.bv" target="_blank">Send a message</a>
                    </div>
                </div>

                <div className="algobyte__contact-contact__form">
                    <form>
                        <input type="text" name="name" placeholder="Your Full Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <textarea name="message" columns = "21" rows="7" placeholder="Your Message"></textarea>
                        <button type="submit" className="btn" onclick="this.form.reset();">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact