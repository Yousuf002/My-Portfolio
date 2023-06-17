import React,{useRef,useEffect} from 'react';
import './styles/About.css';

const About = () => {
    
  return (
    <div   id="about-section" className="about-container">
      <h1 className="heading-falldown">
       About
      </h1>
      <div className="paragraph-wrapper">
        <div className="paragraph-border">
          <p>
            "I am a passionate software engineer with expertise in MERN stack development. With a strong foundation in programming languages such as C++, Java, and JavaFX, I have honed my skills in building robust and scalable applications. I enjoy tackling complex challenges and implementing innovative solutions. As a MERN stack developer, I specialize in developing web applications using MongoDB, Express.js, REACT, and Node.js. My goal is to create seamless user experiences and deliver high-quality software solutions. With a keen interest in technology and continuous learning, I strive to stay updated with the latest industry trends and best practices. I am dedicated to delivering excellence and contributing to the success of projects."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;