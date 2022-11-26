import React from "react";
import './portfolio.scss'
import List3d from '../../components/list3d/List3d'
import List from '../../components/blocks/list/List'

const Portfolio = () => {
    return(
        <>
            <div className="page-container">
                <div className="page_portfolio">
                    <section className='portfolio'> 
                        <div className="header_portfolio">
                            <h2>Portfolios<em>Portfolios</em></h2>
                            <List3d />
                        </div>
                            <List />
                    </section>
                </div>
            </div>
        </>
    )
}

                            //<List3d />


export default Portfolio;