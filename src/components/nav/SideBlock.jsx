import React from 'react';
import './SideBlock.scss';
import myPhoto from '../../assets/img/photo-1.jpg'
import { Link, NavLink } from "react-router-dom";



const Nav = () => {
    return (
        <div className="side-panel">
            <figure>
                <img src={myPhoto} alt="My photo" />
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
        </div>
    );
}

export default Nav;
