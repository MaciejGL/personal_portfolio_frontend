import React from 'react';

const Badge = ({ badge }) => {
	return (
		<div>
			<i className={badge.iconClass}></i>
		</div>
	);
};

export default Badge;
