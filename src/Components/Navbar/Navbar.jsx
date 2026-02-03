import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setSticky(window.scrollY > 50);
    });
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`} ref={navRef}>
      <img src={logo} alt="NUG-LOGO" className="logo" />

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="nav-right">
        <ul className={menuOpen ? 'open' : ''}>
          <Link to="/" onClick={handleLinkClick}><li>Home</li></Link>
          <Link to="/blogs" onClick={handleLinkClick}><li>Blog</li></Link>
          <Link to="/about-us" onClick={handleLinkClick}><li>About Us</li></Link>
          <Link to="/contact-us" onClick={handleLinkClick}><li>Contact Us</li></Link>
          <Link to="/gallery" onClick={handleLinkClick}><li>Gallery</li></Link>
          <li>
            <Link to="/donate" onClick={handleLinkClick}>
              <button className="btn">Donate</button>
            </Link>
          </li>
        </ul>
        <div className="admin-icon">
          <Link to="/admin/login" aria-label="Admin" onClick={handleLinkClick}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L4 5V11C4 16.52 7.84 21.74 12 22C16.16 21.74 20 16.52 20 11V5L12 2Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
                fill="currentColor"
              />
              <path
                d="M9.5 15C9.5 13.8954 10.3954 13 11.5 13H12.5C13.6046 13 14.5 13.8954 14.5 15V15.5C14.5 15.7761 14.2761 16 14 16H10C9.72386 16 9.5 15.7761 9.5 15.5V15Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;