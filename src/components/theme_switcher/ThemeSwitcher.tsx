import { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../assets/redux/actions";
import { bindActionCreators } from "redux";
import { dayLightSwitcher } from "./theme-switcher";
import cloud from "../../assets/img/svg/theme_day__cloud.svg";
import star from "../../assets/img/svg/theme_nigth__star.svg";
import "./themeSwitcher.scss";
import { EmptyVoid, IMapdispatchToProps, IMapStateToProps, IPropsJSX } from "src/models";




const ThemeSwitcher = (props) => {

	useEffect((): void => {
		props.setStore.setTheme(localStorage.getItem("theme") || "light");
		const themeSwitcherContainer = ".theme-switcher__container";
		const themeProps = { //IThemeSwitcherProps
			themeSwitcherContainer: themeSwitcherContainer, 
			star: star,
			cloud: cloud, 
			width: document.querySelector<HTMLElement>(themeSwitcherContainer).offsetWidth, 
			height: document.querySelector<HTMLElement>(themeSwitcherContainer).offsetHeight, 
			circleSize: Math.round(document.querySelector<HTMLElement>(themeSwitcherContainer).offsetHeight / 3), 
			duration: 2000, 
			theme: localStorage.getItem("theme") || "light", 
			numberOfStars: 30,
			nodeForTheme: document.querySelector("body"), //node for adding class 'dark' / 'light'
			saveState: "theme",
		};
		const themeSwitcher = dayLightSwitcher(themeProps);
		themeSwitcher.create();
	},[]);
	
	return (
		<div className='theme-switcher__container'></div>
	);
};



const mapDispatchToProps: IMapdispatchToProps = (dispatch) => ({
	setStore: bindActionCreators(actions, dispatch),
});

export default connect(null, mapDispatchToProps)(ThemeSwitcher);