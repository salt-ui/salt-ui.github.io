---
order: 0
title: 基本使用
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
      <div>
        <h1>tingle-pagination</h1>
        <h5>默认</h5>
        <Pagination current={55} total={1000} pageSize={10} />
        <br />
        <h5>外部控制页码</h5>
        <Pagination
          current={this.state.current} total={101} pageSize={10}
          onChange={(current) => {
            console.log(current);
            this.setState({ current });
          }}
        />
        <br />
        <h5>Simple</h5>
        <Pagination
          simple
          current={this.state.current} total={101} pageSize={10}
          onChange={(current) => {
            this.setState({ current });
          }}
        />
        <br />
        <h5>自定义样式</h5>
        <Pagination
          className={'custom-class'}
          current={this.state.current} total={101} pageSize={10}
          onChange={(current) => {
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

h1 {
  color: #333;
  margin: 20px 15px;
  font-size: 20px;
  font-weight: bolder;
}

h5 {
  color: #666;
  font-weight: bolder;
  margin: 15px;
}

.custom-class {
  font-size: 16px;
  font-family: arial;
  color: #f00;
  font-weight: bold;
}
```