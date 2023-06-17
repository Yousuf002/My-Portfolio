import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

const Header = ({ scrollToSection, scrollToAbout, scrollToContacts }) => {
  return (
    <div className="Header">
      <nav>
        <ul>
            <div className="head">
            <h2>Yousuf Khan</h2>
            <p>yk26391@gmail.com</p>
          </div>
                  
          <li>
            <Link to="/Section" onClick={scrollToSection}>
              <b>Skills</b>
            </Link>
          </li>
          <li>
            <Link to="/About" onClick={scrollToAbout}>
              <b>About</b>
            </Link>
          </li>
          <li>
            <Link to="/Contacts" onClick={scrollToContacts}>
              <b>Contact</b>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="changer"></div>
    </div>
  );
};

export default Header;
