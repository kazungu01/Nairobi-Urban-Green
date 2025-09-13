import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png';
import facebook from "../../assets/facebook.png"

const Footer = () => {
  return (
    <div>
      <div className="footer-top-wrapper">
        <div className="footer-left">
          {/* <p>Have Any Questions For Us ?</p> */}
          <h2>Contact Us Anytime</h2>
          <p className="contact">+254 790 740957</p>
        </div>

        <div className="footer-right">
          <p>Send Us a Message</p>
          <p className="contact">nairobiurbangreening@gmail.com</p>
        </div>

        <div className="socials">
          <p>Follow Us</p>
          <img src={facebook} alt="facebook" />
          <img src={facebook} alt="twitter" />
          <img src={facebook} alt="instagram" />
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom-wrapper">
        <img src={logo} alt="NUG LOGO" />

        <div className="footer-links">
          <p>Copyright © Nairobi Urban Green</p>
          <p>Terms Of Service</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

