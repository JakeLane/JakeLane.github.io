import * as React from 'react';
import { Link } from 'react-router';
import './styles.css';

function Navigation() {
	return (
		<nav>
			<span
				className="brand"
			>
				Jake Lane
			</span>
			<ul>
				<li><Link to="/">About</Link></li>
				<li><Link to="/blog">Blog</Link></li>
				<li><Link to="/projects">Projects</Link></li>
				<li>
					<a
						href="https://cdn.rawgit.com/JakeLane/Resume/master/resume.pdf"
						target="_blank"
					>
						Résumé
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
