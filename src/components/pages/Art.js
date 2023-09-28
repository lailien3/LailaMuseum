import React from 'react'
import '../../App.css'
import videoBG from '../../videos/videoBG.mp4';

export default function Art() {
    return (
        <div>
            <video className='hero-video' src={videoBG} autoPlay loop muted/>
            <h1 className='art'>A R T</h1>
        </div>
    )
}