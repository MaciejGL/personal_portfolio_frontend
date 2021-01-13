import React from 'react';

// Components
import { Typography } from '@material-ui/core';
import Badge from './Badge';
// Styles
import classes from './Tech_stack.module.scss';

const Tech_stack = () => {
	const languages = [{ name: 'JavaScript', iconClass: 'devicon-javascript-plain colored' }];
	const frontend = [{ name: 'React', iconClass: 'devicon-react-original-wordmark colored' }];
	const backend = [];
	const tools = [];

	const badgeGenerator = (arr, Comp) => arr.map((el) => <Comp badge={el} />);
	return (
		<div>
			<Typography variant="h2" component="h1">
				Tech Stack
			</Typography>
			<Typography variant="body1">
				Through last years I've touched many diffrent technologies. Most of my focus is around Javascript. Below You'll find a list of my crucial Tech Stack.
				But there is more :)
			</Typography>
			<table className={classes.table}>
				<tr>
					<th>Languages:</th>
					<td>{badgeGenerator(languages, Badge)}</td>
				</tr>
				<tr>
					<th>Frontend:</th>
					<td>{badgeGenerator(frontend, Badge)}</td>
				</tr>
				<tr>
					<th>Backend:</th>
					<td>{badgeGenerator(backend, Badge)}</td>
				</tr>
				<tr>
					<th>Tools:</th>
					<td>{badgeGenerator(tools, Badge)}</td>
				</tr>
			</table>
		</div>
	);
};

export default Tech_stack;
