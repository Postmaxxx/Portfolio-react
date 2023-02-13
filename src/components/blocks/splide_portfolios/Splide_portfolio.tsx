import { useRef, useEffect, Ref} from "react";
import * as actions from '../../../assets/redux/actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { setImagePortfolio } from '../../../assets/js/setImagePortfolio'
import './splide_portfolio.scss'
import store from '../../../assets/redux/store'
import { EmptyVoid, IMapdispatchToProps, IMapStateToProps, IPropsJSX, ISliderOptions, ProjectItemImageItem } from "src/models";

const SplidePortfolio:IPropsJSX = (props) => {
    const splidePortfolio = useRef(null);

    const options: ISliderOptions = {
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
    }
    
    const ShowModal: EmptyVoid = () => {
        props.setStore.setModal(true);
    }

    const newModalImg: EmptyVoid = () => {
        let selected: number = store.getState().portfolios.selected
        let slideIndex: number = splidePortfolio.current.splide.index > store.getState().portfolios.list[selected].images.length ? store.getState().portfolios.list[selected].images.length - 1 : splidePortfolio.current.splide.index;
        props.setStore.setModalImage(store.getState().portfolios.list[selected].images[slideIndex]?.images.slice(-1)[0].image)
        props.setStore.setModalLink(store.getState().portfolios.list[selected].images[slideIndex]?.link)
        props.setStore.setModalDescr(store.getState().portfolios.list[selected].images[slideIndex]?.descr)
    }   
    

    useEffect((): void => {
        Array.from(document.querySelectorAll(`[data-slidecontainer]`)).map((slide: HTMLDivElement, slideNumber: number) => {
            let images: [ProjectItemImageItem] = store.getState().portfolios.list[store.getState().portfolios.selected].images[slideNumber].images;
            setImagePortfolio(slide, slide.parentNode as HTMLElement, images, obj => obj.addEventListener('click', ShowModal))
        })
        newModalImg()
    },[store.getState().portfolios.selected])
    

    return (
        <div className="splide_portfolio__container">
            <Splide 
                ref={ splidePortfolio }
                onMove={newModalImg}
                onRefresh={newModalImg }
                options={ options }>
                    {props.store.portfolios.list[props.store.portfolios.selected].images.map((slide, index: number) => {
                        return (
                            <SplideSlide key={index}>
                                <div className="splide__slide-container" data-slidecontainer={index}>
                                    <img />
                                </div>
                            </SplideSlide>
                        )
                    })}
            </Splide>
        </div>
    )
}








const mapStateToProps: IMapStateToProps = (store)  => ({store: store})

const mapDispatchToProps: IMapdispatchToProps = (dispatch) => ({
    setStore: bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(SplidePortfolio);