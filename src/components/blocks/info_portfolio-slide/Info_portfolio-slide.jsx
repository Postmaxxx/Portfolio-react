import React from "react";
import './info_portfolio-slide.scss'
import * as actions from '../../../assets/redux/actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'




const InfoPortfolioSlide = (props) => {
    return(
        <div className="info_portfolio-slide__container">
            dfgdfg
        </div>
    )
}






const mapStateToProps = (store) => ({store: store})


const mapDispatchToProps = (dispatch) => ({
    setStore: bindActionCreators(actions, dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(InfoPortfolioSlide);