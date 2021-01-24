import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Paper } from '@material-ui/core';

// Styles
import classes from './ImageFull.module.scss';

const ImageFull = ({ publicURL, title, shadow, maxWidth }) => (
	<Paper elevation={shadow || 0} className={classes.image_full_container}>
		<img className={classes.image_full} style={{ maxWidth: maxWidth }} src={publicURL} alt={title} />
	</Paper>
);

ImageFull.propTypes = {
	publicURL: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	shadow: PropTypes.number,
	fluid: PropTypes.object,
	maxWidth: PropTypes.string,
};

export default ImageFull;
