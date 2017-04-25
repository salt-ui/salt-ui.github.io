# tingle-calendar-field [![tnpm version](http://web.npm.alibaba-inc.com/badge/v/@ali/tingle-calendar-field.svg?style=flat-square)](http://web.npm.alibaba-inc.com/package/@ali/tingle-calendar-field)

级联日期表单组件

<img src="https://img.alicdn.com/tps/TB1me1UPFXXXXajXVXXXXXXXXXX-750-1334.png" width="375">

## How to develop

### install

```bash
tnpm i salt-tools -g
npm run tnpm-dep 
npm start
```

### update

```bash
npm run tnpm-update
```

## Simple Usage

## Props

- 支持表单域的所有属性和方法，[参见这里](http://gitlab.alibaba-inc.com/tingle-ui/tingle-field#props)
- 支持tingle-calendar的所有属性和方法，[参见这里](http://gitlab.alibaba-inc.com/tingle-ui/tingle-calendar#props)

- 另外支持以下属性:

#### type
描述：calendar类型
类型：`String`
默认：`day` // 可选值：year, month, day
必选：否

#### placeholder
描述：占位文字
类型：`String|Array`
默认：`['开始日期', '结束日期']`
必选：否

#### formatter
描述：要显示的日期格式
类型：`String`
默认：`yyyy-MM-dd`
必选：否

#### readOnly
描述：要显示的日期格式
类型：`Boolean`
默认：`false`
必选：否

#### showWeek
描述：是否显示周几
类型：`Boolean`
默认：`true`
必选：否

#### showDateType
描述：是否显示“全天”“上午”“下午”
类型：`Boolean`
默认：`true`
必选：否

## APIs

## Links

- [Issues](http://gitlab.alibaba-inc.com/tingle-ui/tingle-calendar-field/issues)
- [README 标准写法](http://gitlab.alibaba-inc.com/tingle-ui/doc/blob/master/README%E6%A0%87%E5%87%86%E5%86%99%E6%B3%95.md)
