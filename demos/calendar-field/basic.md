---
order: 0
title: 日期区间选择1
---

```jsx
import { Group, CalendarField } from 'saltui';

class Demo1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      /* value: {
        startDate: '2016-01-02',
        startDateType: 'AM',
        endDate: '2016-01-03',
        endDateType: 'PM',
      },*/
      value: '2016-01-02',
    };
  }


  onOk(value) {
    console.log(value);
    this.setState({
      value,
    });
  }

  render() {
    const props = {
      className: 'calendar-field-demo',
      label: '日期区间',
      placeholder: '请选择日期',
      required: false,
      multiLine: true,
      layout: 'h',
      type: 'month',
      singleMode: false,
      showHalfDay: true,
      showTopPanel: true,
      topPanelTitle: 'title',
      value: this.state.value,
      readOnly: false,
      // formatter: 'yyyy.MM.dd',
      onOk: this.onOk.bind(this),
    };
    return (
      <Group>
        <Group.Head className="t-FS14 t-LH1_5 t-LH20 t-PT10 t-PB10 t-PL18">日期区间演示1</Group.Head>
        <Group.List>
          <CalendarField {...props} />
        </Group.List>
      </Group>
    );
  }
}

ReactDOM.render(
  <div>
    <Demo1 />
  </div>, mountNode
);
```