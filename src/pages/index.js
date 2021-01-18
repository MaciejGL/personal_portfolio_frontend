import * as React from 'react';
import { Helmet } from 'react-helmet';

// Components
import Layout from '../components/Layout';
import Welcome from '../components/Homepage/Welcome/Welcome';
import About_me from '../components/Homepage/About_me/About_me';
import Tech_stack from '../components/Homepage/Tech_stack/Tech_stack';
import LatestProjects from '../components/LatestProjects/LatestProjects';
import InTouch from '../components/InTouch/InTouch';

const IndexPage = () => (
	<Layout>
		<Helmet>
			<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.8.2/devicon.min.css" />
		</Helmet>
		<Welcome />
		<About_me />
		<Tech_stack />
		<LatestProjects title="Latest Projects" />
		<InTouch />
	</Layout>
);

export default IndexPage;
