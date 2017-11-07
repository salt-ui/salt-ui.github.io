---
order: 5
title: 通栏按钮
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
             <div
               className="section-content"
               style={{ backgroundColor: 'rgba(31,56,88,0.06)', padding: '50px 0 100px 0' }}
             >
               <Button type="primary" display="banner" onClick={this.handleClick}>通栏一级按钮</Button> <br />
               <Button type="secondary" display="banner" onClick={this.handleClick}>通栏二级按钮</Button> <br />
               <Button type="minor" display="banner" onClick={this.handleClick}>通栏次级按钮</Button> <br />
               <Button type="primary" display="banner" onClick={this.handleClick}>
                 <Icon name="setting" />通栏按钮+图标
               </Button>
               <br />
               <Button type="primary" display="banner" disabled onClick={this.handleClick}>通栏按钮 不可用</Button>
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