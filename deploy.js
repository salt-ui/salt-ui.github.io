// BRANCH=`date +%Y.%m%d.%H%M%S`
// SALTUI=`tnpm view saltui version`
// npm run build
// git add .
// git commit -m v$BRANCH
// git push origin source-blue
// mkdir ~/SALT_UI_BUILD
// mv ./build/* ~/SALT_UI_BUILD/
// mv ./_site/* ~/SALT_UI_BUILD/
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
// git checkout source-bluee

const { spawnSync, execSync } = require('child_process');
// const SALTUIVER = require('saltui/package.json').version;

const BRANCH = new Date().toISOString();
const cmd = (str) => {
  console.log(`================${str}==================`);
  const strArr = str.split(' ');
  console.log(strArr);
  spawnSync(strArr[0], strArr.slice(1), { stdio: 'inherit' });
};

const deploy = (theme = 'blue') => {
  const lessPath = './site/theme/static';
  execSync(`cp -rf ${lessPath}/vars/${theme}.less ${lessPath}/var.less`);
  execSync('npm run build');
  execSync('git add .');
  execSync(`git commit -m v${BRANCH}`);
  execSync('git push origin source-blue');
  execSync('mkdir ../SALT_UI_BUILD');
  execSync('mv ./build/* ../SALT_UI_BUILD/');
  execSync('mv ./_site/* ../SALT_UI_BUILD/');
  execSync('git checkout master');
  execSync('git pull origin master');
  execSync('cp -rf ../SALT_UI_BUILD/* .');
  execSync(`cp -rf ../SALT_UI_BUILD/index.css ./${theme}.css`);
  execSync('rm -rf ../SALT_UI_BUILD');
  execSync('git add .');
  execSync(`git commit -m v${BRANCH}`);
  execSync('git push origin master');
  execSync('git checkout source-blue');
};

const themes = ['blue'];
themes.forEach((theme) => {
  deploy(theme);
});
