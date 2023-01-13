import * as actions from '../../../assets/redux/actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import './info_portfolio.scss'

const InfoPortfolio = (props) => {
    return(
        <div className="info_portfolio__container">
            <p>{props.store.portfolios.list[props.store.portfolios.selected].descr}</p>
        </div>
    )
}

const mapStateToProps = (store) => ({store: store})

const mapDispatchToProps = (dispatch) => ({
    setStore: bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(InfoPortfolio);