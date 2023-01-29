import { useEffect } from "react";
import * as actions from '../../../assets/redux/actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { setImage } from '../../../assets/js/setImage'
import store from '../../../assets/redux/store'
import './about.scss';
import '../../preloader/preloader.scss'
import { IDispatch, IProps, ISetStore, IState, MeInfo } from 'src/models';

const About: React.FC = (props: IProps): JSX.Element => {

    const showModal = (image: string, descr: string): void => {
        props.setStore.setModalImage(image);
        props.setStore.setModalDescr(descr)
        props.setStore.setModal(true);
    }
    
    useEffect((): void => {
        let time: string = store.getState().theme === 'dark' ? 'night' : 'day';
        let addListener = (obj: HTMLElement): void => obj.addEventListener('click', (): void => showModal(store.getState().imagesMe[time].images.slice(-1)[0].image, store.getState().imagesMe[time].descr))
        setImage('#imageMe', store.getState().imagesMe[time].images, (obj: HTMLElement) => addListener(obj))
    }, [store.getState().theme])

    return(
        <div className="about__container">
            <div className="img-container" id="imageMe"></div>
            <div className="descr">
                <h3>I am <em>Postnikov Max</em></h3>
                <p>Frontend Developer with over 4 year of experience in successfully creating and maintaining web sites and components supported by more than 10 years IT background.</p>
                <p>I am experience working with clients ranging from homepage owners to well-organized business with up to 10.000 visitors per day.</p>
                <ul>
                    {props.store.me.map((item: MeInfo, index: number) => {
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


const mapStateToProps = (store: IState): {store: IState}  => ({store: store})


const mapDispatchToProps = (dispatch: IDispatch): {setStore: ISetStore} => ({
    setStore: bindActionCreators(actions, dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(About);