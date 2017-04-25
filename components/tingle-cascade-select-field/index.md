# tingle-cascade-select-field [![tnpm version](http://web.npm.alibaba-inc.com/badge/v/@ali/tingle-cascade-select-field.svg?style=flat-square)](http://web.npm.alibaba-inc.com/package/@ali/tingle-cascade-select-field)

CascadeSelectField 是级联选择输入表单域。

<img src="https://gw.alicdn.com/tfscom/TB1zxibLXXXXXbIaXXXXXXXXXXX.png" width="375">

## Install

```
tnpm install @ali/tingle-cascade-select-field --save
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
    let options = [{
        value: 'zhejiang',
        label: '浙江',
        children: [{
            value: 'hangzhou',
            label: '杭州',
            children: [{
                value: 'xihu',
                label: '西湖',
            }],
        }],
    }];
    let columns = [ '省', '市', '景点' ];
    return (
        <div>
            <CascadeSelectField label="级联选择" options={options} onSelect={t.handleChange.bind(t)} value={t.state.value} placeholder="请输入" columns={columns}/>
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
<CascadeSelectField className="customClass"></CascadeSelectField>
```

### label

描述：表单域名称。
类型：`string`
默认：`''`
必选：否

示例：

```
<CascadeSelectField label="名称"></CascadeSelectField>
```

### placeholder

描述：提示文案。
类型：`string`
默认：`''`
必选：否

示例：

```
<CascadeSelectField placeholder="请输入"></CascadeSelectField>
```

### confirmText

描述：确认文案。
类型：`string`
默认：`'完成'`
必选：否

示例：

```
<CascadeSelectField confirmText="完成"></CascadeSelectField>
```

### cancelText

描述：取消文案。
类型：`string`
默认：`'取消'`
必选：否

示例：

```
<CascadeSelectField cancelText="取消"></CascadeSelectField>
```

### readOnly

描述：是否只读。
类型：`boolean`
默认：`false`
必选：否

示例：

```
<CascadeSelectField readOnly={false}></CascadeSelectField>
```

### options

描述：所有的候选项。
类型：`array`
默认：无
必选：否

示例：

```
let options = [{
    value: 'zhejiang',
    label: '浙江',
    children: [{
        value: 'hangzhou',
        label: '杭州',
        children: [{
            value: 'xihu',
            label: '西湖',
        }],
    }],
}];

<CascadeSelectField options={options}></CascadeSelectField>
```

### value

描述：所有的选中项 value。
类型：`array`
默认：无
必选：否

示例：

```
let value = ['zhejiang', 'hangzhou', 'xixi'];

// or [ { text: '浙江', value: 'zhejiang' }, { text: '杭州', value: 'hangzhou' }, { text: '西湖', value: 'xihu' } ]

<CascadeSelectField value={value}></CascadeSelectField>
```

### columns

描述：表头文案。
类型：`array<string>`
默认：`[]`
必选：否

表示各列的说明文案，同时也决定了要显示的列数。

示例：

```
<CascadeSelectField columns={['省', '市', '景点']}></CascadeSelectField>
```

### onSelect

描述：值变化触发的事件。
类型：`function`
默认：无
必选：否

参数是所有的选中项 value。

示例：

```
onSelect(value) {
    this.setState({
        value: value
    });
}

...

<CascadeSelectField value={this.state.value} onSelect={this.onSelect}></CascadeSelectField>
```

### formatter

描述：显示结果格式化函数。
类型：`function`
默认：`(value) => value.map((v) => v.text).join('/')`
必选：否

参数是选中对象。

示例：

```
formatter(value) {
    return value.map((v) => v.text).join('/');
}

...

<CascadeSelectField formatter={this.formatter}></CascadeSelectField>
```

## Links

- [Issues](http://gitlab.alibaba-inc.com/tingle-ui/tingle-cascade-select-field/issues)
- [README 标准写法](http://gitlab.alibaba-inc.com/tingle-ui/doc/blob/master/README%E6%A0%87%E5%87%86%E5%86%99%E6%B3%95.md)
