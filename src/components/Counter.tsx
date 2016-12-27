import * as React from 'react';

class Counter extends React.Component<void, any> {
	private interval: number;
	constructor() {
		super();
		this.state = {
			counter: 5,
		};
	}

	public componentDidMount() {
		this.interval = setInterval(this.tick.bind(this), 1000);
	}

	public componentWillUnmount() {
		clearInterval(this.interval);
	}

	public render() {
		return (
			<h2>Counter: {this.state.counter}</h2>
		);
	}

	private tick() {
		this.setState({
			counter: this.state.counter + 1,
		});
	}
}

export default Counter;
