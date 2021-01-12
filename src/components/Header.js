import React from 'react';
import { Link } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';
// Components

const Header = () => {
	return (
		<header>
			<nav>
				<Link to="#top">Home</Link>
				<Link to="#about-me">About Me</Link>
				<Link to="#portfolio">Portfolio</Link>
				<Link to="#contact">Contact</Link>
			</nav>
		</header>
	);
};

export default Header;
