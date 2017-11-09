---
order: 2
title: 蒙层
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
            type: 'success',
            content: '带遮罩层',
            hasMask: true,
            duration: 2000,
          });
        }}
      >with mask</Button>
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
