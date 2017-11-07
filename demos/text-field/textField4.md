---
order: 3
title: 带前缀
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
        <Group.Head className="t-FS14 t-LH1_5 t-LH20 t-PT10 t-PB10 t-PL18">前缀</Group.Head>
        <Group.List>
          <TextField
            label="前缀"
            value={t.state.t1}
            onChange={(value) => { t.handleTextChange('t1', value); }}
            placeholder="请输入"
          >
            <LeftAddon>
              <span>￥</span>
            </LeftAddon>
          </TextField>
        </Group.List>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
