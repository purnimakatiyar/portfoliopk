import React from 'react';
import './Contact.css';
import contactImg from "./img/about-9.jpeg"
import {FaMapMarkerAlt} from 'react-icons/fa'
import {FaUser} from 'react-icons/fa'

import {FaEnvelope} from 'react-icons/fa'
import {} from 'react-icons/fa'

function Contact() {
    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Message Me</h1>
                            <p className="hire__text white">Feel free to contact</p>
                          
                        </div>
                        <div className="input__box">
                           <input type="text" className="contact name" placeholder="Your name *" />
                           <input type="text" className="contact email" placeholder="Your Email *" />
                           <input type="text" className="contact subject" placeholder="Write a Subject" />
                           <textarea name="message" id="message" placeholder="Write Your message"></textarea>
                           <button className="btn contact pointer" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
                <div className="col__2">
                    <img src={contactImg} alt="" className="contact__img" />

                    <br></br>
                    <br></br>
                    <div className='personal_info'>
                       <div className='box'>
                       
                       <div className='text'>
                       <a href="#"><FaUser/></a>
                           <h3>Name</h3>
                           <p>Purnima Katiyar</p>
                       </div>

                       </div>
                       <div className='box'>
                       
                       <div className='text'>
                       <a href="#"><FaMapMarkerAlt/></a>
                           <h3>Address</h3>
                           <p>Kanpur, U.P.</p>
                       </div>

                       </div>
                       <div className='box'>
                       
                       <div className='text'>
                       <a href="#"><FaEnvelope/></a>
                           <h3>Email</h3>
                           <p>katiyarpurnima0705@gmail.com</p>
                       </div>

                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;