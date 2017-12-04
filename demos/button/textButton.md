---
order: 4
title: 文字按钮
---



```jsx
import { Button } from 'saltui';
import Setting from 'salt-icon/lib/Setting';

const {
  TextButton,
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
                <TextButton size="small" onClick={this.handleClick}><Setting />文字+图标(小)</TextButton>
              </div>
              <div className="demo-cell">
                <TextButton size="small" disabled onClick={this.handleClick}><Setting />文字+图标(小)</TextButton>
              </div>
            </div>
            <div className="demo-row">
              <div className="demo-cell">
                <TextButton onClick={this.handleClick}><Setting />文字+图标(中)</TextButton>
              </div>
              <div className="demo-cell">
                <TextButton disabled onClick={this.handleClick}><Setting />文字+图标(中)</TextButton>
              </div>
            </div>
            <div className="demo-row">
              <div className="demo-cell">
                <TextButton size="large" onClick={this.handleClick}><Setting />文字+图标(大)</TextButton>
              </div>
              <div className="demo-cell">
                <TextButton size="large" disabled onClick={this.handleClick}><Setting />文字+图标(大)</TextButton>
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