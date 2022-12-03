import React from "react";
import './about.scss';
import resumeDoc from '../../../assets/docs/resume.pdf';
import * as actions from '../../../assets/redux/actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import siteData from '../../../assets/js/site_data';
import photoNight from '../../../assets/img/me_day.jpg';
import photoDay from '../../../assets/img/me_night.jpg';




const About = (props) => {

    const ShowModal = () => {
        props.setStore.setModalImage(props.store.theme =='dark' ? photoNight : photoDay);
        props.setStore.setModalDescr('Just me :)')

        //props.setStore.setCurrentGallery(siteData.galleryMe);   
        props.setStore.setModal(true);
    }


    return(
        <div className="about__container">
            <div className="img-container">

                <img src={props.store.theme =='dark' ? photoNight : photoDay} alt="My photo" onClick={() => ShowModal()}/>
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