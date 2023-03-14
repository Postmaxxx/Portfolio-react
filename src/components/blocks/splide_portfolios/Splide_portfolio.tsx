import { useRef, useEffect, useState } from "react";
import * as actions from "../../../assets/redux/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
//import { Splide, SplideSlide } from "@splidejs/react-splide";
import Splide from "@splidejs/splide";
//import { setImagePortfolio } from "../../../assets/js/setImagePortfolio";
import "./splide_portfolio.scss";
import store from "../../../assets/redux/store";
import { IMapdispatchToProps, IMapStateToProps, IPropsJSX, ISliderOptions } from "src/models";
import ImgWithPreloader from "src/assets/js/ImgWithPreloader";

interface IContainerSize {
	width: number
	height: number
}

const SplidePortfolio:IPropsJSX = (props) => {
	const [portfolioSplideS, setPortfolioSplideS] = useState<any>();
	//let portfolioThumbsSplide;
	const _splideMain = useRef(null);
	//const _splideThumbs = useRef(null);
	const [containerSize, setContainerSize] = useState({} as IContainerSize);

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
		const portfolioNumber = props.store.portfolios.selected;
		props.setStore.setSelectedPortfolioImage(selectedImage);
		props.setStore.setModalImage(props.store.portfolios.list[portfolioNumber].images[selectedImage]?.images.slice(-1)[0].image);
		props.setStore.setModalLink(props.store.portfolios.list[portfolioNumber].images[selectedImage]?.link);
		props.setStore.setModalDescr(props.store.portfolios.list[portfolioNumber].images[selectedImage]?.descr);
	};
	
	const showModal = () => {
		props.setStore.setModal(true);
	};


	const goToImage = (imageOrder) => {
		if (portfolioSplideS) {
			portfolioSplideS.go(imageOrder);
		}
	};

	useEffect(() => {
		if (_splideMain.current) {
			setContainerSize({
				width: _splideMain.current.offsetWidth,
				height:  _splideMain.current.offsetHeight,
			});
			const portfolioSplide = new Splide(_splideMain.current, optionsMain);
			portfolioSplide.mount();		
			portfolioSplide.on("active", () => {changeDescription(portfolioSplide.index);});
			
			const _slides = _splideMain.current.querySelectorAll(".splide__slide-container");
			_slides.forEach(cont => cont.addEventListener("click", showModal));
			changeDescription(portfolioSplide.index);

			setPortfolioSplideS(portfolioSplide);
			return () => {
				_slides.forEach(cont => cont.removeEventListener("click", showModal));
				portfolioSplide.destroy();
			};
		}

	}, [props.store.portfolios.selected]);


	useEffect(() => {
		goToImage(props.store.portfolios.selectedImage);
	}, [props.store.portfolios.selectedImage]);
	


	return (
		<div className="splide_portfolio__container">
			<div id="portfolioMainSplide" className="splide" ref={_splideMain} aria-label="The carousel with thumbnails. Click the image to expand.">
				<div className="splide__track">
					<ul className="splide__list">
						{props.store.portfolios.list[props.store.portfolios.selected].images.map((slide, index: number) => {
							let resultImage;
							if (_splideMain.current && Object.keys(containerSize).length > 0) {
								resultImage = slide.images.find(image => ((image.width >= containerSize.width) || (image.height >= containerSize.height)));
							} 
							return (
								<li className="splide__slide" key={props.store.portfolios.selected * 1000 + index}>
									<div className="splide__slide-container">
										{_splideMain.current && 
											Object.keys(containerSize).length > 0 &&
											<ImgWithPreloader link={resultImage.image} alt={slide.descr}/>
										}
									</div>
								</li>
							);
						})
						}
					</ul>
				</div>
			</div>

		</div>
	);
};


const mapStateToProps: IMapStateToProps = (store)  => ({store: store});

const mapDispatchToProps: IMapdispatchToProps = (dispatch) => ({
	setStore: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SplidePortfolio);


/*
			<Splide 
				ref={ splidePortfolio }
				onMove={newModalImg}
				onRefresh={newModalImg }
				options={ optionsMain }>
				{props.store.portfolios.list[props.store.portfolios.selected].images.map((slide, index: number) => {
					return (
						<SplideSlide key={index}>
							<div className="splide__slide-container" data-slidecontainer={index}>
								<img alt=""/>
							</div>
						</SplideSlide>
					);
				})}
			</Splide>

*/

/*const showModal = (selectedImage) => {
		const portfolioNumber = props.store.portfolios.selected;
		props.setStore.setModalImage(store.getState().portfolios.list[portfolioNumber].images[selectedImage]?.images.slice(-1)[0].image);
		props.setStore.setModalLink(store.getState().portfolios.list[portfolioNumber].images[selectedImage]?.link);
		props.setStore.setModalDescr(store.getState().portfolios.list[portfolioNumber].images[selectedImage]?.descr);
		props.setStore.setModal(true);
	};*/

/*const newModalImg: EmptyVoid = () => {
		/*const selected: number = store.getState().portfolios.selected;
		const slideIndex:number = portfolioMainSplide?.index ?? 0;
		props.setStore.setModalImage(store.getState().portfolios.list[selected].images[slideIndex]?.images.slice(-1)[0].image);
		props.setStore.setModalLink(store.getState().portfolios.list[selected].images[slideIndex]?.link);
		props.setStore.setModalDescr(store.getState().portfolios.list[selected].images[slideIndex]?.descr);
	};   */
    

/*useEffect((): void => {
		/*Array.from(document.querySelectorAll("[data-slidecontainer]")).forEach((slide: HTMLDivElement, slideNumber: number) => {
			const images: ProjectItemImageItem[] = store.getState().portfolios.list[store.getState().portfolios.selected].images[slideNumber].images;
			setImagePortfolio(slide, slide.parentNode as HTMLElement, images, obj => obj.addEventListener("click", ShowModal));
		});
		//newModalImg();
	},[store.getState().portfolios.selected]);*/