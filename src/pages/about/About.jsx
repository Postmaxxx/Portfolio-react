import React from "react";
import './about.scss'
import photo1 from '../../assets/img/photo-1.jpg';
import photo2 from '../../assets/img/photo-2.jpg';

export default function Aboutpage() {
    return (
        <div className="page-container">
            <div className="page_about">
                <section className='about_me'> 
                    <h2>About me<em>About me</em></h2>
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
                            <a href="#">Download cv</a>
                        </div>
                    </div>
                </section>

            </div>

        </div>
    )
}