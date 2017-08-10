# tingle-icon

## 预览
![image](https://img.alicdn.com/tfs/TB1P2VnQXXXXXatXFXXXXXXXXXX-698-1398.png)

## Install

```
tnpm install @ali/tingle-icon --save

```

### 使用

```js
const Icon = require('tingle-icon');

render() {
    return <Icon name='icon-name'/>
}
```

## Props

#### className

描述：自定义的扩展样式名称

类型：String

默认：''

#### name

描述：`icon`所对应的`svg`文件的命名。

> 注意：写名称即可，不是写路径。

类型：String

默认：''

#### fill

描述：icon 颜色

类型：String

默认：'#000'

#### width

描述：icon 宽度

类型：Number/String

默认：'32px'

#### height

描述：icon 高度

类型：Number/String

默认：'32px'

#### onClick

描述：事件

类型：Function

默认：`() => {}`

## Links

- [Issues](http://gitlab.alibaba-inc.com/tingle-ui/tingle-icon/issues)