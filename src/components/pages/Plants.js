import React from 'react'
import '../../App.css'
import videoBG from '../../videos/videoBG.mp4';

export default function Plants() {
    return (
        <div>
            <video className='hero-video' src={videoBG} autoPlay loop muted/>
            <h1 className='plants'>P L A N T S</h1>
        </div>
    )}