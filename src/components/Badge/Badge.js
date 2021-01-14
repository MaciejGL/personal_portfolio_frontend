import React from 'react';

// Components
import { Typography } from '@material-ui/core';

// Styles
import classes from './Badge.module.scss';

const Badge = ({ badge }) => {
	return (
		<div className={classes.badge_container}>
			<i className={badge.iconClass}></i>
			<Typography variant="body2" className={classes.badge_name}>
				{badge.name}
			</Typography>
		</div>
	);
};

export default Badge;
