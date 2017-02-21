# tingle-calendar [![tnpm version](http://web.npm.alibaba-inc.com/badge/v/@ali/tingle-calendar.svg?style=flat-square)](http://web.npm.alibaba-inc.com/package/@ali/tingle-calendar)
日期区间选择。


![效果图](http://gtms03.alicdn.com/tps/i3/TB15AJ5MpXXXXb_XFXXEYXL5VXX-967-655.png)

## Install

```
tnpm install @ali/tingle-calendar --save
```

## Simple Usage

```javascript

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            show2: false,
            locale: 'zh-cn'
        }
    }

    _handleClick() {
        let t = this;
        t.setState({
            show: true
        });
    }

    _handleClick2() {
        let t = this;
        t.setState({
            show2: true
        });
    }


    onCloseCalendar() {
        let t = this;
        t.setState({
            show: false
        });
    }

    onCloseCalendar2() {
        let t = this;
        t.setState({
            show2: false
        });
    }

    handleCalendarData(values) {
        alert(JSON.stringify(values));
        let t = this;
        t.setState({
            show: false
        });
    }

    handleCalendarData2(values) {
        alert(JSON.stringify(values));
        let t = this;
        t.setState({
            show2: false
        });
    }


    render() {
        let t = this;
        return (
            <div className="tCalendarDemo">
                <Button onClick={t._handleClick.bind(t)}>点我选择日期</Button>
                <Button type="secondary" onClick={t._handleClick2.bind(t)}>点我选择日期(月面板)</Button>
                <Calendar visible={t.state.show}
                    singleMode={false}
                    value={'2015-10-03'}
                    showHalfDay={false}
                    showTopPanel={true}
                    showBottomPanel={false}
                    topPanelTitle={"请选择时间"}
                    onCancel={t.onCloseCalendar.bind(t)}
                    onOk={t.handleCalendarData.bind(t)}
                    locale={t.state.locale} 
                />
                <Calendar.MonthCalendar
                    visible={t.state.show2}
                    singleMode={false}
                    onCancel={t.onCloseCalendar2.bind(t)}
                    onOk={t.handleCalendarData2.bind(t)}
                    locale={t.state.locale} 
                />
            </div>

        );
    }
};
```

## Props

### className
描述：自定义样式的`class`名称。  
类型：`String`  
默认：`''`  
必选：否
示例：
```
<Calendar className="customClass" />
```

### visible
描述：显示隐藏。  
类型：`Boolean`  
默认：`false`  
必选：否
示例：
```
<Calendar visible={true} />
```

### value
描述：今天。  
类型：`Object|String`  
默认：``  
必选：否
示例：
```
//可以是对象
<Calendar value={{startDate: '2016-01-02', startDateType: 'AM', endDate: '2016-01-03', endDateType: 'AM' }} />
//也可是字符串
<Calendar value={'2016-01-02'} />
```

### locale
描述：国际化。  
类型：`String`  
默认：`zh-cn`  
必选：否
示例：
```
//简体中文
<Calendar locale={"zh-cn"} />
//英文
<Calendar locale={"en"} />
```

### singleMode
描述：是否使用单点模式，默认是级联选择的模式。  
类型：`Boolean`  
默认：`true`  
必选：否
示例：
```
<Calendar singleMode={true} />
```

### showHalfDay
描述：是否显示半天的面板。  
类型：`Boolean`  
默认：`false`  
必选：否
示例：
```
<Calendar showHalfDay={true} />
```

### showTopPanel
描述：是否显示顶部的标题和控制面板。  
类型：`Boolean`  
默认：`false`  
必选：否
示例：
```
<Calendar showTopPanel={true} />
```

### showBottomPanel
描述：是否显示底部的控制面板。  
类型：`Boolean`  
默认：`false`  
必选：否
示例：
```
<Calendar showBottomPanel={true} />
```

### extraClass
描述：日期生成时，是否添加新的样式，可以是字符串也可是回调函数。  
类型：`String|Function`  
默认：`null`  
必选：否
示例：
```
<Calendar extraClass='extraClassName' />
```

### topPanelTitle
描述：选择日期时，顶部面板标题。  
类型：`String`  
默认：`请选择时间`  
必选：否
示例：
```
<Calendar topPanelTitle='顶部标题' />
```

### onCancel
描述：取消选择时触发的回调。  
类型：`Function`  
默认：`new Function`  
必选：否
示例：
```
<Calendar onCancel={()=>{console.log('Canceled!')}} />
```

### onOk
描述：点击确定时触发回调。  
类型：`Function`  
默认：`new Function`  
必选：否
示例：
```
<Calendar onOk={(val)=>{console.log('Value:', val)}} />
```

### onSelecting
描述：当日期被点击时触发，如果返回false则日期不变更。  
类型：`Function`  
默认：`new Function`  
必选：否
示例：
```
<Calendar onSelecting={(date, e)=>{console.log('arguments:', arguments)}} />
```

## APIs

## Links

- [Issues](http://gitlab.alibaba-inc.com/tingle-ui/tingle-calendar/issues)
