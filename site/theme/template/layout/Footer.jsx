import React from 'react';
import classnames from 'classnames';

export default class Footer extends React.PureComponent {
  render() {
    return <div className="site-footer">
    <div className="footer-right">
      © 2017 Alibaba, Inc.
    </div>
    <div className="footer-power">
      <span>CREATED BY</span>
      <img src="https://img.alicdn.com/tps/TB1YdwBPXXXXXbPXFXXXXXXXXXX-336-102.png" />
      <span>阿里巴巴信息平台用户体验</span>
    </div>
  </div>
  }
}