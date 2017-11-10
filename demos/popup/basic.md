---
order: 0
title: 滑动方向
---

```jsx
const { Button, Popup } = SaltUI;

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      keyword: 1,
      visible: false,
    };
  }

  getContent() {
    const content = (
      <div className="demo-popup-container-2">
        <input
          value={this.state.keyword}
          onChange={(e) => {
            this.setState({ keyword: e.target.value }, () => {
              this.instance.update(this.getContent());
            });
          }}
        />
      </div>
    );
    return content;
  }

  render() {
    return (
      <div className="demo">
        <Button onClick={() => {
          Popup.show(<div className="demo-popup-container">我是弹出层</div>, {
            animationType: 'slide-up',
          });
        }}
        >默认向上划出</Button>
        <Button onClick={() => {
          Popup.show(<div className="demo-popup-container">我是弹出层</div>, {
            animationType: 'slide-down',
          });
        }}
        >向下划出</Button>
        <Button onClick={() => {
          Popup.show(<div className="demo-popup-container-2">我是弹出层</div>, {
            animationType: 'slide-right',
          });
        }}
        >向右划出</Button>
        <Button onClick={() => {
          Popup.show(<div className="demo-popup-container-2">我是弹出层</div>, {
            animationType: 'slide-left',
          });
        }}
        >向左划出</Button>
        <Popup
          content={
            <div>
              <input
                value={this.state.keyword}
                onChange={(e) => { this.setState({ keyword: e.target.value }); }}
              />
              <Button onClick={() => { this.setState({ visible: false }); }}>关闭 Popup</Button>
            </div>
          }
          animationType="slide-down"
          onMaskClick={() => { this.setState({ visible: false }); }}
          visible={this.state.visible}
        >
          {null}
        </Popup>
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
  padding: 10px;
}

.demo {
  margin-top: 100px;
}

.t-button {
  margin-bottom: 10px;
}

.demo-popup-container {
  height :400px;
  width: 100%;
  padding: 20px;
}

.demo-popup-container-2 {
  height: 100%;
  width: 280px;
  padding: 20px;
}

```