import './textarea.scss'


const Textarea = (props) => {
    return (
        <div className="textarea__container">
            <label htmlFor={props.id}>{props.text}</label>
            <textarea 
                type={props.type} 
                id={props.id}
                value={props.value}
                onChange={(e) => props.changeValue(e)}
                required={props.required}
                name={props.name}
                data-input={props.data}
                data-min_length={props.minLength}
                data-max_length={props.maxLength}
                data-type={props.checkType}
            />
        </div>
    )
}

export default Textarea;