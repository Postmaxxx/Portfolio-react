import "./tile.scss"


interface ITile {
    header: string
    text?: string | string[]
    logo: JSX.Element
    list?: string[]
}

const Tile: React.FC<ITile> = ({logo, header, text, list} : ITile): JSX.Element => {
    return (
        <div className="tile">
            <div className="tile__hero">
                {logo}
                <h4>{header}</h4>
            </div>
            <div className="tile__line"></div>
            {!list ? 
                <p>{text}</p>
            :
                <ul className="tile__list">
                    {list.map(point => (
                        <li key={point}>111</li>
                    ))}
                </ul>
            }
            
        </div>
    )
}



export default Tile