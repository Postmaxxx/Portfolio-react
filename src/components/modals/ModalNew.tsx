import * as actions from "../../assets/redux/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { KeyboardEvent, KeyboardEventHandler, MouseEventHandler, useEffect, useRef, useState } from "react";
import "@splidejs/react-splide/css";
import "./modalImage.scss";
import { EmptyVoid, IMapdispatchToProps, IMapStateToProps, IPropsJSX, IRemoveEventListener } from "src/models";
import Splide from "@splidejs/splide";
import ImgWithPreloader from "src/assets/js/ImgWithPreloader";


interface IOptionsThumbs {
	[propName: string]: any;
}





const ModalNew:IPropsJSX = (props) => {
	const mainRef =useRef<any>();
	const thumbsRef =useRef<any>();
	const [firstRender, setFirstRender] = useState(true);
	const _splideMain = useRef();
	const _splideThumbs = useRef();
	
	
		
	const optionsThumbs:IOptionsThumbs = {
		lazyLoad: false,
		perPage: 12,
		gap        : 10,
		rewind     : false,
		pagination : false,
		isNavigation: true,
		focus: 		"center",
		breakpoints: {
			1600: {
				perPage: 10
			}, 
			1241: {
				perPage: 8
			}, 
			992: {
				perPage: 7
			}, 
			768: {
				perPage: 5
			}, 
			480: {
				perPage: 4
			}, 
		},
	};


	const optionsMain = {
		lazyLoad: true,
		type      : "fade",
		rewind    : false,
		pagination: false,
		speed: 500,
		wheel: true,
		wheelSleep: 300,
	};

	const closeModal = () => {
		props.setStore.setSelectedPortfolioImage(thumbsRef.current.index);
		document.querySelector("body").classList.remove("noscroll");
		props.setStore.setModal(false);
	};

	const showSlide = (slideToGo) => {
		if (firstRender) return;
		thumbsRef.current.go(slideToGo);
	};

	function modalKeyListener (e) {
		e.key === "Escape" && closeModal();
		e.keyCode === 37 && showSlide("<");
		e.keyCode === 39 && showSlide(">");
	}



	useEffect(() => {
		setFirstRender(false);
		if (firstRender) return;
		const thumbnails = new Splide(_splideThumbs.current, optionsThumbs);
		const main = new Splide(_splideMain.current, optionsMain);
		main.sync(thumbnails);
		main.mount();
		thumbnails.mount();
		thumbsRef.current = thumbnails;
		mainRef.current = main;

		return () => {
			thumbnails.destroy();
			main.destroy();
		};
		
	}, [props.store.portfolios.selected, firstRender]);


	useEffect(() => {
		if (firstRender) return;
		showSlide(props.store.portfolios.selectedImage);
		props.store.modal && document.addEventListener("keyup", modalKeyListener);
		props.store.modal && document.querySelector("body").classList.add("noscroll");
		return (() => {
			document.removeEventListener("keyup", modalKeyListener);
		});
	}, [props.store.modal, firstRender]);


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