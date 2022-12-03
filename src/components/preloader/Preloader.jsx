import React from "react";
import './preloader.scss'
import * as actions from '../../assets/redux/actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

const Preloader = (props) => {
    return (
        <div className='preloader__container'>
            <div className="preloader"></div>
            <p className='preloader__text'></p>
        </div>
    )
}

const mapStateToProps = (store) => ({store: store})


const mapDispatchToProps = (dispatch) => ({
    setStore: bindActionCreators(actions, dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(Preloader);
