import React from 'react';

// Components
import Layout from '../components/Layout';
import { Typography } from '@material-ui/core';
import SEO from '../components/SEO/SEO';

const contact = () => {
	return (
		<Layout>
			<SEO title="Contact" article="Contact" />
			<Typography variant="h1">Contact</Typography>
		</Layout>
	);
};

export default contact;
