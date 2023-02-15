import { WorkEducationItem } from "src/models";
import "./history.scss";

interface IHistory {
    key?: number
    historyBlock: WorkEducationItem
}

const History: React.FC<IHistory> = ({historyBlock}: IHistory): JSX.Element => {
	return (
		<div className="history__block">
			<div>
				<span>{historyBlock.date}</span>
			</div>
			<div className="history__description">
				<h4>{historyBlock.header}</h4>
				{historyBlock.link ? 
					<a href={historyBlock.link} target='_blank' rel="noreferrer"><span>{historyBlock.subHeader}</span></a>
					:
					<span>{historyBlock.subHeader}</span>
				}
				<p>{historyBlock.text}</p>
			</div>
		</div>
	);
};

export default History;
