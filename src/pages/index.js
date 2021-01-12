import * as React from 'react';

// Components
import Layout from '../components/Layout';

const IndexPage = () => {
	return (
		<Layout>
			<div id="top" style={{ height: '100vh', backgroundColor: '#aaa' }}>
				top
			</div>
			<div id="about-me" style={{ height: '100vh', backgroundColor: '#ccc' }}>
				about
			</div>
			<div id="portfolio" style={{ height: '100vh', backgroundColor: '#777' }}>
				portfolio
			</div>
			<div id="contact" style={{ height: '100vh', backgroundColor: '#222' }}>
				contact
			</div>
		</Layout>
	);
};

export default IndexPage;
