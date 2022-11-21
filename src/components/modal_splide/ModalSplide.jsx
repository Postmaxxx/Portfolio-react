import React from "react";
import './modalSplide.scss'
import * as actions from '../../assets/redux/actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { useEffect } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import imgMe from '../../assets/img/photo-me.jpg'


const ModalSplide = (props) => {

    console.log('props modal', props );

    const closeModal = (e) => {
        if (e.target === e.currentTarget) {
            props.setStore.setModal(false);
        }
    }
    
    const _modal =  document.querySelector(".modal__background");
    if (_modal) {
        props.store.modal ? _modal.classList.add('show') : _modal.classList.remove('show')
    }
     

    useEffect(() => {
        console.log('here', );
        document.querySelector(".modal__background").addEventListener('click', (e) => closeModal(e))
    },[])
    
    return (
        <div className="modal__background">
            <div className="modal">
                <img src={imgMe} alt="Me" />
                <div className="modal__close">
                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" onClick={closeModal}>
                        <path  onClick={closeModal} d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"/>
                    </svg>
                </div>
            </div>
        </div>


 
        ) 

}
/*
                <Splide options={ {
                    lazyLoad: true,
                    updateOnMove: true,
                    type : 'loop',
                    perPage: 1,
                    //gap   : '2rem',
                    breakpoints: {
                        768: {
                            gap   : '2rem',
                        }, 
                    },
                    perMove: 1,
                    pagination: true,
                    arrows: true,
                    drag: true,
                    speed: 500,
                    //snap: false,
                    wheel: true,
                    wheelSleep: 500,
                    //wheelMinThreshold: 50,
                    autoplay: false,
                    //interval: 5000,
                    //pauseOnHover: true,
                    //rewind: false,
                    } }>
                        {props.store.currentGallery.images.map((image, index) => {
                            console.log('img', );
                            return (
                                <SplideSlide key={index}>
                                    <div className="splide__slide-container">
                                        <img src={image.url} alt={image.name} />
                                    </div>
                                </SplideSlide>
                            )
                        })}
                </Splide>

*/                
/*

{props.store.currentGallery.images.map((image, index) => {
                            return (
                                <SplideSlide key={index}>
                                    <div className="splide__slide-container">
                                        <img src="" alt={image.name} />
                                    </div>
                            </SplideSlide>
                            )
                        })}

*/
const mapStateToProps = (store) => ({store: store})


const mapDispatchToProps = (dispatch) => ({
    setStore: bindActionCreators(actions, dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(ModalSplide);