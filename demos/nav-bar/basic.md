---
order: 0
title: 基本使用
---



```jsx
import { NavBar } from 'saltui';

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      className: '',
      title: '我是标题我是标题',
      rightText: '更多',
      isShow: true,
    };
  }
  handleOnLeftClick() {
    alert('返回事件');
  }
  handleOnRightClick() {
    alert('更多事件');
  }
  handleCloseViewClick() {
    alert('关闭webView事件');
  }
  render() {
    return (<div>
      <NavBar className={this.state.className} title={this.state.title} isShow={this.state.isShow} onLeftClick={this.handleOnLeftClick.bind(this)}
        onRightClick={this.handleOnRightClick.bind(this)} closeViewClick={this.handleCloseViewClick.bind(this)}
      />
    </div>);
  }
}

ReactDOM.render(
  <Demo />, mountNode
);
```