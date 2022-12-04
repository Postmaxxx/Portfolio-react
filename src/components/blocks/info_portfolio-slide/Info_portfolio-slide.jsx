import React from "react";
import * as actions from '../../../assets/redux/actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import './info_portfolio-slide.scss'

const InfoPortfolioSlide = (props) => {
    return(
        <div className="info_portfolio-slide__container">
            <p>{props.store.modalDescr} </p> 
            {props.store.modalLink ? 
                (<a target='_blank' href={props.store.modalLink}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                </a>) 
                : 
                (null)}
        </div>
    )
}


const mapStateToProps = (store) => ({store: store})

const mapDispatchToProps = (dispatch) => ({
    setStore: bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(InfoPortfolioSlide);