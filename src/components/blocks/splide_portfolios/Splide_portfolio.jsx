import React from "react";
import './splide_portfolio.scss'
import * as actions from '../../../assets/redux/actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useRef } from "react";
import { useEffect } from "react";


let selected = 0;

const SplidePortfolio = (props) => {

    const splidePortfolio = useRef()

    selected = props.store.portfolios.selected;

    const ShowModal = () => {
        props.setStore.setModal(true);
    }


    const slideRefresh = () => {
        //console.log('next', next , prev);
        let slideIndex = splidePortfolio.current.splide.index > props.store.portfolios.list[selected].images.length ? props.store.portfolios.list[selected].images.length - 1 : splidePortfolio.current.splide.index;
        props.setStore.setModalImage(props.store.portfolios.list[selected].images[slideIndex]?.link)
        props.setStore.setModalDescr(props.store.portfolios.list[selected].images[slideIndex]?.descr)
    }


    useEffect(() => {
        slideRefresh()
    },[])
    

    return (
        <div className="splide_portfolio__container">
            <Splide 
                ref={ splidePortfolio }
                onMove={ () => slideRefresh() }
                onRefresh={ () => slideRefresh() }
                options={ {
                    lazyLoad: false,
                    updateOnMove: true,
                    perPage: 1,
                    //gap   : '1rem',
                    breakpoints: {
                        768: {
                            gap   : '2rem',
                        }, 
                    },
                    fixedWidth: '100%',
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
                    {props.store.portfolios.list[props.store.portfolios.selected].images.map((image, index) => {
                        return (
                            <SplideSlide key={index}>
                                <div className="splide__slide-container">
                                    <img 
                                        src={image.link} 
                                        alt={image.descr} 
                                        onClick={() => ShowModal()}
                                        />
                                </div>
                            </SplideSlide>
                        )
                    })}
            </Splide>
        </div>
    )
}







const mapStateToProps = (store) => ({store: store})


const mapDispatchToProps = (dispatch) => ({
    setStore: bindActionCreators(actions, dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(SplidePortfolio);