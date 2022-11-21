import React from "react";
import './portfolio.scss'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import siteData from '../../assets/js/site_data';
import * as actions from '../../assets/redux/actions'


const Portfolio = (props) => {
    return(
        <>
            <div className="page-container">
                <div className="page_portfolio">
                    <section className='portfolio'> 
                        <h1>Hi, I am <em>Max Postnikov</em></h1>
                            <div className="test">
                            </div>
                    </section>
                </div>
            </div>
        </>
    )
}



const mapStateToProps = (store) => ({store: store})


const mapDispatchToProps = (dispatch) => ({
    setStore: bindActionCreators(actions, dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
