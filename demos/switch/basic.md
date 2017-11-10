---
order: 0
title: 基础使用
---



```jsx
const { Component } = React;
const { Switch } = SaltUI;

class SwitchDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      on1: true,
      on2: false,
      on3: false,
    };
  }

  handleChange(from, on) {
    this.setState({
      [from]: on,
    });
  }

  render() {
    return (
      <div className="demo">
        <div className="demo-item"><label className="label-txt">开关-off</label><Switch on={this.state.on1} onChange={this.handleChange.bind(this, 'on1')} /></div>
        <div className="demo-item"><label className="label-txt">开关-on</label><Switch on={this.state.on2} onChange={this.handleChange.bind(this, 'on2')} /></div>
        <div className="demo-item"><label className="label-txt">开关-disable-off</label><Switch on={this.state.on3} readOnly onChange={this.handleChange.bind(this, 'on3')} /></div>
        <div className="demo-item"><label className="label-txt">开关-disable-on</label><Switch on={this.state.on4} readOnly onChange={this.handleChange.bind(this, 'on4')} /></div>
      </div>
    );
  }
}

ReactDOM.render(<SwitchDemo />, mountNode);
```
```css
body {
    background-color: #f2f2f2;
}
.demo {
    background-color: #ffffff;
}
.demo-item {
    overflow: hidden;
    padding: 15px;
    padding-left: 0;
    margin-left: 15px;
    border-bottom: 1px solid rgba(31,56,88,0.1);
}
.demo-item > .label-txt {
    display: inline-block;
    font-size: 16px;
    height: 24px;
    line-height: 24px;
    padding: 0 1.5px;
    margin-top: 4px;
}
```