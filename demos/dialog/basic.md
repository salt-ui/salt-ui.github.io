---
order: 0
title: Alert
---

```jsx
const { Button, Dialog } = SaltUI;

class Demo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showAlert: true,
      showConfirm: false,
      showMultiBtns: false,
      showMultiBtnsVertical: false,
      showTransBg: false,
      showNoPadding: false,
      text: '测试文本',
    };
  }

  handleAlert() {
    Dialog.alert({
      title: '测试',

      content: '我是 Dialog.alert 的调用',
      onConfirm() {
        console.log('alert confirm');
      },
    });
  }

  render() {
    const t = this;

    return (
      <div className="demoWrap">
        <Button key="aler" className="demo" onClick={this.handleAlert.bind(this)}>Alert</Button>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />, mountNode
);
```

```css
.demoWrap{
  padding: 150px 15px 15px 15px;
}
.demo{
  margin-bottom: 15px;
}
```