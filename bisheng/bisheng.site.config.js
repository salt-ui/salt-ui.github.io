const path = require('path');
const commonConfig = require('./bisheng.common.config');


module.exports = Object.assign({}, commonConfig, {
  port: 8003,
  source: {
    demos: './demos',
    components: './components',
  },
  theme: './site/theme',
  htmlTemplate: path.join(__dirname, '..', 'template.html'),
  doraConfig: {
    verbose: true,
  },
  pick: {
    trans(markdownData) {
      return {
        meta: markdownData.meta,
      };
    },
  },
});
