---
order: 6
title: 按钮组
---
   


```jsx
const { Button, Icon } = SaltUI;

const {
  TextButton,
  IconButton,
  ButtonGroup,
} = Button;

class Demo extends React.Component {

  handleClick(evt) {
    console.log(this, evt.target);
  }

  render() {
    return (
      <div>
        <div className="demo-section">
          <h2 className="section-title">按钮组1: 跟随内容双按钮</h2>
          <div className="section-content">
            <Button.Group>
              <Button type="secondary" display="inline" onClick={this.handleClick}>取消</Button>
              <Button type="primary" display="inline" onClick={this.handleClick}>确认</Button>
            </Button.Group>
          </div>
        </div>

        <div className="demo-section">
          <h2 className="section-title">按钮组2: 跟随内容三按钮</h2>
          <div className="section-content">
            <ButtonGroup>
              <Button type="secondary" display="inline" onClick={this.handleClick}>加签</Button>
              <Button type="secondary" display="inline" onClick={this.handleClick}>拒绝</Button>
              <Button type="primary" display="inline" onClick={this.handleClick}>同意</Button>
            </ButtonGroup>
          </div>
        </div>

        <div className="demo-section">
          <h2 className="section-title">按钮组3: 贴底双按钮</h2>
          <div className="section-content">
            <ButtonGroup>
              <Button type="secondary" display="banner" onClick={this.handleClick}>拒绝</Button>
              <Button type="primary" display="banner" onClick={this.handleClick}>同意</Button>
            </ButtonGroup>
          </div>
        </div>

        <div className="demo-section">
          <h2 className="section-title">按钮组4: 贴底四按钮</h2>
          <div className="section-content">
            <ButtonGroup>
              <Button type="secondary" display="banner" onClick={this.handleClick}>提交</Button>
              <Button type="secondary" display="banner" onClick={this.handleClick}>退回</Button>
              <Button type="secondary" display="banner" onClick={this.handleClick}>拒绝</Button>
              <Button type="secondary" display="banner" onClick={this.handleClick}>更多</Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />, mountNode
);
```
````css
body {
    padding-top: 100px;
    background: #f2f2f2;
}

.demo-section { 
    padding: 20px 0;
}

.demo-section .section-title {
    padding: 8px;
}

.demo-section .section-content {
    max-width: 414px;
}

.demo-row {
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    -webkit-flex-direction: row;
    padding-bottom: 5px;
}

.demo-row .demo-cell {
    display: flex;
    justify-content: center;
    flex: 1;
}

````