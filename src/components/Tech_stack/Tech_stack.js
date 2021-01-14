import React from 'react';

// Components
import Badges_container from '../Badge/Badges_container';

// Styles
import classes from './Tech_stack.module.scss';

const Tech_stack = () => (
	<div className={classes.tech_stack_container}>
		<Badges_container />
	</div>
);

export default Tech_stack;
