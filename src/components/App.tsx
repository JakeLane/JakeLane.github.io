import * as React from 'react';
import Counter from './Counter';
import Layout from './Layout';

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

class App extends React.Component<void, void> {
	public render() {
		return (
			<Layout>
				<Counter />
			</Layout>
		);
	}
}

export default App;
