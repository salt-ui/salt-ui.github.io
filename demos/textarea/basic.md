---
order: 0
title: 基本使用
---

```jsx
import { Textarea } from 'saltui';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      t1: '曾经有一份真诚的爱情摆在我的面前，我没有珍惜，等到失去的时候才后悔莫及，人世间最痛苦的事莫过于此。曾经有一份真诚的爱情摆在我的面前，我没有珍惜，等到失去的时候才后悔莫及，人世间最痛苦的事莫过于此。曾经有一份真诚的爱情摆在我的面前，我没有珍惜，等到失去的时候才后悔莫及，人世间最痛苦的事莫过于此。曾经有一份真诚的爱情摆在我的面前，我没有珍惜，等到失去的时候才后悔莫及，人世间最痛苦的事莫过于此。曾经有一份真诚的爱情摆在我的面前，我没有珍惜，等到失去的时候才后悔莫及，人世间最痛苦的事莫过于此。曾经有一份真诚的爱情摆在我的面前，我没有珍惜，等到失去的时候才后悔莫及，人世间最痛苦的事莫过于此。',
      t2: '',
    };
  }

  handleChange(name, value) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h2>Value</h2>
        <Textarea value={this.state.t1} onChange={(e) => { this.handleChange('t1', e.target.value); }} />
        <h2>Placeholder</h2>
        <Textarea placeholder={this.state.t1} value={this.state.t2} onChange={(e) => { this.handleChange('t2', e.target.value); }} />
      </div>
    );
  }
}


ReactDOM.render(
  <Demo />, mountNode
);
```

```css
h2 {
  font-size: 20px;
  margin: 12px 0;
}
```