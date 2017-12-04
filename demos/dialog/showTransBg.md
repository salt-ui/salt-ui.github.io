---
order: 8
title: showTransBg
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

  handleShow(stateProps, show) {
    this.setState({
      [stateProps]: show,
    });
  }

  render() {
    const t = this;

    return (
      <div className="demoWrap">

        <Button key="show-trans" className="demo" onClick={this.handleShow.bind(this, 'showTransBg', true)}>showTransBg</Button>

        <Dialog
          content={<img style={{ width: '100%' }} src="https://img.alicdn.com/tfs/TB1YhbHQpXXXXcNapXXXXXXXXXX-546-506.png" alt="图片" />}
          show={this.state.showTransBg}
          transparentMode
          onConfirm={() => { this.handleShow('showTransBg', false); console.log('transparent confirm'); }}
        />

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