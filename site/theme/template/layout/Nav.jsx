import React from 'react';
import classnames from 'classnames';
import Select from 'uxcore/lib/Select2';
import Menu from 'uxcore/lib/Menu';
import Icon from 'uxcore/lib/Icon';
import { withRouter, Link } from 'react-router';

const { Option } = Select;

const nav = ({
  items,
  router,
  params,
}) => {
  const toPage = ({ key }) => router.push(key);
  const onSelect = (key) => router.push(`/components/${key}`);
  const selectedKeys = [];

  if (params.component) {
    selectedKeys.push(params.component === 'tingle-ui' ? '/components/tingle-ui' : '/components/tingle-button');
  } else {
    selectedKeys.push('/');
  }

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
