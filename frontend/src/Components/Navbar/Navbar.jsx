import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ scrollToSection, eventsRef, aboutUsRef,recomm }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <header className='header'>
      <a href='/home' className='logo'>Logo</a>
      <nav className='navbar'>
        <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection(eventsRef); }}>Events</a>
        <a href="/catalogue">Catalogue</a>
        <a href="/testimonials">Testimonials</a>
        <a href="/joinus">Join Us</a>
        
        <div 
          className="dropdown-container"
          onMouseEnter={() => setDropdownVisible(true)} 
          onMouseLeave={() => setDropdownVisible(false)} 
        >
          <button className='hamburger'>☰</button>
          <div className={`dropdown-menu ${dropdownVisible ? 'show' : ''}`}>
        <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection(aboutUsRef); }}>About Us</a>
        <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection(recomm); }}>Recommendations</a>
            <a href="/commdisc">Community/Discussion</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
