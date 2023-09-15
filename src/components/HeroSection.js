import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
// import ReactPlayer from 'react-player'

function HeroSection() {
  return (
    <div className='hero-container'>

      <video autoPlay muted loop id="myVideo">
        <source src="video-3.mp4" type="video/mp4"/>
      </video>

      {/* <ReactPlayer url={'/videos/video-1.mp4'} controls={true} /> */}

      {/* <video src='/videos/video-3.mp4' autoPlay loop muted/> */}
     
     <h1>• laila • laila • laila •</h1>
      <p>this is my video</p>
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