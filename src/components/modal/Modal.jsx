import React from "react";
import './modal.scss'
import * as actions from '../../assets/redux/actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { useEffect } from "react";

const ModalWindow = (props) => {

    //let modalListener;

    const closeModal = (e) => {
        console.log('1', );
        if (e.target === e.currentTarget) {
            props.setStore.setModal(false);
            //modalListener && modalListener.removeEventListener();
        }
    }
    
    const _modal =  document.querySelector(".modal__background");
    if (_modal) {
        props.store.modal ? _modal.classList.add('show') : _modal.classList.remove('show')
    }
    
    useEffect(() => {
        /*modalListener = */document.querySelector(".modal__background").addEventListener('click', (e) => closeModal(e))
    },[])
    

    return (
            <div className="modal__background">
                <div className="modal">
                    <img src={props.img} alt={props.alt} />
                </div>
            </div>
        ) 

}




const mapStateToProps = (store) => ({store: store})


const mapDispatchToProps = (dispatch) => ({
    setStore: bindActionCreators(actions, dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);