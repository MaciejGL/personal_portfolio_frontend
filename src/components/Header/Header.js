import React from 'react';

// Components
import Navigation from '../Navigation/Navigation';
// Styles
import classes from './Header.module.scss';

const Header = () => (
	<header id="top" className={classes.header}>
		<Navigation />
	</header>
);

export default Header;
