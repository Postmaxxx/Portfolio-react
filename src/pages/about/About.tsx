import * as actions from "../../assets/redux/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import About from "../../components/blocks/about/About";
import Services from "../../components/blocks/services/Services";
import SpliderReviews from "../../components/blocks/splide_reviews/Splide_reviews";
import "./about.scss";
import { IMapdispatchToProps, IMapStateToProps } from "src/models";
import { useEffect } from "react";


const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add("show");
		}
	});
}, {
	threshold: .6
});


function Aboutpage(): JSX.Element {

	useEffect(() => {
		document.querySelectorAll(".services__container .service").forEach(el => observer.observe(el));
	}, []);

	console.log("about");
	
	return (
		<div className="page-container">
			<div className="page_about">
				<section className='about_me'> 
					<h2>About me<em>About me</em></h2>
					<About />
				</section>

				<section className='services'> 
					<h2>Services<em>Services</em></h2>
					<Services />
				</section>

				<section className='reviews'> 
					<h2>Reviews<em>Reviews</em></h2>
					<SpliderReviews />
				</section>
			</div>
		</div>
	);
}


const mapStateToProps: IMapStateToProps = (store)  => ({store: store});

const mapDispatchToProps: IMapdispatchToProps = (dispatch) => ({
	setStore: bindActionCreators(actions, dispatch),
});


export default connect(null, mapDispatchToProps)(Aboutpage);