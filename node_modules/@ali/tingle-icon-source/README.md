# tingle-icon-source

tingle-icon 的 svg 资源文件

## 预览

![](https://img.alicdn.com/tps/TB1JkjoMpXXXXa5XXXXXXXXXXXX-628-673.png)

预览[链接](https://img.alicdn.com/tps/TB1JkjoMpXXXXa5XXXXXXXXXXXX-628-673.png)（如果上面的图看不了）

## 安装

首次安装

```
tnpm install @ali/tingle-icon-source --save-dev
```

更新安装

```
tnpm update @ali/tingle-icon-source --save-dev
```

安装过后，在组件的根目录下执行下面命令重新构建图标

```
gulp svg
```

注意：因为图标文件需要经过`webpack`的`svg2react-loader`才能生效。所以重新构建完图标后如果直接刷新浏览器不会看到效果。这时候，只要组件的`src`目录或`demo/src`目录中的任何`js`文件有变动，触发了组件`demo`的重新编译，新图标就生效了。



## 说明

#### 1. `tingle-icon-source/default`里图标是怎么含义？

这个目录存放的图标是`tingle`的默认皮肤使用的一套全局图标。

#### 2. 全局图标不全怎么办？

如果`tingle-icon-source/default`里没有的图标，可以将新的`svg`文件（svg文件一般向视觉同学要或在[iconfont](http://www.iconfont.cn/)上自己下载）添加到组件目录的`src/svg`里（[组件svg自定义规则](http://gitlab.alibaba-inc.com/tingle-ui/tingle-icon/blob/master/src/svg/SVG_ICON_README.md)），然后执行`gulp svg`重新构建一下。如果组件里的图标很通用，比如要跨组件使用，可以提出来通知拂山或马明添加到`tingle-icon-source`里。