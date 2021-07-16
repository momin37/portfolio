import React from 'react'
import './About.css'

function About() {
    return (
        <div className="about">
            <div className="about__left">
                <h1>About Me</h1>
            </div>

            <div className="about__right">
                <div className="about__content">
                <p >
                Hi, Here's a bit about me. I am a software Engineer who loves his work. I am constantly looking to improve myself by learning new skills and improving on the skills I already have. I am a fast learner with great adaptibility. I have great communication skills. I have strong Fundamentals in programming, so learning new skills, tools and technologies is comparitively easy for me.</p>
                <br></br>
                <p>I also love innovating, finding new solutions to problems is a skill I excel at. I have always had a love for technology which lead to me choosing a career in Software Engineering. I am also very creative so coming up with new Ideas and Design is something I love to do.</p>
                <br></br>
                <p>Have Questions? Mail me at <span className="span__email">muzammilsaeed49@gmail.com</span></p>
                </div>
            </div>

            
        </div>
    )
}

export default About
