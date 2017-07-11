
// require('./static/style.less');


let routes = [
  {
    path: '/',
    component: './template/Home',
    name: '首页',
  },
  {
    name: '组件',
    path: '/components/:component',
    component: './template/Component'
  },
  // {
  //   path: '/components',
  //   name: '组件',
  //   // component: './template/layout/Layout', 
    
  //   childRoutes: [
  //     {
  //       path: '/components/:component',
  //       component: './template/Component'
  //     },
  //   ]
  // },
  {
    name: 'demo',
    path: '/components/:component/:name',
    component: './template/Kitchen',
  },
];

module.exports = {
  home: './',
  sideNav: routes,
  routes: routes
};