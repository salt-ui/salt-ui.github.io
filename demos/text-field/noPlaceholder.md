---
order: 2
title: 只读没有placeholder
---



```jsx
import { Group, TextField } from 'saltui';

const numberRegExp = /^(\d+\.\d*)|(\d+\.)|\d+/;

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      t1: '',
      t2: '',
      number: '',
    };
  }

  handleTextChange(name, newValue) {
    this.setState({
      [name]: newValue,
    });
    if (newValue.length > 5) {
      this.setState({
        errMsg: '最多输入5个字',
      });
    } else {
      this.setState({
        errMsg: null,
      });
    }
  }

  handleNumberChange(newValue) {
    this.setState({
      number: newValue,
    });
  }

  numberFilter(originValue) {
    const matches = originValue.match(numberRegExp);
    let number = '';
    if (matches) {
      number = matches[0];
    }
    return number;
  }

  handleNumberBlur(originValue) {
    this.setState({
      number: originValue.replace(/\.$/, '').replace(/^0*([0-9]+)/, '$1'),
    });
  }

  render() {
    const t = this;
    return (
      <div>
        <Group.List>
          <TextField label="不可修改" value="这是一个只读的状态" readOnly />
        </Group.List>
        <Group.List>
          <TextField
            placeholder="请输入"
            label="上下结构"
            layout="v"
            value={t.state.t2}
            onChange={(value) => { t.handleTextChange('t2', value); }}
          />
        </Group.List>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
