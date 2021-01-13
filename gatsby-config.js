module.exports = {
	siteMetadata: {
		title: 'Maciej Glowacki - Portfolio',
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
		'gatsby-plugin-sass',
		'gatsby-plugin-sharp',
		'gatsby-plugin-react-helmet',
		'gatsby-transformer-remark',
		'gatsby-transformer-sharp',
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
					'stack-language',
					'stack-frontend',
					'stack-backend',
					'stack-tools',
					'stack-other',
				],
				queryLimit: 1000,
			},
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
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: './src/pages/',
			},
			__key: 'pages',
		},
	],
};
