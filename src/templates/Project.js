import React from 'react';

// Components
import { Typography } from '@material-ui/core';
import Layout from '../components/Layout';

// Styles
import classes from './Project.module.scss';

const Project = ({ data }) => {
	console.log({ data });
	const { strapiProject: project } = data;
	return (
		<Layout>
			<Typography variant="h1">{project.title}</Typography>
			<Typography variant="body1">{project.full_description}</Typography>
			<div className={classes.tech_info_container}>
				<div>{project.stack_list.replace(/,/g, ' ')}</div>
				<div>
					<Typography variant="body1">
						<a href={project.github_repository_backend}>Backend</a>
					</Typography>
					<Typography variant="body1">
						<a href={project.github_repository_frontend}>Frontend</a>
					</Typography>
					<Typography variant="body1">
						<a href={project.live_preview}>Live</a>
					</Typography>
				</div>
			</div>
		</Layout>
	);
};

export default Project;
export const query = graphql`
	query ProjectTemplate($strapiId: String!) {
		strapiProject(strapiId: { eq: $strapiId }) {
			title
			Status
			extras
			full_description
			github_repository_backend
			github_repository_frontend
			live_preview
			stack_list
			video_url_youtube
			images_overview {
				url
			}
			image_full {
				publicURL
			}
		}
	}
`;
