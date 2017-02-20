---
order: 0
title: 基础使用
---



```jsx
const { Component } = React;
const { Group, Switch } = SaltUI;

class SwitchDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      on1: true,
      on2: false,
      on3: false
    }
  }

  handleChange(from, on) {
    this.setState({
      [from]: on
    });
  }

  render() {
    return (
      <Group>
        <Group.Head>开启</Group.Head>
        <Group.List>
          <Switch
            on={this.state.on1}
            onChange={this.handleChange.bind(this, "on1")}
          />
        </Group.List>
        <Group.Head>关闭</Group.Head>
        <Group.List>
          <Switch
            on={this.state.on2}
            onChange={this.handleChange.bind(this, "on2")}
          />
        </Group.List>
        <Group.Head>只读</Group.Head>
        <Group.List>
          <Switch
            on={this.state.on3}
            readOnly
            onChange={this.handleChange.bind(this, "on3")}
          />
        </Group.List>
      </Group>
    );
  }
}

ReactDOM.render(<SwitchDemo />, mountNode);
```
