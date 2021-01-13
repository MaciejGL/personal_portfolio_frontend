import React from 'react';
import Lottie from 'react-lottie';
import PropTypes from 'prop-types';

const CustomizedLottie = ({ animation, options, height, width }) => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animation,
	};

	return <Lottie options={options ? options : defaultOptions} height={height ? height : 600} width={width ? width : 600} />;
};

CustomizedLottie.propTypes = {
	animation: PropTypes.object.isRequired,
	options: PropTypes.object,
	height: PropTypes.number,
	width: PropTypes.number,
};

export default CustomizedLottie;
