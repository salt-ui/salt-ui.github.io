---
order: 0
title: 日期选择（年月日）
---

```jsx
import { Button, Datetime } from 'saltui';

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value1: 1499702400000,
      value2: {
        value: '2017-7-20 12:42:44',
        timeType: 'PM',
      },
    };
    this.datetimeProps = {
      locale: 'zh-cn',
    };
  }

  onConfirm(value, id) {
    console.log('onConfirm', value);
    this.setState({
      [id]: value,
    });
  }

  onCancel(id) {
    console.log('cancel', this.state[id]);
  }

  showSlot(id) {
    this[id].show();
  }

  render() {
    const t = this;
    return (
      <div className="t-datetime-demo">

        <Button onClick={() => {
          t.showSlot('slot1');
        }}
        >日期选择</Button>
        <Datetime
          {...this.datetimeProps}
          slotRef={s => t.slot1 = s}
          title="日期选择"
          value={t.state.value1}
          columns={Datetime.YMD}
          onConfirm={(value) => { this.onConfirm(value, 'value1'); }}
          onCancel={() => { this.onCancel('value1'); }}
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
```