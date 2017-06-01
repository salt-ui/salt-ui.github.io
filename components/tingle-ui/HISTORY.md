## 2.1.5 / 2017-4-21
* tingle-popup
	* 新增组件
* tingle-action-sheet
	* 新增组件

## 2.1.4 / 2017-4-21
* tingle-picker-field@1.0.1
	* bugfix
* tingle-scroll-list@2.0.1
	* fix: 修正className。打salt大包后，它会覆盖tingle-scroll-view的样式

## 2.1.3 / 2017-4-21
* tingle-picker-field
	* 新增组件
* tingle-calendar-field@1.0.8
	* 传递 readOnly 到field
* tingle-field@1.2.0
	* 支持extra：放一些额外的元素，比如徽标等

## 2.1.2 / 2017-4-19
* tingle-field@1.1.2
	* readOnly状态下不显示tip
* tingle-slide@1.2.0 
	* 发布正式版
* tingle-gallery@1.2.0
	* 发布正式版

## 2.1.1 / 2017-4-11
* tingle-calendar@2.1.0
	* `fix`: 在iOS上某些场景下，会导致点击“取消”不消失，在样式上进行了兼容
* tingle-table@1.0.5
	* `fix`: 滚动条层级太高 和其他组件一同使用会有影响
	* `fix`: 同时使用两个表格数据不一样时，高度不能自适应（原来用的id来选择元素，换成refs来选择）
* tingle-checkbox-field@1.1.12
	* fix: slot模式下，修正readOnly状态的颜色
* tingle-datetime-field@1.1.0
	* `feat`: 对tingle组件的依赖策略由`~`改为`^`
* tingle-cascade-select-field@1.1.0
	* `feat`: 对tingle组件的依赖策略由`~`改为`^`

## 2.1.0 / 2017-4-9
* tingle-layer
	* 添加`renderToBody`配置项，可以选择是否把节点插入到body，默认为true。原来的逻辑是原位插入
* tingle-mask
	* 优化：当Mask visible的时候，禁用页面滚动
* tingle-table
  * 内容超出之后滚动不流畅，fix
  * align为center时显示位置未居中，fix
* tingle-slot
	* 对tingle组件的依赖策略由`~`改为`^`

## 2.0.2 / 2017-4-7
* tingle-cascade-select-field 更新文档
* tingle-mask
	* 当Mask visible的时候，禁用页面滚动；否则复原
	* z-index调整为1000
* tingle-dialog，z-index调整为1020

## 2.0.1 / 2017-4-5
* 合并1.2.13

## 1.2.13 / 2017-3-31
* hotfix: 加入 dedupe plugin，修复打包过大的问题

## 2.0.0 / 2017-3-28
* 新增tingle-menu
* 新增tingle-progress
* tingle-scroll-list
	* 有一系列`break change`
		* 删除属性
			* 删除 iscroll 的 `options` 属性
			* 删除 `pushLoadTip`
			* 删除 `cache` 属性
		* 删除 API
			* 删除 `clearCache` 方法
		* 添加的属性
			* 增加 `refreshing` 属性
			* 增加 `loading` 属性
			* 添加 `noMore` 属性
		v 运行机制变动
			* 使用 `tingle-scroll-view` 封装实现，去除了 `iscroll` 的依赖
			* 底部加载的交互方式从手动上拉加载更换为触底自动加载
			* `onLoad` 回调分解为两个方法：`onRefresh` 和 `onLoad`。分别对应下拉刷新和触底加载的回调。
		* 注意事项
			* 新版本的 dom 结构和 class 名称有变化，做了自定义样式的同学需要验证一下新版本的展示是否正确
			* onLoad的使用方式有变化，分解为了 `onRefresh` 和 `onLoad`
* tingle-table
	* feat: 边框rem(1px)在部分设备下不显示
	* feat: 当未固定时，滑动时左侧边框不显示
* tingle-tab-bar
	* feat: 升级tingle-icon，并修改demo，不再引入tingle-icon-source
	* feat: 升级generator
	* feat: 格式化代码、删除冗余代码
	* fix: 修复中间特殊button的color
	* feat: 修改css样式替换icon

