import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <header className='header'>
      <a href='/home' className='logo'>Logo</a>
      <nav className='navbar'>
        <a href="/home">Home</a>
        <a href="/merchandise">Merchandise</a>
        <a href="/events">Events</a>
        <a href="/aboutus">About Us</a>
        <div 
          className="dropdown-container"
          onMouseEnter={() => setDropdownVisible(true)} 
          onMouseLeave={() => setDropdownVisible(false)} 
        >
          <button className='hamburger'>☰</button>
          <div className={`dropdown-menu ${dropdownVisible ? 'show' : ''}`}>
        <a href="/profile">Profile</a>
            <a href="/recomm">Recommendations</a>
            <a href="/contacts">Contacts</a>
            <a href="/commdisc">Community/Discussion</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
