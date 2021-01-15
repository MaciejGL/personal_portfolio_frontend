import React from 'react';

// Components
import { Typography } from '@material-ui/core';
import laptop_working from '../../assets/laptop-working.json';
import Lottie from '../../common/Lottie/Lottie';
import SocialMedia from '../../common/SocialMedia/SocialMedia';
import { ChevronLeftRounded, ChevronRightRounded } from '@material-ui/icons';

// Styles
import classes from './Welcome.module.scss';
import { useStyles_Homepage } from '../../../styles/mui_styles';

const Welcome = () => {
	const classes_Mui = useStyles_Homepage();

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
