// BRANCH=`date +%Y.%m%d.%H%M%S`
// SALTUI=`tnpm view saltui version`
// npm run build
// git add .
// git commit -m v$BRANCH
// git push origin source-blue
// mkdir ~/SALT_UI_BUILD
// mv ./build/* ~/SALT_UI_BUILD/
// git checkout master
// git pull origin master
// cp -rf ~/SALT_UI_BUILD/* .
// cp -rf ~/SALT_UI_BUILD/index.css ./blue.css
// rm -rf ~/SALT_UI_BUILD
// git add .
// git commit -m v$BRANCH
// git push origin master
// git tag v$SALTUI
// git push origin v$SALTUI
// git checkout source-blue

const { spawnSync } = require('child_process');
// const SALTUIVER = require('saltui/package.json').version;

const BRANCH = new Date().toISOString();
const cmd = (str) => {
  console.log(`================${str}==================`);
  const strArr = str.split(' ');
  spawnSync(strArr[0], strArr.slice(1));
};

const deploy = (theme = 'blue') => {
  const lessPath = './site/theme/static';
  cmd(`cp -rf ${lessPath}/vars/${theme}.less ${lessPath}/var.less`);
  cmd('npm run build');
  cmd(`git commit -m v${BRANCH}`);
  cmd('git push origin source-blue');
  cmd('mkdir ~/SALT_UI_BUILD');
  cmd('mv ./build/* ~/SALT_UI_BUILD/');
  cmd('git checkout master');
  cmd('git pull origin master');
  cmd('cp -rf ~/SALT_UI_BUILD/* .');
  cmd(`cp -rf ~/SALT_UI_BUILD/index.css ./${theme}.css`);
  cmd('rm -rf ~/SALT_UI_BUILD');
  cmd('git add .');
  cmd(`git commit -m v${BRANCH}`);
  cmd('git push origin master');
  cmd('git checkout source-blue');
};

const themes = ['blue'];
themes.forEach((theme) => {
  deploy(theme);
});
