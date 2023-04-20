import * as actions from "../assets/redux/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

/*
type AdminAction = "CREATE" | "ACTIVATE" | "NEW";

const test = (action: AdminAction) => {
	switch (action) {
	case "CREATE":
		return "CREATED";
	case "ACTIVATE":
		return "ACTIVATED";
	default:{
		const unknownAction: never = action; // Type '"BLOCK"' is not assignable to type 'never'.ts(2322)
		throw new Error(`${unknownAction}`);
	}
	}

};
*/
/*
const myActions = {
	SET_THEME: "SET_THEME",
	SET_NAV_OPEN: "SET_NAV_OPEN",
};


type TActionsKeys = keyof typeof myActions;
//type TActionsVals = typeof myActions[keyof typeof myActions];

const rerere = (action: TActionsKeys) => {
	switch (action) {
	case myActions.SET_THEME as "SET_THEME":
		return "CREATED";
	case myActions.SET_NAV_OPEN as "SET_NAV_OPEN":
		return "ACTIVATED";
	default:{
		const unknownAction: never = action; // Type '"BLOCK"' is not assignable to type 'never'.ts(2322)
		throw new Error(`${unknownAction}`);
	}
	}
};

type t = {
	type: TActionsKeys,
	payload: any
}

const rerere2 = (action: t) => {
	switch (action.type) {
	case myActions.SET_THEME as "SET_THEME":
		return "CREATED";
	case myActions.SET_NAV_OPEN as "SET_NAV_OPEN":
		return "ACTIVATED";
	default: {
		const unknownAction: never = action.type; 
		throw new Error(`${unknownAction}`);
	}
	}
};


*/





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