import React from "react";

interface CatchErrorsProps {
	children: React.ReactNode;
}
  
export default class CatchErrors extends React.Component<CatchErrorsProps, { error: string }> {
	constructor(props: CatchErrorsProps) {
		super(props);
		this.state = {
			error: ""
		};
	}
  
	static getDerivedStateFromError(error) {
	  	return { error: error.message };
	}
  
	render() {
		if (this.state.error) {
			return <h1>ERROR on site: ${this.state.error}</h1>;
		}
	 	return this.props.children;
	}
}

  
  
  
  
  
