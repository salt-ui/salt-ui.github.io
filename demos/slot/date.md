---
order: 1
title: 复杂联动
---



```jsx
const { Component } = React;
const { Button, Slot } = SaltUI;

class SlotDemo extends Component {

  constructor(props) {
    super(props);

    const now = new Date();
    // 数据格式化
    const { data, value } = Slot.formatDataValue(
      [
        [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
          2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
        [{ text: 'Jan', value: 0 }, { text: 'Feb', value: 1 },
          { text: 'Mar', value: 2 }, { text: 'Apr', value: 3 },
          { text: 'May', value: 4 }, { text: 'Jun', value: 5 },
          { text: 'Jul', value: 6 }, { text: 'Aug', value: 7 },
          { text: 'Sep', value: 8 }, { text: 'Oct', value: 9 },
          { text: 'Nov', value: 10 }, { text: 'Dec', value: 11 }],
        getDates(now.getFullYear(), now.getMonth()), // [ 1, 2, 3, ..., 31 ]
      ],
      [now.getFullYear(), now.getMonth(), now.getDate()] // [ 2015, 8, 7 ]
    );

    this.state = {
      data, // 数据模型
      value, // 选中的值
      confirmedValue: value, // 上次选中的值（取消选择时恢复用）
    };

    this.showSlot = this.showSlot.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  showSlot() {
    this.refs.slot.show();
  }

  handleConfirm(value) {
    // 确认选中项目
    this.setState({
      confirmedValue: value,
      value,
    });
  }

  handleChange(value, column, index) {
    let dates;
    if (column === 1) {
      // 改变了月份，会导致月内天数的改变
      dates = getDates(value[0].value, value[1].value);
    } else if (column === 0 && value[1].value === 1) {
      // 改变了年份，会导致 2 月天数的改变
      dates = getDates(value[0].value, 1);
    }
    if (dates) {
      // 同时变更日期和选中项
      const ret = Slot.formatColumnValue(dates, value[2]);
      value[2] = ret.columnValue;
      this.setState(React.addons.update(this.state, {
        data: {
          2: {
            $set: ret.columnData,
          },
        },
        value: {
          $set: value,
        },
      }));
    } else {
      // 仅改变了选中项
      this.setState({
        value,
      });
    }
  }

  handleCancel() {
    // 取消操作时要恢复上次选中的项，恢复后为确保有对应的日期，需要重新设置日期
    const value = this.state.confirmedValue;
    const dates = getDates(value[0].value, value[1].value);
    const ret = Slot.formatColumnValue(dates);

    this.setState(React.addons.update(this.state, {
      data: {
        2: {
          $set: ret.columnData,
        },
      },
      value: {
        $set: value,
      },
    }));
  }

  render() {
    return (
      <div>
        <div className="demo">
          <div>
            <Button size="large" onClick={this.showSlot}>show slot</Button>
          </div>
          <div>确认值：{`${this.state.confirmedValue[2].text} ${this.state.confirmedValue[1].text} ${this.state.confirmedValue[0].text}`}</div>
          <div>临时值：{`${this.state.value[2].text} ${this.state.value[1].text} ${this.state.value[0].text}`}</div>
        </div>
        <Slot ref="slot" data={this.state.data}
          value={this.state.value}
          title="选择日期" onConfirm={this.handleConfirm}
          onChange={this.handleChange} onCancel={this.handleCancel}
        />
      </div>
    );
  }
}

// 是否是闰年的判断
function isLeapYear(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}

function makeArray(max) {
  const arr = [];
  for (let i = 1; i <= max; i++) {
    arr.push(i);
  }
  return arr;
}

// 获取某个月份的日期选项
function getDates(year, month) {
  const dates = [];
  switch ('1 1010110101'.split('')[month]) {
    case '1': // 大月
      return makeArray(31);
    case '0': // 小月
      return makeArray(30);
    case ' ': // 闰年 2 月 和 平年 2 月
      return isLeapYear(year) ? makeArray(29) : makeArray(28);
  }
}

ReactDOM.render(<SlotDemo />, mountNode);
```