## 1.2.11 / 2017-3-16
* 升级tingle-icon到2.0.0
* 依赖tingle-icon的组件：
	* 升级tingle-icon到2.x
	* 修改demo，不再引入tingle-icon-source，不再往页面上插入svg
	* generator升级，[升级generator的update任务](http://gitlab.alibaba-inc.com/tingle-ui/generator-tingle/blob/master/HISTORY.md#v1111)
	* 格式化代码
	* 并做小版本升级
	* 涉及组件：
		* tingle-checkbox-field
		* tingle-datetime-field
		* tingle-field
		* tingle-list
		* tingle-nav-bar
		* tingle-note
		* tingle-photo-field
		* tingle-radio-field
		* tingle-search-bar
		* tingle-select-field
		* tingle-toast
		* tingle-table
		* tingle-tab-bar
* 新增或增强的组件：
	* tingle-table
	* tingle-timeline
	* tingle-image-viewer
	* tingle-tab-bar
* 由上面的修改所带来的问题的修复

## 1.2.10
* 更新tingle-calendar样式

## 1.2.9
* 发正式版样式

## 1.2.8
* tingle-table 新增
* tingle-timeline 新增
* tingle-calendar-field
 * feat: 点击mask关闭
 * feat: 面板显示隐藏的逻辑，封装在组件内部

## 1.2.7
* 新增tingle-calendar-field
* tingle-calendar升级到^2.0.0，含样式上和修复及其它优化

## 1.2.6
* with tingle-scroll-list@1.3.0

## 1.2.3
* tingle-checkbox-field@1.1.4
 * fix: 移动端无法选中选项
 * fix: 样式修复

## 1.2.2
* 移除demo的Native，用户可到钉钉官网查找相关jsapi，更新更及时

## 1.2.1
* 误发，忘记build了

## 1.2.0
* tingle-crumb
 * 新增组件

## 1.1.18 / 2016.12.30
* tingle-checkbox-field
 * 右侧 icon 没对齐修复
 * 滑动穿透修复
* tingle-photo-field
 * placeholder样式修复
* tingle-textarea-field
 * placeholder 文案颜色与规范不一致修复

## 1.1.17 / 2016.12.15
* tingle-checkbox-field
 * 移动端多选组件交互更改，提供了一种slot的方式
* tingle-text-field
 * 禁用态也可显示placeholder
* tingle-tab-bar
 * 修复icon不支持相对路径的问题

## 1.1.16 / 2016.12.8
* tingle-search-bar
 * zindex修复
* tingle-tab-bar
 * zindex修复
* tingle-list
 * 移除dependencies中的gulp-svg-symbols，它仅用于开发

## 1.1.15 / 2016.12.1
* fix 1.1.14遗留的bug

## 1.1.14 / 2016.12.1
* fix 1.1.13遗留的bug

## 1.1.13
* 复制index.html到dist/demo/index.html，并更新页面上静态文件地址，发布到线上，用户可以访问这个demo

## 1.1.11
* tingle-list
 * 数据更新后isDelete不可用，fix
* tingle-scroll-list
 * 把数据请求的功能分离出来
* tingle-datetime-field
 * console.waring拼写错误，fix
* tingle-slide
 * 90毫秒的点击捕获时间太短，改成500
* tingle-photo-field
 * Ali.alert，bugfix

## 1.1.10
* tingle-box@1.0.2 
 * 增加react依赖，支持node端渲染
* tingle-checkbox-field@1.0.13 
 * feat: add required tag
* tingle-gallery@1.1.2 
  * 增加react依赖，支持node端渲染 
* tingle-group@1.0.8 
 * 增加react依赖，支持node端渲染
* tingle-icon-source@1.0.13
 * feat: add field-required
* tingle-mask@1.0.6 
 * 增加react依赖，支持node端渲染
* tingle-photo-field@1.0.3 
 * feat: add required tag
* tingle-slide@1.0.8 
* tingle-slot@1.0.9 
 * fix issue [#4](http://gitlab.alibaba-inc.com/tingle-ui/tingle-slot/issues/4)
* tingle-toast@1.0.10 
 * feat: change loading

## 1.1.9
 * tingle-slot@1.0.9
   * bugfix

## 1.1.8
 * tingle-cascade-select-field
   * 新增组件

## 1.1.7
 * tingle-dialog@1.0.19 
  * 修复国际化 bug
 * tingle-icon-source@1.0.12 
  * 增加 toast 图标
 * tingle-tab@1.0.23 
  * remove border-bottom in the brick mode

## 1.1.6
* tingle-tab-bar@1.1.4
 * 调整选中态图片地址的传入方式为使用属性 activeIcon
 * 支持自定义 TabBar 和 TabBarItem 样式
* tingle-search-bar@1.0.4
 * 修复clear keyword未触发 onChange 的 bug

## 1.1.5
* tingle-tab-bar@1.1.2
 * fix: touch scroll
* tingle-dialog@1.0.18 
 * 支持国际化
* tingle-grid@1.0.4 
 * 代码优化
* tingle-scroll-list@1.2.7
 * bugfix
 
## 1.1.4
* tingle-scroll-list@1.2.2
 * Bugfix/reset position
* tingle-search-bar@1.0.3
 * fix: reset overflow after unmount
* tingle-icon-source@1.0.11
 * display none
 
## 1.1.3
* tingle-scroll-list@1.2.1
 * fix default background image
 * fix rchild
* tingle-tab@1.0.22 
 * fix title propType to `node`
 * style: formatting
 
## 1.1.2
* tingle-rate@1.0.2 
 * gulpfile add plugin `add-module-exports`
* tingle-scroll-list@1.1.5 
 * fix rchild is undefined
 
## 1.1.1
* tingle-button@1.0.10
 * onClick 传入 event 参数
 
## 1.1.0
* 版本号标准化
* tingle-toast@1.0.7
 * 改为默认不显示 mask
* tingle-tab@1.0.20
 * 修复文字很长时，右侧没留空白
* tingle-scroll-list@1.1.4
 * use nextProps param to do fetch action
* tingle-checkbox-field@1.0.12
 * label判断修改
* tingle-radio-field@1.0.9
 * label判断修改
* tingle-scroller@1.0.7
 * 文档订正
* tingle-layer@1.0.10
 * 文档订正
* tingle-rate@1.0.1
 * 新增组件 
* tingle-photo-field@1.0.1
 * 新增组件
 
## 1.0.29
* tingle-scroll-list@1.1.0
 * 重构
 * 样式修改

## 1.0.28
* tingle-toast@1.0.6
 * mask 支持隐藏
* tingle-layer@1.0.9
 * 修复 mask  隐藏
* tingle-iscroll-list@1.0.11
 * 修复滑动到末页的时候会将所有数据清空
 * 修复在 scroll 里的元素在 Android 里无法点击
* tingle-checkbox-field@1.0.11
 * 添加 label
 * tingle-radio-field@1.0.7
  * 添加 label
* tingle-calendar@1.0.0
 * 新增组件
 * 新增 calendar demo

## 1.0.27
* tingle-tab@1.0.18
  * demo 修改
* tingle-scroll-list@1.0.5
  * 样式修改
  
## 1.0.26
* tingle-datetime-field@1.0.6
  * 新增
* tingle-scroll-list@1.0.1
  * 新增

## 1.0.25
* tingle-slot@1.0.8
  * 支持服务端调用（增加 react 依赖）
  * 增加表头显示功能
* tingle-select-field@1.0.8
  * 支持服务端调用（增加 react 依赖）
* tingle-tab@1.0.17
 *  增加 tab 滚动定位
* tingle-search-bar@1.0.2
 *  添加 onEnter 和 onExit

## 1.0.24
* tingle-search-bar@1.0.1
 * 新增
* tingle-tab@1.0.16
 * 添加切换销毁属性 `destroyInactiveTabPane` 
* tingle-slot@1.0.6
 * 修复 constructor 里使用了 `this.prpps`
 
## 1.0.23
* tingle-slide@1.0.7
  * 修复只有一个元素时无法触发 `onSlideClick` 事件的错误

## 1.0.22
* tingle-list@1.0.9
 * list item 的 onclick 回调添加 data 参数
 * 头像 的 onclick 回调添加 data 参数
 * 添加滑动删除的回调
* tingle-field@1.0.14
 * 添加必填标识(星号)

## 1.0.21
* tingle-list@1.0.8
 * list Item 添加 onClick 回调
 * data中的内容不传就不显示（解决有人不想显示头像的问题）
 * 添加头像 onClick 回调
* 打包修复

## 1.0.20
* tingle-gallery
  * 添加 `onGalleryClick` 特性

## 1.0.19
* 重新构建 salt-ui

## 1.0.18
* tingle-list
 * [解决tingle-group边线问题](http://gitlab.alibaba-inc.com/tingle-ui/tingle-list/issues/10)
 * 解决setState后list数据不变的问题

## 1.0.17
* tingle-icon
 * [文档补充] (http://gitlab.alibaba-inc.com/tingle-ui/tingle-icon/issues/4)
 * [添加 onClick 事件] (http://gitlab.alibaba-inc.com/tingle-ui/tingle-icon/issues/6)

## 1.0.16
 * tingle-tab bug fix to 1.0.14:
  * [tab 切换方式用 show/hide 会有问, 改用只渲染当前 body](http://gitlab.alibaba-inc.com/tingle-ui/tingle-tab/issues/5)
  * [导航部分右边添加自定义icon区域](http://gitlab.alibaba-inc.com/tingle-ui/tingle-tab/issues/6)
 * tingle-select-field bug fix to 1.0.6
  * [点击图标不会出现选项](http://gitlab.alibaba-inc.com/tingle-ui/tingle-select-field/issues/7)

## 1.0.15
 * tingle-dialog 1.0.17 修复了在内外安卓容器无法居中的问题

## 1.0.13
 * copy salt.js and salt.css

## 1.0.12  
 * 和 tnpm 包版本号保持一致

## 1.0.5
 * add global SaltUI

## 1.0.4
 * tingle-filed	1.0.12 修复了 className不在最外层的问题
 * tingle-select-field	1.0.5 fix issue #2 #3
 * tingle-icon 1.0.10 把 svg4everybody 本地化，原有的方式 webpack 打包后有问题
 * tingle-dialog 1.0.14 fix issue #3 #4 #5
 * tingle-group	1.0.7 fix issue #3
