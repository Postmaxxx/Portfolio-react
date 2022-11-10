import React from "react";
import './about.scss'
import photo1 from '../../assets/img/photo-1.jpg';
import photo2 from '../../assets/img/photo-2.jpg';
import webDesign from '../../assets/img/svg/web-design.svg';


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

                <section className='services'> 
                    <h2>Services<em>Services</em></h2>
                    <div className="services__container">
                        <div className="service">
                            <img src={webDesign} alt="" />
                            <h4>Web Design</h4>
                            <div className="line"></div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Nam reprehenderit sequi porro ipsum repellendus nostrum!</p>
                        </div>
                        <div className="service">
                            <img src={webDesign} alt="" />
                            <h4>Frontend</h4>
                            <div className="line"></div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Nam reprehenderit sequi porro ipsum repellendus nostrum!</p>
                        </div>
                        <div className="service">
                            <img src={webDesign} alt="" />
                            <h4>Components</h4>
                            <div className="line"></div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Nam reprehenderit sequi porro ipsum repellendus nostrum!</p>
                        </div>
                    </div>
                </section>

                <section className='reviews'> 
                    <h2>Reviews<em>Reviews</em></h2>
                    <div className="reviews__container">

                    </div>
                </section>

            </div>

        </div>
    )
}