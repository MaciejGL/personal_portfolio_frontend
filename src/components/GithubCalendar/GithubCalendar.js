import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';

// Styles
import classes from './GithubCalendar.module.scss';

const GithubCalendar = () => (
	<div className={classes.calendar}>
		<GitHubCalendar username="MaciejGL">
			<ReactTooltip delayShow={10} html />
		</GitHubCalendar>
	</div>
);

export default GithubCalendar;
