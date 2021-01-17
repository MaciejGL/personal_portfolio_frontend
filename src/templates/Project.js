import React from 'react';

// Components
import Layout from '../components/Layout';
import Description from '../components/Project/Description/Description';
import Image_full from '../components/Project/Image_full/Image_full';

const Project = ({ data }) => {
	const { strapiProject: project } = data;

	return (
		<Layout>
			<Description project={project} />
			<Image_full publicURL={project.image_full.publicURL} title={project.title} />
		</Layout>
	);
};

export default Project;
export const query = graphql`
	query ProjectTemplate($strapiId: String!) {
		strapiProject(strapiId: { eq: $strapiId }) {
			title
			live_preview
			video_url_youtube
			github_repository_frontend
			github_repository_backend
			image_full {
				publicURL
			}
			full_description {
				description
				id
			}
			stack {
				name
				id
			}
		}
	}
`;
