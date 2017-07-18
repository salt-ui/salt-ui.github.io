module.exports = {

	routes: [{
		path: '/',
		component: './template/Layout',
		childRoutes: [{ 
			path: '/demos/:demo/:name', 
			component: './template/Layout',
		}]
		},
	],
};
