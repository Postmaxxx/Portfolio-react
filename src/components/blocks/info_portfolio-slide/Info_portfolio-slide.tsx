import * as actions from "../../../assets/redux/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./info_portfolio-slide.scss";
import { IMapdispatchToProps, IMapStateToProps, IPropsJSX } from "src/models";
import { useMemo } from "react";

const InfoPortfolioSlide = (props) => {

	const linkToPage = <a target='_blank' href={props.link} rel="noreferrer">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
			<polyline points="15 3 21 3 21 9"></polyline>
			<line x1="10" y1="14" x2="21" y2="3"></line>
		</svg>
	</a>;

		
	return(
		<div className="info_portfolio-slide__container">
			<p>{props.descr} </p> 
			{props.link && linkToPage}
		</div>
	);
};


const mapStateToProps = (state)  => {
	return {
		link: state.portfolios.list[state.portfolios.selected].images[state.portfolios.selectedImage].link,
		descr: state.portfolios.list[state.portfolios.selected].images[state.portfolios.selectedImage].descr,
	};
};

const mapDispatchToProps: IMapdispatchToProps = (dispatch) => ({
	setStore: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoPortfolioSlide);