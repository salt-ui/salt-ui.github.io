
// require('./static/style.less');


// export const changeTheme = () => {
//   const storage = window.localStorage;
//   theme = theme === 'blue' ? 'orange' : 'blue';
//   storage.setItem('theme', theme);

//   const ele = document.getElementById('theme');
//   ele.setAttribute('href', 'css2.css');
//   return theme;
// }


const routes = [
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
  {
    name: 'demo',
    path: '/components/:component/:name',
    component: './template/Kitchen',
  },
];


module.exports = {
  routes
};