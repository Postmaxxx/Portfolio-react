import React from "react";

export default class CatchErrors extends React.Component {
	constructor() {
		super();
		this.state = {
		  hasError: false
		};
	  }

	  static getDerivedStateFromError(error) {
		this.setState({hasError: error });
		return { hasError: error };
	  }

	render() {
		if (this.state.hasError) {
			return <h1>ERROR on site</h1>;
		}
		return this.props.children;
	}
}
