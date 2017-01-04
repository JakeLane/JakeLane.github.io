import * as React from 'react';

class Projects extends React.Component<void, void> {
	public render() {
		return (
			<main>
				<h1>Projects</h1>
				<p>Below is a small sample of work I've contributed to over the years.</p>
				<section>
					<h2>
						Toffeed <small>Android application (Java)</small>
					</h2>
					<p>
						An wrapper app for Facebook's mobile site that aims to
						provide enhancements and a somewhat native app feel to
						the normal browser experience. It utilises injected
						JavaScript to manipulate the DOM and JavaScript
						Interfaces to obtain data from the webpage.
					</p>
				</section>
				<section>
					<h2>
						Juicer <small>Android application (Java)</small>
					</h2>
					<p>
						An app I developed to enhance my skills with Java and
						begin learning Android. The app drains the device's
						battery, which can be useful for calibration.
					</p>
				</section>
				<section>
					<h2>
						Wolfram|Alpha Bot <small>Reddit bot (Python)</small>
					</h2>
					<p>
						A Reddit bot written in Python using the PRAW Python
						library that replies with data from WolframAlpha when
						summoned or a WolframAlpha link is posted.
					</p>
				</section>
				<section>
					<h2>
						LaTeX Bot <small>Reddit bot (Python)</small>
					</h2>
					<p>
						A Bukkit plugin that I developed for use on the Rapid
						Minecraft server. It served many functions, which
						reduced the amount of plugins required by the server. It
						also interfaced with a website that I also built for
						the server.
					</p>
				</section>
			</main>
		);
	}
}

export default Projects;
