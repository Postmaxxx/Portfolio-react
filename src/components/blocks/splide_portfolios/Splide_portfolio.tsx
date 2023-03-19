import { useRef, useEffect, useState, useMemo } from "react";
import * as actions from "../../../assets/redux/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Splide from "@splidejs/splide";
import "./splide_portfolio.scss";
import { IMapdispatchToProps, IMapStateToProps, IPropsJSX, ISliderOptions } from "src/models";
import ImgWithPreloader from "src/assets/js/ImgWithPreloader";
import { findBestSuitedImg } from "src/assets/js/findBestSuitedImg";

interface IContainerSize {
	width: number
	height: number
}

const SplidePortfolio = (props) => {
	const portfolioSplide = useRef<Splide>(null);
	const containerSize = useRef<IContainerSize>(null);
	const _splideMain = useRef<HTMLDivElement>(null);
	const [firstRender, setFirstRender] = useState(true);

	const optionsMain: ISliderOptions = {
		lazyLoad: false,
		updateOnMove: true,
		perPage: 1,
		fixedWidth: "100%",
		perMove: 1,
		pagination: true,
		arrows: true,
		drag: true,
		speed: 500,
		//snap: false,
		wheel: true,
		wheelSleep: 300,
		//wheelMinThreshold: 50,
		//autoplay: true,
		interval: 15000,
		pauseOnHover: true,
		//rewind: true,
		breakpoints: {
			768: {
				wheel: false,
			}, 
		},
	};

    
	const changeDescription = (selectedImage) => {
		const portfolioNumber = props.selected;
		props.setStore.setSelectedPortfolioImage(selectedImage);
		/*props.setStore.setModalImage(props.list[portfolioNumber].images[selectedImage]?.images.slice(-1)[0].image);
		props.setStore.setModalLink(props.list[portfolioNumber].images[selectedImage]?.link);
		props.setStore.setModalDescr(props.list[portfolioNumber].images[selectedImage]?.descr);*/
	};
	
	const showSplideModal = () => {
		props.setStore.setModalSplide(true);
	};


	const goToImage = (imageOrder) => {
		portfolioSplide.current.go(imageOrder);
	};

	const additionalRender = () => {
		setFirstRender(false);
	};

	useEffect(() => {
		containerSize.current = {
			width:  _splideMain.current.offsetWidth,
			height:  _splideMain.current.offsetHeight,
		};
		portfolioSplide.current = new Splide(_splideMain.current, optionsMain);
		portfolioSplide.current.mount();		
		portfolioSplide.current.on("active", () => {changeDescription(portfolioSplide.current.index);});
			
		const _slides = _splideMain.current.querySelectorAll(".splide__slide-container");
		_slides.forEach(cont => cont.addEventListener("click", showSplideModal));
		changeDescription(portfolioSplide.current.index);
		return () => {
			
			_slides.forEach(cont => cont.removeEventListener("click", showSplideModal));
			portfolioSplide.current.destroy();
		};
	}, [props.selected]);


	useEffect(() => {
		goToImage(props.selectedImage);
	}, [props.selectedImage]);
	

	useEffect(() => {
		additionalRender();
	},[]);
	

	const renderMemo = useMemo(() => {
		return <div className="splide_portfolio__container">
			<div id="portfolioMainSplide" className="splide" ref={_splideMain} aria-label="The carousel with thumbnails. Click the image to expand.">
				<div className="splide__track">
					<ul className="splide__list">
						{props.list[props.selected].images.map((slide, index: number) => {
							return (
								<li className="splide__slide" key={props.selected * 1000 + index}>
									<div className="splide__slide-container">
										{portfolioSplide.current && <ImgWithPreloader link={findBestSuitedImg({images: slide.images, width: containerSize.current.width, height: containerSize.current.height}).image} alt={slide.descr}/>}
									</div>
								</li>
							);
						})
						}
					</ul>
				</div>
			</div>
		</div>;
	},[firstRender, props.selected]);

	return renderMemo;
};


const mapStateToProps = (state)  => {
	return {
		list: state.portfolios.list,
		selected: state.portfolios.selected,
		selectedImage: state.portfolios.selectedImage,
	};
};




const mapDispatchToProps: IMapdispatchToProps = (dispatch) => ({
	setStore: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SplidePortfolio);
