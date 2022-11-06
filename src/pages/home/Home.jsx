import './home.scss'
import React from "react";
import logoGit from '../../assets/img/svg/logo-git.svg';

const Homepage = ( props ) => {
    return (
        <div className="page-container">
            <div className="page_home">
                <h1>Hi, I am <em>Max Postnikov</em></h1>
                <p>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
                <div className="socials">
                    <a href="#">
                        <img src={logoGit} alt="GitHub" />
                    </a>
                    <a href="#">
                        <img src={logoGit} alt="GitHub" />
                    </a>
                    <a href="#">
                        <img src={logoGit} alt="GitHub" />
                    </a>
                </div>
            </div>
        </div>
    )
}


export default Homepage;