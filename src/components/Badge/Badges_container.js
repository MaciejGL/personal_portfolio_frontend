import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// Components
import { Divider, Paper, useMediaQuery } from '@material-ui/core';
import Badge_column from './Badge_column';

// Styles
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	display_big: {
		display: 'flex',
		justifyContent: 'space-evenly',
		width: '95%',
		maxWidth: 1100,
		margin: '50px auto',
	},
	display_sm: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		margin: '3rem 0',
	},
	containerSM: {
		display: 'flex',
		flexWrap: 'wrap',
		maxWidth: '325px',
		margin: '1rem',
	},
}));

const Badges_container = () => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down('sm'));
	const classes_Mui = useStyles();
	const { allStrapiStackFrontends, allStrapiStackBackends, allStrapiStackTools } = useStaticQuery(graphql`
		query MyQuery {
			allStrapiStackFrontends {
				nodes {
					name
					iconClass
					img {
						publicURL
					}
				}
			}
			allStrapiStackBackends {
				nodes {
					name
					iconClass
					img {
						publicURL
					}
				}
			}

			allStrapiStackTools {
				nodes {
					name
					iconClass
					img {
						publicURL
					}
				}
			}
		}
	`);

	const context = {
		frontend: { title: 'Frontend', text: `Frontend lured me into coding. That's how I became addicted to code.`, topBadge: 'devicon-javascript-plain colored' },
		backend: {
			title: 'Backend',
			text: `Willing to undarstand how full lifecycle of apps work pushed me to learn the dark side of coding :)`,
			topBadge: 'devicon-nodejs-plain colored',
		},
		tools: { title: 'Tools', text: `There are so many tools. But anyway I will list few I'm familair with.`, topBadge: 'devicon-git-plain colored' },
	};

	return matches ? (
		<Paper elevation={0} className={classes_Mui.display_sm}>
			<Paper elevation={1} className={classes_Mui.containerSM}>
				<Badge_column nodes={allStrapiStackFrontends.nodes} context={context.frontend} />
			</Paper>
			<Paper elevation={1} className={classes_Mui.containerSM}>
				<Badge_column nodes={allStrapiStackBackends.nodes} context={context.backend} />
			</Paper>
			<Paper elevation={1} className={classes_Mui.containerSM}>
				<Badge_column nodes={allStrapiStackTools.nodes} context={context.tools} />
			</Paper>
		</Paper>
	) : (
		<Paper elevation={1} className={classes_Mui.display_big}>
			<Badge_column nodes={allStrapiStackFrontends.nodes} context={context.frontend} />
			<Divider flexItem orientation="vertical" />
			<Badge_column nodes={allStrapiStackBackends.nodes} context={context.backend} />
			<Divider flexItem orientation="vertical" />
			<Badge_column nodes={allStrapiStackTools.nodes} context={context.tools} />
		</Paper>
	);
};

export default Badges_container;
