import React from 'react'
import '../../App.css'
import videoBG from '../../videos/videoBG.mp4';

export default function Code() {
    return (
        <div>
            <video className='hero-video' src={videoBG} autoPlay loop muted/>
            <h1 className='code'>C O D E</h1>
        </div>
    )}