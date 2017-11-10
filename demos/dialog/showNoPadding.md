---
order: 9
title: showNoPadding
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


  handleMultiLines() {
    Dialog.alert({
      title: '提示',
      content: '同学，你赢了！同学，你赢了！同学，你赢了！同学，你赢了！同学，你赢了！',
      onConfirm() {
        console.log('multi lines confirm');
      },
    });
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

  handleShow(stateProps, show) {
    this.setState({
      [stateProps]: show,
    });
  }

  render() {
    const t = this;

    return (
      <div className="demoWrap">

        <Button key="no-padding" className="demo" onClick={this.handleShow.bind(this, 'showNoPadding', true)}>showNoPadding</Button>

        <Dialog
          key="d-no-padding"
          show={this.state.showNoPadding}
          type="confirm"
          className="t-dialog-no-padding"
          onConfirm={() => { console.log('confirm'); this.handleShow('showNoPadding', false); }}
          onCancel={() => { console.log('cancel'); this.handleShow('showNoPadding', false); }}
        >
          <div style={{ fontSize: 0, lineHeight: 0 }}>
            <img
              src="https://img.alicdn.com/tfs/TB1auCSSXXXXXaJXXXXXXXXXXXX-295-374.png"
              alt="pic"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
              }}
            />
          </div>
        </Dialog>

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