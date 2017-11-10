---
order: 3
title: 计数器
---



```jsx
const { Component } = React;
const { Group, TextareaField } = SaltUI;
const { Count } = TextareaField;

class TextareaFieldDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      t1: '默认文案',
      t2: '曾经有一份真诚的爱情摆在我的面前，我没有珍惜，等到失去的时候才后悔莫及，人世间最痛苦的事莫过于此。曾经有一份真诚的爱情摆在我的面前，我没有珍惜，等到失去的时候才后悔莫及，人世间最痛苦的事莫过于此。曾经有一份真诚的爱情摆在我的面前，我没有珍惜，等到失去的时候才后悔莫及，人世间最痛苦的事莫过于此。曾经有一份真诚的爱情摆在我的面前，我没有珍惜，等到失去的时候才后悔莫及，人世间最痛苦的事莫过于此。曾经有一份真诚的爱情摆在我的面前，我没有珍惜，等到失去的时候才后悔莫及，人世间最痛苦的事莫过于此。曾经有一份真诚的爱情摆在我的面前，我没有珍惜，等到失去的时候才后悔莫及，人世间最痛苦的事莫过于此。',
      t3: '',
    };
  }

  handleChange(name, value) {
    console.log(value);
    this.setState({
      [name]: value,
    });
  }


  render() {
    const t = this;
    return (
      <div>
        <Group.List>
          <TextareaField
            label="计数器"
            value={t.state.t2}
            onChange={(value) => { t.handleChange('t2', value); }}
          >
            <Count total={300} length={t.state.t2.length} />
          </TextareaField>
        </Group.List>
      </div>
    );
  }
}

ReactDOM.render(<TextareaFieldDemo />, mountNode);
```
