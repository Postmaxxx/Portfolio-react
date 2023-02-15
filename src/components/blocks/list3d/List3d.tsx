import * as actions from "../../../assets/redux/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import "./list3d.scss";
import { IMapdispatchToProps, IMapStateToProps, IProps, ProjectItemListItem } from "src/models";


type TUseStateNumber = [number, Dispatch<SetStateAction<number>>]
type TUseStateTimer = [NodeJS.Timeout, Dispatch<SetStateAction<number>>]

let selected = 0;

const List3d: React.FC = (props: IProps): JSX.Element => {
	const [timeoutScroll, settimeoutScroll]: TUseStateTimer = useState(undefined);
	const scrollDelay = 150;
	const listLength: number = props.store.portfolios.list.length;
	const step: number = 360 / listLength;
	const [rotateStep, setRotateStep]: TUseStateNumber = useState<number>(0);
	let stepsToMove: number = props.store.portfolios.selected - selected;
	selected = props.store.portfolios.selected;
    

	useEffect((): void => {
		let newRotateStep: number = rotateStep;
		if (stepsToMove !== 0) {
			if (Math.abs(stepsToMove) > listLength / 2) {
				stepsToMove = stepsToMove - Math.sign(stepsToMove)*listLength;
			}
			newRotateStep = rotateStep + stepsToMove;
		}
        
		selected = newRotateStep > 0 ? (newRotateStep % listLength) : ((listLength + newRotateStep % listLength) % listLength);
        
		props.setStore.setSelectedPortfolio(selected);
		setRotateStep(newRotateStep);    
	}, [rotateStep, selected]);




	const listScroll = (e: React.WheelEvent): void => {
		if (!timeoutScroll) {
			settimeoutScroll(window.setTimeout(() => {
				clearTimeout(timeoutScroll);
				settimeoutScroll(undefined);
			}, scrollDelay));
			e.deltaY > 0 ? setRotateStep(rotateStep => rotateStep + 1) : setRotateStep(rotateStep => rotateStep - 1);
		}
	};


	const listItems: JSX.Element[] = props.store.portfolios.list.map((portfolio: ProjectItemListItem, index: number): JSX.Element => {
		const portfolioStyle = {} as React.CSSProperties;
		const deltaPos: number = Math.min(Math.abs(selected - index), listLength - Math.abs(index - selected));
		let opacity: number = 1 - deltaPos/(listLength / 6);
		opacity = opacity < 0 ? 0 : opacity;
		portfolioStyle.transform = `translate(-50%, -50%) rotateZ(${index * step}deg) translateX(${listLength * 15}px)`;
		portfolioStyle.opacity = opacity;

		return (
			<div key={index} style={portfolioStyle} className={selected === index ? "selected" : ""}>
				<a target="_blank" href={portfolio.link} rel="noreferrer">{portfolio.name}</a>
			</div>
		);
	});
    



	return (
		<div className="list3d__container" onWheel={listScroll}>
			<div className="list3d" style={{transform: `rotateZ(${(-360 / listLength) * rotateStep}deg)`}}>
				{listItems}
			</div>
		</div>
	);
};


const mapStateToProps: IMapStateToProps = (store)  => ({store: store});

const mapDispatchToProps: IMapdispatchToProps = (dispatch) => ({
	setStore: bindActionCreators(actions, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(List3d);

/*
    let i = 0

    const logger = () => {
        setInterval(() => {
            i++
            console.log('text', i );
        }, 1000)
    }

    const testo = useCallback(() => {
        logger()
    }, [])

    useEffect(() => testo(), [])
*/
/*
    let i = 0  
    const test = useCallback(() => {
        i++
        console.log(i);
        
    },[])

    test()
    */    