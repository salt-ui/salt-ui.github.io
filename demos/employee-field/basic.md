---
order: 0
title: 基本使用
---

```jsx
import { Group, EmployeeField } from 'saltui';

const testData = [{
  label: '范范',
  key: '023456',
  avatar: 'https://gw.alicdn.com/tfs/TB1D9YIkb9YBuNjy0FgXXcxcXXa-200-200.jpg',
}, {
  label: '笑笑',
  key: '023457',
}, {
  label: '闹闹',
  key: '023458',
}];

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: testData,
    };
  }

  onChange(val) {
    this.setState({
      value: val,
    });
  }

  render() {
    return (
      <Group>
        <Group.Head className="t-FS14 t-LH1_5 t-LH20 t-PT10 t-PB10 t-PL18">EmployeeField演示</Group.Head>
        <Group.List>
          <EmployeeField
            tip="这是一个 tip"
            label="选择人员"
            placeholder="请选择"
            value={this.state.value}
            onChange={(value) => { this.onChange(value); }}
          />
        </Group.List>
      </Group>
    );
  }
}

ReactDOM.render(
  <Demo />, mountNode
);
```

```css
body {
  background-color: #f2f2f2;
}
```