import './home.scss'
import React, { useEffect } from "react";
import { connect } from 'react-redux'
import * as actions from '../../assets/redux/actions'
import ThemeSwitcher from '../../components/theme_switcher/ThemeSwitcher';

const Homepage = ( props ) => {
    return (
        <div className="page_home">
            <h1>Hi, I am <em>Max Postnikov</em></h1>
            <p>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
        </div>
    )
}


export default Homepage;