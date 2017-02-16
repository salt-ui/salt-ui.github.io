const JsonML = require('jsonml.js/lib/utils');
const path = require('path');

module.exports = function(markdownData){
  const dir = path.dirname(markdownData.meta.filename);
  let contentChildren = JsonML.getChildren(markdownData.content);

  // remove definition
  contentChildren = contentChildren.filter(jml => {
    return !(typeof jml === 'object' && jml.type === 'definition');
  });
  contentChildren = contentChildren.filter(jml => {
    let c = JsonML.getChildren(jml);
    return !/^\[[^\[\]]*\]/.test(c[0]);
  });

  const docStartIndex = contentChildren.findIndex(node => {
    return JsonML.getTagName(node) === 'h2' &&
      /^tl;dr/i.test(JsonML.getChildren(node)[0]);
  });

  let content = contentChildren;

  if (docStartIndex > -1) {
    content = content.slice(docStartIndex + 1);
  }

  // filter component name
  const componentName = dir.split('/').pop();
  const firstTagName = JsonML.getTagName(content[0]);
  if (/^h/.test(firstTagName) &&
      JsonML.getChildren(content[0])[0] === componentName) {
    content.shift();
  }

  markdownData.content = ['article'].concat(content);

  return markdownData;
};