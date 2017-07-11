module.exports = {

	// routes: [{
 //    path: '/',
 //    component: './template/Layout',
 //  }, {
 //    path: '/demos/:demo',
 //    // dataPath: '/demos/:demo',
 //    component: './template/Layout',
 //  }],

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
