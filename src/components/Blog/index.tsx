import * as React from 'react';
import { Link } from 'react-router';
const postsMeta = require('../../../posts/posts.json');

class Blog extends React.Component<void, void> {
	public render() {
		const items = Object.keys(postsMeta).map((key, index) => {
			const post = postsMeta[key];
			return (
				<li>
					<Link
						to={ `/blog/${post.file}` }

					>
						{ post.title }
					</Link>
				</li>
			);
		});

		return (
			<main>
				<h1>Blog</h1>
				<ul>
					{ items }
				</ul>
			</main>
		);
	}
}

export default Blog;
