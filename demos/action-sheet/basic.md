---
order: 0
title: 基本使用
---

```jsx
const { Button, Icon, ActionSheet } = SaltUI;

const iconList = [
  { icon: <img role="presentation" src="https://zos.alipayobjects.com/rmsportal/WmEzpOsElbbvgmrexFSH.png" />, title: '发送朋友' },
  { icon: <img role="presentation" src="https://zos.alipayobjects.com/rmsportal/HssPJKvrjEByyVWJIFwl.png" />, title: '新浪微博' },
  { icon: <img role="presentation" src="https://zos.alipayobjects.com/rmsportal/HCGowLrLFMFglxRAKjWd.png" />, title: '生活圈' },
  { icon: <img role="presentation" src="https://zos.alipayobjects.com/rmsportal/LeZNKxCTkLHDWsjFfqqn.png" />, title: '微信好友' },
  { icon: <img role="presentation" src="https://zos.alipayobjects.com/rmsportal/YHHFcpGxlvQIqCAvZdbw.png" />, title: 'QQ' },
  { icon: <Icon name="toast-loading" />, title: '刷新' },
  { icon: <Icon name="user" />, title: '投诉' },
];

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Button onClick={() => {
          ActionSheet.show({
            options: ['操作一', '操作二', '操作三', '清空聊天记录'],
            destructiveButtonIndex: 3,
            message: '我是描述我是描述',
            maskClosable: false,
          }, (index) => {
            console.log(index);
          });
        }}
        >默认状态</Button>
        <Button onClick={() => {
          ActionSheet.showShare({
            options: iconList,
            message: '我是描述我是描述',
          }, (index) => {
            console.log(index);
          });
        }}
        >分享面板</Button>
        <Button onClick={() => {
          ActionSheet.showShare({
            options: [iconList, [iconList[5], iconList[6]]],
            message: '我是描述我是描述',
          }, (index, rowIndex) => {
            console.log(index, rowIndex);
          });
        }}
        >分享面板(双排)</Button>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />, mountNode
);
```

```css
body {
  background-color: #f2f2f2;
  padding: 10px;
}

.t-button {
  margin-bottom: 10px;
}
```