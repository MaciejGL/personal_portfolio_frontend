import React, { useCallback } from 'react';

// Components
import TransitionLink from 'gatsby-plugin-transition-link';

// styles
import classes from './Links.module.scss';

export const LinkFade = ({ children, url, onClick }) => {
	const exitTransition = {
		length: 0.5,
		zIndex: 2,
		trigger: ({ node }) => {
			exitTransition.exitTrigger(node);
			if (node) node.style.top = -window.pageYOffset + 'px';
			window.scrollTo({ top: -window.pageYOffset });
		},
		exitTrigger: useCallback((container) => {
			container.setAttribute('style', 'animation: fadeOut 0.8s ease forwards;');
		}, []),
	};

	const entryTransition = {
		zIndex: 1,
		trigger: ({ node }) => {
			entryTransition.entryTrigger(node);
		},
		entryTrigger: useCallback((container) => {
			container.setAttribute('style', 'animation: fadeIn 0.8s ease forwards;');
		}, []),
	};

	return (
		<TransitionLink to={url} exit={exitTransition} entry={entryTransition} activeClassName={classes.activeLink} onClick={onClick}>
			{children}
		</TransitionLink>
	);
};

export default LinkFade;
