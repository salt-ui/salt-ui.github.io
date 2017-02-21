# tingle-icon

## Install

```
tnpm install @ali/tingle-icon --save
```
## Simple Usage

两种使用方式：

- 公共 `icon`（`tingle-icon-source` 里所包含的 `svg` 资源）
- 私有 `icon`（自己引入的 `svg` 资源）

### 使用 公共 icon

请先安装 `tingle-icon-source` (`tingle-icon` 的 `svg` 资源文件默认集合)
[svg资源及引用方法](http://gitlab.alibaba-inc.com/tingle-ui/tingle-icon-source)

```js
const Icon = require('tingle-icon');

render() {
    return <Icon name='icon-name'/>
}
```

### 使用 私有 icon

- 将私有 `icon` `svg` 资源放入到组件目录下 `svg` 目录中

**注意**：私有 icon 命名规范：`组件名-icon名`

- 引入私有 `svg` 资源后在根目录下执行以下命令重新构建图标

```js
gulp svg
```

**注意**：因为图标文件需要经过 webpack 的 svg2react-loader 才能生效。所以重新构建完图标后如果直接刷新浏览器不会看到效果。这时候，只要组件的 src 目录或 demo/src 目录中的任何 js 文件有变动，触发了组件 demo 的重新编译，新图标就生效了。

引用方式同 公有 `icon`

```js
const Icon = require('tingle-icon');

render() {
    return <Icon name='componentName-icon-name'/>
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

类型：Number

默认：32

#### height

描述：icon 高度

类型：Number

默认：32

#### onClick

描述：事件

类型：Function

默认：`() => {}`

## Links

- [Issues](http://gitlab.alibaba-inc.com/tingle-ui/tingle-icon/issues)