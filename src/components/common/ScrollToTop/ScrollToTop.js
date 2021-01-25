import React, { useState } from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

// components
import { ArrowUpward } from '@material-ui/icons';

// styles
import classes from './ScrollToTop.module.scss';

const ScrollToTop = () => {
	const [showButton, setShowButton] = useState(false);

	window.addEventListener('scroll', () => {
		if (window.scrollY > 200 && !showButton) {
			setShowButton(true);
		} else if (window.scrollY <= 200 && showButton) {
			setShowButton(false);
		}
	});
	return (
		<button className={[classes.btn, showButton && classes.show].join(' ')} onClick={() => scrollTo('#top')}>
			<ArrowUpward />
		</button>
	);
};

export default ScrollToTop;
