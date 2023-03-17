import React, { KeyboardEventHandler, LegacyRef, useState } from "react";
import "./input.scss";

type element = HTMLTextAreaElement | HTMLInputElement


type element2 = any

type keyTypes = KeyboardEventHandler<element> 
type refTypes = LegacyRef<element2> //!!!

interface IInputProps {
    type?: string
    id: string
    text: string
    value: string
    required: boolean
    checkType: string
    name: string
    data: string
    minLength: number
    maxLength: number
    onKeyUp?: keyTypes
    refLink?: refTypes
	typeEl? : string
}



const Input = (props: IInputProps) => {

	const [value, setValue] = useState(props.value);

	const changeValue = (e) => {
		setValue(e.currentTarget.value);
		const parent:HTMLElement =  e.currentTarget.parentNode as HTMLElement;
		parent.classList.remove("incorrect");
	};

	return (
		<div className={props.typeEl === "textarea" ? "textarea__container": "input__container"}>
			<label htmlFor={props.id}>{props.text}</label>
			{props.typeEl ==="textarea" ? 
				<textarea 
					id={props.id}
					value={value}
					onChange={changeValue}
					required={props.required}
					name={props.name}
					data-input={props.data}
					data-min_length={props.minLength}
					data-max_length={props.maxLength}
					data-type={props.checkType}
					ref={props.refLink}
					onKeyUp={props.onKeyUp}
				/>
				:
				<input 
					type={props.type} 
					id={props.id}
					value={value}
					onChange={changeValue}
					required={props.required}
					name={props.name}
					data-input={props.data}
					data-min_length={props.minLength}
					data-max_length={props.maxLength}
					data-type={props.checkType}
					onKeyUp={props.onKeyUp}
					ref={props.refLink}
				/>
			}

		</div>
	);
};

export default Input;