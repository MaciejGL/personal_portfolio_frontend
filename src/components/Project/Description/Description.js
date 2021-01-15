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
		fontSize: '1.2em',
		color: 'black',
		margin: '10px 0',
	},
}));

const Description = ({ project }) => {
	const classes_Mui = useStyles();

	const stack = project.stack_list.split(',').map((el) => (
		<Typography variant="body1" key={el}>
			{el}
		</Typography>
	));

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
						Links
					</Typography>
					{project.github_repository_backend && (
						<Typography variant="body1">
							<a className={classes.link} href={project.github_repository_backend}>
								Backend GitHub <ArrowRight />
							</a>
						</Typography>
					)}
					{project.github_repository_frontend && (
						<Typography variant="body1">
							<a className={classes.link} href={project.github_repository_frontend}>
								Frontend GitHub <ArrowRight />
							</a>
						</Typography>
					)}
					{project.live_preview && (
						<Typography variant="body1">
							<a className={classes.link} href={project.live_preview}>
								Live Site <ArrowRight />
							</a>
						</Typography>
					)}
				</div>
			</div>
		</div>
	);
};

export default Description;
