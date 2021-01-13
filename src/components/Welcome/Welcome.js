import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Components
import img_AI from '../../images/ai.png';
import { Typography } from '@material-ui/core';

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
			<div className={classes.text_container}>
				<Typography className={classes_Mui.textAlign} variant="h3">
					Hello there, I'm <span className="contrast">M</span>aciej
				</Typography>
				<Typography variant="h4">
					Fullstack <span className="contrast">J</span>avaScript <span className="contrast">D</span>eveloper
				</Typography>
			</div>
		</div>
	);
};

export default Welcome;
