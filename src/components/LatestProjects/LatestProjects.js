import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';

// Components
import { Button, Typography } from '@material-ui/core';
import { FastForward } from '@material-ui/icons';
import Project_card from '../Portfolio/Project_card/Project_card';

// Styles
import classes from './LatestProjects.module.scss';
import { useStyles_Project_card } from '../../styles/mui_styles';

const query = graphql`
	{
		allStrapiProject(sort: { order: DESC, fields: production_date }, limit: 2) {
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
	const classes_Mui = useStyles_Project_card();
	const { allStrapiProject } = useStaticQuery(query);

	return (
		<section className={classes.section_container}>
			<div className={classes.heading}>
				<Typography variant="h2">{title}</Typography>
				<Button variant="text" endIcon={<FastForward />} className={classes_Mui.visit_portfolio_btn}>
					<Link to={`/portfolio`}>Portfolio</Link>
				</Button>
			</div>
			<div className={classes.projects_container}>
				{allStrapiProject.edges.map(({ node }) => (
					<Project_card key={node.id} shadow data={node} />
				))}
			</div>
		</section>
	);
};

LatestProjects.propTypes = {
	title: PropTypes.string.isRequired,
};
export default LatestProjects;
