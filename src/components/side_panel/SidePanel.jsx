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
    }



    render() {
        return (
            <div className="side-panel">
                <figure>
                    <Link to="/home"> 
                        <img src={sidePhoto} alt="My photo" />
                    </Link>
                </figure>
                <nav>
                    <ul className="site-navigation">
                        {this.props.store.pages.map((page, index) => {
                            return(
                                <li key={index}>
                                    <NavLink 
                                        className={ ({ isActive }) => {
                                            return isActive ? 'selected' : ''
                                        }}
                                        onClick={() => {this.props.setStore.setNavClose()}}
                                        to={page.link}>
                                        {page.text}
                                    </NavLink>
                                </li>
                            )
                        })}

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

