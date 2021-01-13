import React from 'react';
// import scrollTo from 'gatsby-plugin-smoothscroll';

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
	return <div className={classes.about_me_container} id="about_me"></div>;
};

export default About_me;
