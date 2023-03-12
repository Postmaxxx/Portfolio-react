import { useState } from "react";
import Preloader from "src/components/preloader/Preloader";

const ImgWithPreloader = ({link, alt}) => {

	const [loaded, setLoaded] = useState(false);

	return (
		<>
			{loaded || <Preloader />}
			<img src={link} alt={alt} onLoad={() => setLoaded(true)} style={{display: loaded ? "block" : "none"}} />
		</>
	);
};


export default ImgWithPreloader;