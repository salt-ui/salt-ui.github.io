2.0.1 / 2017-4-22
=================
* fix: 修正className。打salt大包后，它会覆盖tingle-scroll-view的样式

2.0.0 / 2017-03-22
=================

### Breaking Changes

#### 删除属性

* 删除 iscroll 的 `options` 属性
* 删除 `pushLoadTip`
* 删除 `cache` 属性

#### 删除 API

* 删除 `clearCache` 方法

#### 添加的属性

* 增加 `refreshing` 属性
* 增加 `loading` 属性
* 添加 `noMore` 属性

#### 运行机制变动

* 使用 `tingle-scroll-view` 封装实现，去除了 `iscroll` 的依赖
* 底部加载的交互方式从手动上拉加载更换为触底自动加载
* `onLoad` 回调分解为两个方法：`onRefresh` 和 `onLoad`。分别对应下拉刷新和触底加载的回调。

#### 注意事项

* 新版本的 dom 结构和 class 名称有变化，做了自定义样式的同学需要验证一下新版本的展示是否正确
* onLoad的使用方式有变化，分解为了 `onRefresh` 和 `onLoad`

1.3.3 / 2017-3-13
==================
* `doc` 更新文档

1.3.2 / 2017-3-10
==================
* `fix` 修复defaultProps.probeType重复定义的问题


1.3.1 / 2017-3-2
==================
* `style` 补全缺失的 lodash 依赖


1.3.0 / 2017-2-17
==================
* `feat` tingle-scoll-list不再在内部加载数据, 用户需自己加载数据传给tingle-scoll-list
* `fix` 在android 7.0上tingle-scroller无法滚动, 添加disablePointer属性来解决这个问题



1.1.4 / 2016-8-30
==================
* `fix` 修复改变params属性后请求参数仍为上一次参数的问题



1.1.2 / 2016-8-28
==================
* `fix` 修复顶部下拉加载对pushLoaderStatus的设值


1.1.0 / 2016-8-24
==================
* `feat` add pullLoader and pushLoader

1.0.9 / 2016-8-9
==================
* `feat` add props.className

1.0.3 / 2016-8-4
==================
* `fix` fix function issue

1.0.2 / 2016-8-4
==================
* `feat` add device type
* `fix` fix the willFetch issue


1.0.1 / 2016-8-4
==================
* `feat` pull load

