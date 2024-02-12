import { useEffect } from "react";
//import { logoComponents, iconDesign, logoService } from "../../../assets/js/svgs";
import { INoPropsJSX } from "../../../../src/models";
import Tile from "../tile/Tile";
import "./services.scss";
import allData from "../../../assets/js/data";



// const tiles = [
// 	{
// 		logo: iconDesign,
// 		header:"Web Design",
// 		text:"Implementing your design or creating new with close attention to every detail. Everything is significant to make a masterpiece."
// 	},
// 	{
// 		logo: logoService,
// 		header:"Frontend",
// 		text:"Translating your dreams into web forms. Using the most modern technologies for the best performance and sustainability."
// 	},
// 	{
// 		logo: logoComponents,
// 		header:"Components",
// 		text:"Creating any kind of features to make your site unique and catchy. Animation, interactive and usability for outstanding experience."
// 	},
// 	{
// 		logo: iconDesign, //!!!
// 		header:"System Design",
// 		text: "Offering custom system design expertise, develop tailor-made web solutions that prioritize performance, scalability, reliability, and user experience."
// 	},
// ]




const Services:INoPropsJSX = () => { 

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add("show");
			}
		});
	}, {
		threshold: .6
	});

	useEffect(() => {
		document.querySelectorAll(".tiles__container .tile").forEach(el => observer.observe(el));
	}, []);



	return (
		<div className="tiles__container">
			{allData.servicesTiles.map(tile => (
				<Tile logo={tile.logo} header={tile.header} text={tile.text} key={tile.header}/>
			))}
		</div>
	);
};

export default Services;