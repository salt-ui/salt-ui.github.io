const routes = [
  {
    path: '/',
    component: './template/Home',
    name: '首页',
  },
  {
    name: '组件',
    path: '/components/:component',
    component: './template/Component',
  },
  {
    name: 'demo',
    path: '/components/:component/:name',
    component: './template/Kitchen',
  },
];


module.exports = {
  routes,
};
