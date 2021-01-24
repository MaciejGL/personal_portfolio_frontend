import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

const query = graphql`
	{
		site {
			siteMetadata {
				defaultTitle: title
				defaultDescription: description
				siteUrl: url
				keywords
				lang
				defaultImage: image
			}
		}
	}
`;

const SEO = ({ title, description, image, article }) => {
	const { pathname } = useLocation();
	const { site } = useStaticQuery(query);

	const { defaultTitle, defaultDescription, siteUrl, defaultImage, lang } = site.siteMetadata;
	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		image: `${siteUrl}${image || defaultImage}`,
		url: `${siteUrl}${pathname}`,
	};
	return (
		<Helmet title={seo.title} htmlAttributes={{ lang }}>
			<meta name="description" content={seo.description} />
			<meta name="image" content={seo.image} />
			{seo.url && <meta property="og:url" content={seo.url} />}
			{(article ? true : null) && <meta property="og:type" content={article} />}
			{seo.title && <meta property="og:title" content={seo.title} />}

			{/* Facebook */}
			<meta property="og:type" content={'portfolio'} />
			<meta property="og:title" content={seo.title} />
			<meta property="og:url" content={seo.url} />
			<meta property="og:description" content={seo.description} />
			<meta property="og:image" content={seo.image} />
			<meta property="og:image:alt" content={seo.description}></meta>
			<link rel="preconnect" />
			<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.8.2/devicon.min.css" />
		</Helmet>
	);
};
SEO.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.string,
	article: PropTypes.string,
};

export default SEO;
