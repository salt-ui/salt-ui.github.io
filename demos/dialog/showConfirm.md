---
order: 5
title: Use show prop Confirm
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

        <Button key="show-confirm" className="demo" onClick={this.handleShow.bind(this, 'showConfirm', true)}>Use show prop Confirm</Button>

        <Dialog
          key="d-confirm"
          title="Absolute Confirm"
          show={this.state.showConfirm}
          type="confirm"
          onConfirm={() => { console.log('confirm confirm'); this.handleShow('showConfirm', false); }}
          onCancel={() => { console.log('cancel confirm'); this.handleShow('showConfirm', false); }}
        >
          {/* <textarea value={this.state.text} onChange={e => this.setState({ text: e.target.value })} />*/}
          <h3>{this.state.text}</h3>
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
  padding: 150px 15px 15px 15px;;
}
.demo{
  margin-bottom: 15px;
}
```