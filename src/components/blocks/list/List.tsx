import * as actions from '../../../assets/redux/actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import './list.scss'
import { IMapdispatchToProps, IMapStateToProps, IProps, ProjectItemListItem } from 'src/models';

interface ISelectPortfolio {
    (index: number): void
}

interface IList {
    (props: IProps): JSX.Element
}


const List: IList = (props) => {

    const selectPortfolio: ISelectPortfolio = (index) => {
        props.setStore.setSelectedPortfolio(index)
    }

    return(
        <div className="list__container">
            <div className="list">
                <ul>
                    {props.store.portfolios.list.map((portfolio: ProjectItemListItem, index: number): JSX.Element => {
                        return (
                            <li 
                                key={index} 
                                className={index === props.store.portfolios.selected ? 'selected' : ''}
                                onClick={():void => selectPortfolio(index)}
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


const mapStateToProps: IMapStateToProps = (store) => ({store: store})

const mapDispatchToProps: IMapdispatchToProps = (dispatch) => ({
    setStore: bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(List);