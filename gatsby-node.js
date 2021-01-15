const path = require(`path`);
const slash = require(`slash`);

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;

	const { data, errors } = await graphql(
		`
			query ProjectQuery {
				allStrapiProject {
					edges {
						node {
							strapiId
							title
						}
					}
				}
			}
		`
	);

	if (errors) {
		console.log('Error retrieving strapi data', errors);
	}
	const projectTemplate = path.resolve('./src/templates/Project.js');
	data.allStrapiProject.edges.forEach((edge) => {
		createPage({
			path: `/portfolio/${edge.node.title}/`,
			component: slash(projectTemplate),
			context: {
				slug: edge.node.title,
				strapiId: edge.node.strapiId,
			},
		});
	});
};
