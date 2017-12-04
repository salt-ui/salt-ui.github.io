---
order: 1
title: 外部控制页码
---

```jsx
import { Pagination } from 'saltui';

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 1,
    };
  }

  render() {
    return (
      <div className="demo">
        <Pagination
          current={this.state.current} total={101} pageSize={10}
          onChange={(current) => {
            console.log(current);
            this.setState({ current });
          }}
        />
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
}

.demo {
  margin-top: 200px;
}

.custom-class {
  font-size: 16px;
  font-family: arial;
  color: #f00;
  font-weight: bold;
}
```