import React from 'react';
import classnames from 'classnames';
import Select from 'uxcore/lib/Select2';
import Menu from 'uxcore/lib/Menu';
import Icon from 'uxcore/lib/Icon';
import Tooltip from 'uxcore/lib/Tooltip';
import { withRouter } from 'react-router';

import { initTheme } from '../../../utils';

const { Option } = Select;

initTheme();

const nav = (props) => {
  const {
    items,
    router,
    params,
  } = props;
  // console.log(props);
  const toPage = ({ key }) => {
    if (/^\//.test(key)) {
      router.push(key);
    }
    if (key === 'history') {
      window.open('https://github.com/salt-ui/saltui/blob/master/CHANGELOG.md', '_blank');
    }
    if (key === 'start') {
      window.open('https://github.com/salt-ui/saltui/blob/master/README.md', '_blank');
    }
  };
  const onSelect = key => router.push(`/components/${key}`);
  const selectedKeys = [];
  const eleTheme = document.getElementById('theme');
  const eleUI = document.getElementById('ui-theme');

  if (params.component) {
    selectedKeys.push('/components/button');
  } else {
    selectedKeys.push('/');
  }

  const changeTheme = () => {
    const storage = window.localStorage;
    const theme = storage.getItem('theme') === 'blue' ? 'orange' : 'blue';

    storage.setItem('theme', theme);
    const url = params.component ? `/components/${params.component}?theme=${theme}` : `/?theme=${theme}`;
    router.push(url);
    if (location.port !== '8003') {
      eleTheme.setAttribute('href', `/${theme}.css`);
    }
    eleUI.setAttribute('href', `//g.alicdn.com/??platform/common/s/1.1/global/global.css,uxcore/uxcore-kuma/2.3.2/${theme}.min.css`);
  };

  return (
    <div className="ui-nav">
      <Tooltip overlay="切换主题" placement="bottom" trigger={['hover']}>
        <div
          className="fn-right ui-nav-theme"
          onClick={() => changeTheme()}
        >
          <i className="iconfont icon-theme" />
        </div></Tooltip>
      <div className="fn-right ui-nav-search">
        <Select
          dropdownClassName="kuma-select2-selected"
          style={{ width: 200 }}
          onSelect={onSelect}
        >
          {
            Object.keys(items)
              .map(item => <Option key={item} value={item} >{item}</Option>)
          }
        </Select>
        <Icon name="sousuo" className="ui-nav-search-icon" />
      </div>


      <div className="ui-logo fn-left fn-highlight">Salt UI</div>

      <Menu
        onClick={toPage}
        selectedKeys={selectedKeys}
        mode="horizontal"
        className={classnames({
          'ui-nav-main': true,
          'has-bd': selectedKeys[0] !== '/',
        })}
      >
        <Menu.Item key="/">首页</Menu.Item>
        <Menu.Item key="/components/button">组件</Menu.Item>
        <Menu.Item key="history">历史</Menu.Item>
        <Menu.Item key="start">开始使用</Menu.Item>
      </Menu>
    </div>
  );
};

export default withRouter(nav);
