import React from "react";
import './info_portfolio.scss'
import * as actions from '../../../assets/redux/actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'




const InfoPortfolio = (props) => {
    return(
        <div className="info_portfolio__container">
            {props.store.portfolios.list[props.store.portfolios.selected].descr}
        </div>
    )
}






const mapStateToProps = (store) => ({store: store})


const mapDispatchToProps = (dispatch) => ({
    setStore: bindActionCreators(actions, dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(InfoPortfolio);