//import { Splide, SplideSlide } from "@splidejs/react-splide";
import Splide from "@splidejs/splide";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../../assets/redux/actions";
import "@splidejs/react-splide/css";
import "./splide_reviews.scss";
import { IMapdispatchToProps, IMapStateToProps, IProps, ISliderOptions, ReviewItem } from "src/models";
import { useEffect } from "react";



const SliderReviews: React.FC = (props: IProps): JSX.Element => {
    
	const options: ISliderOptions = {
		updateOnMove: true,
		//type : "loop",
		perPage: 2,
		gap   : "2rem",
		breakpoints: {
			768: {
				perPage: 1,
				gap   : "2rem",
			},
		},
		perMove: 1,
		pagination: false,
		arrows: true,
		drag: true,
		speed: 500,
		snap: false,
		wheel: true,
		wheelSleep: 500,
		autoplay: true,
		interval: 10000,
		pauseOnHover: true,
		//rewind: true,
	};

	useEffect(() => {
		new Splide("#reviewsMainSplide", options).mount();
	}, []);


	return (
		<div className="reviews__container">
			<div id="reviewsMainSplide" className="splide">
				<div className="splide__track">
					<ul className="splide__list">
						{props.store.reviews.map((review: ReviewItem, index: number) => {
							return (
								<li className="splide__slide" key={review.name}>
									<div className="splide__slide-container">
										<div className="review__slide">
											<p>{review.text}</p>
										</div>
										<span>{review.name}</span>
										<span>{review.add}</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(SliderReviews);

/*
			<Splide options={options}>
				{props.store.reviews.map((review: ReviewItem, index: number) => {
					return (
						<SplideSlide key={review.name}>
							<div className="splide__slide-container">
								<div className="review__slide">
									<p>{review.text}</p>
								</div>
								<span>{review.name}</span>
								<span>{review.add}</span>
							</div>
						</SplideSlide>
					);
				})}
			</Splide>
*/			