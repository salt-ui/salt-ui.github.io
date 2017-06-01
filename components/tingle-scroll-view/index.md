# tingle-scroll-view [![tnpm version](http://web.npm.alibaba-inc.com/badge/v/@ali/tingle-scroll-view.svg?style=flat-square)](http://web.npm.alibaba-inc.com/package/@ali/tingle-scroll-view)
一句话描述

专注滑动列表, 功能: 下拉刷新，上来加载更多, 见Demo

![](https://img.alicdn.com/tps/TB1WtTVLXXXXXbbXVXXXXXXXXXX-387-521.gif)

### install

```
tnpm install @ali/tingle-scroll-list --save
```

## note

- tingle-scroll-view组件所在的容器必须要限定高度

## Simple Usage

```
  <ScrollView refreshControl={true} infiniteScroll={true}>
       <ItemOne/>
       <ItemTwo/>
       <RepeatItem/>
  </ScrollView>

```


## Props

|属性名称|required|数据类型|默认值|备注|
|---|---|---|---|---|
|refreshControl|required|bool|false| 是否需要下拉刷新功能，当需要此功能时，设置为true |
|refreshControlOptions|optinal|object|{}|下拉刷新的自定义配置项，参见RefreshControl的配置项|
|infiniteScroll|required|bool|false| 是否需要底部自动加载功能，当需要此功能时，设置为true |
|infiniteScrollOptions|optional|object|{}|底部自动加载的自定义配置项，参见InfiniteScroll的配置项|

## APIs

## RefreshControl 顶部下拉刷新组件

|属性名称|required|数据类型|默认值|备注|
|---|---|---|---|---|
|refreshing|required|bool|false| 是否显示refreshing动画 |
|onRefresh|required|func|noop|refreshing回调|
|threshold|optional|number|74|触发下拉刷新的阈值，默认为refreshing组件的高度，当自定义样式时，可能需要更新这个值来保证良好的交互效果|
|max|optional|number|110|可以下拉的最大下拉高度，值必须比threshold大，推荐高度是(1.2~1.5) * threshold|
|beforePullLoadText|optional|string|''|面板下拉到触发下拉刷新的阈值之前的文案|
|afterPullLoadText|optional|string|''|面板下拉达到触发下拉刷新的阈值之后的文案|
|refreshingText|optional|string|''|refreshing时的文案|
|refreshIcon|optional|react element|null|自定义icon，RefreshControl的组件顶部会添加refreshing class来区分refreshing状态和非refreshing装，自定义icon通过此class可以展现不同效果|
|showIcon|optional|bool|true|自定义选项，loading时是否显示icon|
|showText|optional|bool|true|自定义选项，loading时是否显示文案|

## InfiniteScroll 底部自动加载组件 

|属性名称|required|数据类型|默认值|备注|
|---|---|---|---|---|
|loading|required|bool|false| 是否显示loading效果，当显示loading效果时，不触发onLoad事件 |
|onLoad|required|func|noop|当loading为false时，用户滚动屏幕到底部，触发onLoad事件|
|threshold|optional|number|66|当屏幕滚动距离底部小于此距离时，触发onLoad事件|
|loadingText|optional|string|''|loading时的文案|
|loadingIcon|optional|ReactElement|''|loading时的icon，指定此值时, 将使用用户自定义的icon|
|showIcon|optional|bool|true|自定义选项，loading时是否显示icon|
|showText|optional|bool|true|自定义选项，loading时是否显示文案|

## Links

- [Issues](http://gitlab.alibaba-inc.com/tingle-ui/tingle-scroll-view/issues)
- [README 标准写法](http://gitlab.alibaba-inc.com/tingle-ui/doc/blob/master/README%E6%A0%87%E5%87%86%E5%86%99%E6%B3%95.md)
