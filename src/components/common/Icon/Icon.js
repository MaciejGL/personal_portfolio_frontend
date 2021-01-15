import React from 'react';
import PropTypes from 'prop-types';

// Styles
import classes from './Icon.module.scss';

const Icon = ({ path, alt }) => {
	return (
		<div className={classes.icon_container}>
			<img className={classes.icon} src={path} alt={alt} />
		</div>
	);
};

Icon.propTypes = {
	path: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
};

export default Icon;
