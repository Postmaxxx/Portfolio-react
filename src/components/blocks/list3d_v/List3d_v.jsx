import * as actions from '../../../assets/redux/actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { useEffect } from "react";
import './list3d_v.scss'

let selected = 0;
let rotateStep = 0;
let scrollDelay = 50;
let timeoutScroll = undefined;
let listLength = 0
let stepsToMove = 0;

const List3d_v = (props) => {
    stepsToMove = props.store.portfolios.selected - selected;
    selected = props.store.portfolios.selected;
    listLength = props.store.portfolios.list.length;

    if (stepsToMove != 0) {
        if (Math.abs(stepsToMove) > listLength / 2) {
            stepsToMove = stepsToMove - Math.sign(stepsToMove)*listLength;
        }
        rotateStep = rotateStep + stepsToMove;  
    }

    const listScroll = (e) => {
        e.preventDefault();
        if (!timeoutScroll) {
            timeoutScroll = setTimeout(() => {
                clearTimeout(timeoutScroll);
                timeoutScroll = undefined;
            }, scrollDelay)
            e.deltaY > 0 ? rotateStep++ : rotateStep--;
        }
        selected = rotateStep > 0 ? (rotateStep % listLength) : ((listLength + rotateStep % listLength) % listLength)
        props.setStore.setSelectedPortfolio(selected)
    }

    useEffect(() => {
        document.querySelector('.list3d_v__container'). addEventListener('wheel', (e) => listScroll(e))
    },[])


    return (
        <div className="list3d_v__container">
            <div className="list3d_v" style={{transform: `rotateX(${(360 / listLength) * rotateStep}deg)`}}>
                {[...props.store.portfolios.list].map((portfolio, index) => {
                    let portfolioStyle = {};
                    let step = 360 / listLength;
                    let deltaPos = Math.min(Math.abs(selected - index), listLength - Math.abs(index - selected));
                    let opacity = 1 - deltaPos/(listLength / 4);
                    opacity = opacity < 0 ? 0 : opacity;
                    portfolioStyle.transform = `translate(-50%, -50%) rotateX(${-index * step}deg) translateZ(${listLength * 6}px)`;
                    portfolioStyle.opacity = opacity;

                    return (
                        <div key={index} style={portfolioStyle} className={selected == index ? 'selected' : ''}>
                            <a target="_blank" href={portfolio.link}>{portfolio.name}</a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


const mapStateToProps = (store) => ({store: store})

const mapDispatchToProps = (dispatch) => ({
    setStore: bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(List3d_v);
/*
        <div className="list__container">
            <div className="list3d" style={{transform: `rotateX(-1deg) rotateY(${(-360 / listLength) * rotateStep}deg)`}}>
                {props.store.portfolios.list.map((portfolio, index) => {
                    let portfolioStyle = {};
                    let step = 360 / listLength;
                    let deltaPos = Math.min(Math.abs(selected - index), listLength - Math.abs(index - selected));
                    let opacity = 1 - deltaPos/(listLength / 3);
                    opacity = opacity < 0 ? 0 : opacity;

                    portfolioStyle.transform = `translate(-50%, -50%) rotateY(${index * step}deg) translateZ(${listLength * 20}px)`;
                    portfolioStyle.opacity = opacity;

                    return (
                        <div key={index} style={portfolioStyle} className={selected == index ? 'selected' : ''}>{portfolio.name}</div>
                    )
                })}
            </div>
        </div>



                <div className="list__container">
            <div className="list3d" style={{transform: `rotateZ(${(-360 / listLength) * rotateStep}deg)`}}>
                {props.store.portfolios.list.map((portfolio, index) => {
                    let portfolioStyle = {};
                    let step = 360 / listLength;
                    let deltaPos = Math.min(Math.abs(selected - index), listLength - Math.abs(index - selected));
                    let opacity = 1 - deltaPos/(listLength / 3);
                    opacity = opacity < 0 ? 0 : opacity;

                    portfolioStyle.transform = `translate(-50%, -50%) rotateZ(${index * step}deg) translateX(${listLength * 4}px)`;
                    portfolioStyle.opacity = opacity;

                    return (
                        <div key={index} style={portfolioStyle} className={selected == index ? 'selected' : ''}>{portfolio.name}</div>
                    )
                })}
            </div>
        </div>

*/