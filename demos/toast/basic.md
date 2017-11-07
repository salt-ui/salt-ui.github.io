---
order: 0
title: 基本状态
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
        className="demo"
        onClick={() => {
          showToast({
            type: 'success',
            content: '提交成功你好',
          }); }}
      >success</Button>
      <Button
        className="demo"
        onClick={() => {
          showToast({
            type: 'success',
            content: '提交成功你好好',
          });
        }}
      >has icon overLength</Button>
      <Button
        className="demo" onClick={() => {
          showToast({
            type: 'error',
            content: '提交出错',
          });
        }}
      >error</Button>
      <Button
        className="demo" onClick={() => {
          showToast({
            type: 'fail',
            content: '网络连接失败',
          });
        }}
      >fail</Button>
      <Button
        className="demo" onClick={() => { showLoadingToast(); }}
      >loading</Button>
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
