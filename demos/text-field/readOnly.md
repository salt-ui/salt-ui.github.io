---
order: 1
title: 只读
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
    return (
      <div>
        <Group.List>
          <TextField label="只读" value="不能更改\n不能更改" readOnly />
        </Group.List>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
