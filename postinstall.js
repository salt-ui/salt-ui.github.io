const fs = require('fs');
const { spawn } = require('child_process');
const to = require('to-case');

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
