---
order: 0
title: 基础使用
---



```jsx
const { Component } = React;
const { Group, TextField } = SaltUI;

const numberRegExp = /^(\d+\.\d*)|(\d+\.)|\d+/;

class TextFieldDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      t1: '',
      t2: '',
      number: ''
    }
  }

  handleTextChange(name, newValue) {
    this.setState({
      [name]: newValue
    });
  }

  handleNumberChange(newValue) {
    this.setState({
      number: newValue
    });
  }

  numberFilter(originValue) {
    let matches = originValue.match(numberRegExp);
    let number = '';
    if (matches) {
      number = matches[0];
    }
    return number;
  }

  handleNumberBlur(originValue) {
    this.setState({
      number: originValue.replace(/\.$/, '').replace(/^0*([0-9]+)/, '$1')
    });
  }

  render() {
    let t = this;
    return (
      <div>
        <Group.Head className='t-FS14 t-LH1_5 t-LH20 t-PT10 t-PB10 t-PL18'>文本框</Group.Head>
        <Group.List >
          <TextField
            label="文本"
            placeholder="请输入"
            value={t.state.t1}
            onChange={t.handleTextChange.bind(t, 't1')}
          />
          <TextField
            label="仅限数字"
            placeholder="请输入"
            filter={t.numberFilter.bind(t)}
            value={t.state.number}
            onBlur={t.handleNumberBlur.bind(t)}
            onChange={t.handleNumberChange.bind(t)}
          />
        </Group.List>
        <Group.Head className='t-FS14 t-LH1_5 t-LH20 t-PT10 t-PB10 t-PL18'>不可修改</Group.Head>
        <Group.List>
          <TextField
            label="只读"
            value="不能更改"
            readOnly
          />
        </Group.List>
        <Group.Head className='t-FS14 t-LH1_5 t-LH20 t-PT10 t-PB10 t-PL18'>只读没有placeholder</Group.Head>
        <Group.List>
          <TextField
            label="不可修改"
            value=""
            readOnly
          />
        </Group.List>
        <Group.List>
          <TextField
            placeholder="请输入"
            label="上下结构"
            layout="v"
            value={t.state.t2}
            onChange={t.handleTextChange.bind(t, 't2')}
          />
        </Group.List>
      </div>
    );
  }
}

ReactDOM.render(<TextFieldDemo />, mountNode);
```
