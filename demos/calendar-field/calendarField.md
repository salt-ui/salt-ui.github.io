---
order: 1
title: 日期区间选择2
---

```jsx
const { Group, CalendarField } = SaltUI;



class Demo2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: {
        startDate: '2016-01-02',
        startDateType: 'AM',
        endDate: '2016-01-03',
        endDateType: 'PM',
      },
      // value: {
      //   startDate: 1491111113332,
      //   endDate: 1481111113332, // 错误的情况：endDate < 1491111113332
      // },
      // value: '2016-01-02', 
      // value: {
      //   startDate: null,
      //   endDate: null,
      // },
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
      placeholder: ['请选择开始日期', '请选择结束日期'],
      required: false,
      // multiLine: true,
      layout: 'h',
      type: 'day',
      singleMode: false,
      formatter: 'yyyy-MM-dd',
      showWeek: true,
      showDateType: true,
      showHalfDay: true,
      topPanelTitle: 'title',
      value: this.state.value,
      tip: '这里是提示信息',
      readOnly: false,
      animationType: 'slideLeft',
      onOk: this.onOk.bind(this),
    };
    return (
      <Group>
        <Group.Head className="t-FS14 t-LH1_5 t-LH20 t-PT10 t-PB10 t-PL18">日期区间演示2</Group.Head>
        <Group.List>
          <CalendarField {...props} />
        </Group.List>
      </Group>
    );
  }
}

ReactDOM.render(
  <div>
      <Demo2 />
  </div>, mountNode
);
```