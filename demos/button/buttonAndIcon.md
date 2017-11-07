---
order: 3
title: 按钮 + 图标
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
        <div classNmme="demo-section">
            <div className="section-content">
                <Button type="primary" onClick={this.handleClick}><Icon name="setting" />一级按钮</Button>
                <br />
                <Button type="secondary" onClick={this.handleClick}><Icon name="setting" />二级按钮</Button>
                <br />
                <Button type="minor" onClick={this.handleClick}><Icon name="setting" />次要按钮</Button>
                <br />
                <Button disabled><Icon name="setting" />失效按钮</Button>
                <br />
                <Button type="danger"><Icon name="setting" />危险按钮</Button>
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

.section-title {
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