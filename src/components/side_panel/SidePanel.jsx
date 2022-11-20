import React, {useContext, useEffect} from 'react';
import './sidePanel.scss';
import sidePhoto from '../../assets/img/photo-side.jpg'
import { Link, NavLink } from "react-router-dom";
import * as actions from '../../assets/redux/actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'



class SidePanel extends React.Component {

    constructor(props) {
        super(props)
        this.changeNav = this.changeNav.bind(this);
    }

    changeNav() {
        this.props.store.nav_ham === '' ? this.props.setStore.setNavOpen() : this.props.setStore.setNavClose()
    }

    componentDidMount() {
        this._container = document.querySelector('.page-container');
        this._sidePanel = document.querySelector('.side-panel');
        this._hamburgerIcon = document.querySelector('.hamburger');
    }


    componentDidUpdate() {
        if (this.props.store.nav_ham === 'nav_opened') {
            this._container?.classList?.add('nav_opened');
            this._sidePanel.classList.add('nav_opened');
            this._hamburgerIcon.classList.add('nav_opened');
        } else {
            this._container?.classList?.remove('nav_opened');
            this._sidePanel.classList.remove('nav_opened');
            this._hamburgerIcon.classList.remove('nav_opened');
        }
        //console.log('side-panel updated', );
    }



    render() {
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
                                onClick={() => {this.props.setStore.setNavClose()}}
                                to="/home">
                                home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                className={ ({ isActive }) => {
                                    return isActive ? 'selected' : ''
                                }}
                                onClick={() => {this.props.setStore.setNavClose()}}
                                to="/about">
                                about
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                className={ ({ isActive }) => {
                                        return isActive ? 'selected' : ''
                                    }}
                                    onClick={() => {this.props.setStore.setNavClose()}}
                                    to="/resume">
                                resume
                            </NavLink>
                        </li>


                        <li><NavLink to="#" data-nav>portfolios</NavLink></li>
                        <li>
                            <NavLink 
                                className={ ({ isActive }) => {
                                        return isActive ? 'selected' : ''
                                    }}
                                    onClick={() => {this.props.setStore.setNavClose()}}
                                    to="/contact">
                                contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="hamburger" onClick={() => this.changeNav()}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (store) => ({store: store})


const mapDispatchToProps = (dispatch) => ({
    setStore: bindActionCreators(actions, dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(SidePanel);

