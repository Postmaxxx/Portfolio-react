import * as actions from "../../../assets/redux/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { IMapdispatchToProps, ISetStore, IState, ProjectItemListItem } from "../../../../src/models";
import "./list.scss";

interface ISelectPortfolio {
    (index: number): void
}

interface IList {
    list: Array<ProjectItemListItem>
	selected: number
	setStore: ISetStore
}


const List: React.FC<IList> = (props): JSX.Element => {

	const selectPortfolio: ISelectPortfolio = (index) => {
		props.setStore.setSelectedPortfolio(index);
	};

	return(
		<div className="list__container">
			<div className="list">
				<ul>
					{props.list.map((portfolio: ProjectItemListItem, index: number): JSX.Element => {
						return (
							<li 
								key={index} 
								className={index === props.selected ? "selected" : ""}
								onClick={():void => selectPortfolio(index)}
							>
								{portfolio.name}
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};


const mapStateToProps = (state: IState) => {
	return {
		list: state.portfolios.list,
		selected: state.portfolios.selected
	};
};


const mapDispatchToProps: IMapdispatchToProps = (dispatch) => ({
	setStore: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);