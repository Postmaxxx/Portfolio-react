import React from "react";
import './about.scss';
import resumeDoc from '../../../assets/docs/resume.pdf';
import * as actions from '../../../assets/redux/actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import siteData from '../../../assets/js/site_data';
import { useEffect } from "react";
import { setImage } from '../../../assets/js/setImage'
import Preloader from "../../preloader/Preloader.jsx";
import '../../preloader/preloader.scss'
import store from '../../../assets/redux/store'

const About = (props) => {

    const showModal = (image, descr) => {
        props.setStore.setModalImage(image);
        props.setStore.setModalDescr(descr)
        props.setStore.setModal(true);
    }

    
    useEffect(() => {
        let time = store.getState().theme === 'dark' ? 'night' : 'day';
        let addListener = (obj) => obj.addEventListener('click', () => showModal(store.getState().imagesMe[time].images.slice(-1)[0].image, store.getState().imagesMe[time].descr))
            setImage('#imageMe', store.getState().imagesMe[time].images, (obj) => addListener(obj))
    }, [store.getState().theme])

    
    return(
        <div className="about__container">
            <div className="img-container" id="imageMe">
            </div>
            <div className="descr">
                <h3>I am <em>Postnikov Max</em></h3>
                <p>Frontend Developer with over 4 year of experience in successfully creating and maintaining web sites and components supported by more than 10 years IT background.</p>
                <p>I am experience working with clients ranging from homepage owners to well-organized business with up to 10.000 visitors per day.</p>
                <ul>
                    {siteData.me.map((item, index) => {
                        return (
                            <li key={index}><b>{item.descr}</b>{item.value}</li>
                        )
                    })}
                </ul>
                <a className="link_button" href={resumeDoc} target="_blank">Download cv</a>
            </div>
        </div>
    )
}



const mapStateToProps = (store) => ({store: store})


const mapDispatchToProps = (dispatch) => ({
    setStore: bindActionCreators(actions, dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(About);

/*

                <picture>
                    <source media="(min-width:1400px)" srcSet={props.store.imagesMe[props.store.theme =='dark' ? 'night' : 'day'].big} />
                    <source media="(min-width:993px)" srcSet={props.store.imagesMe[props.store.theme =='dark' ? 'night' : 'day'].medium} />
                    <source media="(min-width:769px)" srcSet={props.store.imagesMe[props.store.theme =='dark' ? 'night' : 'day'].big} />
                    <source media="(min-width:392px)" srcSet={props.store.imagesMe[props.store.theme =='dark' ? 'night' : 'day'].medium} />
                    <img src={props.store.imagesMe[props.store.theme === 'dark' ? 'night' : 'day'].small} alt="Flowers" />
                </picture>

*/

/*
                    {props.store.theme =='dark' ? 
                        (props.store.imagesMe.night.sources.map((source) => {
                            return (
                                <source media={"(max-width:" + source.width + "px)"} srcSet={source.image} />
                            )
                        })) 
                        : 
                        photoDay
                    }


                    */