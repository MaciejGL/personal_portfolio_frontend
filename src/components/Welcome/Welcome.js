import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Components
import { Typography } from '@material-ui/core';
import laptop_working from '../assets/laptop-working.json';
import Lottie from '../common/Lottie/Lottie';
import SocialMedia from '../SocialMedia/SocialMedia';
import { ChevronLeftRounded, ChevronRightRounded } from '@material-ui/icons';

// Styles
import classes from './Welcome.module.scss';

const useStyles = makeStyles((theme) => ({
	h3: {
		margin: '10px 0',
		fontWeight: 400,
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
				<div className={classes.background_chevrons}>
					<ChevronLeftRounded />
					<ChevronRightRounded />
				</div>
				<SocialMedia line />
				<Typography className={classes_Mui.h3} variant="h3" component="h1">
					Hi there, I'm Mats.
				</Typography>
				<Typography className={classes_Mui.h3} variant="h3" component="h1">
					Fullstack JavaScript <span className="contrast">Developer</span>
				</Typography>
			</div>
		</div>
	);
};

export default Welcome;
