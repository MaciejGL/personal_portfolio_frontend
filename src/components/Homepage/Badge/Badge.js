import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Typography } from '@material-ui/core';

// Styles
import classes from './Badge.module.scss';

const Badge = ({ badge, row }) => {
	return (
		<div className={row ? classes.row : classes.badge_container}>
			{badge.iconClass ? <i className={badge.iconClass}></i> : <img className={classes.badge_img} src={badge.img?.publicURL} alt={badge.name} />}
			<Typography variant="body2" className={classes.badge_name}>
				{badge.name}
			</Typography>
		</div>
	);
};

Badge.propTypes = {
	badge: PropTypes.object.isRequired,
};

export default Badge;
