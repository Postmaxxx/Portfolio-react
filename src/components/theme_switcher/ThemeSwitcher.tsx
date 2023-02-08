import { useEffect } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../assets/redux/actions'
import { bindActionCreators } from 'redux';
import { createThemeSwitcher } from './theme-switcher.js'
import cloud from '../../assets/img/svg/theme_day__cloud.svg'
import star from '../../assets/img/svg/theme_nigth__star.svg'
import './themeSwitcher.scss';
import { EmptyVoid, IMapdispatchToProps, IMapStateToProps, IPropsJSX } from 'src/models';




const ThemeSwitcher: IPropsJSX = (props) => {

    const changeTheme: EmptyVoid = () => {
        props.setStore.setTheme(document.getElementsByTagName("BODY")[0].classList.contains('dark') ? 'dark' : 'light');
    }

    useEffect(() => {
        props.setStore.setTheme(localStorage.getItem('theme') || 'light');

        const themeProps: actions.IThemeSwitcherProps = {
            _themeSwitcher: '.theme-switcher', 
            star: star, 
            cloud: cloud, 
            width: document.querySelector<HTMLElement>('.theme-switcher').offsetWidth, 
            height: document.querySelector<HTMLElement>('.theme-switcher').offsetHeight, 
            circleSize: Math.round(document.querySelector<HTMLElement>('.theme-switcher').offsetHeight / 3), 
            duration: 2000, 
            theme: localStorage.getItem('theme') || 'light', 
            numberOfStars: 30,
            nodeForTheme: document.querySelector("body"), //node for adding class 'dark' / 'light'
            saveState: 'theme',
        }
        createThemeSwitcher(themeProps);
    },[])

    return (
        <div className='theme-switcher__container' >
            <div className="theme-switcher" onClick={changeTheme}></div>
        </div>
    )
}


const mapStateToProps: IMapStateToProps = (store)  => ({store: store})

const mapDispatchToProps: IMapdispatchToProps = (dispatch) => ({
    setStore: bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitcher);