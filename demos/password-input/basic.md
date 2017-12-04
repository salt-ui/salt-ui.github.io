---
order: 0
title: 基本使用
---

```jsx
import { Group, PasswordInput } from 'saltui';

class Demo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      decrypted: true,
    };
  }

  handleChange(value) {
    this.setState({
      value,
    });
  }

  handleDecryptedToggle(decrypted) {
    this.setState({
      decrypted,
    });
  }

  render() {
    return (
      <div>
        <Group.Head className="t-FS14 t-LH1_5 t-LH20 t-PT10 t-PB10 t-PL18">密码输入框测试</Group.Head>
        <Group.List>
          <PasswordInput
            hideIcon
            placeholder="请输入密码"
            value={this.state.value}
            decrypted={this.state.decrypted}
            onChange={(value) => { this.handleChange(value); }}
            onDecryptedChange={(decrypted) => { this.handleDecryptedToggle(decrypted); }}
          />
        </Group.List>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />, mountNode
);
```

```css
body {
  background-color: #f2f2f2;
}
```