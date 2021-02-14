import React from 'react';

// Components
import Layout from '../components/Layout';
import Timeline from '../components/Portfolio/Timeline/Timeline';
import SEO from '../components/SEO/SEO';
// import GithubCalendar from '../components/GithubCalendar/GithubCalendar';

const portfolio = () => (
	<Layout>
		<SEO title="Portfolio" article="Portfolio" />
		<Timeline />

		{/* New updates in GHC failing in fetching data */}
		{/* <GithubCalendar /> */}
	</Layout>
);

export default portfolio;
