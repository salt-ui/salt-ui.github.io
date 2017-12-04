---
order: 2
title: 蒙层
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
