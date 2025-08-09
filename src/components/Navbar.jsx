import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <nav className="navbar" data-aos="fade-down">
      <div className="logo">MyPortfolio</div>

      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        &#9776;
      </div>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><NavLink to="/" end onClick={() => setIsOpen(false)}>Home</NavLink></li>
        <li><NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink></li>
        <li><NavLink to="/skills" onClick={() => setIsOpen(false)}>Skills</NavLink></li>
        <li><NavLink to="/projects" onClick={() => setIsOpen(false)}>Projects</NavLink></li>
        <li><NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
