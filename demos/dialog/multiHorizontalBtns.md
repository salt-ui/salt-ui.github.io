---
order: 6
title: Multi Horizontal Btns
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

  handleShow(stateProps, show) {
    this.setState({
      [stateProps]: show,
    });
  }

  render() {
    const t = this;

    return (
      <div className="demoWrap">

        <Button key="show-multi-btn" className="demo" onClick={this.handleShow.bind(this, 'showMultiBtns', true)}>Multi Horizontal Btns</Button>
       
        <Dialog
          show={this.state.showMultiBtns}
          title="多按钮title"
          btnDir="horizontal"
          buttons={[
            {
              content: '按钮1',
              callback: () => { console.log('click btn1'); this.handleShow('showMultiBtns', false); },
             
            },
            {
              content: '按钮2',
              callback: () => {
                console.log('click btn2');
                this.handleShow('showMultiBtns', false);
              },
            },
            {
              content: '按钮3',
              callback: () => {
                console.log('click btn3');
                this.handleShow('showMultiBtns', false);
              },
               // 设置 primary 展示为主要按钮样式(文本为品牌色)
              primary: true,
            },
          ]}
        >
          这是一个多水平按钮的弹窗
                    自定 buttons 和 btnDir 设置为 `horizontal`
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