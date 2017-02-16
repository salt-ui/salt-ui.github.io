const JsonML = require('jsonml.js/lib/utils');
const path = require('path');

function getCode(node) {
  return JsonML.getChildren(
    JsonML.getChildren(node)[0]
  )[0]
}

module.exports = function(markdownData){

  const contentChildren = JsonML.getChildren(markdownData.content);
  const codeIndex = contentChildren.findIndex(node => {
    return JsonML.getTagName(node) === 'pre' &&
      JsonML.getAttributes(node).lang === 'jsx';
  });

  markdownData.highlightedCode = contentChildren[codeIndex].slice(0, 2);
  const preview = [
    'pre', {
      lang: '__react',
    },
  ];
  const componentsPath = path.join(process.cwd(), 'components');
  preview.push([
    'code',
    getCode(contentChildren[codeIndex]),
  ]);
  markdownData.preview = preview;

  return markdownData;
};