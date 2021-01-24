import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Button, Typography, Paper } from '@material-ui/core';
import { WebAssetOutlined, DescriptionOutlined } from '@material-ui/icons';
import FadeLink from '../../Navigation/Links/FadeLink';

// Styles
import classes from './ProjectCard.module.scss';
import { useStyles_Project_card } from '../../../styles/mui_styles';

const ProjectCard = ({ data, shadow }) => {
	const classes_Mui = useStyles_Project_card();
	return (
		<div className={shadow ? [classes.project_card_container, classes.latest_projects].join(' ') : classes.project_card_container}>
			<Paper elevation={0}>
				<img className={classes.project_card_image} src={data.image_card.publicURL} alt={data.title} />
			</Paper>
			<Typography className={classes_Mui.project_card_title} variant="h5" component="h2">
				{data.title}
			</Typography>
			<Typography className={classes_Mui.project_card_short_description} variant="body1">
				{data.short_description}
			</Typography>
			<div className={classes.actions_container}>
				<FadeLink url={`/portfolio/${data.title}`}>
					<Button endIcon={<DescriptionOutlined />} variant="text" disableElevation color="primary" className={classes_Mui.details}>
						Details
					</Button>
				</FadeLink>

				<a href={data.live_preview} target="_blank" rel="noreferrer">
					<Button endIcon={<WebAssetOutlined />} variant="text" disableElevation color="primary" className={classes_Mui.details}>
						Live
					</Button>
				</a>
			</div>
		</div>
	);
};

ProjectCard.propTypes = {
	data: PropTypes.shape({
		image_card: PropTypes.objectOf(PropTypes.string.isRequired),
		title: PropTypes.string.isRequired,
		short_description: PropTypes.string.isRequired,
		live_preview: PropTypes.string.isRequired,
	}),
	shadow: PropTypes.bool,
};

export default ProjectCard;
