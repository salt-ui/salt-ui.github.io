---
order: 2
title: No title
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


  handleTitle() {
    Dialog.alert({
      content: '我是测试内容我是测试内容',
      onConfirm() {
        console.log('no title confirm');
      },
    });
  }

  render() {
    const t = this;

    return (
      <div className="demoWrap">

        <Button key="notitle" className="demo" onClick={this.handleTitle.bind(this)}>No title</Button>

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