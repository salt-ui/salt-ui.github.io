---
order: 0
title: 基本使用
---

```jsx
const { RateField } = SaltUI;

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value0: 1,
      value1: 1,
      value2: 1,
      data: [
        {
          total: 5,
          showTip: true,
          size: 'normal',
          scoreTips: ['表现太差', '表现一般', '表现良好', '表现优秀', '表现卓越'],
          location: 'down',
          label: '显示提示',
          layout: 'h',
          showLabel: true,
          tip: '这是一个提示，可能很长很长',
        },
        {
          total: 5,
          showTip: false,
          size: 'normal',
          scoreTips: ['表现太差', '表现一般', '表现良好', '表现优秀', '表现卓越'],
          location: 'down',
          label: '标题',
          layout: 'h',
          showLabel: false,
        },
      ],
    };
  }

  handleChange(index, value) {
    this.setState({
      [`value${index}`]: value,
    });
  }

  render() {
    const t = this;
    return (
      <div>
        {
          t.state.data.map((props, index) =>
            <RateField
              {...props}
              value={t.state[`value${index}`]}
              onChange={(value) => {
                t.handleChange(index, value);
              }}
            />
          )
        }
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
```