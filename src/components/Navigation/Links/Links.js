import React from 'react';
import { Link } from 'gatsby';
// Components
import { Apps, ContactMail, Home } from '@material-ui/icons';
import { Typography, useMediaQuery, useTheme, Divider } from '@material-ui/core';

// Styles
import classes from './Links.module.scss';

const Links = (props) => {
	const links = [
		{
			title: 'Home',
			icon: <Home />,
			path: '/',
		},
		{
			title: 'Portfolio',
			icon: <Apps />,
			path: '/portfolio',
		},
		{
			title: 'Contact',
			icon: <ContactMail />,
			path: '/contact',
		},
	];
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<div className={classes.container}>
			{links.map((el) => (
				<Link key={el.title} to={el.path} activeClassName={classes.activeLink} onClick={() => props.handleDrawer && props.handleDrawer(false)}>
					<div className={classes['inner_text']}>
						{matches && el.icon}
						<Typography variant="subtitle1">{el.title}</Typography>
					</div>
					{matches && <Divider />}
				</Link>
			))}
		</div>
	);
};

export default Links;
