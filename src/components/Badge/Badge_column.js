import React from 'react';

// Components
import { Typography } from '@material-ui/core';
import Badge from './Badge';

// Styles
import classes from './Badge.module.scss';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
	technologies: {
		margin: '2rem 0 0',
	},
	text_center: {
		margin: '10px 0 ',
		textAlign: 'center',
	},
});
const Badge_column = ({ nodes, context }) => {
	const classes_Mui = useStyles();
	const badgeGenerator = (arr, Comp) => arr.map((el) => <Comp badge={el} />);

	return (
		<div className={classes.badge_column_container}>
			<i className={context.topBadge}></i>
			<Typography variant="h6">{context.title}</Typography>
			<Typography className={classes_Mui.text_center} variant="body1">
				{context.text}
			</Typography>
			<Typography className={classes_Mui.technologies} variant="h6">
				Technologies:
			</Typography>
			<div className={classes.badges_container}>{badgeGenerator(nodes, Badge)}</div>
		</div>
	);
};

export default Badge_column;
