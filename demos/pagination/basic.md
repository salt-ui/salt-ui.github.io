---
order: 0
title: 默认
---

```jsx
const { Pagination } = SaltUI;

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
        <Pagination current={55} total={1000} pageSize={10} />
        <br />
       
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