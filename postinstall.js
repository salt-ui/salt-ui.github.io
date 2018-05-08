const fs = require('fs');
const to = require('to-case');
const { runCmd } = require('./lib/util');

console.log('remove outdated documents');
runCmd('rm', ['-rf', './components/*']);
console.log('Copy documents...');
const docPath = './node_modules/saltui/docs';
const docs = fs.readdirSync(docPath);
docs.forEach((md) => {
  const dirPath = `./components/${to.slug(md.split('.')[0])}`;
  try {
    fs.statSync(dirPath);
  } catch (e) {
    runCmd('mkdir', [dirPath]);
  }
  runCmd('cp', ['-rf', `${docPath}/${md}`, `${dirPath}/index.md`]);
});

const mobileTemplatePath = './template.mobile.html';
const saltuiPkg = JSON.parse(fs.readFileSync('./node_modules/saltui/package.json'));

const mobileTemplate = fs.readFileSync(mobileTemplatePath, 'utf-8');

const newMobileTemplate = mobileTemplate.replace(/(saltui@)\d+.\d+.\d+/g, `$1${saltuiPkg.version}`);
fs.writeFileSync(mobileTemplatePath, newMobileTemplate);


runCmd('cp', ['-rf', './node_modules/salt-icon/README.md', './components/Icon/index.md']);
