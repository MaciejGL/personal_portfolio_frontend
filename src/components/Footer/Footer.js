import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

// Component
import { Typography, Button, useMediaQuery, useTheme } from '@material-ui/core';
import { KeyboardArrowUp } from '@material-ui/icons';
import SocialMedia from '../common/SocialMedia/SocialMedia';

// Styles
import { useStyles_Footer } from '../../styles/mui_styles';
import classes from './Footer.module.scss';

const Footer = ({ children }) => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down('sm'));
	const classes_Mui = useStyles_Footer();

	const ScrollTopComp = !matches && (
		<Button className={classes_Mui.btn_scroll_top} onClick={() => scrollTo('#top')} startIcon={<KeyboardArrowUp />}>
			Top
		</Button>
	);

	return (
		<div className={classes.footer_container}>
			<div className={classes.centered}>
				<Typography className={classes_Mui.footer_typography} variant="body2">
					&copy; Maciej "Mats" Glowacki
				</Typography>
				<SocialMedia />
				{ScrollTopComp}
			</div>
		</div>
	);
};

export default Footer;
