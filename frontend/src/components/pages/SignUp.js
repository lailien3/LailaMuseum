import React from 'react'
import '../../App.css'
import videoBG from '../../videos/videoBG.mp4';

export default function SignUp() {
    return (
        <div>
            <video className='hero-video' src={videoBG} autoPlay loop muted/>
            <h1 className='sign-up'>S I G N  U P</h1>
        </div>
    )
}