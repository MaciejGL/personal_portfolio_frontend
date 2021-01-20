import React from 'react';

// Components
import { Typography } from '@material-ui/core';
import ProfilePicture from '../../../images/profile_rounded.png';

// Styles
import classes from './About_me.module.scss';
import { useStyles_Homepage } from '../../../styles/mui_styles';

const About_me = () => {
	const classes_Mui = useStyles_Homepage();
	return (
		<div className={classes.about_me_container} id="about_me">
			<div className={classes.picture_holder}>
				<div className={classes.blob}></div>
				<img src={ProfilePicture} alt="Maciej Glowacki Profile" />
			</div>
			<div className={classes.summary_container}>
				<Typography className={classes_Mui.paragraph} variant="body1">
					Working with teams, focusing on goals, implementing new ideas and consistant development is what motivates me and gives me most joy. Prior experience
					of work in stressful environments at a high pace comes well along with new skills and challenges I might be faced.
				</Typography>
				<Typography className={classes_Mui.paragraph} variant="body1">
					During last few years I had a great opportunity to colaborate with many skillfull developers. Projects we're working on boosted my career rapidly and
					placed me on path of a fullstack developer.
				</Typography>
			</div>
		</div>
	);
};

export default About_me;
