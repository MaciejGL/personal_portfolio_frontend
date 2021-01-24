import React from 'react';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';

const FadeIn = ({ children, delay, duration, arrowUp }) => (
	<ScrollAnimation
		animateIn={arrowUp ? 'animate__fadeInUp' : 'animate__fadeIn'}
		animateOut={arrowUp && 'animate__fadeInDown'}
		animateOnce
		delay={delay}
		duration={duration || 1}
	>
		{children}
	</ScrollAnimation>
);

FadeIn.prototype = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
	delay: PropTypes.number,
	duration: PropTypes.number,
};
export default FadeIn;
