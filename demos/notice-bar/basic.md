---
order: 0
title: 基本使用
---

```jsx
const { NoticeBar, Button } = SaltUI;

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }
  handleClose() {
    console.log(1);
    this.setState({
      visible: !this.state.visible,
    });
  }
  render() {
    const t = this;
    return (
      <div>
        <div className="notice-div">
          <NoticeBar
            className="noticeMessage"
            message={'这是一个message这是这是这是这是这是这是这是这是这是这是'}
            type="info"
            visible={this.state.visible}
            optionsType={'close'}
            onClose={() => {
              t.handleClose();
            }}

          /></div>
        <div className="notice-div">
          <NoticeBar
            className="noticeMessage"
            message={'这是一个message'}
            type="success"
            optionsType={'jumpto'}
            onClick={() => {
              console.log('1');
            }}
          />
        </div>
        <div className="notice-div"><NoticeBar className="noticeMessage" message={'这是一个message'} type="error" /></div>
        <div className="notice-div"><NoticeBar className="noticeMessage" message={'这是一个message'} closable={false} type="warning" /></div>
        <Button
          className="notice-div"
          onClick={() => {
            t.handleClose();
          }}
        >
          点我提示
        </Button>
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

.notice-div {
    margin-top:20px;   
}
```