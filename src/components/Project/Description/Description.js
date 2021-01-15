import React from 'react';

// Components
import { Typography } from '@material-ui/core';
import { ArrowRight } from '@material-ui/icons';

// Styles
import classes from './Description.module.scss';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	project_title: {
		fontWeight: 500,
	},
	project_full_description: {
		margin: '30px 0',
	},
	tech_margin: {
		fontWeight: 600,
		color: 'black',
		margin: '10px 0',
	},
	project_stack_color: {
		color: '#000',
	},
	project_link: {
		color: theme.palette.primary.main,
		transition: '0.2s',
		'&:hover': {
			color: theme.palette.contrast.main,
		},
	},
}));

const Description = ({ project }) => {
	const classes_Mui = useStyles();

	const stack = project.stack_list.split(',').map((el) => (
		<Typography className={classes_Mui.project_stack_color} variant="body1" key={el}>
			{el}
		</Typography>
	));

	const createLink = (href, text) =>
		href && (
			<a className={classes.link} href={href}>
				<Typography className={classes_Mui.project_link} variant="body1">
					{text}
				</Typography>
			</a>
		);

	return (
		<div className={classes.project_description}>
			<Typography className={classes_Mui.project_title} variant="h2">
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
