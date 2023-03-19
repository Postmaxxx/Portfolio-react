import * as actions from "../../../assets/redux/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./info_portfolio.scss";
import { IMapdispatchToProps, IMapStateToProps, IPropsJSX } from "src/models"; 



const InfoPortfolio = (props) => {
	return(
		<div className="info_portfolio__container">
			<p>{props.list[props.selected].descr}</p>
		</div>
	);
};

const mapStateToProps = (state)  => {
	return {
		list: state.portfolios.list,
		selected: state.portfolios.selected
	};
};


const mapDispatchToProps: IMapdispatchToProps = (dispatch) => ({
	setStore: bindActionCreators(actions, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(InfoPortfolio);