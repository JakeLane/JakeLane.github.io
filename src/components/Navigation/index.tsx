import * as React from 'react';
import { Icon } from 'react-fa';
import { Link } from 'react-router';
import './styles.scss';

function Navigation() {
	return (
		<nav className="navigation">
			<div className="brand">
				Jake Lane
			</div>
			<ul>
				<li><Link to="/">About</Link></li>
				<li><Link to="/blog">Blog</Link></li>
				<li><Link to="/projects">Projects</Link></li>
				<li>
					<a
						href="https://cdn.rawgit.com/JakeLane/Resume/master/resume.pdf"
						target="_blank"
					>
						Résumé <Icon name="external-link" />
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
