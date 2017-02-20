# TODOs

* 添加`set`方法，用于全局配置`tingle`的运行环境。如`Tingle.set('artBoardWidth', 640)`。

## updates

#### v1.0.1

* 保证`require`方式引用时返回的是同一个上下文对象

#### v1.0.0

* 将react从`0.13.3`升级到`0.14.3`
* 删除`React.initializeTouchEvents`

#### v0.1.5

* 在`html`上添加`dpr`类值

#### v0.1.0 (2015-08-25)

* `ES6`化。
* 简化环境判断的层级，如：`Context.is.pc`改为`Context.isPC`。

#### v0.0.4 (2015-08-18)

* `0.5px`支持，在`html`元素的`class`中以`hairline`标识。
* 无入侵的`rem`方案支持，添加`rem`方法和`makePrivateRem`方法。

#### v0.0.3 (2015-07-14)

* 添加文档

0.1.2 / 2015-09-11
==================

 * remove unnecessary files & dependencies
 * update dependencies

0.1.1 / 2015-09-11
==================

 * fix fastclick misspell , rm git modules
 * remove context.is context.Touch context.Support
 * fix Context mixin bugs

0.0.1 / 2015-09-07
==================

 * First Version