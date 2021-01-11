import React from 'react';
import { Link } from 'gatsby';

// Components

const Header = () => {
	return (
		<header>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/about-me">About Me</Link>
				<Link to="/portfolio">Portfolio</Link>
				<Link to="/contact">Contact</Link>
			</nav>
		</header>
	);
};

export default Header;
