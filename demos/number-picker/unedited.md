---
order: 1
title: 不可编辑(按钮不可操作)
---

```jsx
import { NumberPicker, Context } from 'saltui';

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
        <div className="line">默认样式 <NumberPicker useTouch={!Context.isPC} value={t.state.e} max={4} step={1} readOnly onChange={t.handleChange.bind(t, 'e')} /></div>
        <div className="line">禁用样式单个 <NumberPicker useTouch={!Context.isPC} value={t.state.f} max={5} min={2} step={1} readOnly onChange={t.handleChange.bind(t, 'f')} /></div>
        <div className="line">禁用样式单个 <NumberPicker useTouch={!Context.isPC} value={t.state.g} max={2} step={1} readOnly onChange={t.handleChange.bind(t, 'g')} /></div>
        <div className="line">全部禁用<NumberPicker useTouch={!Context.isPC} value={t.state.h} max={5} step={4} readOnly disabled onChange={t.handleChange.bind(t, 'h')} /></div>
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