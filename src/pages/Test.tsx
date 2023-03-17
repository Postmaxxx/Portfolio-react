import * as actions from "../assets/redux/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useCallback, useMemo } from "react";

const Test = (props) => {
	//console.log("test", props);
	

	return (
		<>
		</>

	);
};

const p = {a: "", b: ""};

const mapStateToProps = (state)  => {
	p.a = state.portfolios.selected;
	p.b = state.portfolios.selectedImage;

	return {
		store: state.portfolios,
		store2: state.me
	};
};

const mapDispatchToProps = (dispatch) => ({
	setStore: bindActionCreators(actions, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(Test);