import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// Components
import { Typography, Paper } from '@material-ui/core';
import Badge from './Badge';
// Styles
import { makeStyles } from '@material-ui/core/styles';
import classes from './Tech_stack.module.scss';

const useStyles = makeStyles((theme) => ({
	paper: {
		display: 'flex',
		flexWrap: 'wrap',
		margin: '20px',
		width: '300px',
	},
	paper_container: {
		display: 'flex',
		flexWrap: 'wrap',
		margin: '20px',
		maxWidth: '1000px',
	},
}));

const Tech_stack = () => {
	const { allStrapiStackLanguages, allStrapiStackFrontends, allStrapiStackBackends, allStrapiStackTools } = useStaticQuery(graphql`
		query MyQuery {
			allStrapiStackFrontends {
				nodes {
					name
					iconClass
				}
			}
			allStrapiStackLanguages {
				nodes {
					name
					iconClass
				}
			}

			allStrapiStackBackends {
				nodes {
					name
					iconClass
				}
			}

			allStrapiStackTools {
				nodes {
					name
					iconClass
				}
			}
		}
	`);
	const classes_Mui = useStyles();
	// console.log(data);
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
			{/* <table className={classes.table}>
				<tr>
					<th>Languages:</th>
					<td className={classes.td}>{badgeGenerator(allStrapiStackLanguages.nodes, Badge)}</td>
				</tr>
				<tr>
					<th>Frontend:</th>
					<td className={classes.td}>{badgeGenerator(allStrapiStackFrontends.nodes, Badge)}</td>
				</tr>
				<tr>
					<th>Backend:</th>
					<td className={classes.td}>{badgeGenerator(allStrapiStackBackends.nodes, Badge)}</td>
				</tr>
				<tr>
					<th>Tools:</th>
					<td className={classes.td}>{badgeGenerator(allStrapiStackTools.nodes, Badge)}</td>
				</tr>
			</table> */}
			<Paper className={classes_Mui.paper_container}>
				<Paper className={classes_Mui.paper} elevation="3">
					{badgeGenerator(allStrapiStackLanguages.nodes, Badge)}
				</Paper>
				<Paper className={classes_Mui.paper} elevation="3">
					{badgeGenerator(allStrapiStackFrontends.nodes, Badge)}
				</Paper>
				<Paper className={classes_Mui.paper} elevation="3">
					{badgeGenerator(allStrapiStackBackends.nodes, Badge)}
				</Paper>
				<Paper className={classes_Mui.paper} elevation="3">
					{badgeGenerator(allStrapiStackTools.nodes, Badge)}
				</Paper>
			</Paper>
		</div>
	);
};

export default Tech_stack;
