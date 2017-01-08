import * as React from 'react';

class Resume extends React.Component<void, void> {
	public render() {
		return (
			<main>
				<h1>Résumé</h1>
				<p>
					<a
						href="https://cdn.rawgit.com/JakeLane/Resume/master/resume.pdf"
						target="_blank"
					>
						Link
					</a>
				</p>
			</main>
		);
	}
}

export default Resume;
