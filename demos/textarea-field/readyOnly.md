---
order: 0
title: 只读
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
      t3: ''
    };
  }

  handleChange(name, value) {
    console.log(value)
    this.setState({
      [name]: value
    });
  }


  render() {
    var t = this;
    return (
      <div>
        <Group.List title="不可修改">
          <TextareaField label="只读"
           value="不能更改" readOnly={true}/>
        </Group.List>
      </div>
    );
  }
}

ReactDOM.render(<TextareaFieldDemo />, mountNode);
```
