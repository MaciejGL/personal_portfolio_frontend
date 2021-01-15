import React, { useState } from 'react';
// Components
import { Drawer, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Links from './Links/Links';
import { Spin as Hamburger } from 'hamburger-react';
import SocialMedia from '../common/SocialMedia/SocialMedia';

// Style
import classes from './Navigation.module.scss';

const useStyles = makeStyles((theme) => ({
	DrawerRoot: {
		'&.MuiDrawer-paper': {
			width: '66%',
			maxWidth: '300px',
			height: '100%',
			justifyContent: 'space-between',
		},
	},
}));

const Navigation = () => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down('sm'));
	const [isOpen, setOpen] = useState(false);
	const MuiClasses = useStyles();

	return (
		<nav className={classes.nav}>
			{matches ? (
				<div className={classes.hamburger}>
					<Hamburger rounded toggled={isOpen} toggle={setOpen} />
				</div>
			) : (
				<Links />
			)}
			{matches && (
				<Drawer anchor="left" classes={{ paper: MuiClasses.DrawerRoot }} open={isOpen} onClose={() => setOpen(false)}>
					<Links handleDrawer={setOpen} />
					<div className={classes.social_media_centered}>
						<SocialMedia />
					</div>
				</Drawer>
			)}
		</nav>
	);
};

export default Navigation;
