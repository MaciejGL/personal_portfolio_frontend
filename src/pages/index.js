import * as React from 'react';

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
			<div className={classes.homepage_container}>
				<Welcome />
				<About_me />
				<Tech_stack />
			</div>
		</Layout>
	);
};

export default IndexPage;
