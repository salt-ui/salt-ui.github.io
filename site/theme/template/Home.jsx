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
  },
};

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
              <img src="https://img.alicdn.com/tfs/TB1TRbBSXXXXXaYapXXXXXXXXXX-550-496.png" className="arrow-0" />
              <img src="https://img.alicdn.com/tfs/TB1TRbBSXXXXXaYapXXXXXXXXXX-550-496.png" className="arrow-1" />
              <img src="https://img.alicdn.com/tfs/TB1TRbBSXXXXXaYapXXXXXXXXXX-550-496.png" className="arrow-2" />
            </div>
            <div className="ui-home-content">
              <p>高效、简洁的移动端UI组件库<br /><span>钉钉官方合作</span></p>
              <a href="/components/button"><Button type="outline">Get Started</Button></a>
              <a href="https://github.com/salt-ui/saltui"><Button type="white" ghost><i className="iconfont icon-github" /> Github</Button></a>
            </div>
          </div>
        </div>
        <div className="kuma-container-1180 layout-demo-container " style={{ position: 'relative' }}>
          <Row className="ui-home-feature" />
        </div>
        <Footer />
      </Wrap>
    </DocumentTitle>
  );
};

