import React from 'react';
import DocumentTitle from 'react-document-title';
import classnames from 'classnames';
import Grid from 'uxcore/lib/Grid';
import Button from 'uxcore-button';

const { Row, Col } = Grid;

import Wrap from './layout/Wrap';
import Footer from './layout/Footer';



export default (props) => (
  <DocumentTitle title="SaltUI - Home">

    <Wrap {...props}>
      <div className="ui-home-bg">
        <img src="https://img.alicdn.com/tfs/TB1nITHSXXXXXcVaXXXXXXXXXXX-1050-772.png" className="ui-home-shadow" />
        <img src="https://img.alicdn.com/tfs/TB1RkjQSXXXXXXHaXXXXXXXXXXX-520-1042.png" className="ui-home-phone" />
        
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
          <Col md={8}>
            <div className="ui-home-feature-item">
              <div className="ui-home-feature-body">  
                <img src="https://img.alicdn.com/tfs/TB1_YjNSXXXXXaSXpXXXXXXXXXX-240-240.png" className="ui-home-feature-img" />
                <h3>指南</h3>
                <div className="ui-home-feature-intro">了解设计指南，帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品。</div>
              </div>
            </div>
          </Col>
          <Col md={8}>
            <div className="ui-home-feature-item">
              <div className="ui-home-feature-body">  
                <img src="https://img.alicdn.com/tfs/TB1ivL.SXXXXXcrXpXXXXXXXXXX-240-240.png" className="ui-home-feature-img" />
                <h3>组件</h3>
                <div className="ui-home-feature-intro">使用组件 Demo 快速体验交互细节；使用前端框架封装的代码帮助工程师快速开发。</div>
              </div>
            </div>
          </Col>
          <Col md={8}>
            <div className="ui-home-feature-item">
              <div className="ui-home-feature-body">  
                <img src="https://img.alicdn.com/tfs/TB1gvbISXXXXXb.aXXXXXXXXXXX-240-240.png" className="ui-home-feature-img" />
                <h3>资源</h3>
                <div className="ui-home-feature-intro">下载相关资源，用其快速搭建页面原型或高保真视觉稿，提升产品设计效率。</div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </Wrap>
  </DocumentTitle>
);

// <Grid fluid={true}>
//         <Row className="home-banner">
//           <Col md={14} >
//             <h1>高效、简洁的移动端 UI 组件库
//             </h1>
//             <p>钉钉官方合作</p>
//             <a className="start-btn" href="/components/tingle-avatar">Get Started</a>
//           </Col>
//           <Col md={10} >
//             <div className="bg-phone"></div>
//           </Col>
//         </Row>
//         <Row className="site-feature">
//           <Col md={8}>
//             <div className="feature-item">
//               <div className="feature-body">  
//                 <div className="feature-img img-intro"></div>
//                 <h3>指南</h3>
//                 <div className="intro">了解设计指南，帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品。</div>
//               </div>
//             </div>
//           </Col>
//           <Col md={8}>
//             <div className="feature-item">
//               <div className="feature-body">  
//                 <div className="feature-img img-comp"></div>
//                 <h3>组件</h3>
//                 <div className="intro">使用组件 Demo 快速体验交互细节；使用前端框架封装的代码帮助工程师快速开发。</div>
//               </div>
//             </div>
//           </Col>
//           <Col md={8}>
//             <div className="feature-item">
//               <div className="feature-body">  
//                 <div className="feature-img img-res"></div>
//                 <h3>资源</h3>
//                 <div className="intro">下载相关资源，用其快速搭建页面原型或高保真视觉稿，提升产品设计效率。</div>
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Grid>
//       <Footer />



