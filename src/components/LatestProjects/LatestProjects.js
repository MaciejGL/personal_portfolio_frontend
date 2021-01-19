import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';

// Components
import { Button, Typography } from '@material-ui/core';
import { FastForward } from '@material-ui/icons';
import Project_card from '../Portfolio/Project_card/Project_card';

// Styles
import classes from './LatestProjects.module.scss';

const query = graphql`
	{
		allStrapiProject(sort: { order: DESC, fields: production_date }, limit: 3) {
			edges {
				node {
					id
					image_card {
						publicURL
					}
					title
					short_description
					live_preview
				}
			}
		}
	}
`;

const LatestProjects = ({ title }) => {
	const { allStrapiProject } = useStaticQuery(query);

	return (
		<section className={classes.section_container}>
			<div className={classes.heading}>
				<div>
					<Typography variant="h2" component="h1">
						{title}
					</Typography>
					<Typography variant="body1">
						Check out my recent projects or take a look at the full list of my{' '}
						<Link to={`/portfolio`}>
							<span className={classes.link}>Portfolio</span>
						</Link>
					</Typography>
				</div>
			</div>
			<div className={classes.projects_container}>
				{allStrapiProject.edges.map(({ node }) => (
					<Project_card key={node.id} shadow data={node} />
				))}
			</div>
			<Link className={classes.linkToPortfolio} to={`/portfolio`}>
				<Button variant="contained" color="secondary" disableElevation endIcon={<FastForward />} fullWidth>
					All Projects
				</Button>
			</Link>
		</section>
	);
};

LatestProjects.propTypes = {
	title: PropTypes.string.isRequired,
};
export default LatestProjects;
