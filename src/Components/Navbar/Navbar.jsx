import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setSticky(window.scrollY > 50);
    });
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="NUG-LOGO" className="logo" />

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ul className={menuOpen ? 'open' : ''}>
        <a href="/"><li>Home</li></a>
        <a href="/blog"><li>Blog</li></a>
        <a href="/about-us"><li>About Us</li></a>
        <a href="contact-us"><li>Contact Us</li></a>
        <a href="/gallery"><li>Gallery</li></a>
        <li>
  <a href="/donate">
    <button className="btn">Donate</button>
  </a>
</li>
      </ul>
    </nav>
  );
};

export default Navbar;
