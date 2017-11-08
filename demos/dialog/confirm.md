---
order: 1
title: Confirm
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

  handleConfirm() {
    Dialog.confirm({
      title: '测试',
      locale: 'en_US',
      content: '我是测试内容我是测试内容我是测试内容我是测试内容我是测试内容我是测试内容我是测试内',
      onConfirm() {
        console.log('confirm confirm');
      },
      onCancel() {
        console.log('confirm cancel');
      },
    });
  }

  render() {
    const t = this;

    return (
      <div className="demoWrap">

        <Button key="confirm" className="demo" onClick={this.handleConfirm.bind(this)}>Confirm</Button>

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