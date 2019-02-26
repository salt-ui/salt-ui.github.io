---
order: 0
title: 作为容器使用
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
        <h1>Badge作为容器: </h1>
        <div className="demo-line">
          <Badge count={0}>
            <span href="#1" className="demo-item" />
          </Badge>
        </div>
        <div className="demo-line">
          <Badge count={5}>
            <span href="#1" className="demo-item" />
          </Badge>
        </div>
        <div className="demo-line">
          <Badge count={100}>
            <span href="#1" className="demo-item" />
          </Badge>
        </div>
        <div className="demo-line">
          <Badge dot>
            <span href="#1" className="demo-item" />
          </Badge>
        </div>
        <div className="demo-line">
          <Badge text="new">
            <span href="#1" className="demo-item" />
          </Badge>
        </div>
        <div className="demo-line">
          <Badge text="new" corner="lt">
            <span href="#1" className="demo-item" />
          </Badge>
        </div>
        <div className="demo-line">
          <Badge text="new" corner="lb">
            <span href="#1" className="demo-item" />
          </Badge>
        </div>
        <div className="demo-line">
          <Badge text="new" corner="rt">
            <span href="#1" className="demo-item" />
          </Badge>
        </div>
        <div className="demo-line">
          <Badge text="new" corner="rb">
            <span href="#1" className="demo-item" />
          </Badge>
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

.demo-line {
	margin-bottom: 20px;
}
	
.demo-item {
	width: 50px;
	height: 50px;
	border-radius: 3px;
	display: inline-block;
	background: #e8e8e8;
}

.badge-corner {
	display: block;
}
.badge-corner	.demo-item {
	display: block;
	width: 100%; 
	height: 100px;
  }
```
