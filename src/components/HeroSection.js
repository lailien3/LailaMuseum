import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import videoBG from '../videos/videoBG.mp4';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video className='hero-video' src={videoBG} autoPlay loop muted/>
      <h1>• laila •</h1>
      {/* <p>this is my video</p> */}
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          YES
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          NO <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;