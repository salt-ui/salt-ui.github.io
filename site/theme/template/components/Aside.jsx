import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Menu from 'uxcore/lib/Menu';
import toPascalCase from 'to-pascal-case';

import { NAV_MAP } from '../../../constants';

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

const getData = (components) => {
  const data = {};
  Object.keys(components).map((compName) => {
    const mapItem = NAV_MAP[compName];
    if (mapItem) {
      const type = mapItem.type;
      if (!data[type]) {
        data[type] = [];
      }
      data[type].push({ ...mapItem, name: compName });
    }
  });

  return data;
};

class Aside extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: ['tingle-button'],
    };
    this.navListData = getData(props.components);
    this.handleClick = this.handleClick.bind(this);
  }


  componentWillReceiveProps(next) {
    if (next.params.component !== this.props.params.component) {
      if (next.params.component === 'tingle-ui') {
        this.setState({
          selectedKeys: [],
        });
      } else {
        this.setState({
          selectedKeys: [next.params.component],
        });
      }
    }
  }

  handleClick({ key }) {
    const { router } = this.props;
    this.setState({
      selectedKeys: [key],
    }, () => router.push(`/components/${key}`));
  }

  render() {
    const { selectedKeys } = this.state;
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
                value.map(({ name, zh }) => <MenuItem key={name}>{zh}&nbsp;{toPascalCase(name)}</MenuItem>)
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

