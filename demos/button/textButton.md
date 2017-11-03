---
order: 4
title: textButton
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
            <h2 className="section-title">文字按钮</h2>
            <div className="section-content">
                <div className="demo-row">
                <div className="demo-cell">
                    <TextButton size="small" onClick={this.handleClick}>文字按钮(小)</TextButton>
                </div>
                <div className="demo-cell">
                    <TextButton size="small" disabled onClick={this.handleClick}>文字按钮(小)</TextButton>
                </div>
                </div>
                <div className="demo-row">
                <div className="demo-cell">
                    <TextButton onClick={this.handleClick}>文字按钮(中)</TextButton>
                </div>
                <div className="demo-cell">
                    <TextButton disabled onClick={this.handleClick}>文字按钮(中)</TextButton>
                </div>
                </div>
                <div className="demo-row">
                <div className="demo-cell">
                    <TextButton size="large" onClick={this.handleClick}>文字按钮(大)</TextButton>
                </div>
                <div className="demo-cell">
                    <TextButton size="large" disabled onClick={this.handleClick}>文字按钮(大)</TextButton>
                </div>
                </div>
                <div className="demo-row">
                <div className="demo-cell">
                    <TextButton size="small" onClick={this.handleClick}><Icon name="setting" />文字+图标(小)</TextButton>
                </div>
                <div className="demo-cell">
                    <TextButton size="small" disabled onClick={this.handleClick}><Icon name="setting" />文字+图标(小)</TextButton>
                </div>
                </div>
                <div className="demo-row">
                <div className="demo-cell">
                    <TextButton onClick={this.handleClick}><Icon name="setting" />文字+图标(中)</TextButton>
                </div>
                <div className="demo-cell">
                    <TextButton disabled onClick={this.handleClick}><Icon name="setting" />文字+图标(中)</TextButton>
                </div>
                </div>
                <div className="demo-row">
                <div className="demo-cell">
                    <TextButton size="large" onClick={this.handleClick}><Icon name="setting" />文字+图标(大)</TextButton>
                </div>
                <div className="demo-cell">
                    <TextButton size="large" disabled onClick={this.handleClick}><Icon name="setting" />文字+图标(大)</TextButton>
                </div>
                </div>
                <div className="demo-row">
                <div className="demo-cell">
                    <TextButton type="secondary" size="large" onClick={this.handleClick}>二级按钮</TextButton>
                </div>
                <div className="demo-cell">
                    <TextButton
                    type="secondary" size="large" disabled
                    onClick={this.handleClick}
                    >二级按钮</TextButton>
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
    padding-bottom: 5px;
}

.demo-row .demo-cell {
    display: flex;
    justify-content: center;
    flex: 1;
}

````