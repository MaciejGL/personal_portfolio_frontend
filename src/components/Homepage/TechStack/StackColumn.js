import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Typography } from '@material-ui/core';
import Badge from '../../common/Badge/Badge';
import FadeIn from '../../hoc/FadeIn';

// Styles
import classes from './TechStack.module.scss';
import { useStyles_Homepage } from '../../../styles/mui_styles';

const StackColumn = ({ nodes, context }) => {
	const classes_Mui = useStyles_Homepage();
	const badgeGenerator = (arr, Comp) =>
		arr.map((el, i) => (
			<FadeIn key={el.name} delay={75 * i}>
				<Comp badge={el} />
			</FadeIn>
		));

	return (
		<div className={classes.badge_column_container}>
			<i className={context.topBadge}></i>
			<Typography variant="h5" component="h2">
				{context.title}
			</Typography>
			<Typography className={classes_Mui.badge_column_text_center} variant="body1">
				{context.text}
			</Typography>
			<Typography className={classes_Mui.badge_column_technologies} variant="h6" component="h3">
				Technologies:
			</Typography>
			<div className={classes.badges_container}>{badgeGenerator(nodes, Badge)}</div>
		</div>
	);
};

StackColumn.propTypes = {
	nodes: PropTypes.array.isRequired,
	context: PropTypes.object.isRequired,
};

export default StackColumn;
