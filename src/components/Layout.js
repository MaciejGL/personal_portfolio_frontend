import React from 'react';
import { useMediaQuery, useTheme } from '@material-ui/core';

// Components
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Paper } from '@material-ui/core';
import ScrollToTop from './common/ScrollToTop/ScrollToTop';
// Styles
import classes from './Layout.module.scss';

const Layout = (props) => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('md'));

	return (
		<Paper square className={classes.wrapper}>
			<Header />
			<main className={classes.main}>{props.children}</main>
			<Footer />
			{matches && <ScrollToTop />}
		</Paper>
	);
};

export default Layout;
