import React from 'react';
import '../App.css';
import './HeroSection.css';
import videoBG from '../videos/videoBG.mp4';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video className='hero-video' src={videoBG} autoPlay loop muted/>
      <h1>• laila •</h1>
    </div>
  );
}

export default HeroSection;