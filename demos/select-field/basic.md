---
order: 0
title: 基础使用
---



```jsx
const { Component } = React;
const { SelectField, Group } = SaltUI;

const monthArray = [
  { value: 0, text: '一月' }, { value: 1, text: '二月' },
  { value: 2, text: '三月' }, { value: 3, text: '四月' },
  { value: 4, text: '五月' }, { value: 5, text: '六月' },
  { value: 6, text: '七月' }, { value: 7, text: '八月' },
  { value: 8, text: '九月' }, { value: 9, text: '十月' },
  { value: 10, text: '十一月' }, { value: 11, text: '十二月' },
];

class SelectFieldDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: null,
      value1: monthArray[6],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
  }

  handleChange(value) {
    this.setState({
      value: value
    });
  }

  handleChange1(value) {
    this.setState({
      value1: value
    });
  }

  render() {
    return (
      <Group>
        <Group.Head
          className="t-FS14 t-LH1_5 t-LH20 t-PT10 t-PB10 t-PL18"
        >
          滚动选择器演示
        </Group.Head>
        <Group.List>
          <SelectField
            label="没有默认值"
            options={monthArray}
            onSelect={this.handleChange}
            value={this.state.value}
            placeholder="请输入"
          />
          <SelectField
            label="有默认值"
            options={monthArray}
            onSelect={this.handleChange1}
            value={this.state.value1}
            tip="这里是tip"
          />
          <SelectField
            label="不可选"
            options={monthArray}
            value={this.state.value1}
            readOnly={true}
          />
        </Group.List>
      </Group>
    );
  }
}

ReactDOM.render(<SelectFieldDemo />, mountNode);
```
