import React from 'react';
import { Link } from 'gatsby';

// Components
import { Button, Typography } from '@material-ui/core';

// Styles
import classes from './Project_card.module.scss';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
	details: {
		backgroundColor: theme.palette.contrast.main,
		color: '#fff',
		'&:hover': {
			backgroundColor: '#fff',
			color: theme.palette.contrast.main,
			boxShadow: `0 0 0px 1px ${theme.palette.contrast.main}`,
		},
	},
	project_card_short_description: {
		paddingBottom: '20px',
	},
}));

const Project_card = ({ data }) => {
	const classes_Mui = useStyles();

	const path = data.title.replace(/ /g, '').toLowerCase();
	return (
		<div className={classes.project_card_container}>
			<img className={classes.project_card_image} src={data.image.publicURL} alt={data.title} />
			<Typography variant="h5">{data.title}</Typography>
			<Typography className={classes_Mui.project_card_short_description} variant="body1">
				{data.short_description}
			</Typography>
			<div className={classes.actions_container}>
				<Button variant="text" className={classes_Mui.details}>
					<Link to={`./${path}`}>Details</Link>
				</Button>

				<Button variant="text" className={classes_Mui.details}>
					<a href={data.live_preview}>Live</a>
				</Button>
			</div>
		</div>
	);
};

export default Project_card;
