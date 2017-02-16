const path = require('path');
const processDemo = require('./process-demo');
const processDoc = require('./process-doc');


module.exports = (markdownData, config) => {
  const isDemo = /^demos\//i.test(path.dirname(markdownData.meta.filename));
  const isHistory = path.basename(markdownData.meta.filename) === 'HISTORY.md';
  if (isDemo) {
    return processDemo(markdownData);
  } else if (isHistory) {
    return markdownData;
  }
  return processDoc(markdownData);
}