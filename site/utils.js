import { transform } from 'babel-standalone';
import { NAV_MAP } from './constants';

export const transformCode = (contents) => {
  
  try{
      const { code } = transform(contents.trim(), {
        presets: ['es2015', 'react', 'stage-2'],
        compact: true,
      });

      return { code }

  }catch(err){

    return { err: err.toString() }
  }

};

export const upperFirstCharactor = (word) => word.slice(0, 1).toUpperCase() + word.slice(1);

export const removeTinglePrefix = (word) => word.slice(7);

export const mappingNavItem = (name) => {
  const newName = removeTingle(name);
  return NAV_MAP[newName].zh;
};

export const initTheme = () => {
  const storage = window.localStorage;
  let theme = storage.getItem('theme');

  if (!theme) {
    storage.setItem('theme', 'orange');
    theme = 'orange';
  }

  return theme;
}

export const changeTheme = () => {
  const storage = window.localStorage;
  let theme = storage.getItem('theme');
  
  theme === 'blue' ? 'orange' : 'blue';
  storage.setItem('theme', theme);
  // window.location.reload();
  const ele = document.getElementById('theme');
  ele.setAttribute('href', 'css2.css');
  return theme;
}

