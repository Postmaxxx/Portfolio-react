import * as actions from "../../assets/redux/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useLayoutEffect } from "react";
import preloader from "../../components/preloader/preloader_template";
import store from "../../assets/redux/store";
import "@splidejs/react-splide/css";
import "./modalImage.scss";
import { EmptyVoid, IMapdispatchToProps, IMapStateToProps, IPropsJSX, IRemoveEventListener } from "src/models";



const ModalImage:IPropsJSX = (props) => {

	const closeModal: EmptyVoid = () => {
		props.setStore.setModal(false);
	};
	/*
    const checkClose: MouseEventHandler = (e) => {
        if (e.currentTarget.tagName !== 'IMG') {
            closeModal()
        }
    }

    */

     
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
		document.querySelector<HTMLElement>(".modal__background").addEventListener("click", modalBgListener);
		document.addEventListener("keydown", modalKeyListener);
        
		const _target: HTMLElement = document.querySelector(".modal").childNodes[0].childNodes[0] as HTMLElement;
		const _image: HTMLImageElement = document.createElement("img");
		_target.innerHTML = preloader();
		_image.onload = () => { _target?.replaceChildren(_image); };
		_image.src = store.getState().modalImage;
		_image.alt = store.getState().modalDescr;
		return () => {
			document.querySelector<HTMLElement>(".modal__background").removeEventListener("click", modalBgListener);
			document.removeEventListener("keydown", modalKeyListener);
		};
	},[store.getState().modalImage]);
    
	return (
		<div className="modal__background">
			<div className="modal">
				<div>
					<div>
						<img src="" alt="" />
					</div>
				</div>
			</div>
			<div className="modal__close">
				<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" onClick={closeModal} aria-label="Close this modal window">
					<path onClick={closeModal} d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"/>
				</svg>
			</div>
		</div>
	); 
};

const mapStateToProps: IMapStateToProps = (store)  => ({store: store});

const mapDispatchToProps: IMapdispatchToProps = (dispatch) => ({
	setStore: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalImage);