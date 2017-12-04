import { transform } from 'babel-standalone';
import { NAV_MAP } from './constants';

export const transformCode = (contents) => {
  try {
    const { code } = transform(contents.trim(), {
      presets: ['es2015', 'react', 'stage-2'],
      compact: true,
    });

    return { code };
  } catch (err) {
    console.warn(err.stack);
  }
};

export const upperFirstCharactor = word => word.slice(0, 1).toUpperCase() + word.slice(1);

export const removeTinglePrefix = word => word.slice(7);

export const mappingNavItem = (name) => {
  const newName = removeTinglePrefix(name);
  return NAV_MAP[newName].zh;
};

export const initTheme = () => {
  console.log('init');
  const eleTheme = document.getElementById('theme');
  const eleUI = document.getElementById('ui-theme');
  const storage = window.localStorage;
  let theme = storage.getItem('theme');

  if (!theme) {
    storage.setItem('theme', 'blue');
    theme = 'blue';
  }
  let isDev;

  __theme__webpack__placeholder__;

  eleTheme.setAttribute('href', `/${isDev ? 'index' : theme}.css`);
  // eleTheme.setAttribute('href', '/index.css');
  eleUI.setAttribute('href', `//g.alicdn.com/??platform/common/s/1.1/global/global.css,uxcore/uxcore-kuma/2.3.2/${isDev ? 'blue' : theme}.min.css`);


  return theme;
};

