---
order: 1
title: 文本内容
---



```jsx
const { Component } = React;
const { Button, Toast } = SaltUI;

const showToast = (options) => {
  Toast.show(options);
};

const showLoadingToast = () => {
  Toast.show({
    type: 'loading',
    content: '加载中...',
  });

  setTimeout(() => {
    Toast.hide(() => {
      console.log(888);
    });
  }, 4000);
};

class Demo extends React.Component {

  render() {
    return (<div className="demoWrap">
      <Button
        className="demo" onClick={() => {
          showToast({
            content: '你好听狗',
          });
        }}
      >text only</Button>
      <Button
        className="demo" onClick={() => {
          showToast({
            content: '字字字字字字字字字字字字字字字',
          });
        }}
      >long text</Button>
      <Button
        className="demo" onClick={() => {
          showToast({
            content: '字字字字字字字字字字字字字字字字',
          });
        }}
      >long text overLentgh</Button>
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
