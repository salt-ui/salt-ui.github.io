---
order: 0
title: Label文字长度测试
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
        <Group.List >
          <TextField
            label="标题"
            placeholder="请输入"
            value={t.state.t1}
            tip="这里是提示信息"
            onChange={(value) => { t.handleTextChange('t1', value); }}
          />
          <TextField
            label="仅限数字" placeholder="请输入"
            filter={value => t.numberFilter(value)}
            value={t.state.number}
            onBlur={(value) => { t.handleNumberBlur(value); }}
            onChange={(value) => { t.handleNumberChange(value); }}
          />
        </Group.List>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
