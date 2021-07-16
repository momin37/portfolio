import React from 'react'
import {Button} from './Button';
import '../App.css';
import './HeroSection.css';

import '../Animation.css'


function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <div className="hero__text animated fadeInRight">
                <h1>Muzammil Shabbir</h1>
            </div>
            <div className="hero-btns">
            </div>
        </div>
    )
}

export default HeroSection
