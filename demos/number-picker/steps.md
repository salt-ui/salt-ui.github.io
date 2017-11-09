---
order: 2
title: 步长为小数
---

```jsx
const { NumberPicker } = SaltUI;

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
        <div className="tip">步长为小数</div>
        <div className="line">默认样式 <NumberPicker value={t.state.i} max={3} step={0.1} min={0} onChange={t.handleChange.bind(t, 'i')} /></div>
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