import React from 'react';
import { Link } from 'gatsby';

// Components
import Layout from '../components/Layout';
import SEO from '../components/SEO/SEO';
import Lottie from '../components/common/Lottie/Lottie';
import animationJSON from '../components/assets/404.json';
import { Button } from '@material-ui/core';
import { ArrowLeft } from '@material-ui/icons';

// markup
const NotFoundPage = () => (
	<Layout>
		<SEO title="404" article="Website" />
		<div style={{ marginTop: '10rem', maxWidth: '600px' }}>
			<Lottie animation={animationJSON} />
		</div>
		<Link to={'/'}>
			<Button startIcon={<ArrowLeft />}>Go back to homepage</Button>
		</Link>
	</Layout>
);

export default NotFoundPage;
