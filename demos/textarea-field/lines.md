---
order: 0
title: 多行文本
---



```jsx
import { Group, TextareaField } from 'saltui';

const { Component } = React;

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
        <Group.Head className="t-FS14 t-LH1_5 t-LH20 t-PT10 t-PB10 t-PL18">多行文本框</Group.Head>
        <Group.List>
          <TextareaField
            layout="h"
            label="俩字"
            minRows={2}
            maxRows={5}
            placeholder="设置2个行高"
            value={t.state.t2}
            tip={<p>这里有个tip<a href="http://www.taobao.com" target="_blank" rel="noopener noreferrer">这是个链接</a></p>}
            onChange={(value) => { t.handleChange('t2', value); }}
          />
        </Group.List>
        <Group.List>
          <TextareaField
            label="三个字" minRows={2} maxRows={5}
            placeholder="3个行高 最大5个行高"
            value={t.state.t1}
            onChange={(value) => { t.handleChange('t1', value); }}
          />
        </Group.List>

      </div>
    );
  }
}

ReactDOM.render(<TextareaFieldDemo />, mountNode);
```
