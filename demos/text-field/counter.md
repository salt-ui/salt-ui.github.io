---
order: 5
title: 计数器
---



```jsx
const { Group, TextField, Toast } = SaltUI;

const { LeftAddon, RightAddon, Count } = TextField;

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
          <TextField
            label="计数器" value={t.state.t1}
            onChange={(value) => { t.handleTextChange('t1', value); }}
          >
            <Count total={20} length={t.state.t1.length} />
          </TextField>
        </Group.List>

      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
