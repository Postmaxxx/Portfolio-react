import About from "../../components/blocks/about/About";
import Services from "../../components/blocks/services/Services";
import SpliderReviews from "../../components/blocks/splide_reviews/Splide_reviews";
import "./about.scss";
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


export default Aboutpage;