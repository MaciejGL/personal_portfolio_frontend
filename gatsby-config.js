const path = require(`path`);
require('dotenv').config();
module.exports = {
	siteMetadata: {
		title: 'Maciej Glowacki - Portfolio',
		description: 'Personal Portfolio - Maciej Glowacki. Fullstack Javascript Developer. Developer from Poland, currently live in Norway, Oslo.',
		keywords: [
			'React',
			'Gatsby',
			'Jamstack',
			'Portfolio',
			'Maciej',
			'Glowacki',
			'Javascript',
			'Fullstack',
			'Developer',
			'Dev',
			'Strapi',
			'Netlify',
			'Blog',
			'Norway',
			'Oslo',
		],
		url: 'https://maciej-dev.com',
		image: '/images/portfolio_frame.jpg',

		lang: `en`,
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-material-ui',
			options: {
				stylesProvider: {
					injectFirst: true,
				},
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`Lato\:100,300,400,700`],
				display: 'swap',
			},
		},
		'gatsby-plugin-sass',
		'gatsby-plugin-react-helmet',
		`gatsby-plugin-smoothscroll`,
		'gatsby-plugin-netlify',
		`gatsby-plugin-transition-link`,
		{
			resolve: 'gatsby-source-strapi',
			options: {
				apiURL: process.env.CMS_URL,
				contentTypes: [
					// List of the Content Types you want to be able to request from Gatsby.
					'project',
					'stack-frontends',
					'stack-backends',
					'stack-tools',
				],
				queryLimit: 1000,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: './src/pages/',
			},
			__key: 'pages',
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Maciej Glowacki - Portfolio',
				short_name: 'Portfolio',
				start_url: '/',
				background_color: '#fff',
				theme_color: '#000',
				display: 'browser',
				icon: 'src/images/favicon-32x32.png',
				crossOrigin: `use-credentials`,
			},
		},
		{
			resolve: `gatsby-plugin-gtag`,
			options: {
				// your google analytics tracking id
				trackingId: `G-SYMZ01VC2B`,
				// Puts tracking script in the head instead of the body
				head: false,
				// enable ip anonymization
				anonymize: true,
			},
		},
	],
};
