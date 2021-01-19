import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// Components
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import Icon from '../../common/Icon/Icon';
import Project_card from '../Project_card/Project_card';

// Styles
import 'react-vertical-timeline-component/style.min.css';
import classes from './Timeline.module.scss';

const query = graphql`
	{
		allStrapiProject(sort: { order: DESC, fields: production_date }) {
			edges {
				node {
					title
					short_description
					strapiId
					live_preview
					production_date
					icon_main_tech {
						publicURL
					}
					image_card {
						publicURL
					}
				}
			}
		}
	}
`;

const Timeline = () => {
	const { allStrapiProject } = useStaticQuery(query);
	const formatDate = (date) => {
		const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		const newDate = new Date(date);
		return `${monthNames[newDate.getMonth()]} ${newDate.getFullYear()}`;
	};
	const timeline_elements = allStrapiProject.edges.map((project) => (
		<VerticalTimelineElement
			key={project.node.title}
			className={classes.vertical_timeline_element}
			date={formatDate(project.node.production_date)}
			iconClassName={classes.timeline_icon}
			icon={<Icon path={project.node.icon_main_tech.publicURL} alt={project.node.title} />}
		>
			<Project_card data={project.node} />
		</VerticalTimelineElement>
	));
	return (
		<div className={classes.timeline_wrapper}>
			<VerticalTimeline animate={false} className={classes.vertical_timeline} layout={'2-columns'}>
				{timeline_elements}
			</VerticalTimeline>
		</div>
	);
};

export default Timeline;
