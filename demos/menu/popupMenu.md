---
order: 3
title: 搭配PopUp使用
---

```jsx
import { Menu, Popover, Popup, Button } from 'saltui';

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

  getContent() {
    const { selectedKeys, openKeys } = this.state;
    const testSpan = <span className="test">测试节点</span>;
    return (
      <Menu
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        onClick={this.onClick}
        onSelect={this.onSelect}
        onDeselect={this.onDeselect}
        multiple
      >
        <MenuItem title="浙江" key="zhejiang">
          <MenuItem title="杭州" key="hangzhou" />
          <MenuItem title="温州" key="wenzhou" />
          <MenuItem title={testSpan} disabled key="lishui" />
        </MenuItem>
        <MenuItem title="江苏" key="jiangsu" />
      </Menu>
    );
  }

  handlePopup() {
    this.popup = Popup.show(
      this.getContent(),
      {
        animationType: 'slide-right',
        className: 't-menu-popup',
      }
    );
  }


  render() {
    const { selectedKeys, openKeys } = this.state;
    const style = {
      cursor: 'pointer',
      margin: '20px',
    };

    const menu1 = (
      <Menu
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        onClick={this.onClick}
        onSelect={this.onSelect}
        onDeselect={this.onDeselect}
        multiple
      >
        <MenuItem title="浙江" key="zhejiang" />
        <MenuItem title="江苏" key="jiangsu" />
        <MenuItem title="河北" key="hebei" />
      </Menu>
    );
    return (
      <div style={style}>
        <p className="menu-demo-title">和 popup 一起使用</p>
        <Button onClick={() => { this.handlePopup(); }}>操作</Button>
        <p className="menu-demo-title">和 popover 一起使用</p>
        <Popover overlay={menu1} mask overlayClassName="t-popover-menu">
          <a>点一点</a>
        </Popover>
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