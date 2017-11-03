---
order: 0
title: basic
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
        <h1>按钮 Button</h1>
        <div className="demo-section">
          <h2 className="section-title">标准按钮</h2>
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
  background: #f2f2f2;
}

h1 {
    padding: 20px 8px;
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