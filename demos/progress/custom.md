---
order: 2
title: 自定义样式
---

```jsx
import { Progress } from 'saltui';

class Demo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      percent1: 0,
      percent2: 30,
      percent3: 70,
    };
  }

  render() {
    const t = this;

    if (t.state.percent1 < 100) {
      setTimeout(() => {
        t.setState({
          percent1: t.state.percent1 + 20,
        });
      }, 1000);
    }

    return (
      <div>
        <div style={{ marginBottom: '30px' }}>
          <Progress percent={t.state.percent3} showInfo strokeWidth={1} />
        </div>
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
  padding-top: 100px;
}

```