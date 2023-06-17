import React from 'react';
import './styles/Main.css';
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import me from './assets/free.PNG';
import TypingText from './TypingText';

const Main = () => {
  return (
    <div className='main'>
      <div className='main_container'>
        <div className='main_content'>
          <div className='text'>
            <p>Hello Everyone!</p>
            <h1>
              <TypingText texts={['I am Yousuf,' , ]} />
            </h1>
            <p><TypingText texts={['','Front end developer / Back end developer']} /></p>
            <div className='icons'>
              <Twitter className='icon1'></Twitter>
              <Instagram className='icon'></Instagram>
              <Facebook className='icon'></Facebook>
              <LinkedIn className='icon'></LinkedIn>
            </div>
          </div>
        </div>
        <div className='image'>
          <img src={me} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Main;