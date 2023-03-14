import * as actions from "../../assets/redux/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { KeyboardEvent, KeyboardEventHandler, MouseEventHandler, useEffect, useRef, useState } from "react";
import "@splidejs/react-splide/css";
import "./modalImage.scss";
import { EmptyVoid, IMapdispatchToProps, IMapStateToProps, IPropsJSX, IRemoveEventListener } from "src/models";
import Splide from "@splidejs/splide";
import ImgWithPreloader from "src/assets/js/ImgWithPreloader";

type tFocus = number | "center"

interface IOptionsThumbs {
	perPage: number
	gap        : number
	rewind     : boolean
	pagination : boolean
	isNavigation: boolean
	focus: 		tFocus
	lazyLoad: 	boolean
}





const ModalNew:IPropsJSX = (props) => {
	//let thumbnails;
	const [firstRender, setFirstRender] = useState(true);
	const [thumbnailsS, setThumbnailsS] = useState<any>();
	const [mainS, setMainS] = useState<any>();
	const _splideMain = useRef();
	const _splideThumbs = useRef();
	
	
		
	const optionsThumbs:IOptionsThumbs = {
		//fixedWidth : 100,
    	//fixedHeight: 60,
		lazyLoad: false,
		perPage: 10,
		gap        : 10,
		rewind     : true,
		pagination : false,
		isNavigation: true,
		focus: 		"center"
	};


	const optionsMain = {
		lazyLoad: true,
		type      : "fade",
		rewind    : true,
		pagination: false,
		speed: 500,
		wheel: true,
		wheelSleep: 300,
		//arrows    : false,
	};

	const closeModal = () => {
		props.setStore.setSelectedPortfolioImage(mainS.index);
		props.setStore.setModal(false);
	};

	const goToImage = (imageOrder) => {
		if (thumbnailsS) {
			mainS.go(imageOrder);
		}
	};

	function modalKeyListener (e) {
		console.log(111);
		
		e.key === "Escape" && closeModal();
	}



	useEffect(() => {
		setFirstRender(false);
		if (firstRender) return;
		const thumbnails = new Splide(_splideThumbs.current, optionsThumbs);
		const main = new Splide(_splideMain.current, optionsMain);
		main.sync(thumbnails);
		main.mount();
		thumbnails.mount();
		
		setThumbnailsS(thumbnails);
		setMainS(main);
		
		return () => {
			thumbnails.destroy();
			main.destroy();
		};
		
	}, [props.store.portfolios.selected, firstRender]);


	useEffect(() => {
		goToImage(props.store.portfolios.selectedImage);
		if (props.store.modal) {
			document.addEventListener("keyup", modalKeyListener);
		} 
		return (() => {
			document.removeEventListener("keyup", modalKeyListener);
		});
	}, [props.store.modal]);


	return (
		<div className={props.store.modal ? "modal__background show" : "modal__background"}>
			<div className="modal">
				<div>
					<div>
						<div id="modalMain" className="splide" ref={_splideMain}>
							<div className="splide__track">
								<ul className="splide__list">
									{props.store.portfolios.list[props.store.portfolios.selected].images.map((slide) => {
										return (
											<li className="splide__slide" key={slide.images[0].image}>
												{props.store.modal ?
													<ImgWithPreloader link={slide.images[slide.images.length-1].image} alt={slide.descr} />
													:
													<></>
												}
											</li>
										);
									})
									}
								</ul>
							</div>
						</div>
					
						<div id="modalThumbs" className="splide" ref={_splideThumbs}>
							<div className="splide__track">
								<ul className="splide__list">
									{props.store.portfolios.list[props.store.portfolios.selected].images.map((slide) => {
										return (
											<li className="splide__slide" key={slide.images[0].image}>
												{props.store.modal ?
													<ImgWithPreloader link={slide.images[0].image} alt={slide.descr} />
													:
													<></>
												}
											</li>
										);
					
									})

									}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>


			<div className="modal__close">
				<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" onClick={closeModal} aria-label="Close this modal window">
					<path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"/>
				</svg>
			</div>
		</div>
	); 
};

const mapStateToProps: IMapStateToProps = (store)  => ({store: store});

const mapDispatchToProps: IMapdispatchToProps = (dispatch) => ({
	setStore: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalNew);
/*
	useLayoutEffect((): void => {
		const _modal: HTMLElement =  document.querySelector(".modal__background");
		store.getState().modal ? _modal.classList.add("show") : _modal.classList.remove("show");
	}, [store.getState().modal]);


	const modalBgListener: EventListener = (e: MouseEvent): void => {
		(e.target as HTMLElement).tagName === "IMG" || closeModal();
	};

	const modalKeyListener: EventListener = (e: KeyboardEvent): void => {
		e.key === "Escape" && closeModal();
	};


	useLayoutEffect((): IRemoveEventListener => {

	},[store.getState().modalImage]);
    */