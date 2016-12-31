import * as React from 'react';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';
import About from './components/About';
import Blog from './components/Blog';
import Layout from './components/Layout';
import Post from './components/Post';
import Projects from './components/Projects';
import Resume from './components/Resume';

export default (
	<Router history={ browserHistory }>
		<Route path="/" component={ Layout }>
			<IndexRoute component={ About } />
			<Route path="blog" component={ Blog } />
			<Route path="blog/:id" component={ Post } />
			<Route path="projects" component={ Projects } />
			<Route path="resume" component={ Resume } />
		</Route>
	</Router>
);
