import './message.scss'

function Message({header, text, buttonText, buttonClickAction}) {
    return (
        <div className='message__container' onClick={e => e.stopPropagation()}>
            <h1 >{header}</h1>
            <p>{text}</p>
            <button className='link_button' onClick={buttonClickAction}>{buttonText}</button>
        </div>
    )
}


export default Message