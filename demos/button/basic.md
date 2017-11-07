---
order: 0
title: 按钮类型
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
          <div className="section-content">
            <Button type="primary" onClick={this.handleClick}>一级按钮</Button>
            <br />
            <Button type="secondary" onClick={this.handleClick}>二级按钮</Button>
            <br />
            <Button type="minor" onClick={this.handleClick}>次要按钮</Button>
            <br />
            <Button type="danger">警示按钮</Button>
            <br />
            <Button loading>加载中</Button>
            <br />
            <Button disabled>失效按钮</Button>
            <br />
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
}

.demo-row .demo-cell {
    flex: 1;
}

````