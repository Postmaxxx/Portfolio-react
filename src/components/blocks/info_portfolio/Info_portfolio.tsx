import { connect } from "react-redux";
import "./info_portfolio.scss";
import { IState, ProjectItemListItem } from "src/models"; 


interface IInfoPortfolio {
	list: Array<ProjectItemListItem>
	selected: number
}

const InfoPortfolio: React.FC<IInfoPortfolio> = (props: IInfoPortfolio): JSX.Element => {
	return(
		<div className="info_portfolio__container">
			<p>{props.list[props.selected].descr}</p>
		</div>
	);
};

const mapStateToProps = (state: IState)  => {
	return {
		list: state.portfolios.list,
		selected: state.portfolios.selected
	};
};


export default connect(mapStateToProps)(InfoPortfolio);