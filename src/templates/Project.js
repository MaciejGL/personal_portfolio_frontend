import React from 'react';

// Components
import Layout from '../components/Layout';
import Description from '../components/Project/Description/Description';
import Image_full from '../components/Project/Image_full/Image_full';
import Details from '../components/Project/Details/Details';
import LatestProjects from '../components/LatestProjects/LatestProjects';
import SEO from '../components/SEO/SEO';

const Project = ({ data }) => {
	const { strapiProject: project } = data;
	return (
		<Layout>
			<SEO title={project.title} description={project.short_description} image={project.image_full.publicURL} article={'article'} />
			<Description project={project} />
			<Image_full publicURL={project.image_devices.publicURL} title={project.title} maxWidth="1000px" />

			{project.problemAndSolution && <Details title="Problem & Solution" data={project.problemAndSolution} />}
			{project.stackExplanation && <Details title="Stack Explanation" data={project.stackExplanation} stack={project.stack} />}
			<Image_full publicURL={project.image_full.publicURL} title={project.title} shadow={3} />
			{project.thoughtsAndImprovements && <Details title="Thoughts and Future Improvements" data={project.thoughtsAndImprovements} />}
			<LatestProjects title="Other Projects" />
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
			short_description
			full_description {
				id
				description
			}
			problemAndSolution {
				id
				description
			}
			stackExplanation {
				id
				description
			}
			thoughtsAndImprovements {
				id
				description
			}
			stack {
				id
				name
				icon {
					publicURL
				}
			}
			image_full {
				publicURL
			}
			image_devices {
				publicURL
			}
		}
	}
`;
