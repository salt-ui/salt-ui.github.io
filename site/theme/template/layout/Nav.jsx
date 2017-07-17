import React from 'react';
import classnames from 'classnames';
import Select from 'uxcore/lib/Select2';
import Menu from 'uxcore/lib/Menu';
import Icon from 'uxcore/lib/Icon';
import Tooltip from 'uxcore/lib/Tooltip';
import { withRouter, Link } from 'react-router';

// import { theme, changeTheme } from '../../index';
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
  const ele = document.getElementById('theme');

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
    
    const href = theme === 'blue' 
      // ? '//raw.githubusercontent.com/salt-ui/salt-ui.github.io/source-blue/build/index.css'
      ? 'http://alixux.org/saltui/blue.css'
      // : '//raw.githubusercontent.com/salt-ui/salt-ui.github.io/source-orange/build/index.css'
      : 'http://alixux.org/saltui/orange.css'
    ele.setAttribute('href', href);

  };

  return (
    <div className="ui-nav">

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
      <Tooltip overlay="切换主题" placement="bottom" trigger={['hover']}>
        <div className="fn-right ui-nav-theme"
          onClick={e => changeTheme()}
        >
        <i className="iconfont icon-theme" />
      </div></Tooltip>

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