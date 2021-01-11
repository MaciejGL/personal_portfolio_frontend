import React from 'react';

// Components
import Header from './Header';

// Styles
import classes from './Layout.module.scss';

const Layout = (props) => {
	return (
		<div className={classes.wrapper}>
			<Header />
			<main className={classes.main}>{props.children}</main>
			<footer>footer</footer>
		</div>
	);
};

export default Layout;
