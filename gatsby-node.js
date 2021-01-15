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
	const projectTemplate = path.resolve('./src/templates/project.js');
	console.log(data.allStrapiProject.edges);
	data.allStrapiProject.edges.forEach((edge) => {
		const slug = edge.node.title.replace(/ /g, '').toLowerCase();
		createPage({
			path: `/portfolio/${slug}/`,
			component: slash(projectTemplate),
			context: {
				slug,
				strapiId: edge.node.strapiId,
			},
		});
	});
};
