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
