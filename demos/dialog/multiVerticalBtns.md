---
order: 7
title: Multi Vertical Btns
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

        <Button key="show-multi-btn-vertical" className="demo" onClick={this.handleShow.bind(this, 'showMultiBtnsVertical', true)}>Multi Vertical Btns</Button>

        <Dialog
          key="d-multi-btns-horizontal"
          title="Multi Btns"
          content={<div>Content Content Content</div>}
          show={this.state.showMultiBtnsVertical}
          onConfirm={() => { this.setState({ showMultiBtns: false }); }}
          onCancel={() => { this.setState({ showMultiBtns: false }); }}
          buttons={[
            {
              content: '按钮1',
              primary: true,
              callback: () => { this.handleShow('showMultiBtnsVertical', false); console.log('click btn 1'); },
            },
            {
              content: '按钮2',
              primary: false,
              callback: () => { this.handleShow('showMultiBtnsVertical', false); console.log('click btn 2'); },
            },
            {
              content: '按钮3',
              primaty: false,
              callback: () => { this.handleShow('showMultiBtnsVertical', false); console.log('click btn 3'); },
            },
          ]}
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