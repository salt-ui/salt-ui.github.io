import React from 'react';
import DocumentTitle from 'react-document-title';
import classnames from 'classnames';
import Button from 'uxcore/lib/Button';
import Grid from 'uxcore/lib/Grid';

const { Row, Col } = Grid;

import Wrap from './layout/Wrap';
import Footer from './layout/Footer';

const imgs = {
  orange: {
    phone: 'https://img.alicdn.com/tfs/TB1RkjQSXXXXXXHaXXXXXXXXXXX-520-1042.png',
    feature1: 'https://img.alicdn.com/tfs/TB1_YjNSXXXXXaSXpXXXXXXXXXX-240-240.png',
    feature2: 'https://img.alicdn.com/tfs/TB1ivL.SXXXXXcrXpXXXXXXXXXX-240-240.png',
    feature3: 'https://img.alicdn.com/tfs/TB1gvbISXXXXXb.aXXXXXXXXXXX-240-240.png',
  },
  blue: {
    phone: 'https://img.alicdn.com/tfs/TB1kTcXSXXXXXaHXpXXXXXXXXXX-520-1042.png',
    feature1: 'https://img.alicdn.com/tfs/TB1JWnPSXXXXXcTXVXXXXXXXXXX-240-240.png',
    feature2: 'https://img.alicdn.com/tfs/TB11Br8SXXXXXXIXFXXXXXXXXXX-240-240.png',
    feature3: 'https://img.alicdn.com/tfs/TB14jzTSXXXXXbrXVXXXXXXXXXX-240-240.png',
  }
}

export default (props) => {
  let theme = 'blue';
  if (props.location.query.theme) {
    theme = props.location.query.theme;
  } else {
    theme = window.localStorage.getItem('theme') || 'blue';
  }

  return (
    <DocumentTitle title="SaltUI - Home">

      <Wrap {...props}>
        <div className="ui-home-bg">
          <img src="https://img.alicdn.com/tfs/TB1nITHSXXXXXcVaXXXXXXXXXXX-1050-772.png" className="ui-home-shadow" />
          <img src={imgs[theme].phone} className="ui-home-phone" />
          
          <div className="kuma-container-1180 layout-demo-container " style={{ position: 'relative' }}>
            <div className="ui-home-arrows">
              <img src="https://img.alicdn.com/tfs/TB1TRbBSXXXXXaYapXXXXXXXXXX-550-496.png" className="arrow-0"/>
              <img src="https://img.alicdn.com/tfs/TB1TRbBSXXXXXaYapXXXXXXXXXX-550-496.png" className="arrow-1"/>
              <img src="https://img.alicdn.com/tfs/TB1TRbBSXXXXXaYapXXXXXXXXXX-550-496.png" className="arrow-2"/>
            </div>
            <div className="ui-home-content">
              <p>高效、简洁的移动端UI组件库<br /><span>钉钉官方合作</span></p>
              <a href="/components/tingle-button"><Button type="outline">Get Started</Button></a>
              <a href="https://github.com/salt-ui/saltui"><Button type="white" ghost><i className="iconfont icon-github" /> Github</Button></a>
            </div>
          </div>
        </div>
        <div className="kuma-container-1180 layout-demo-container " style={{ position: 'relative' }}>
          <Row className="ui-home-feature">
            
          </Row>
        </div>
        <Footer />
      </Wrap>
    </DocumentTitle>
  )
};

// <Col md={8}>
//     <div className="ui-home-feature-item">
//       <div className="ui-home-feature-body">  
//         <img src={imgs[theme].feature1} className="ui-home-feature-img" />
//         <h3>指南</h3>
//         <div className="ui-home-feature-intro">了解设计指南，帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品。</div>
//       </div>
//     </div>
//   </Col>
//   <Col md={8}>
//     <div className="ui-home-feature-item">
//       <div className="ui-home-feature-body">  
//         <img src={imgs[theme].feature2} className="ui-home-feature-img" />
//         <h3>组件</h3>
//         <div className="ui-home-feature-intro">使用组件 Demo 快速体验交互细节；使用前端框架封装的代码帮助工程师快速开发。</div>
//       </div>
//     </div>
//   </Col>
//   <Col md={8}>
//     <div className="ui-home-feature-item">
//       <div className="ui-home-feature-body">  
//         <img src={imgs[theme].feature3} className="ui-home-feature-img" />
//         <h3>资源</h3>
//         <div className="ui-home-feature-intro">下载相关资源，用其快速搭建页面原型或高保真视觉稿，提升产品设计效率。</div>
//       </div>
//     </div>
//   </Col>




