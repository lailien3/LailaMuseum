import React from 'react'
import '../../App.css'
import videoBG from '../../videos/videoBG.mp4';

export default function Cats() {
    return (
        <div>
            <video className='hero-video' src={videoBG} autoPlay loop muted/>
            <h1 className='cats'>• C A T S •</h1>
        </div>
    )}