import React from "react";
import './modalSplide.scss'
import * as actions from '../../assets/redux/actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { useEffect } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

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
        
        setTimeout(() => {
            props.setStore.setModal(true);
        }, 500);
    },[])
    
    return (
        <div className="modal__background">
            <div className="modal">
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
            </div>
        </div>


 
        ) 

}

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