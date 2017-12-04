---
order: 0
title: 可编辑
---

```jsx
import { NumberPicker } from 'saltui';

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: '2',
      a: 4,
      b: 1,
      c: 2,
      d: 2,
      e: 2,
      f: 2,
      g: 2,
      h: 2,
      i: 2,
    };
  }

  handleChange(name, value) {
    const t = this;
    t.setState({
      [name]: value,
    });
  }
  render() {
    const t = this;
    return (
      <div>
        <div className="line">默认样式 <NumberPicker value={t.state.a} max={4} step={1} onChange={t.handleChange.bind(t, 'a')} /></div>
        <div className="line">禁用样式单个 <NumberPicker value={t.state.b} max={5} min={2} step={1} onChange={t.handleChange.bind(t, 'b')} /></div>
        <div className="line">禁用样式单个 <NumberPicker value={t.state.c} max={2} step={1} onChange={t.handleChange.bind(t, 'c')} /></div>
        <div className="line">全部禁用<NumberPicker value={t.state.count} max={4} step={1} disabled /></div>
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
}

.tip {
  padding: 10px;
}

.line {
  height: 44px;
  line-height: 30px;
  background: #ffffff;
  margin: 5px 0;
  padding: 6px 10px;
}

.line .t-number-picker {
  float: right;
}
```