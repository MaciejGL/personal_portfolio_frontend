import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

// Components
import { Button, Typography, Paper } from '@material-ui/core';

// Styles
import classes from './Project_card.module.scss';
import { useStyles_Project_card } from '../../../styles/mui_styles';

const Project_card = ({ data, shadow }) => {
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
				<Link to={`/portfolio/${data.title}`}>
					<Button variant="text" color="primary" className={classes_Mui.details}>
						Details
					</Button>
				</Link>

				<a href={data.live_preview} target="_blank" rel="noreferrer">
					<Button variant="text" color="primary" className={classes_Mui.details}>
						Live
					</Button>
				</a>
			</div>
		</div>
	);
};

Project_card.propTypes = {
	data: PropTypes.shape({
		image_card: PropTypes.objectOf(PropTypes.string.isRequired),
		title: PropTypes.string.isRequired,
		short_description: PropTypes.string.isRequired,
		live_preview: PropTypes.string.isRequired,
	}),
	shadow: PropTypes.bool,
};

export default Project_card;
