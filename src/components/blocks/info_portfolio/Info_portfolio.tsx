import * as actions from "../../../assets/redux/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./info_portfolio.scss";
import { IMapdispatchToProps, IMapStateToProps, IPropsJSX } from "src/models"; 



const InfoPortfolio:IPropsJSX = (props) => {
	return(
		<div className="info_portfolio__container">
			<p>{props.store.portfolios.list[props.store.portfolios.selected].descr}</p>
		</div>
	);
};

const mapStateToProps: IMapStateToProps = (store)  => ({store: store});

const mapDispatchToProps: IMapdispatchToProps = (dispatch) => ({
	setStore: bindActionCreators(actions, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(InfoPortfolio);