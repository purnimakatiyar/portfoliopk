import React from "react";
import './Footer.css';

import {FaFacebook} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
function Footer() {
  return (
    <div
      className="footer d__flex align__items__center justify__content__space__between pz-10"
      style={{ padding: "10px 20px", zIndex: "100" }}
    >
    <div className="footer_socials">
    <a href="https://www.facebook.com/profile.php?id=100008402831242" target='_blank'><FaFacebook/></a>
    <a href="https://www.instagram.com/purnimakatiyar/?hl=en" target='_blank'><FaInstagram/></a>
    <a href="https://twitter.com/purnimakatiyar" target='_blank'><FaTwitter/></a>
    <a href="https://github.com/purnimakatiyar" target='_blank'><FaGithub/></a>
    <a href="https://www.linkedin.com/in/purnima-katiyar-6a1a92134/" target='_blank'><FaLinkedin/></a>

    </div>
   
      <span
        className="copyright"
        style={{ color: "#c6c9d8", fontSize: "14px", opacity: "0.75", margin:"0 auto" }}
      >
        Developed and Designed by Purnima Katiyar<br></br>Programmer Learner @2022 
      </span>
    </div>
    
  );
}

export default Footer;