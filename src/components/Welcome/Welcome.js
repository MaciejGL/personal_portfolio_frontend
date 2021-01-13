import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Components
import { Typography } from '@material-ui/core';
import laptop_working from '../assets/laptop-working.json';
import Lottie from '../common/Lottie/Lottie';
import SocialMedia from '../SocialMedia/SocialMedia';

// Styles
import classes from './Welcome.module.scss';

const useStyles = makeStyles((theme) => ({
	alignLeft: {
		textAlign: 'left',
	},
}));

const Welcome = () => {
	const classes_Mui = useStyles();

	return (
		<div className={classes.welcome_container}>
			<div className={classes.animation_container}>
				<Lottie animation={laptop_working} />
			</div>
			<div className={classes.text_container}>
				<SocialMedia line />
				<Typography className={classes_Mui.textAlign} variant="h3">
					Hello there, I'm Mats.
				</Typography>
				<Typography variant="h4">Fullstack JavaScript Developer</Typography>
			</div>
		</div>
	);
};

export default Welcome;
