import './home.scss'
import React, { useEffect } from "react";
import SideBlock from "../../components/nav/SideBlock";
import { connect } from 'react-redux'
import * as actions from '../../assets/redux/actions'

function Homepage({ store, task }) {

    useEffect((e) => {
        console.log('home', store );
    }, [])

    return (
        <>
            <div className="page_home">
                
            </div>
        </>
    )
}


const mapStateToProps = (store) => ({
    store: store,
})

const mapDispatchToProps = (dispatch) => ({
    task: action => dispatch(action)
})


export default connect(mapStateToProps, mapDispatchToProps)(Homepage);