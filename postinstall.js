const fs = require('fs');
const { spawn } = require('child_process');

const runCmd = (cmd, args = [], fn, stdoutFn) => {
  console.log(`Run CMD: ${cmd} ${args.join(' ')}`);
  const runner = spawn(cmd, args, {
    // keep color
    stdio: stdoutFn ? 'pipe' : 'inherit',
  });
  if (stdoutFn) {
    runner.stdout.on('data', (data) => {
      stdoutFn(data.toString());
    });
  }
  runner.on('close', (code) => {
    if (fn) {
      fn(code);
    }
  });
};

console.log('remove outdated documents');
runCmd('rm', ['-rf', './components/*']);
console.log('Copy documents...');
const pkg = JSON.parse(fs.readFileSync('./node_modules/@ali/tingle-ui/package.json'));
const deps = Object.keys(pkg.dependencies)
  .filter(dep => ['@ali/tingle-style', '@ali/tingle-icon'].indexOf(dep) === -1 && /^@ali\/tingle/.test(dep))
  .concat(['@ali/tingle-ui']);
deps
  .forEach((dep) => {
    const isMainProject = dep === '@ali/tingle-ui';
    ['HISTORY.md', 'package.json', 'README.md'].forEach((file) => {
      const dirPath = `./components/${dep.replace('@ali/', '')}`;
      try {
        fs.statSync(dirPath);
      } catch (e) {
        runCmd('mkdir', [dirPath]);
      }
      runCmd('cp', ['-rf', `./node_modules/${isMainProject ? '' : '@ali/tingle-ui/node_modules/'}${dep}/${file}`, file === 'README.md' ? `${dirPath}/index.md` : dirPath]);
    });
  });
console.log('Update tingle-ui version...');
const tingleVersion = pkg.version;
let temp = fs.readFileSync('./template.mobile.html').toString();
temp = temp.replace(/tingle\-ui\/(.+?)\//g, `tingle-ui/${tingleVersion}/`);
fs.writeFileSync('./template.mobile.html', temp);
