import * as React from 'react';

interface IAppProps extends React.Props<any> {
	children?: JSX.Element;
}

class App extends React.Component<IAppProps, void> {
	public render() {
		return (
			<div>
				<h1>App</h1>
				{this.props.children}
			</div>
		);
	}
}

export default App;
