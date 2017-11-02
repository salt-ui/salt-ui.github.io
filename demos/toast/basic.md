---
order: 0
title: 基础使用
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
      <Button
        className="demo" onClick={() => {
          showToast({
            type: 'success',
            content: '带遮罩层',
            hasMask: true,
            duration: 2000,
          });
        }}
      >with mask</Button>
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
