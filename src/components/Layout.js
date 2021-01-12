import React from 'react';

// Components
import Header from './Header';
import { Paper } from '@material-ui/core';
// Styles
import classes from './Layout.module.scss';

const Layout = (props) => {
	return (
		<Paper square className={classes.wrapper}>
			<Header />
			<main className={classes.main}>{props.children}</main>
			<footer>footer</footer>
		</Paper>
	);
};

export default Layout;
