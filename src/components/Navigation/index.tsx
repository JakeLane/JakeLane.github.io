import * as React from 'react';
import { Link } from 'react-router';

function Navigation() {
	return (
		<nav>
			<span>Jake Lane</span>
			<ul>
				<li><Link to="/">About</Link></li>
				<li><Link to="/blog">Blog</Link></li>
				<li><Link to="/projects">Projects</Link></li>
				<li><Link to="/resume">Résumé</Link></li>
			</ul>
		</nav>
	);
}

export default Navigation;
