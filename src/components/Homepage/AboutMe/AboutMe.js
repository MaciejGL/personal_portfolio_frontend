import React from 'react';

// Components
import { Typography } from '@material-ui/core';
import ProfilePicture from '../../../images/profile_rounded.jpeg';
import FadeIn from '../../hoc/FadeIn';

// Styles
import classes from './AboutMe.module.scss';
import { useStyles_Homepage } from '../../../styles/mui_styles';

const AboutMe = () => {
	const classes_Mui = useStyles_Homepage();
	return (
		<div className={classes.about_me_container} id="about_me">
			<div className={classes.picture_holder}>
				<div className={classes.blob}></div>
				<img className={classes.rounded_image} src={ProfilePicture} alt="Maciej Glowacki Profile" />
			</div>
			<div className={classes.summary_container}>
				<FadeIn>
					<Typography id="welcome_1" className={classes_Mui.paragraph} variant="body1">
						Results-driven Full Stack JavaScript developer graduated from School of Applied Technology. Passionate about developing user-friendly software
						applications. Recent experience proved me for the importance of being a good team player and focusing on constant progression. Seeking to assist a
						team to develop their product as full stack JS developer, as well as grow and improve my own skills as a coder.
					</Typography>
				</FadeIn>
				<FadeIn>
					<Typography className={classes_Mui.paragraph} variant="body1">
						Beside programming I'm a passionate Sushi Chef and gamer :)
					</Typography>
				</FadeIn>
			</div>
		</div>
	);
};

export default AboutMe;
