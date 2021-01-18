import React from 'react';

// Components
import Layout from '../components/Layout';
import Timeline from '../components/Portfolio/Timeline/Timeline';
import InTouch from '../components/InTouch/InTouch';

const portfolio = () => {
	return (
		<Layout>
			<Timeline />
			<InTouch />
		</Layout>
	);
};

export default portfolio;
