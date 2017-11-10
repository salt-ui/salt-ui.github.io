---
order: 0
title: 基本使用
---

```jsx
const { Group, DatetimeField } = SaltUI;

class Demo extends React.Component {

  constructor(props) {
    super(props);

    const t = this;
    const now = new Date().getTime();
    t.state = {
      value: null,
      value1: now,
      value2: now,
      value3: now,
      value4: {
        value: '2017-11-1',
        timeType: 'PM',
      },
      value5: now,
      value6: now,
    };
  }

  handleChange(field, value) {
    console.log(value);
    this.setState({
      [field]: value,
    });
  }

  render() {
    const t = this;
    return (
      <div>
        <Group>
          <Group.Head className="t-FS14 t-LH1_5 t-LH20 t-PT10 t-PB10 t-PL18">时间选择器演示</Group.Head>
          <Group.List>
            <DatetimeField label="不可选" value={t.state.value} readOnly />
            <DatetimeField label="没有默认值" onSelect={t.handleChange.bind(t, 'value')} value={t.state.value} placeholder="请输入" tip="这里是提示信息" />
            <DatetimeField label="年选择" onSelect={t.handleChange.bind(t, 'value1')} value={t.state.value1} columns={DatetimeField.Y} />
            <DatetimeField label="月选择" onSelect={t.handleChange.bind(t, 'value2')} value={t.state.value2} columns={DatetimeField.YM} />
            <DatetimeField label="日选择" onSelect={t.handleChange.bind(t, 'value3')} value={t.state.value3} columns={DatetimeField.YMD} />
            <DatetimeField label="日期／上下午选择" onSelect={t.handleChange.bind(t, 'value4')} value={t.state.value4} columns={DatetimeField.YMDT} />
            <DatetimeField label="时间选择" onSelect={t.handleChange.bind(t, 'value5')} value={t.state.value5} columns={DatetimeField.YMDHM} />
            <DatetimeField label="详细时间选择" onSelect={t.handleChange.bind(t, 'value6')} value={t.state.value6} columns={DatetimeField.YMDWHM} />
          </Group.List>
        </Group>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />, mountNode
);
```