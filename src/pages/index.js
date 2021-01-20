import * as React from 'react';

// Components
import Layout from '../components/Layout';
import Welcome from '../components/Homepage/Welcome/Welcome';
import About_me from '../components/Homepage/About_me/About_me';
import Tech_stack from '../components/Homepage/Tech_stack/Tech_stack';
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
		<About_me />
		<Tech_stack />
		<LatestProjects title="Latest Projects" />
		<div className={classes.contactWrapper}>
			<InTouch />
			<ContactForm />
		</div>
	</Layout>
);

export default IndexPage;
