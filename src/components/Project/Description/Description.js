import React from 'react';

// Components
import { Typography, useTheme, useMediaQuery } from '@material-ui/core';

// Styles
import classes from './Description.module.scss';
import { useStyles_Project } from '../../../styles/mui_styles';

const Description = ({ project }) => {
	const classes_Mui = useStyles_Project();
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down('sm'));

	const stack = project.stack_list.split(',').map((el) => (
		<Typography className={classes_Mui.project_stack_color} variant="body1" key={el}>
			{el}
		</Typography>
	));

	const createLink = (href, text) =>
		href && (
			<a className={classes.link} href={href} target="_blank" rel="noreferrer">
				<Typography className={classes_Mui.project_link} variant="body1">
					{text}
				</Typography>
			</a>
		);

	return (
		<div className={classes.project_description}>
			<Typography className={matches ? classes_Mui.project_title_sm : classes_Mui.project_title} variant="h1">
				{project.title}
			</Typography>
			<Typography className={classes_Mui.project_full_description} variant="body1">
				{project.full_description}
			</Typography>
			<div className={classes.tech_info_container}>
				<div className={classes.stack_list}>
					<Typography className={classes_Mui.tech_margin} variant="body1">
						Stack
					</Typography>
					{stack}
				</div>
				<div>
					<Typography className={classes_Mui.tech_margin} variant="body1">
						Code
					</Typography>
					{createLink(project.github_repository_backend, 'Backend')}
					{createLink(project.github_repository_frontend, 'Frontend')}
				</div>
				<div>
					<Typography className={classes_Mui.tech_margin} variant="body1">
						Live
					</Typography>
					{createLink(project.live_preview, 'View Site')}
				</div>
			</div>
		</div>
	);
};

export default Description;
