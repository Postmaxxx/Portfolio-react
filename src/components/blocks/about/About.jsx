import React, {useEffect, useLayoutEffect} from "react";
import photo2 from '../../../assets/img/photo-2.jpg';
import './about.scss';
import resumeDoc from '../../../assets/docs/resume.pdf';
import modalWindow from '../../modal_splide/ModalSplide';
import * as actions from '../../../assets/redux/actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import siteData from '../../../assets/js/site_data';

import Mock1 from '../../../assets/img/1.jpg'
import Mock2 from '../../../assets/img/2.jpg'
import Mock3 from '../../../assets/img/3.jpg'
import Mock4 from '../../../assets/img/4.jpg'
import Mock5 from '../../../assets/img/5.jpg'
import Mock6 from '../../../assets/img/6.jpg'
import expandIcon from '../../../assets/img/svg/icon-close.svg'
import closeIcon from '../../../assets/img/svg/icon-close.svg'


import { makeCarousel } from '../../../components/max_splide/Max_splide'

let splideMe = {
    destinationData : 'carousel_me',
    //destinationClass : 'carousel_max',
    imgWidth : 400,
    imgGap : 30,
    bgMoveSpeed : 15, //moving without dragging, defaultSpeed, px/tick
    timeToBgMove : 1, //time to start background movement after stop in s
    inertiaSensivity : 50, //inetria turns on when moving speed is higher
    inertiaStep : 0.99, //currentInertiaSpeed = inertiaStep * currentInertiaSpeed every tick
    imagesPaths : [[Mock1, 'First project of our organisation', 'http://twitter.com'],
                    [Mock2, 'Second project', 'http://yahoo.com'],
                    [Mock3, 'Project 3', 'http://mail.com'],
                    [Mock4, 'Project 4', 'http://hotmail.com'],
                    [Mock5, 'Project 4', 'http://hotmail.com'],
                    [Mock6, 'Project 5', 'http://p2sinc.com'],
                    [Mock1, 'Project 5', 'http://p2sinc.com'],
                    [Mock2, 'Project 5', 'http://p2sinc.com'],
                ],
    imgWrapperWidth: '80%',
    imgWrapperHeight: '80%',
    expandPath : expandIcon,
    closePath : closeIcon,
    nodeForFullsize : 'about__container',
    expandIconWidth: 30,
    expandIconHeignt: 30,
    transitionTime: 1,
}

const About = (props) => {

    const ShowGallery = () => {
        props.setStore.setCurrentGallery(siteData.galleryMe);      
        props.setStore.setModal(true);
    }
    
    useEffect(() => {
        //console.log(document.querySelector('.carousel_max') );
        makeCarousel(splideMe)
    },[])

    console.log('rerendered', );


    return(
        <div className="about__container">
            <div className="splide-container">

                <div className="carousel_max" data-carousel='carousel_me'>
                    <div className="fade-block"></div>
                </div>
            </div>

            <div className="descr">
                <h3>I am <em>Postnikov Max</em></h3>
                <p>I am a frontend web developer. I can provide clean code and pixel 
                    perfect design. I also make website more & more interactive with 
                    web animations.</p>
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