import "./input.scss";


interface IInputProps {
    type: string
    id: string
    text: string
    value: string
    required: boolean
    checkType: string
    name: string
    data: string
    minLength: number
    maxLength: number
    changeValue(e: React.ChangeEvent<HTMLInputElement>);
    onKeyUp?: any
    refLink?: any
}



const Input: React.FC<IInputProps> = (props: IInputProps): JSX.Element => {
	return (
		<div className="input__container">
			<label htmlFor={props.id}>{props.text}</label>
			<input 
				type={props.type} 
				id={props.id}
				value={props.value}
				onChange={props.changeValue}
				required={props.required}
				name={props.name}
				data-input={props.data}
				data-min_length={props.minLength}
				data-max_length={props.maxLength}
				data-type={props.checkType}
				onKeyUp={props.onKeyUp}
				ref={props.refLink}
			/>
		</div>
	);
};

export default Input;