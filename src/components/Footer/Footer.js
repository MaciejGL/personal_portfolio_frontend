import React from 'react';

// Component
import { Typography } from '@material-ui/core';
import SocialMedia from '../common/SocialMedia/SocialMedia';

// Styles
import { useStyles_Footer } from '../../styles/mui_styles';
import classes from './Footer.module.scss';

const Footer = () => {
	const classes_Mui = useStyles_Footer();

	return (
		<div className={classes.footer_container}>
			<div className={classes.centered}>
				<Typography className={classes_Mui.footer_typography} variant="body2">
					&copy; Maciej "Mats" Glowacki
				</Typography>
				<SocialMedia />
			</div>
		</div>
	);
};

export default Footer;
