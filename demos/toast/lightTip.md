---
order: 3
title: 轻提示
---



```jsx
import { Button, Toast } from 'saltui';

const showToast = (options) => {
  Toast.show(options);
};

class Demo extends React.Component {

  render() {
    return (<div className="demoWrap">
      <Button
        className="demo" onClick={() => {
          showToast({
            type: 'light',
            content: '这是一句轻提示这是一句轻提示好',
            onDidHide: () => {
              console.log('hide');
            },
          });
        }}
      >light toast</Button>
      <Button
        className="demo" onClick={() => {
          showToast({
            type: 'light',
            content: '这是一句轻提示这是一句轻提示好吗',
            onDidHide: () => {
              console.log('hide');
            },
          });
        }}
      >light toast overLength</Button>
      <Button
        className="demo" onClick={() => {
          showToast({
            type: 'light',
            transitionName: 'fix-bottom',
            content: '这是一句轻提示这是一句轻提示好',
            onDidHide: () => {
              console.log('hide');
            },
          });
        }}
      >light toast fix-bottom</Button>
    </div>);
  }
}

ReactDOM.render(<Demo />, mountNode);
```
```css
.demoWrap {
  margin-top: 100px;
}
.demo {
  margin-bottom:10px;
}
```
