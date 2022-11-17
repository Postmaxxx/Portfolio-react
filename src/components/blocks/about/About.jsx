import React from "react";
import photo2 from '../../../assets/img/photo-2.jpg';
import './about.scss';
import resumeDoc from '../../../assets/docs/resume.pdf';

const About = () => {
    return(
        <div className="about__container">
            <div className="img-container">
                <img src={photo2} alt="My photo" />
            </div>
            <div className="descr">
                <h3>I am <em>Postnikov Max</em></h3>
                <p>I am a frontend web developer. I can provide clean code and pixel 
                    perfect design. I also make website more & more interactive with 
                    web animations.</p>
                <ul>
                    <li><b>Full Name</b>Max Postnikov</li>
                    <li><b>Age</b>39</li>
                    <li><b>Nationality</b>Russian</li>
                    <li><b>Languages</b>Russian, English</li>
                    <li><b>Adress</b>Alanya, Turkey</li>
                    <li><b>Freelance</b>Available</li>
                </ul>
                <a className="link_button" href={resumeDoc} target="_blank">Download cv</a>
            </div>
        </div>
    )
}



export default About;