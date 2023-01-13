import * as actions from '../../assets/redux/actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { useEffect } from "react";
import preloader from '../preloader/preloader.js'
import store from '../../assets/redux/store'
import '@splidejs/react-splide/css';
import './modalImage.scss'


let escListener = undefined;

const ModalImage = (props) => {

    const closeModal = () => {
        props.setStore.setModal(false);
    }

    const checkClose = (e) => {
        if (e.target.tagName !== 'IMG') {
            closeModal()
        }
    }
    
    const _modal =  document.querySelector(".modal__background");
    if (_modal) {
        store.getState().modal ? _modal.classList.add('show') : _modal.classList.remove('show')
    }
     

    useEffect(() => {
        document.querySelector(".modal__background").addEventListener('click', (e) => e.target === e.currentTarget && closeModal(e));
        escListener = document.addEventListener('keydown', (e) => e.key === 'Escape' && closeModal(e));
        
        let _target = document.querySelector('.modal').childNodes[0].childNodes[0];
        let _image = document.createElement("img");
        _target.innerHTML = preloader();
        _image.onload = () => { 
            _target?.replaceChildren(_image);
        }
        _image.src = store.getState().modalImage;
        _image.alt = store.getState().modalDescr;
    },[store.getState().modalImage])
    
    return (
        <div className="modal__background"  onClick={(e) => checkClose(e)}>
            <div className="modal">
                <div onClick={(e) => checkClose(e)}>
                    <div onClick={(e) => checkClose(e)}>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
            <div className="modal__close">
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" onClick={closeModal}>
                    <path onClick={closeModal} d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"/>
                </svg>
            </div>
        </div>
    ) 
}

const mapStateToProps = (store) => ({store: store})

const mapDispatchToProps = (dispatch) => ({
    setStore: bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalImage);