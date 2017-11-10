---
order: 1
title: 手动控制关闭 Popup
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
          Popup.show(
            <div className="demo-popup-container-2">
              <div onClick={() => {
                Popup.hide();
              }}
              >点我关闭 popup</div>
            </div>, {
              maskClosable: false,
            });
        }}
        >手动控制关闭 Popup</Button>
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
body{
  background-color: #f2f2f2;
  padding: 10px;
}

.demo {
  margin-top: 100px;
}

body .t-button{
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