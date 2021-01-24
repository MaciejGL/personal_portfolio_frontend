import React from 'react';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';

const FadeIn = ({ children, delay, duration, parent }) => (
	<ScrollAnimation animateIn="animate__fadeIn" animateOnce delay={delay} dration={duration || 1}>
		{children}
	</ScrollAnimation>
);

FadeIn.prototype = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
	delay: PropTypes.number,
	duration: PropTypes.number,
};
export default FadeIn;
