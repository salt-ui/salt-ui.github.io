---
order: 0
title: 基础使用
---



```jsx
import { Group, SwitchField } from 'saltui';

const { Component } = React;

class SwitchFieldDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      on: true,
      on1: false,
      on2: true,
      on3: false,
    };
  }

  handleChange(key, value) {
    this.setState({
      [key]: value,
    });
  }

  render() {
    return (
      <Group>
        <Group.List title="开关控件">
          <SwitchField
            label="默认选中"
            on={this.state.on}
            onChange={this.handleChange.bind(this, 'on')}
          />
          <SwitchField
            label="默认没选中"
            on={this.state.on1}
            onChange={this.handleChange.bind(this, 'on1')}
          />
          <SwitchField
            label="不可选"
            on={this.state.on2}
            readOnly
            onChange={this.handleChange.bind(this, 'on2')}
          />
          <SwitchField
            label="不可选"
            on={this.state.on3}
            readOnly
            onChange={this.handleChange.bind(this, 'on3')}
          />
        </Group.List>
      </Group>
    );
  }
}

ReactDOM.render(<SwitchFieldDemo />, mountNode);
```
