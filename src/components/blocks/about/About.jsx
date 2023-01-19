import { useEffect } from "react";
import * as actions from '../../../assets/redux/actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { setImage } from '../../../assets/js/setImage'
import store from '../../../assets/redux/store.ts'
import './about.scss';
import '../../preloader/preloader.scss'

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
            <div className="img-container" id="imageMe"></div>
            <div className="descr">
                <h3>I am <em>Postnikov Max</em></h3>
                <p>Frontend Developer with over 4 year of experience in successfully creating and maintaining web sites and components supported by more than 10 years IT background.</p>
                <p>I am experience working with clients ranging from homepage owners to well-organized business with up to 10.000 visitors per day.</p>
                <ul>
                    {props.store.me.map((item, index) => {
                        return (
                            <li key={index}><b>{item.descr}</b>{item.value}</li>
                        )
                    })}
                </ul>
                <a className="link_button" href={props.store.resumeDoc} target="_blank">Download cv</a>
            </div>
        </div>
    )
}


const mapStateToProps = (store) => ({store: store})

const mapDispatchToProps = (dispatch) => ({
    setStore: bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(About);