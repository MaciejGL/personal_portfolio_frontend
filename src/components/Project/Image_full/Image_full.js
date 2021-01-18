import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

// Components
import { Paper } from '@material-ui/core';

// Styles
import classes from './Image_full.module.scss';

const Image_full = ({ publicURL, title, shadow, fluid, maxWidth }) => {
	return (
		<Paper elevation={shadow || 0} className={classes.image_full_container}>
			{fluid ? <Img fluid={fluid} /> : <img className={classes.image_full} style={{ maxWidth: maxWidth }} src={publicURL} alt={title} />}
		</Paper>
	);
};

Image_full.propTypes = {
	publicURL: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	shadow: PropTypes.number,
};

export default Image_full;
