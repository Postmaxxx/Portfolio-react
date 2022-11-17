import React from "react";
import './modal.scss'
import * as actions from '../../assets/redux/actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { useEffect } from "react";

const ModalWindow = (props) => {

    const closeModal = () => {
        props.setStore.setModalImageStatus(false);
        console.log('close?', );
    }

    useEffect(() => {
        console.log('111', );
        //console.log('document.querySelector(".modal__background")', document.querySelector(".modal"));
        if (props.store.modalImage.status) {
            const modalListener = document.querySelector(".modal__background").addEventListener('click', () => closeModal())
        }
    },[props.store.modalImage.status])
    
    return props.store.modalImage.status ? 
        (
            <div className="modal__background">
                <div className="modal">
                    <img src={props.img} alt={props.alt} />
                </div>
            </div>
        ) 
    : 
        null
}




const mapStateToProps = (store) => ({store: store})


const mapDispatchToProps = (dispatch) => ({
    setStore: bindActionCreators(actions, dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);