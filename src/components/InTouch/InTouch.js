import { Typography } from '@material-ui/core';
import React from 'react';

// Styles
import classes from './InTouch.module.scss';
import { useStyles_InTouch } from '../../styles/mui_styles';

const InTouch = () => {
	const classes_Mui = useStyles_InTouch();
	return (
		<div className={classes.container_full_width}>
			<div className={classes.container_text}>
				<Typography variant="h2" component="h1">
					Let's build something together.
				</Typography>
				<Typography className={classes_Mui.text} variant="body1">
					Would you like to know more? Do You have any questions? Or just want to connect? Do not hesitate to contact. I'm waiting to hear from You.
				</Typography>
				<Typography className={classes_Mui.email} variant="body1">
					m.glowacki01@gmail.com
				</Typography>
			</div>
			<div></div>
		</div>
	);
};

export default InTouch;
