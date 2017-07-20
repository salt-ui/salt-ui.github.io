import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import classnames from 'classnames';
import uppercamelcase from 'uppercamelcase';
import Menu from 'uxcore/lib/Menu';

import { typeOrder, NAV_MAP } from '../../../constants';
import { upperFirstCharactor, removeTinglePrefix } from '../../../utils';

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

const getData = (components) => {
  const data = {};
  Object.keys(components).map((compName) => {
    let mapItem = NAV_MAP[removeTinglePrefix(compName)];
    if(mapItem){
      const type = mapItem.type;
      if(!data[type]){
        data[type] = [];
      }
      data[type].push({ ...mapItem, name: compName });
    }
  });

  return data;
}

class Aside extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: ['tingle-button'],
    };
    this.navListData = getData(props.components);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ key, keyPath }) {
    const { router } = this.props;
    this.setState({
      selectedKeys: [key],
    }, () => router.push(`/components/${key}`));
  }

  componentWillReceiveProps(next) {
    if (next.params.component !== this.props.params.component) {
      if (next.params.component === 'tingle-ui') {
        this.setState({
          selectedKeys: []
        });
      } else {
        this.setState({
          selectedKeys: [next.params.component]
        });
      }
    }
  }

  render() {
    const { selectedKeys, openKeys } = this.state;
    return (
      <Menu
        onClick={this.handleClick}
        mode="inline"
        className="kuma-menu-none-border ui-side"
        defaultOpenKeys={['General', 'Display', 'Layout', 'Form', 'Other', 'Navigation', 'Feedback']}
        defaultSelectedKeys={['tingle-button']}
        selectedKeys={selectedKeys}
      >
        {
          Object.entries(this.navListData).map(([key, value]) => (
            <SubMenu key={key} title={key}>
              {
                value.map(({ name, zh }) => <MenuItem key={name}>{zh}&nbsp;{upperFirstCharactor(removeTinglePrefix(name))}</MenuItem>)
              }
            </SubMenu>
          )
          )
        }
      </Menu>
    );
  }
}

export default withRouter(Aside);



