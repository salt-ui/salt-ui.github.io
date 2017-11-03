---
order: 1
title: 搭配Icon使用
---

```jsx
const { Menu, Icon, Badge, Button, Popup, Popover } = SaltUI;

const { MenuItem } = Menu;

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: [],
      openKeys: ['zhejiang'],
    };

    this.onClick = this.onClick.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onDeselect = this.onDeselect.bind(this);
  }

  // 测试回调
  onClick({ key, keyPath, item, domEvent }) {
    console.log('click： ', key, keyPath, item, domEvent);
    keyPath.shift();
    this.setState({ selectedKeys: [key] }, () => {
      if (this.popup) {
        this.popup.update(this.getContent());
      }
    });
  }

  onSelect({ item, key, selectedKeys }) {
    console.log('选中select ', item, key, selectedKeys);
    // this.setState({ selectedKeys });
  }

  onDeselect({ item, key, selectedKeys }) {
    console.log('取消选中select ', item, key, selectedKeys);
    // this.setState({ selectedKeys });
  }

  render() {
    const { selectedKeys, openKeys } = this.state;
    const style = {
      cursor: 'pointer',
      margin: '20px',
    };
    const testSpan = <span className="test">测试节点</span>;

    return (
      <div style={style}>
        <p className="menu-demo-title">使用icon</p>
        <Menu
          selectedKeys={selectedKeys}
          openKeys={openKeys}
          onClick={this.onClick}
          onSelect={this.onSelect}
          onDeselect={this.onDeselect}
          multiple
        >
          <MenuItem
            title={
              <div>
                <Icon name="lock" className="demo-icon" width={20} height={20} fill="rgba(0,0,0,0.8)" />
                <span>浙江1</span>
              </div>
            }
            key="zhejiang"
          >
            <MenuItem title="杭州" key="hangzhou" />
            <MenuItem title="温州" key="wenzhou" />
            <MenuItem title={testSpan} disabled key="lishui" />
          </MenuItem>
          <MenuItem
            title={
              <div>
                <Icon name="lock" className="demo-icon" width={20} height={20} fill="rgba(0,0,0,0.8)" />
                <span>江苏</span>
              </div>
            }
            key="jiangsu"
          />
        </Menu>
      </div>

    );
  }
}

ReactDOM.render(
  <Demo />, mountNode
);
```

```css
body {
  background-color: rgba(31,56,88,0.06);
}

.menu-demo-title {
  height: 56px;
  line-height: 56px;
  font-weight: 700;
  padding-left: 16px;
}

.t-menu-popup {
  min-width: 250px;
}

```