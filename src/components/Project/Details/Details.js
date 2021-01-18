import React from 'react';

// Components
import { Typography } from '@material-ui/core';
import Badge from '../../Homepage/Badge/Badge';

// Styles
import { useStyles_Project } from '../../../styles/mui_styles';
import classes from './Details.module.scss';

const Problem_and_solution = ({ title, data, stack }) => {
	const classes_Mui = useStyles_Project();

	const description = data.map((desc) => (
		<Typography key={desc.id} variant="body1" className={classes_Mui.description_paragraph}>
			{desc.description}
		</Typography>
	));

	const stackJSX = stack?.map((item) => <Badge badge={{ img: { publicURL: item.icon?.publicURL }, name: item.name }} key={item.id} row />);

	const desc = (
		<>
			<Typography variant="h3" className={classes_Mui.project_title}>
				{title}
			</Typography>
			{description}
		</>
	);

	const descWithStack = (
		<div className={classes.stack_explanation_container}>
			<div className={classes.stack_explanation_badges_container}>{stackJSX}</div>
			<div className={classes.stack_explanation_description_container}>
				<Typography variant="h3" className={classes_Mui.project_title}>
					{title}
				</Typography>
				{description}
			</div>
		</div>
	);

	return <section className={classes.description_container}>{stack ? descWithStack : desc}</section>;
};

export default Problem_and_solution;
