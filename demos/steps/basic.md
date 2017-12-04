---
order: 1
title: 水平方向
---



```jsx
import { Steps } from 'saltui';

const Step = Steps.Step;

class Demo extends React.Component {
  render() {
    return (
      <div>
        <Steps current={2} showIcon maxDescriptionWidth={10}>
          <Step key={0} />
          <Step key={1} />
          <Step key={2} />
          <Step key={3} />
          <Step key={4} />
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