---
order: 2
title: 分享面板(双排)
---

```jsx
import { Button, ActionSheet } from 'saltui';
import { ToastLoading, User } from 'salt-icon';

const iconList = [
  { icon: <img role="presentation" src="https://zos.alipayobjects.com/rmsportal/WmEzpOsElbbvgmrexFSH.png" />, title: '发送朋友' },
  { icon: <img role="presentation" src="https://zos.alipayobjects.com/rmsportal/HssPJKvrjEByyVWJIFwl.png" />, title: '新浪微博' },
  { icon: <img role="presentation" src="https://zos.alipayobjects.com/rmsportal/HCGowLrLFMFglxRAKjWd.png" />, title: '生活圈' },
  { icon: <img role="presentation" src="https://zos.alipayobjects.com/rmsportal/LeZNKxCTkLHDWsjFfqqn.png" />, title: '微信好友' },
  { icon: <img role="presentation" src="https://zos.alipayobjects.com/rmsportal/YHHFcpGxlvQIqCAvZdbw.png" />, title: 'QQ' },
  { icon: <ToastLoading />, title: '刷新' },
  { icon: <User />, title: '投诉' },
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
  margin-bottom: 100px;
}
```