import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

// Components
import { Button, Typography } from '@material-ui/core';
import { FastForward } from '@material-ui/icons';
import Project_card from '../Portfolio/Project_card/Project_card';

// Styles
import classes from './LatestProjects.module.scss';
import { useStyles_Project_card } from '../../styles/mui_styles';

const LatestProjects = () => {
	const classes_Mui = useStyles_Project_card();
	const { allStrapiProject } = useStaticQuery(graphql`
		query latestProjects($limit: Int = 2) {
			allStrapiProject(sort: { order: DESC, fields: production_date }, limit: $limit) {
				edges {
					node {
						id
						image_card {
							publicURL
						}
						title
						short_description
					}
				}
			}
		}
	`);

	return (
		<section className={classes.section_container}>
			<div className={classes.heading}>
				<Typography variant="h2">Other Projects</Typography>
				<Button variant="text" endIcon={<FastForward />} className={classes_Mui.visit_portfolio_btn}>
					<Link to={`/portfolio`}>Portfolio</Link>
				</Button>
			</div>
			<div className={classes.projects_container}>
				{allStrapiProject.edges.map(({ node }) => (
					<Project_card shadow data={node} />
				))}
			</div>
		</section>
	);
};

export default LatestProjects;
