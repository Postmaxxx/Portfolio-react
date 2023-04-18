import Splide from "@splidejs/splide";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../../assets/redux/actions";
import "@splidejs/react-splide/css";
import "./splide_reviews.scss";
import { IMapdispatchToProps, ISliderOptions, IState, ReviewItem } from "src/models";
import { useEffect, useRef } from "react";

interface ISliderReviews {
	reviews: Array<ReviewItem>
}

const SliderReviews: React.FC<ISliderReviews> = (props: ISliderReviews): JSX.Element => {
    
	const _reviewsSplideCont = useRef<HTMLDivElement>(null);
	const reviewsSplide = useRef<Splide>(null);

	const options: ISliderOptions = {
		updateOnMove: true,
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
	};

	useEffect(() => {
		reviewsSplide.current = new Splide(_reviewsSplideCont.current, options);
		reviewsSplide.current.mount();
		return () => {
			reviewsSplide.current.destroy();
		};
	}, []);

	
	return (
		<div className="reviews__container">
			<div ref={_reviewsSplideCont} className="splide">
				<div className="splide__track">
					<ul className="splide__list">
						{props.reviews.map((review: ReviewItem) => {
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


const mapStateToProps = (state: IState)  => {
	return {
		reviews: state.reviews
	};	
};

const mapDispatchToProps: IMapdispatchToProps = (dispatch) => ({
	setStore: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SliderReviews);

