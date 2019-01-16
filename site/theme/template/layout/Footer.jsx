import React from 'react';
import classnames from 'classnames';

export default () => (
  <div className="ui-footer">
    <div className="fn-clear" style={{ height: 265 }}>
      <dl className="fn-left ui-footer-item">
        <dt>相关站点</dt>
        <dd><a href="http://uxco.re/">UX CORE (Web 组件库)</a></dd>
        <dd><a href="https://nowa-webpack.github.io/">Nowa (构建工具)</a></dd>
      </dl>
      <dl className="fn-left ui-footer-item">
        <dt>产品反馈</dt>
        <dd><a href="https://github.com/salt-ui/saltui/issues">组件问题反馈</a></dd>
      </dl>
      <dl className="fn-left ui-footer-item">
        <dt>使用帮助</dt>
        <dd className="ui-footer-qrcode">
          <img src="https://camo.githubusercontent.com/5b5667587467404fce0fa5bcd7b8372f354974b5/68747470733a2f2f696d672e616c6963646e2e636f6d2f7466732f54423137774e6265737249384b4a6a79304668585862666e7058612d3837372d313037382e6a7067" />
          <p>使用钉钉扫一扫<br/>加入问题反馈群</p>
        </dd>
      </dl>
    </div>
    <div className="ui-footer-hr" />
    <p className="ui-footer-right">© 2019 Alibaba, Inc. Powered by 企业智能事业部用户体验</p>
  </div>
);

/*export default class Footer extends React.PureComponent {
  render() {
    return <div className="site-footer">
    <div className="footer-right">
      © 2017 Alibaba, Inc.
    </div>
    <div className="footer-power">
      <span>CREATED BY</span>
      <img src="https://img.alicdn.com/tps/TB1YdwBPXXXXXbPXFXXXXXXXXXX-336-102.png" />
      <span>阿里巴巴企业智能事业部用户体验</span>
    </div>
  </div>
  }
}*/
