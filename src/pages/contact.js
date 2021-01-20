import React from 'react';

// Components
import Layout from '../components/Layout';
import { Typography } from '@material-ui/core';
import SEO from '../components/SEO/SEO';
import ContactForm from '../components/ContactForm/ContactForm';
import SocialMedia from '../components/common/SocialMedia/SocialMedia';

// Styles
import classes from '../styles/contact.module.scss';

const contact = () => {
	return (
		<Layout>
			<SEO title="Contact" article="Contact" />
			<section className={classes.contactWrapper}>
				<article className={classes.textWrapper}>
					<Typography variant="h2" component="h1">
						Contact
					</Typography>
					<Typography variant="body1">
						If You have any question or want to stay in touch, You will be able to reach me through social media or old fashioned contact form.
					</Typography>
					<SocialMedia line />
				</article>

				<article className={classes.formContainer}>
					<ContactForm />
				</article>
			</section>
		</Layout>
	);
};

export default contact;
