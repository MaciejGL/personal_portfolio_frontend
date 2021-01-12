import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

// Components
import { Box, Button, Card, Paper, Typography } from '@material-ui/core';
import ProfilePicture from '../../images/profilePicture.jpg';

// Styles
import classes from './About_me.module.scss';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	paper: {
		width: '180px',
		height: '180px',
		// overflow: 'hidden',
		borderRadius: '50%',
	},
}));

const About_me = () => {
	const classes_Mui = useStyles();
	return (
		<div className={classes.about_me_container} id="about_me">
			<Button className={classes.btn} onClick={() => scrollTo('#about_me')}>
				Hey check here!
			</Button>
			<Box>
				<img className={classes.image} src={ProfilePicture} alt="Maciej Glowacki" />
				<Typography variant="h1">Who am I?</Typography>
				<Box>
					<Typography variant="body1">I'm a 21-year-old student at Purdue University currently studying web development and design.</Typography>
					<Typography variant="body1">
						As I've grown as a developer, I've worked alongside senior designers and developers who have raised my standards for whats expected of any web
						application.
					</Typography>
					<Typography variant="body1">
						Through these experiences, I've had the opportunity to create memorable products that are not only enjoyable to use but are written in code that's
						maintainable and easy to understand.
					</Typography>
				</Box>
			</Box>
		</div>
	);
};

export default About_me;
