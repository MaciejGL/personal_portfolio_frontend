import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Paper } from '@material-ui/core';

// Styles
import classes from './Image_full.module.scss';

const Image_full = ({ publicURL, title }) => (
	<Paper elevation={3} className={classes.image_full_container}>
		<img className={classes.image_full} src={publicURL} alt={title} />
	</Paper>
);

Image_full.propTypes = {
	publicURL: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default Image_full;
