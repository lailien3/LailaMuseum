import React from 'react'
import '../../App.css'
import videoBG from '../../videos/videoBG.mp4';

export default function Crystals() {
    return (
        <div>
            <video className='hero-video' src={videoBG} autoPlay loop muted/>
            <h1 className='crystals'>C R Y S T A L S</h1>
        </div>
    )}