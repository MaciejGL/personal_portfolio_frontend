import React from 'react';
import { Link } from 'gatsby';
// Components
import { Apps, ContactMail, EmojiPeople, Home } from '@material-ui/icons';
// Styles
import classes from './Links.module.scss';
import { Box, Typography } from '@material-ui/core';

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

	return (
		<div className={classes.container}>
			{links.map((el) => (
				<Link key={el.title} to={el.path} activeClassName={classes.activeLink} onClick={() => props.handleDrawer && props.handleDrawer(false)}>
					<div className={classes['inner_text']}>
						{el.icon}
						<Typography variant="h3">{el.title}</Typography>
					</div>
				</Link>
			))}
		</div>
	);
};

export default Links;
