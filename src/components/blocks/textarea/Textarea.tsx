import "./textarea.scss";


interface ITextareaProps {
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
    changeValue(e: React.ChangeEvent<HTMLTextAreaElement>);
    onKeyUp?: any
    refLink?: any
}



const Textarea: React.FC<ITextareaProps> = (props: ITextareaProps): JSX.Element => {
	return (
		<div className="textarea__container">
			<label htmlFor={props.id}>{props.text}</label>
			<textarea 
				id={props.id}
				value={props.value}
				onChange={props.changeValue}
				required={props.required}
				name={props.name}
				data-input={props.data}
				data-min_length={props.minLength}
				data-max_length={props.maxLength}
				data-type={props.checkType}
				ref={props.refLink}
				onKeyUp={props.onKeyUp}
			/>
		</div>
	);
};

export default Textarea;