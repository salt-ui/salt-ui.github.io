---
order: 1
title: 作为子元素使用
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
        <h1 className="extra-head">Badge作为子元素: </h1>
        <div
          className="demo-line"
        >
          <Badge
            text="促"
            style={{
              marginRight: 10,
            }}
          />
          <Badge
            text="减"
            style={{
              marginRight: 10,
            }}
          />
          <Badge
            text="免"
            style={{
              marginRight: 10,
              background: '#66BC5C',
            }}
          />
        </div>

        <div
          className="demo-line"
          style={{
            position: 'relative',
            height: 100,
            width: '100%',
            background: '#e8e8e8',
            marginTop: 20,
          }}
        >
          <Badge text="new" corner="lt" />
          <Badge text="new" corner="rt" />
          <Badge text="new" corner="lb" />
          <Badge text="new" corner="rb" />
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
