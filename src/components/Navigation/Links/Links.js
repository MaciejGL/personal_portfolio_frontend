import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Apps, ContactMail, Home } from '@material-ui/icons';
import { Typography, useMediaQuery, useTheme, Divider } from '@material-ui/core';
import LinkCustom from './FadeLink';
// Styles
import classes from './Links.module.scss';

const Links = ({ handleDrawer }) => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down('sm'));
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
	// adding specific classes to prevent flickering on initial load.
	const createLinks = (classname) =>
		links.map((el) => (
			<LinkCustom key={el.title} url={el.path} lenght={10} onClick={() => handleDrawer && handleDrawer(false)}>
				<div className={classes[classname]}>
					{matches && el.icon}
					<Typography variant="subtitle1">{el.title}</Typography>
				</div>
				{matches && <Divider />}
			</LinkCustom>
		));

	const mobileLinks = createLinks('inner_text_mobile');
	const desktopLinks = createLinks('inner_text_desktop');

	return <div className={classes.container}>{matches ? mobileLinks : desktopLinks}</div>;
};

Links.propTypes = {
	handleDrawer: PropTypes.func,
};

export default Links;
