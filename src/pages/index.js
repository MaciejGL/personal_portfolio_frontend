import * as React from 'react';
import { Helmet } from 'react-helmet';

// Components
import Layout from '../components/Layout';
import Welcome from '../components/Welcome/Welcome';
import About_me from '../components/About_me/About_me';
import Tech_stack from '../components/Tech_stack/Tech_stack';

// Styles
import classes from '../styles/IndexPage.module.scss';

const IndexPage = () => {
	return (
		<Layout>
			<Helmet>
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.8.2/devicon.min.css" />
			</Helmet>
			<div className={classes.homepage_container}>
				<Welcome />
				<About_me />
				<Tech_stack />
			</div>
		</Layout>
	);
};

export default IndexPage;
