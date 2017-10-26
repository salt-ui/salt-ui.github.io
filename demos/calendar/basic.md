---
order: 0
title: 基本使用
---

```jsx
const { Calendar, Button, Context } = SaltUI;
let prefixClass = Context.prefixClass;

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            show2: false,
            show3: false,
            locale: 'zh-cn'
        }
    }

    _handleClick(show) {
        let t = this;
        t.setState({
            [show]: true
        });
    }

    onCloseCalendar(show) {
        let t = this;
        t.setState({
            [show]: false
        });
    }

    handleCalendarData(show, values) {
        alert(JSON.stringify(values));

        let t = this;
        t.setState({
            [show]: false
        });
    }

    handleSelecting(data, e){
      console.log(data, e.target)
    }

    render() {
        let t = this;
        return (
            <div className={prefixClass('calendar-demo')}>
                <Button onClick={t._handleClick.bind(t, 'show')}>点我选择日期</Button>
                <Button type="secondary" onClick={t._handleClick.bind(t, 'show2')}>点我选择日期(月面板)</Button>
                <Button type="danger" onClick={t._handleClick.bind(t, 'show3')}>点我选择日期(年面板)</Button>

                <Calendar visible={t.state.show}
                    singleMode={true}
                    value={'2016-01-02'}
                    showHalfDay={false}
                    showBottomPanel={false}
                    extraClass=""
                    onSelecting={t.handleSelecting}
                    topPanelTitle={"请选择时间"}
                    onCancel={t.onCloseCalendar.bind(t, 'show')}
                    onOk={t.handleCalendarData.bind(t, 'show')}
                    locale={t.state.locale} />
                <Calendar.MonthCalendar
                    visible={t.state.show2}
                    singleMode={true}
                    onCancel={t.onCloseCalendar.bind(t, 'show2')}
                    onOk={t.handleCalendarData.bind(t, 'show2')}
                    locale={t.state.locale} />
                <Calendar.YearCalendar
                    visible={t.state.show3}
                    singleMode={false}
                    onCancel={t.onCloseCalendar.bind(t, 'show3')}
                    onOk={t.handleCalendarData.bind(t, 'show3')}
                    locale={t.state.locale} />
            </div>
        );
    }
}

ReactDOM.render(
  <Demo />, mountNode
);
```