import * as actions from "../../assets/redux/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./modal.scss";
import { Action, IMapdispatchToProps, IMapStateToProps, IPropsJSX } from "src/models";



const Modal:IPropsJSX = (props) => {
	return (
		<>
			<div 
				className={`modal_common ${props.store.modalMsg.active ? "active" : ""}`}
				onClick={(): Action<boolean> => props.setStore.setModalMsgVisible(false)}
			>
				{props.children}
			</div>
		</>
	);
};




const mapStateToProps: IMapStateToProps = (store)  => ({store: store});

const mapDispatchToProps: IMapdispatchToProps = (dispatch) => ({
	setStore: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);



