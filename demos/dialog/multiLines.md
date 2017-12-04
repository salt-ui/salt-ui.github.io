---
order: 3
title: Multi lines
---

```jsx
import { Button, Dialog } from 'saltui';

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

  handleMultiLines() {
    Dialog.alert({
      title: '提示',
      content: '同学，你赢了！同学，你赢了！同学，你赢了！同学，你赢了！同学，你赢了！',
      onConfirm() {
        console.log('multi lines confirm');
      },
    });
  }

  render() {
    const t = this;

    return (
      <div className="demoWrap">

        <Button key="multi line" className="demo" onClick={this.handleMultiLines.bind(this)}>Multi lines</Button>

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