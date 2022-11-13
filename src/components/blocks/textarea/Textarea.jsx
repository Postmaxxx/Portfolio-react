import React from "react";
import './textarea.scss'


const Textarea = (props) => {
    //console.log('props', props);
    return (
        <div className="textarea__container">
            <label htmlFor={props.id}>{props.text}</label>
            <textarea type={props.type} id={props.id}
                value={props.value}
                onChange={(e) => props.changeValue(e)}
                required={props.required}
                name={props.name}
            />
        </div>
    )
}


export default Textarea;