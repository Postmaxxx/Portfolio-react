import React from "react";
import './input.scss'


const Input = (props) => {
    //console.log('props', props);
    return (
        <div className="input__container">
            <label htmlFor={props.id}>{props.text}</label>
            <input type={props.type} id={props.id}
                value={props.value}
                onChange={(e) => props.changeValue(e)}
                required={props.required}
                name={props.name}
            />
            
        </div>
    )
}


export default Input;