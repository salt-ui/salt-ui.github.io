---
order: 1
title: 垂直方向
---



```jsx
import { Steps } from 'saltui';

const Step = Steps.Step;

class Demo extends React.Component {
  render() {
    return (
      <div>
        <Steps current={2} showIcon direction="vertical">
          <Step key={0} title="步骤一" />
          <Step key={1} title="步骤二" />
          <Step key={2} title="步骤三" />
          <Step key={3} title="步骤四" />
          <Step key={4} title="步骤五" />
        </Steps>
      </div>
    );
  }
}
ReactDOM.render(<Demo />, mountNode);
```
```css
body {
  background-color: #f2f2f2;
}



```