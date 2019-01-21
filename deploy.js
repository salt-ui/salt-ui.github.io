// TODO: not used now, try to fix the issue that files cannot be found

const { spawnSync } = require('child_process');
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
  cmd(`cp -rf ${lessPath}/vars/${theme}.less ${lessPath}/var.less`);
  cmd('npm run build');
  cmd('ls -al ./build');
  console.log('build finished');
  setTimeout(() => {
    console.log('start deploy');
    cmd('git add .');
    cmd(`git commit -m v${BRANCH}`);
    cmd('git push origin source-blue');
    cmd('mkdir ../SALT_UI_BUILD');
    cmd('mv ./build/* ../SALT_UI_BUILD/');
    cmd('mv ./_site/* ../SALT_UI_BUILD/');
    cmd('git checkout master');
    cmd('git pull origin master');
    cmd('cp -rf ../SALT_UI_BUILD/* .');
    cmd(`cp -rf ../SALT_UI_BUILD/index.css ./${theme}.css`);
    cmd('rm -rf ../SALT_UI_BUILD');
    cmd('git add .');
    cmd(`git commit -m v${BRANCH}`);
    cmd('git push origin master');
    cmd('git checkout source-blue');
  }, 5000);
};

const themes = ['blue'];
themes.forEach((theme) => {
  deploy(theme);
});
