---
order: 0
title: 基本使用
---



```jsx
const { Note } = SaltUI;

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClose() {
    console.log('查看详情');
  }

  render() {
    return (
      <div>
        <Note message="当前年假余额10天" type="warning" onClose={this.handleClose.bind(this)} closeText="查看详情" />
        <Note message="当前年假余额10天" type="warning" onClose={this.handleClose.bind(this)} closeText="" />
        <Note message="当前年假余额10天" type="message" onClose={this.handleClose.bind(this)} closeText="" />
        <Note closable message="当前年假余额10天" type="warning" closeText="" />
        <Note closable message="当前年假余额10天" type="message" closeText="" />
        <Note closable message="当前年假余额10天" type="warning" closeText="关闭" />
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />, mountNode
);
```