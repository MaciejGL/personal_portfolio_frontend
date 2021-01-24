import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Facebook, GitHub, LinkedIn } from '@material-ui/icons';

// Styles
import classes from './SocialMedia.module.scss';

const SocialMedia = ({ line, animate }) => {
	const social_components = [
		{
			icon: <GitHub />,
			link: 'https://github.com/MaciejGL',
			label: 'Github',
		},
		{
			icon: <Facebook />,
			link: 'https://www.facebook.com/profile.php?id=100001079132075',
			label: 'Facebook',
		},
		{
			icon: <LinkedIn />,
			link: 'https://www.linkedin.com/in/maciej-glowacki1/',
			label: 'LinkedIn',
		},
	];

	return (
		<div className={classes.social_media_container}>
			{line && <div className={[classes.line, animate && classes.line_fade_in].join(' ')}></div>}
			{social_components &&
				social_components.map((el) => (
					<div key={el.link} className={[classes.icon_container, animate && classes.icon_fade_in].join(' ')}>
						<a aria-label={el.label} href={el.link} target="_blank" rel="noreferrer">
							{el.icon}
						</a>
					</div>
				))}
		</div>
	);
};

SocialMedia.propTypes = {
	line: PropTypes.bool,
	animate: PropTypes.bool,
};

export default SocialMedia;
