import './history.scss';

const History = ({historyBlock}) => {
    return(
        <div className="history__block">
            <div>
                <span>{historyBlock.date}</span>
            </div>
            <div className="history__description">
                <h4>{historyBlock.header}</h4>
                {historyBlock.link ? 
                    <a href={historyBlock.link} target='_blank'><span>{historyBlock.subHeader}</span></a>
                :
                    <span>{historyBlock.subHeader}</span>
                }
                <p>{historyBlock.text}</p>
            </div>
        </div>
    )
}

export default History;
