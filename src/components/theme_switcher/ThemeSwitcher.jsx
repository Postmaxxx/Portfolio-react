import './themeSwitcher.scss';
import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../assets/redux/actions'
import { bindActionCreators } from 'redux';
import { createThemeSwitcher } from './theme-switcher.js'
import cloud from '../../assets/img/svg/theme_day__cloud.svg'
import star from '../../assets/img/svg/theme_nigth__star.svg'

const ThemeSwitcher = props => {

    const body = document.getElementsByTagName("BODY")[0];
    props.store.theme === 'dark' ? body.classList.add('dark') : body.classList.remove('dark')

    function changeTheme () {
        props.store.theme === 'light' ? props.setStore.setTheme('dark') : props.setStore.setTheme('light')
    }

    console.log('', props);

    useEffect(() => {
        console.log('document', document.querySelector('.theme-switcher').offsetHeight);
        createThemeSwitcher({
            _themeSwitcher: '.theme-switcher', 
            star: star, 
            cloud: cloud, 
            width: document.querySelector('.theme-switcher').offsetWidth, 
            height: document.querySelector('.theme-switcher').offsetHeight, 
            circleSize: Math.round(document.querySelector('.theme-switcher').offsetHeight / 3), 
            duration: 2000, 
            theme: 'day', 
            numberOfStars: 30,
            /*
            starsBlinkingDuration: starsBlinkingDuration, 
            clouds: clouds, 
            starsBlinkingAnimation: starsBlinkingAnimation,
            */
        });
    
    },[])


    return (
        <div className='theme-switcher__container' >
            <div className="theme-switcher"  onClick={() => changeTheme()}></div>
        </div>
    )
   
}


const mapStateToProps = (store) => ({store: store})


const mapDispatchToProps = (dispatch) => ({
    setStore: bindActionCreators(actions, dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitcher);