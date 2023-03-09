import React from "react";

export default class CatchErrors extends React.Component {
	constructor() {
		super();
		this.state = {
		  hasError: ""
		};
	  }

	  static getDerivedStateFromError(error) {
		this.setState({hasError: "error" });
		return { hasError: "error" };
	  }

	render() {
		if (this.state.hasError) {
			return <h1>ERRORRRR</h1>;
		}
		return this.props.children;
	}
}
