import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// Components
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import Icon from '../../common/Icon/Icon';
import Project_card from '../Project_card/Project_card';

// Styles
import 'react-vertical-timeline-component/style.min.css';
import classes from './Timeline.module.scss';

const Timeline = () => {
	const { allStrapiProject } = useStaticQuery(graphql`
		{
			allStrapiProject {
				edges {
					node {
						title
						short_description
						image {
							publicURL
						}
						github_repository_backend
						github_repository_frontend
						live_preview
						Status
					}
				}
			}
		}
	`);
	console.log(allStrapiProject.edges);
	const timeline_elements = allStrapiProject.edges.map((project) => (
		<VerticalTimelineElement
			key={project.node.name}
			className={classes.vertical_timeline_element}
			date={project.node.Status}
			iconClassName={classes.timeline_icon}
			icon={<Icon path={project.node.icon.image.publicURL} alt={project.node.icon.name} />}
		>
			<Project_card data={project.node} />
		</VerticalTimelineElement>
	));
	return (
		<div className={classes.timeline_wrapper}>
			<VerticalTimeline className={classes.vertical_timeline} layout={'2-columns'}>
				{timeline_elements}
			</VerticalTimeline>
		</div>
	);
};

export default Timeline;