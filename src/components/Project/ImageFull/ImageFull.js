import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

// Components
import { Paper } from '@material-ui/core';

// Styles
import classes from './ImageFull.module.scss';

const ImageFull = ({ publicURL, title, shadow, fluid, maxWidth }) => (
	<Paper elevation={shadow || 0} className={classes.image_full_container}>
		{fluid ? <Img fluid={fluid} /> : <img className={classes.image_full} style={{ maxWidth: maxWidth }} src={publicURL} alt={title} />}
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
