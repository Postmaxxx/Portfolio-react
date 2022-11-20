import './themeSwitcher.scss';
import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../assets/redux/actions'
import { bindActionCreators } from 'redux';
import { createThemeSwitcher } from './theme-switcher.js'
import cloud from '../../assets/img/svg/theme_day__cloud.svg'
import star from '../../assets/img/svg/theme_nigth__star.svg'

const ThemeSwitcher = props => {

    //console.log('props!!!!', props );

    const changeTheme = () => {
        setTimeout(() => {
            props.setStore.setTheme(document.getElementsByTagName("BODY")[0].classList.contains('dark') ? 'dark' : 'light');
        }, 100) //just to have enough time to update localStorage
    }

    useEffect(() => {
        props.setStore.setTheme(localStorage.getItem('theme') || 'light');
        createThemeSwitcher({
            _themeSwitcher: '.theme-switcher', 
            star: star, 
            cloud: cloud, 
            width: document.querySelector('.theme-switcher').offsetWidth, 
            height: document.querySelector('.theme-switcher').offsetHeight, 
            circleSize: Math.round(document.querySelector('.theme-switcher').offsetHeight / 3), 
            duration: 2000, 
            theme: localStorage.getItem('theme') || 'light', 
            numberOfStars: 30,
            nodeForTheme: document.getElementsByTagName("BODY")[0], //node for adding class 'dark' / 'light'
            saveState: 'theme',
        });
    },[])

    return (
        <div className='theme-switcher__container' >
            <div className="theme-switcher" onClick={changeTheme}></div>
        </div>
    )
   
}


const mapStateToProps = (store) => ({store: store})


const mapDispatchToProps = (dispatch) => ({
    setStore: bindActionCreators(actions, dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitcher);