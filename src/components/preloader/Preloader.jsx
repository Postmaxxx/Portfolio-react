import React from "react";
import './preloader.scss'
import * as actions from '../../assets/redux/actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import preloader from '../preloader/preloader.js'


const Preloader = (props) => { 
    return <div dangerouslySetInnerHTML={{__html: preloader()}}></div> 
}

const mapStateToProps = (store) => ({store: store})


const mapDispatchToProps = (dispatch) => ({
    setStore: bindActionCreators(actions, dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(Preloader);
