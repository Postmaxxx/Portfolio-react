import React from "react";
import './portfolio.scss'
import List3d from '../../components/blocks/list3d/List3d'
import List from '../../components/blocks/list/List'
import SplidePortfolio from "../../components/blocks/splide_portfolios/Splide_portfolio";
import InfoPortfolio from '../../components/blocks/info_portfolio/Info_portfolio'
import InfoPortfolioSlide from "../../components/blocks/info_portfolio-slide/Info_portfolio-slide";
import * as actions from '../../assets/redux/actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'



const Portfolio = (props) => {
    return(
        <div className="page-container">
            <div className="page_portfolio">
                <section className='portfolio'> 
                    <div className="header_portfolio">
                        <h2>Portfolios<em>Portfolios</em></h2>
                        <List3d />
                    </div>
                    <div className="portfolio__content">
                        <List />
                        <div className="portfolio__splide">
                            <InfoPortfolio />
                            <SplidePortfolio />
                            <InfoPortfolioSlide />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
//

//<List3d />
//<Info_portfolio />


const mapStateToProps = (store) => ({store: store})


const mapDispatchToProps = (dispatch) => ({
    setStore: bindActionCreators(actions, dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);