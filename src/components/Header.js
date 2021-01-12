import React from 'react';

// Components
import Navigation from './Navigation/Navigation';
import { Paper, Card } from '@material-ui/core';

// Styles
import classes from './Header.module.scss';

const Header = () => {
	return (
		<header className={classes.header}>
			<Navigation />
		</header>
	);
};

export default Header;
