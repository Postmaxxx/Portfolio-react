import './home.scss'
import React, { useEffect } from "react";
import { connect } from 'react-redux'
import * as actions from '../../assets/redux/actions'

function Homepage({ store, setStore }) {

    useEffect((e) => {
        console.log('home', store );
    }, [])

    return (
        <div className="page_home">
            <h1>Hi, I am <em>Max Postnikov</em></h1>
            <p>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
        </div>
    )
}


const mapStateToProps = (store) => ({
    store: store,
})

const mapDispatchToProps = (dispatch) => ({
    setStore: action => dispatch(action)
})


export default connect(mapStateToProps, mapDispatchToProps)(Homepage);