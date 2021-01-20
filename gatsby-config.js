const path = require(`path`);
require('dotenv').config();
module.exports = {
	siteMetadata: {
		title: 'Maciej Glowacki - Portfolio',
		description: 'Personal Portfolio - Maciej Mats Glowacki. Fullstack Javascript Developer. Developer from Poland, currently live in Norway, Oslo.',
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
		url: 'https://nervous-goodall-0e0adc.netlify.app',
		image: '/images/profile_rounded.png',

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
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		'gatsby-plugin-sass',
		'gatsby-plugin-react-helmet',
		'gatsby-transformer-remark',
		`gatsby-plugin-smoothscroll`,
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: ['gatsby-remark-lottie'],
			},
		},
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
	],
};
