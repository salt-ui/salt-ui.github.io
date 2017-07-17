import React from 'react';
import classnames from 'classnames';
import Select from 'uxcore/lib/Select2';
import Menu from 'uxcore/lib/Menu';
import Icon from 'uxcore/lib/Icon';
import Tooltip from 'uxcore/lib/Tooltip';
import { withRouter, Link } from 'react-router';

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
  const toPage = ({ key }) => router.push(key);
  const onSelect = (key) => router.push(`/components/${key}`);
  const selectedKeys = [];
  const eleTheme = document.getElementById('theme');
  const eleUI = document.getElementById('ui-theme');
  // const curTheme = window.localStorage.getItem('theme') || 'orange';

  // eleTheme.setAttribute('href', `/${curTheme}.css`);
  // eleUI.setAttribute('href', `//g.alicdn.com/??platform/common/s/1.1/global/global.css,uxcore/uxcore-kuma/2.2.1/${curTheme}.min.css`);

  if (params.component) {
    selectedKeys.push(params.component === 'tingle-ui' ? '/components/tingle-ui' : '/components/tingle-button');
  } else {
    selectedKeys.push('/');
  }

  const changeTheme = () => {
    const storage = window.localStorage;
    let theme = storage.getItem('theme') === 'blue' ? 'orange' : 'blue';
    
    storage.setItem('theme', theme);
    const url = params.component ? `/components/${params.component}?theme=${theme}` : `/?theme=${theme}`;
    router.push(url);
   
    eleTheme.setAttribute('href', `/${theme}.css`);
    eleUI.setAttribute('href', `//g.alicdn.com/??platform/common/s/1.1/global/global.css,uxcore/uxcore-kuma/2.2.1/${theme}.min.css`);
  };

  return (
    <div className="ui-nav">
      <Tooltip overlay="切换主题" placement="bottom" trigger={['hover']}>
        <div className="fn-right ui-nav-theme"
          onClick={e => changeTheme()}
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
        <Icon name="sousuo" className="ui-nav-search-icon"/>
      </div>
      

      <div className="ui-logo fn-left fn-highlight">Salt UI</div>

      <Menu
        onClick={toPage}
        selectedKeys={selectedKeys}
        mode="horizontal"
        className={classnames({
          'ui-nav-main': true,
          'has-bd': selectedKeys[0] !== '/'
        })}
      >
        <Menu.Item key="/">首页</Menu.Item>
        <Menu.Item key="/components/tingle-button">组件</Menu.Item>
        <Menu.Item key="/components/tingle-ui">历史</Menu.Item>
      </Menu>
    </div>
  );
}

export default withRouter(nav);

// <div className={
//           classnames("fn-right ui-nav-theme", {
//             blue: theme !== 'blue',
//             orange: theme === 'blue',
//           })}
//           onClick={e => changeTheme()}
//         >