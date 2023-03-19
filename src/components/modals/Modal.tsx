import * as actions from "../../assets/redux/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./modal.scss";
import { Action, IMapdispatchToProps, IMapStateToProps, IPropsJSX } from "src/models";



const Modal = (props) => {
	return (
		<>
			<div 
				className={`modal_common ${props.active ? "active" : ""}`}
				onClick={(): Action<boolean> => props.setStore.setModalMsgVisible(false)}
			>
				{props.children}
			</div>
		</>
	);
};


const mapStateToProps = (state)  => {
	return {
		active: state.modalMsg.active
	};
};




const mapDispatchToProps: IMapdispatchToProps = (dispatch) => ({
	setStore: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);



