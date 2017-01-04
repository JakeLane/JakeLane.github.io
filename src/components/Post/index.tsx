import * as React from 'react';
const postsMeta = require('../../../posts/posts.json');

declare var System: any;

interface IPostProps {
	params?: {
		id?: string,
	};
}

interface IPostState {
	content: string;
}

class Post extends React.PureComponent<IPostProps, IPostState> {
	constructor() {
		super();

		this.state = {
			content: '',
		};
	}

	public render() {
		const meta = postsMeta[this.props.params.id];
		const content = this.getPost(meta.file);
		return (
			<main>
				<h1>{ meta.title }</h1>
				<div dangerouslySetInnerHTML={ { __html: this.state.content } } />
			</main>
		);
	}

	private getPost(file: string) {
		System.import(`../../../posts/${file}.md`).then((md) =>
			this.setState({
				content: md,
			}),
		);
	}
}

export default Post;
