import React from 'react';

// Styles
import classes from './Tech_stack.module.scss';
const Badge = ({ badge }) => {
	return (
		<div className={classes.badge_container}>
			<i className={badge.iconClass}></i>
			<p className={classes.badge_name}>{badge.name}</p>
		</div>
	);
};

export default Badge;
