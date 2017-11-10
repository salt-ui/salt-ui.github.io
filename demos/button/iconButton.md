---
order: 2
title: 图标按钮
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
                <IconButton onClick={this.handleClick}><Icon name="setting" /></IconButton>
              </div>
              <div className="demo-cell">
                <IconButton disabled onClick={this.handleClick}><Icon name="setting" /></IconButton>
              </div>
            </div>
            <div className="demo-row">
              <div className="demo-cell">
                <IconButton type="secondary" onClick={this.handleClick}><Icon name="setting" /></IconButton>
              </div>
              <div className="demo-cell">
                <IconButton type="secondary" disabled onClick={this.handleClick}><Icon name="setting" /></IconButton>
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