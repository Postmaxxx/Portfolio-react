import React from "react";
import photo2 from '../../../assets/img/photo-2.jpg';
import './about.scss';
import resumeDoc from '../../../assets/docs/resume.pdf';
import modalWindow from '../../modal/Modal';
import * as actions from '../../../assets/redux/actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'


const About = (props) => {

    const openModal = () => {
        //console.log('p', props.setStore );
        props.setStore.setModalImageStatus(true);
        console.log('props', props);
    }

    return(
        <div className="about__container">
            <div className="img-container">
                <img src={photo2} alt="My photo" onClick={() => openModal()}/>
            </div>
            <div className="descr">
                <h3>I am <em>Postnikov Max</em></h3>
                <p>I am a frontend web developer. I can provide clean code and pixel 
                    perfect design. I also make website more & more interactive with 
                    web animations.</p>
                <ul>
                    <li><b>Full Name</b>Max Postnikov</li>
                    <li><b>Age</b>39</li>
                    <li><b>Nationality</b>Russian</li>
                    <li><b>Languages</b>Russian, English</li>
                    <li><b>Adress</b>Alanya, Turkey</li>
                    <li><b>Freelance</b>Available</li>
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