import * as React from 'react';

// Components
import Layout from '../components/Layout';
import Welcome from '../components/Homepage/Welcome/Welcome';
import AboutMe from '../components/Homepage/AboutMe/AboutMe';
import TechStack from '../components/Homepage/TechStack/TechStack';
import LatestProjects from '../components/LatestProjects/LatestProjects';
import InTouch from '../components/InTouch/InTouch';
import ContactForm from '../components/ContactForm/ContactForm';
import SEO from '../components/SEO/SEO';

// Styles
import classes from '../styles/IndexPage.module.scss';

const IndexPage = () => (
	<Layout>
		<SEO />
		<Welcome />
		<AboutMe />
		<div className={classes.tech_stack_container}>
			<TechStack />
		</div>
		<LatestProjects title="Latest Projects" />
		<div className={classes.contactWrapper}>
			<InTouch />
			<ContactForm />
		</div>
	</Layout>
);

export default IndexPage;
