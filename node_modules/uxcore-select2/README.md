---

## uxcore-select2 [![Dependency Status](http://img.shields.io/david/uxcore/uxcore-select2.svg?style=flat-square)](https://david-dm.org/uxcore/uxcore-select2) [![devDependency Status](http://img.shields.io/david/dev/uxcore/uxcore-select2.svg?style=flat-square)](https://david-dm.org/uxcore/uxcore-select2#info=devDependencies) 

## TL;DR

uxcore-select2 ui component for react

#### setup develop environment

```sh
$ git clone https://github.com/uxcore/uxcore-select2
$ cd uxcore-select2
$ npm install
$ npm start
```

## Usage

```javascript
var Select = require('uxcore-select2');
<Select>
  <Option value="lucy">lucy</Option>
</Select>
```

### demo
http://uxcore.github.io/select/

## Props

### Select props

|参数|说明|类型|默认值|
|---|----|---|------|
|value | 指定当前选中的条目 | string/Array | 无 |
|defaultValue | 指定默认选中的条目 | string/Array | 无 |
|multiple | 支持多选 |  | false |
|filterOption | 是否根据输入项进行筛选 |  | true |
|tags | 可以把随意输入的条目作为tag，输入项不需要与下拉选项匹配 |  | false |
|onSelect | 被选中时调用，参数为选中的option value值 | function | 无 |
|onDeselect | 取消选中时调用，参数为选中的option value值，仅在multiple或tags模式下生效 | function | 无 |
|onChange | 选中option，或input的value变化(combobox模式下)时，调用此函数 | function | 无 |
|allowClear | 显示清除按钮 |  | false |
|placeholder | 选择框默认文字 | string | 无 |
|searchPlaceholder | 搜索框默认文字 | string | 无 |
|optionFilterProp | 输入项过滤对应的 option 属性 | string | value |
|combobox | 输入框自动提示模式 |  | false |
|size | 选择框大小 | String | 无 |
|optionLabelProp| 选择 Option 的哪个 prop 作为选择框中的显示。| string | 'children' |
|getPopupContainer| 弹出的菜单渲染在哪个容器中 | function(trigger:Node):Node | function(){return document.body;}|
|dropdownMatchSelectWidth|dropdown 部分是否和 select 部分同宽| boolean | true |
|dropdownClassName | dropdown 部分的定制类名 | string | - |
|notFoundContent   | 未找到选项时的提示文案   | string | not found |


### Option props
|参数|说明|类型|默认值|
|---|----|---|------|
|disabled | 是否禁用 | Boolean | false |
|key | 如果react需要你设置此项，此项值与value的值相同，然后可以省略value设置 | String | |
|value | 默认根据此属性值进行筛选 | String | - |

### OptGroup props
|参数|说明|类型|默认值|
|---|----|---|------|
|label | 组名 | String/React.Element | 无 |
|key |  | String | - |
