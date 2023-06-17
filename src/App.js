import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import './App.css';
import Main from './Components/Main';
import Section from './Components/Section';
import Contacts from './Components/Contacts';
import About from './Components/About';

function App() {
  const sectionRef = useRef(null);
  const aboutRef = useRef(null);
  const contactsRef = useRef(null);

  const scrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContacts = () => {
    if (contactsRef.current) {
      contactsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router basename='My-Portfolio' >
      <div className='App'>
        <Header
          scrollToSection={scrollToSection}
          scrollToAbout={scrollToAbout}
          scrollToContacts={scrollToContacts}
        />
        <Main />
        <div ref={sectionRef}>
          <Section />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={contactsRef}>
          <Contacts />
        </div>
      </div>
    </Router>
  );
}

export default App;
