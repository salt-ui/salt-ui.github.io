# tingle-datetime-field [![tnpm version](http://web.npm.alibaba-inc.com/badge/v/@ali/tingle-datetime-field.svg?style=flat-square)](http://web.npm.alibaba-inc.com/package/@ali/tingle-datetime-field)

DatetimeField 是时间选择输入表单域。

<img src="https://gw.alicdn.com/tfscom/TB1ABR9LXXXXXbRXFXXXXXXXXXX.png" width="375">

## Install

```
tnpm install @ali/tingle-datetime-field --save
```

## Simple Usage

```js
constructor(props) {
    super(props);
    this.state = {
        value: null
    };
}
handleChange(value) {
    this.setState({
        value: value
    });
}
render() {
    let t = this;
    return (
        <div>
            <DatetimeField label="时间选择" onSelect={t.handleChange.bind(t)} value={t.state.value} placeholder="请输入"/>
        </div>
    );
}
```

## Props

### className

描述：自定义样式的 `class` 名称。
类型：`string`
默认：`''`
必选：否

示例：

```
<DatetimeField className="customClass"></DatetimeField>
```

### label

描述：表单域名称。
类型：`string`
默认：`''`
必选：否

示例：

```
<DatetimeField label="名称"></DatetimeField>
```

### placeholder

描述：提示文案。
类型：`string`
默认：`''`
必选：否

示例：

```
<DatetimeField placeholder="请输入"></DatetimeField>
```

### confirmText

描述：确认文案。
类型：`string`
默认：`'完成'`
必选：否

示例：

```
<DatetimeField confirmText="完成"></DatetimeField>
```

### cancelText

描述：取消文案。
类型：`string`
默认：`'取消'`
必选：否

示例：

```
<DatetimeField cancelText="取消"></DatetimeField>
```

### readOnly

描述：是否只读。
类型：`boolean`
默认：`false`
必选：否

示例：

```
<DatetimeField readOnly={false}></DatetimeField>
```

### value

描述：选中项。
类型：`number`/`string`
默认：无
必选：否

value 是时间戳。

示例：

```
<DatetimeField value={timestamp}></DatetimeField>
```

### columns

描述：表头文案。
类型：`array<string>`
默认：`[ '年', '月', '日', '时', '分', '秒' ]`
必选：否

依次表示 '年'、'月'、'日'、'时'、'分'、'秒' 的文案，同时也决定了要显示的列数。

示例：

```
<DatetimeField columns={[ 'Y', 'M', 'D' ]}></DatetimeField>
```

### onSelect

描述：值变化触发的事件。
类型：`function`
默认：无
必选：否

参数是时间戳。

示例：

```
onSelect(value) {
    this.setState({
        value: value
    });
}

...

<DatetimeField value={this.state.value} onSelect={this.onSelect}></DatetimeField>
```

## Links

- [Issues](http://gitlab.alibaba-inc.com/tingle-ui/tingle-datetime-field/issues)
- [README 标准写法](http://gitlab.alibaba-inc.com/tingle-ui/doc/blob/master/README%E6%A0%87%E5%87%86%E5%86%99%E6%B3%95.md)
