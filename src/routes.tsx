import * as React from 'react';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Projects from './components/Projects';

export default (
	<Router history={ browserHistory }>
		<Route path="/" component={ App }>
			<IndexRoute component={ Home }/>
			<Route path="projects" component={ Projects }/>
		</Route>
	</Router>
);
