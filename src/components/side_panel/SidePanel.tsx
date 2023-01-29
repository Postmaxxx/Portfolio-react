import { useEffect } from 'react';
import './sidePanel.scss';
import { Link, NavLink } from "react-router-dom";
import * as actions from '../../assets/redux/actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { IDispatch, IProps, ISetStore, IState, EmptyVoid, PageItem } from 'src/models';


const SidePanel: React.FC  = (props: IProps): JSX.Element => {
    //_container: React.ElementType;

    const changeNav: EmptyVoid = (): void => {
        props.store.nav_ham === '' ? props.setStore.setNavOpen() : props.setStore.setNavClose()
    }

    const clicked: EventListener = (e: MouseEvent): void => {
        if (props.store.nav_ham === 'nav_opened' && (e.clientX > 250)) {
            props.setStore.setNavClose();
        }
    }
 

    useEffect((): void => { //after dom rendered
        document.addEventListener('click', clicked)
    }, )


    
    useEffect((): void => { //update
        let _container: HTMLDivElement = document.querySelector('.page-container');
        let _sidePanel: HTMLDivElement = document.querySelector('.side-panel');
        let _hamburgerIcon: HTMLDivElement = document.querySelector('.hamburger');
        if (props.store.nav_ham === 'nav_opened') {
            _container?.classList?.add('nav_opened');
            _sidePanel.classList.add('nav_opened');
            _hamburgerIcon.classList.add('nav_opened');
        } else {
            _container?.classList?.remove('nav_opened');
            _sidePanel.classList.remove('nav_opened');
            _hamburgerIcon.classList.remove('nav_opened');
        }
    }, [props.store.nav_ham])


    return (
        <div className="side-panel">
            <figure>
                <Link to="/home"> 
                    <img src={props.store.imagesMe.side} alt="It's me" />
                </Link>
            </figure>
            <nav>
                <ul className="site-navigation">
                    {props.store.pages.map((page: PageItem, index: number) => {
                        return(
                            <li key={index}>
                                <NavLink 
                                    className={ ({ isActive }) => {
                                        return isActive ? 'selected' : ''
                                    }}
                                    onClick={props.setStore.setNavClose}
                                    to={page.link}>
                                    {page.text}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <div className="hamburger" onClick={(): void => changeNav()}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}




const mapStateToProps = (store: IState): {store: IState}  => ({store: store})

const mapDispatchToProps = (dispatch: IDispatch): {setStore: ISetStore} => ({
    setStore: bindActionCreators(actions, dispatch), 
})


export default connect(mapStateToProps, mapDispatchToProps)(SidePanel);