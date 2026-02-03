import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

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
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nairobiurbangreening@gmail.com"
             target="_blank"
             rel="noopener noreferrer"
             className="contact"> nairobiurbangreening@gmail.com</a>
        </div>

        <div className="socials">
          <p>Follow Us</p>
          <a className="icon-btn" href="https://web.facebook.com/profile.php?id=61568534708104&mibextid=rS40aB7S9Ucbxw6v&_rdc=1&_rdr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15 8H17V4H14C11.79 4 10 5.79 10 8V10H7V14H10V22H14V14H17L18 10H14V8C14 7.44772 14.4477 7 15 7V8Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a className="icon-btn" href="https://x.com/Francis08863197" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4 4L10 13.5L4.5 20H7.5L11.5 15.5L14.5 20H20L13.8 10.4L19 4H16L12.2 8.3L9.5 4H4Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a className="icon-btn" aria-label="Instagram">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="4" width="16" height="16" rx="4" ry="4" stroke="currentColor" strokeWidth="1.8" />
              <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="16.6" cy="7.4" r="0.9" fill="currentColor" />
            </svg>
          </a>
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

