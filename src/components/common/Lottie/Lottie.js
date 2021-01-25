import React from 'react';
import Lottie from 'react-lottie';
import PropTypes from 'prop-types';
import { useMediaQuery, useTheme } from '@material-ui/core';

const CustomizedLottie = ({ animation, options, height, width }) => {
	const theme = useTheme();
	const isMobileDevice = useMediaQuery(theme.breakpoints.down('sm'));

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animation,
	};

	return <Lottie options={options ? options : defaultOptions} isPaused={isMobileDevice} height={height && height} width={width && width} />;
};

CustomizedLottie.propTypes = {
	animation: PropTypes.object.isRequired,
	options: PropTypes.object,
	height: PropTypes.number,
	width: PropTypes.number,
};

export default CustomizedLottie;
