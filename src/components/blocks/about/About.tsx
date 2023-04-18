import { MutableRefObject, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import * as actions from "../../../assets/redux/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./about.scss";
import { ImageMe, IMapdispatchToProps, ISetStore, IState, MeInfo } from "src/models";
import ImgWithPreloader from "src/assets/js/ImgWithPreloader";
import { findBestSuitedImg } from "src/assets/js/findBestSuitedImg";
import ModalImage from "src/components/modals/ModalImage";
import { TTheme } from "src/components/theme_switcher/theme-switcher";

const ModalImagePort = (p) => createPortal(<ModalImage imageProps={p}/>, document.querySelector("#portal"));

interface IAbout {
	theme: TTheme
	me: Array<MeInfo>
	imagesMe: {
		side: string
        day: {
            descr: string
            images: Array<ImageMe>
        }
        night: {
            descr: string
            images: Array<ImageMe>
        }
	}
	resumeDoc: string
	setStore: ISetStore
}

const About:React.FC<IAbout> = (props): JSX.Element => {

	const _imgContRef: MutableRefObject<HTMLDivElement> = useRef(null);
	const [firstRender, setFirstRender]= useState<boolean>(true);

	const openGallery = () => {
		props.setStore.setModalImage(true);
	};
	

	
	useEffect(() => {
		setFirstRender(false);
		_imgContRef.current.addEventListener("click", openGallery);
	}, []);

	
	const renderDescrMemo = useMemo(() => {
		return <div className="descr">
			<h3>I am <em>Postnikov Max</em></h3>
			<p>Frontend Developer with over 4 year of experience in successfully creating and maintaining web sites and components supported by more than 10 years IT background.</p>
			<p>I am experience working with clients ranging from homepage owners to well-organized business with up to 10.000 visitors per day.</p>
			<ul>
				{props.me.map((item: MeInfo, index: number) => {
					return (
						<li key={index}><b>{item.descr}</b>{item.value}</li>
					);
				})}
			</ul>
			<a className="link_button" href={props.resumeDoc} target="_blank" rel="noreferrer">Download cv</a>
		</div>;
	},[props.me]);

	return(
		<div className="about__container">
			<ModalImagePort images={props.theme === "light" ? props.imagesMe.day.images : props.imagesMe.night.images}/>
			<div className="img-container" ref={_imgContRef}>
				{_imgContRef.current && <ImgWithPreloader 
					link={findBestSuitedImg({
						images: props.theme === "light" ? props.imagesMe.day.images : props.imagesMe.night.images, 
						width: _imgContRef.current.offsetWidth, 
						height: _imgContRef.current.offsetHeight}
					).image} 
					alt={props.theme === "light" ? props.imagesMe.day.descr : props.imagesMe.night.descr} 
				/>} 
			</div>
			{renderDescrMemo}
		</div>
	);
};


const mapStateToProps = (state: IState)  => {
	return {
		theme: state.theme,
		me: state.me,
		imagesMe: state.imagesMe,
		resumeDoc: state.resumeDoc
	};
};


const mapDispatchToProps: IMapdispatchToProps = (dispatch) => ({
	setStore: bindActionCreators(actions, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(About);