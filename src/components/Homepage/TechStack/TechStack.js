import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// Components
import { Divider, Paper, useMediaQuery, useTheme } from '@material-ui/core';
import StackColumn from './StackColumn';

// Styles
import { useStyles_Homepage } from '../../../styles/mui_styles';

const query = graphql`
	query MyQuery {
		allStrapiStackFrontends(sort: { fields: [order], order: ASC }) {
			nodes {
				name
				iconClass
				img {
					publicURL
				}
			}
		}
		allStrapiStackBackends(sort: { fields: [order], order: ASC }) {
			nodes {
				name
				iconClass
				img {
					publicURL
				}
			}
		}

		allStrapiStackTools(sort: { fields: [order], order: ASC }) {
			nodes {
				name
				iconClass
				img {
					publicURL
				}
			}
		}
	}
`;
const TechStack = () => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down('sm'));
	const classes_Mui = useStyles_Homepage();
	const { allStrapiStackFrontends, allStrapiStackBackends, allStrapiStackTools } = useStaticQuery(query);

	const context = {
		frontend: { title: 'Frontend', text: `Frontend lured me into coding and that's my preferrable tech stack.`, topBadge: 'devicon-javascript-plain colored' },
		backend: {
			title: 'Backend',
			text: `Willing to understand how full lifecycle of apps work pushed me to discover the dark side of coding :)`,
			topBadge: 'devicon-nodejs-plain colored',
		},
		tools: { title: 'Tools', text: `There are so many tools. But those I managed to work with so far.`, topBadge: 'devicon-git-plain colored' },
	};

	return matches ? (
		<Paper elevation={0} className={classes_Mui.display_sm}>
			<Paper elevation={1} className={classes_Mui.containerSM}>
				<StackColumn nodes={allStrapiStackFrontends.nodes} context={context.frontend} />
			</Paper>
			<Paper elevation={1} className={classes_Mui.containerSM}>
				<StackColumn nodes={allStrapiStackBackends.nodes} context={context.backend} />
			</Paper>
			<Paper elevation={1} className={classes_Mui.containerSM}>
				<StackColumn nodes={allStrapiStackTools.nodes} context={context.tools} />
			</Paper>
		</Paper>
	) : (
		<Paper elevation={1} className={classes_Mui.display_big}>
			<StackColumn nodes={allStrapiStackFrontends.nodes} context={context.frontend} />
			<Divider flexItem orientation="vertical" />
			<StackColumn nodes={allStrapiStackBackends.nodes} context={context.backend} />
			<Divider flexItem orientation="vertical" />
			<StackColumn nodes={allStrapiStackTools.nodes} context={context.tools} />
		</Paper>
	);
};

export default TechStack;
