import * as React from 'react';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';
import About from './components/About/About';
import Layout from './components/Layout/Layout';
import Projects from './components/Projects/Projects';

export default (
	<Router history={ browserHistory }>
		<Route path="/" component={ Layout }>
			<IndexRoute component={ About }/>
			<Route path="projects" component={ Projects }/>
		</Route>
	</Router>
);
