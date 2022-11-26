import React from "react";
import './list.scss'
import * as actions from '../../../assets/redux/actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { useEffect } from "react";


const List = (props) => {


    const selectPortfolio = (index) => {
        props.setStore.setSelectedPortfolio(index)
    }

    return(
        <div className="list__container">
            <div className="list">
                <ul>
                    {props.store.portfolios.list.map((portfolio, index) => {
                        return (
                            <li 
                                key={index} 
                                className={index == props.store.portfolios.selected ? 'selected' : ''}
                                onClick={() => selectPortfolio(index)}
                                >
                                {portfolio.name}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )

}




const mapStateToProps = (store) => ({store: store})


const mapDispatchToProps = (dispatch) => ({
    setStore: bindActionCreators(actions, dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(List);