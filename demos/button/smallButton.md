---
order: 1
title: 按钮大小
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
            <div className="demo-row">
              <div className="demo-cell">
                <Button type="primary" size="small" display="inline">一级按钮</Button>
              </div>
              <div className="demo-cell">
                <Button type="primary" size="small" display="inline" disabled>一级按钮</Button>
              </div>
            </div>
            <div className="demo-row">
              <div className="demo-cell">
                <Button type="secondary" size="small" display="inline">二级按钮</Button>
              </div>
              <div className="demo-cell">
                <Button type="secondary" size="small" display="inline" disabled>二级按钮</Button>
              </div>
            </div>
            <div className="demo-row">
              <div className="demo-cell">
                <Button type="minor" size="small" display="inline">次要按钮</Button>
              </div>
              <div className="demo-cell">
                <Button type="minor" size="small" display="inline" disabled>次要按钮</Button>
              </div>
            </div>
            <div className="demo-row">
              <div className="demo-cell">
                <Button type="danger" size="small" display="inline">警示按钮</Button>
              </div>
              <div className="demo-cell">
                <Button type="danger" size="small" display="inline" disabled>警示按钮</Button>
              </div>
            </div>
            <div className="demo-row">
              <div className="demo-cell">
                <Button type="danger" size="small" display="inline">警示按钮</Button>
              </div>
              <div className="demo-cell">
                <Button type="danger" size="small" display="inline" disabled>警示按钮</Button>
              </div>
            </div>
            <div className="demo-row">
              <div className="demo-cell">
                <Button type="danger" size="small" display="inline"><Icon name="setting" />带图标</Button>
              </div>
              <div className="demo-cell">
                <Button type="danger" size="small" display="inline" disabled><Icon name="setting" />带图标</Button>
              </div>
            </div>
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