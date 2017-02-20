---
order: 0
title: 基础使用
---



```jsx
const { Component } = React;
const { Button, Toast } = SaltUI;

class ToastDemo extends Component {
  constructor(props) {
    super(props);
  }

  showLoadingToast() {
    Toast.show({
      type: 'loading',
      content: '加载中...',
      autoHide: false
    });

    setTimeout(function(){
      Toast.hide(function () {
        console.log(888);
      });
    }, 4000);
  }

  showToast(options) {
    Toast.show(options);
  }


  render() {
    return <div className="demoWrap">
      <Button className="demo" onClick={this.showToast.bind(this, {
        type: 'success',
        content: '提交成功'
      })}>success</Button>
      <Button className="demo" onClick={this.showToast.bind(this, {
        type: 'error',
        content: '提交出错'
      })}>error</Button>
      <Button className="demo" onClick={this.showToast.bind(this, {
        type: 'fail',
        content: '网络连接失败'
      })}>fail</Button>
      <Button className="demo" onClick={this.showLoadingToast.bind(this)}>loading</Button>
      <Button className="demo" onClick={this.showToast.bind(this, {
        content: '你好听狗'
      })}>text only</Button>
      <Button className="demo" onClick={this.showToast.bind(this, {
        content: '测一测很多文字的情况, 测一测很多文字的情况'
      })}>long text</Button>
      <Button className="demo" onClick={this.showToast.bind(this, {
        type: 'success',
        content: '带遮罩层',
        hasMask: true
      })}>with mask</Button>
      <Button className="demo" onClick={this.showToast.bind(this, {
        className: 'my-toast',
        content: '你好听狗',
        mask: false,
        width: 300,
        height: 300,
        onDidHide: () => {
          console.log('hide');
        }
      })}>custom style</Button>
    </div>
  }
}

ReactDOM.render(<ToastDemo />, mountNode);
```
