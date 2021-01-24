import React, { useCallback } from 'react';

// Components
import TransitionLink from 'gatsby-plugin-transition-link';

// styles
import classes from './Links.module.scss';

export const LinkFade = ({ children, url, onClick }) => {
	const exitTransition = {
		length: 0.8,
		zIndex: 2,
		trigger: ({ node }) => {
			exitTransition.exitTrigger(node);
			if (node) node.style.top = -window.pageYOffset + 'px';
			window.scrollTo({ top: -window.pageYOffset });
		},
		exitTrigger: useCallback((container) => {
			container.setAttribute('style', 'animation: fadeDownOut 0.8s cubic-bezier(0.83, 0, 0.17, 1) forwards;');
		}, []),
	};

	const entryTransition = {
		zIndex: 1,
		trigger: ({ node }) => {
			entryTransition.entryTrigger(node);
		},
		entryTrigger: useCallback((container) => {
			container.setAttribute('style', 'animation: fadeDownIn 0.8s cubic-bezier(0.83, 0, 0.17, 1) forwards;');
		}, []),
	};

	return (
		<TransitionLink to={url} exit={exitTransition} entry={entryTransition} activeClassName={classes.activeLink} onClick={onClick}>
			{children}
		</TransitionLink>
	);
};

export default LinkFade;
