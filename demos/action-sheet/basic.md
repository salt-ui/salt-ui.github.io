---
order: 0
title: 基本使用
---

```jsx
import { Button, ActionSheet } from 'saltui';

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>

        <Button 
          onClick={() => {
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