---
order: 1
title: 联级日历
---

```jsx
const { Calendar, Button, Context } = SaltUI;
class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // value: {
        // value: 1499702400000,
        // startDate: 1499702400000,
        // startDateType: 'PM',
        // endDate: 1499961600000,
        // endDateType: 'PM',
      // },
      value: 1489702400000, // 1499961600000
    };
    // 禁用钉钉容器的 webViewBounce
    window.dd && window.dd.ui.webViewBounce.disable();
    this.calendarProps = {
      maskClosable: true,
      renderDayBadge: Calendar.util.generateSpecialWorkdayOrHolidayRender({
        '2017-07-22': 'work',
        '2017-07-25': 'leave',
      }),
      renderCustomDayLabel(curren, value) {
        if (Calendar.util.isSameDay(curren, '2017.7.31')) {
          return (
            <span className="special-day">端午节</span>
          );
        }
        return null;
      },
    };
  }

  onOk(value) {
    console.log('onOk, and value is: ', value);
    this.setState({
      value,
      visible: false,
    });
  }

  onCancel() {
    console.log('onCancel');
    this.setState({
      visible: false,
    });
  }

  onMaskClose() {
    console.log('onMaskClose');
  }

  render() {
    return (
      <div className="t-calendar-demo">
        <Button onClick={() => {
          this.setState({
            visible: true,
            singleMode: false,
            animationType: 'slideLeft',
            showHalfDay: false,
          });
        }}>打开级联日历</Button>
        <Calendar
          {...this.calendarProps}
          {...this.state}
          onOk={(value) => { this.onOk(value); }}
          onCancel={() => { this.onCancel(); }}
          onMaskClose={() => { this.onMaskClose(); }}
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
.t-calendar-demo {
  margin-top:200px;
}

```