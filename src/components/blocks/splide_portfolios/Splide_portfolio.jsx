import React from "react";
import './splide_portfolio.scss'
import * as actions from '../../../assets/redux/actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useRef } from "react";
import { useEffect } from "react";
import { setImagePortfolio } from '../../../assets/js/setImagePortfolio'
/*
images: big 1075*440
        small 550*400
*/

let selected = 0;

const SplidePortfolio = (props) => {

    const splidePortfolio = useRef()

    selected = props.store.portfolios.selected;

    const ShowModal = () => {
        props.setStore.setModal(true);
    }


    const newModalImg = () => {
        let slideIndex = splidePortfolio.current.splide.index > props.store.portfolios.list[selected].images.length ? props.store.portfolios.list[selected].images.length - 1 : splidePortfolio.current.splide.index;
        props.setStore.setModalImage(props.store.portfolios.list[selected].images[slideIndex]?.images.slice(-1)[0].image)
        props.setStore.setModalDescr(props.store.portfolios.list[selected].images[slideIndex]?.images.slice(-1)[0].descr)
        props.setStore.setModalLink(props.store.portfolios.list[selected].images[slideIndex]?.images.slice(-1)[0].link)
    }







    useEffect(() => {
        newModalImg()
    },[])


    useEffect(() => {
        [...document.querySelectorAll(`[data-slidecontainer]`)].map((slide, index) => {
            let images = props.store.portfolios.list[props.store.portfolios.selected].images[index].images;
            console.log('', props.store.portfolios.selected);
            setImagePortfolio(slide, slide.parentNode, images, (obj => obj.addEventListener('click',ShowModal) ))
        })
        newModalImg()
    },[props.store.portfolios.selected])
    

    return (
        <div className="splide_portfolio__container">
            <Splide 
                ref={ splidePortfolio }
                onMove={ () => newModalImg() }
                onRefresh={ () => newModalImg() }
                options={ {
                    lazyLoad: false,
                    updateOnMove: true,
                    perPage: 1,
                    fixedWidth: '100%',
                    perMove: 1,
                    pagination: true,
                    arrows: true,
                    drag: true,
                    speed: 500,
                    //snap: false,
                    wheel: true,
                    wheelSleep: 300,
                    //wheelMinThreshold: 50,
                    autoplay: false,
                    interval: 5000,
                    pauseOnHover: true,
                    //rewind: false,
                    breakpoints: {
                        768: {
                            wheel: false,
                        }, 
                    },
                } }>
                    {props.store.portfolios.list[props.store.portfolios.selected].images.map((slide, index) => {
                        return (
                            <SplideSlide key={index}>
                                <div className="splide__slide-container" data-slidecontainer={index}>
                                    <img 
                                        //src={image.image} 
                                        //alt={image.descr} 
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