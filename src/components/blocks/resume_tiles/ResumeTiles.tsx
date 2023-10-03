import { useEffect, useRef } from "react";
import { logoDanger, logoDesign, logoIssue, logoService, logoSolution } from "../../../assets/js/svgs";
import Tile from "../tile/Tile";
import "./resume_tiles.scss";

interface IResumeTiles {
    content: {
        was: string[]
        now: string[]
    }
}





const ResumeTiles: React.FC<IResumeTiles> = ({content}: IResumeTiles): JSX.Element => {
    
    const _tile = useRef<HTMLDivElement>(null)


    const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add("show");
			}
		});
	}, {
		threshold: .9
	});

	useEffect(() => {
		_tile.current?.querySelectorAll(".tile").forEach(el => observer.observe(el));
	}, []);

	return (
		<div className="resume-tiles" ref={_tile}>
			<Tile logo={logoIssue} header="was" list={content.was} />
			<Tile logo={logoSolution} header="now" list={content.now} />
		</div>
	);
};

export default ResumeTiles;