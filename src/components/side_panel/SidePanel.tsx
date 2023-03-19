import { MouseEventHandler, useEffect, useMemo } from "react";
import "./sidePanel.scss";
import { Link, NavLink } from "react-router-dom";
import * as actions from "../../assets/redux/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { IRemoveEventListener, PageItem, IMapStateToProps, IMapdispatchToProps, IPropsJSX } from "src/models";


const SidePanel = (props) => {

	const changeNav: MouseEventHandler = () => {
		props.nav_ham === "" ? props.setStore.setNavOpen() : props.setStore.setNavClose();
	};

	const clicked: EventListener = (e: MouseEvent): void => {
		if (props.nav_ham === "nav_opened" && (e.clientX > 250)) {
			props.setStore.setNavClose();
			document.removeEventListener("click", clicked);
		}
	};
 

	useEffect((): IRemoveEventListener => { //after dom rendered
		if (props.nav_ham === "nav_opened") {
			document.addEventListener("click", clicked); 
		}
		return (): ReturnType<typeof document.removeEventListener> => document.removeEventListener("click", clicked);
	});


    
	useEffect((): void => { //update
		const _container: HTMLDivElement = document.querySelector(".page-container");
		const _sidePanel: HTMLDivElement = document.querySelector(".side-panel");
		const _hamburgerIcon: HTMLDivElement = document.querySelector(".hamburger");
		if (props.nav_ham === "nav_opened") {
			_container?.classList?.add("nav_opened");
			_sidePanel.classList.add("nav_opened");
			_hamburgerIcon.classList.add("nav_opened");
		} else {
			_container?.classList?.remove("nav_opened");
			_sidePanel.classList.remove("nav_opened");
			_hamburgerIcon.classList.remove("nav_opened");
		}
	}, [props.nav_ham]);


	const renderMemo = useMemo(() => {
		
		return <div className="side-panel">
			<figure>
				<Link to="/home"> 
					<img src={props.imageMe} alt="It's me" />
				</Link>
			</figure>
			<nav>
				<ul className="site-navigation">
					{props.pages.map((page: PageItem, index: number) => {
						return(
							<li key={page.link}>
								<NavLink 
									className={ ({ isActive }) => {
										return isActive ? "selected" : "";
									}}
									onClick={props.setStore.setNavClose}
									to={page.link}>
									{page.text}
								</NavLink>
							</li>
						);
					})}
				</ul>
			</nav>
			<div className="hamburger" onClick={changeNav}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>;
	}, [props.pages]);
	
	return renderMemo;
};



const mapStateToProps = (state)  => {
	return {
		nav_ham: state.nav_ham,
		imageMe: state.imagesMe.side,
		pages: state.pages,
	};
};


const mapDispatchToProps: IMapdispatchToProps = (dispatch) => ({
	setStore: bindActionCreators(actions, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(SidePanel);