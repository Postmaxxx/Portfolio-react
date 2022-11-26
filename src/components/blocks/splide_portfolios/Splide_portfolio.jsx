import React from "react";
import './splide_portfolio.scss'
import * as actions from '../../../assets/redux/actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useRef } from "react";



const SplidePortfolio = (props) => {

    let splidePortfolio = useRef()
    
    const ShowModal = () => {
        props.setStore.setModalImage(props.store.portfolios.list[props.store.portfolios.selected].images[splidePortfolio.current?.splide?.index].link)
        props.setStore.setModalDescr(props.store.portfolios.list[props.store.portfolios.selected].images[splidePortfolio.current?.splide?.index].descr)
        props.setStore.setModal(true);
    }


    return (
        <div className="splide_portfolio__container">
            <Splide ref={ splidePortfolio }
                
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
                        //console.log('img', );
                        return (
                            <SplideSlide key={index}>
                                <div className="splide__slide-container">
                                    <img 
                                        src={image.link} 
                                        alt={image.name} 
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