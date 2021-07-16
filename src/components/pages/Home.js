import React from 'react'
import '../../App.css';
import Welcome from '../Welcome';
import HeroSection from '../HeroSection';
import Skills from '../Skills';
import Demo from '../Demo';
import Slider from '../Portfolio';
import About from '../About';


function Home() {
    return (
        <div>
            <Welcome/>
            <Skills />
            <Demo/>
            <Slider />
            <About/>
        </div>
    )
}

export default Home
