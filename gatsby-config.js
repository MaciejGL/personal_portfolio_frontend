const path = require(`path`);
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
		{
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lato\:100,300,400,700`,
        ],
        display: 'swap'
      }
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
	],
};
