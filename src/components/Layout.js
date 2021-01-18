import React from 'react';

// Components
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Paper } from '@material-ui/core';
// Styles
import classes from './Layout.module.scss';

const Layout = (props) => (
	<Paper square className={classes.wrapper}>
		<Header />
		<main className={classes.main}>{props.children}</main>
		<Footer />
	</Paper>
);

export default Layout;
