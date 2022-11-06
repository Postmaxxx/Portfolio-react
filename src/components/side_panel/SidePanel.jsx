import React, {useContext, useEffect} from 'react';
import './sidePanel.scss';
import sidePhoto from '../../assets/img/photo-side.jpg'
import { Link, NavLink } from "react-router-dom";
import * as actions from '../../assets/redux/actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'



const SidePanel = (props) => {
    let _container = document.querySelector('.page-container');
    let _sidePanel = document.querySelector('.side-panel');

    function changeNav() {
        props.store.nav_ham === '' ? props.setStore.setNavOpen() : props.setStore.setNavClose()
    }

    if (props.store.nav_ham === 'nav_opened') {
        _container?.classList?.add('nav_opened')
        _sidePanel?.classList?.add('nav_opened')
    } else {
        _container?.classList?.remove('nav_opened')
        _sidePanel?.classList?.remove('nav_opened')
    }

    useEffect(function() {
        _container = document.querySelector('.page-container');
        _sidePanel = document.querySelector('.side-panel');
    }, [])


    return (
        <div className="side-panel">
            <figure>
                <img src={sidePhoto} alt="My photo" />
            </figure>
            <nav>
                <ul className="site-navigation">
                    <li>
                        <NavLink 
                            className={ ({ isActive }) => {
                                return isActive ? 'selected' : ''
                            }}
                        to="/home">
                            home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className={ ({ isActive }) => {
                                return isActive ? 'selected' : ''
                            }}
                        to="/about">
                            about
                        </NavLink>
                    </li>
                    <li><NavLink to="/test" data-nav>resume</NavLink></li>
                    <li><NavLink to="#" data-nav>portfolio</NavLink></li>
                    <li><NavLink to="#" data-nav>contact</NavLink></li>
                </ul>
            </nav>
            <div className="hamburger" onClick={() => changeNav()}></div>
        </div>
    );
}


const mapStateToProps = (store) => ({store: store})


const mapDispatchToProps = (dispatch) => ({
    setStore: bindActionCreators(actions, dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(SidePanel);

