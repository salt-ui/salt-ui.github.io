const path = require('path');
const commonConfig = require('./bisheng.common.config');


module.exports = Object.assign({}, commonConfig, {
  port: 8003,
  source: {
    demos: './demos',
    components: './components',
  },
  // source: [
  //   './demos',
  //   './components',
  // ],
  output: './build',
  theme: './site/theme',
  htmlTemplate: path.join(__dirname, '..', 'template.html'),
  doraConfig: {
    verbose: true,
  },
  pick: {
    trans(markdownData) {
      // console.log(markdownData.meta)
      return {
        meta: markdownData.meta,
        // description: markdownData.description,
      };
    },
  },
});
