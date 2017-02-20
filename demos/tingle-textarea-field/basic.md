---
order: 0
title: 基础使用
---



```jsx
const { Component } = React;
const { Group, TextareaField } = SaltUI;

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
        <Group.Head className='t-FS14 t-LH1_5 t-LH20 t-PT10 t-PB10 t-PL18'>多行文本框</Group.Head>
        <Group.List>
          <TextareaField layout="v" label="俩字" minRows={2} maxRows={5}
            placeholder="设置2个行高"
            value={t.state.t2}
            onChange={t.handleChange.bind(t, 't2')}/>
        </Group.List>
        <Group.List>
          <TextareaField label="三个字" minRows={2} maxRows={5} 
            placeholder="3个行高 最大5个行高"
            value={t.state.t1}
            onChange={t.handleChange.bind(t, 't1')}/>
        </Group.List>
        <Group.List>
          <TextareaField layout="v" label="标题如果特别长，可以选择使用上下结构"
            placeholder="请输入"
            onChange={t.handleChange.bind(t, 't3')}/>
        </Group.List>
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
