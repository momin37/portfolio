import React from 'react'
import './Skills.css';
import '../Animation.css'

import reactImg from "../assets/react.jpg";
import js from "../assets/js.jpg";
import java from "../assets/java.jpg";
import html from "../assets/html.jpg";

function Skills() {
    return (
        <div id='header' className="skills">
          
                <div className="skills__left">
                        <div className="skills__skills">
                            <h1 className="skills__text">Skills</h1>
                            
                            <ul className="skills__list">
                                <li>Object Oriented Programming</li>
                                <li>Functional Programming</li>
                                <li>Designing</li>
                                <li>Wireframe (Figma, PSD, Sketch) to Code</li>
                                <li>Analytical Reasoning and Problem Solving</li>
                                <li>Strong Logic Building</li>
                                <li>Strong Communication Skills</li>

                            </ul>
                        </div>

                        <div className="skills__lang">
                            <h1 className="skills__text">Languages, Frameworks
                            and Tools</h1>
                            
                            <ul className="skills__list">
                                <li>React Native</li>
                                <li>ReactJS</li>
                                <li>Javascript</li>
                                <li>Java</li>
                                <li>HTML/CSS</li>
                                <li>Firebase/Firestore</li>
                                <li>Python</li>
                                <li>Machine Learning(In Progress)</li>


                            </ul>
                        </div>

                </div>

                <div className="skills__right">
                    <div className="right__1 ">
                        <img src={reactImg} alt="" className="right__img fadeIn "/>
                        <img src={java} alt="" className="right__img fadeIn "/>   
                    </div>

                    <div className="right__2 ">
                        <img src={js} alt="" className="right__img fadeIn "/>
                        <img src={html} alt="" className="right__img fadeIn "/>    
                    </div>

                
                </div>
            
        </div>
    )
}

export default Skills


