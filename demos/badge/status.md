---
order: 2
title: 作为状态子元素使用
---

```jsx
import { Badge } from 'saltui';

class Demo extends React.Component {

  constructor(props) {
    super(props);

    const t = this;
    t.state = {
      value: null,
    };
  }

  handleChange(value) {
    this.setState({
      value,
    });
  }

  render() {
    return (
      <div>
        <h1 className="extra-head">Badge作为状态 </h1>
        <div
          className="demo-line"
        >
          <Badge
            dot
            dotType="status"
            status="warning"
            breath
            style={{
              marginRight: 10,
            }}
          />
          <span className="demo-status-text">待提交</span>
        </div>
        <div
          className="demo-line"
        >
          <Badge
            dot
            dotType="status"
            status="info"
            breath
            style={{
              marginRight: 10,
            }}
          />
          <span className="demo-status-text">流程中</span>
        </div>
        <div
          className="demo-line"
        >
          <Badge
            dot
            dotType="status"
            status="error"
            breath
            style={{
              marginRight: 10,
            }}
          />
          <span className="demo-status-text">已拒绝</span>
        </div>
        <div
          className="demo-line"
        >
          <Badge
            dot
            dotType="status"
            status="success"
            breath
            style={{
              marginRight: 10,
            }}
          />
          <span className="demo-status-text">已通过</span>
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
  padding: 20px 10px;
}
  
h1 {
	margin: 10px 0;
	font-weight: bold;
	font-size: 20px;
}

.extra-head {
	margin-top: 40px;
}

.demo-line {
	margin-bottom: 20px;
}
```
