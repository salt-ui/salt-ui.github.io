# tingle-popup [![tnpm version](http://web.npm.alibaba-inc.com/badge/v/@ali/tingle-popup.svg?style=flat-square)](http://web.npm.alibaba-inc.com/package/@ali/tingle-popup)
一句话描述
一张截图

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

## APIs


### .show(content: React.Element, options: Object):

`options` 可选项：

- maskClosable (bool) - 点击蒙层是否允许关闭，默认允许
- animationType (string) - 弹出动画类型 `slide-up` (默认，向上划出)、`slide-down` 、`slide-left`、 `slide-right`
- className (string) - popup 区域的顶级样式类名
- transitionName (string) - 自定义显示隐藏变换动画
- maskTransitionName (string) - 自定义遮罩层变换动画
- onMaskClose (function) - 遮罩层关闭时的回调，支持返回 Promise

### .hide():

关闭 Popup

## Links

- [Issues](http://gitlab.alibaba-inc.com/tingle-ui/tingle-popup/issues)
- [README 标准写法](http://gitlab.alibaba-inc.com/tingle-ui/doc/blob/master/README%E6%A0%87%E5%87%86%E5%86%99%E6%B3%95.md)
