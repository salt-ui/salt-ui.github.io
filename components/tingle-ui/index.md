# tingle-ui

包含所有组件的 js/css/doc 的合集

## 当前组件列表

```
{
    version: VERSION,
    ActionSheet: require('@ali/tingle-action-sheet'),
    Avatar: require('@ali/tingle-avatar'),
    Boxs: require('@ali/tingle-box'),
    Badge: require('@ali/tingle-badge'),
    Button: require('@ali/tingle-button'),
    Calendar: require('@ali/tingle-calendar'),
    CalendarField: require('@ali/tingle-calendar-field'),
    Card: require('@ali/tingle-card'),
    CascadeSelectField: require('@ali/tingle-cascade-select-field'),
    CheckboxField: require('@ali/tingle-checkbox-field'),
    CitySelectField: require('@ali/tingle-city-select-field'),
    Context: require('@ali/tingle-context'),
    Crumb: require('@ali/tingle-crumb'),
    DatetimeField: require('@ali/tingle-datetime-field'),
    Dialog: require('@ali/tingle-dialog'),
    Field: require('@ali/tingle-field'),
    Gallery: require('@ali/tingle-gallery'),
    Group: require('@ali/tingle-group'),
    Grid: require('@ali/tingle-grid'),
    Icon: require('@ali/tingle-icon'),
    ImageViewer: require('@ali/tingle-image-viewer'),
    InfiniteScroll: require('@ali/tingle-infinite-scroll'),
    Layer: require('@ali/tingle-layer'),
    List: require('@ali/tingle-list'),
    Mask: require('@ali/tingle-mask'),
    Menu: require('@ali/tingle-menu'),
    NavBar: require('@ali/tingle-nav-bar'),
    Note: require('@ali/tingle-note'),
    NumberPicker: require('@ali/tingle-number-picker'),
    NumberPickerField: require('@ali/tingle-number-picker-field'),
    Pagination: require('@ali/tingle-pagination'),
    PhotoField: require('@ali/tingle-photo-field'),
    PickerField: require('@ali/tingle-picker-field'),
    Popup: require('@ali/tingle-popup'),
    Progress: require('@ali/tingle-progress'),
    Rate: require('@ali/tingle-rate'),
    RadioField: require('@ali/tingle-radio-field'),
    RefreshControl: require('@ali/tingle-refreshcontrol'),
    SearchBar: require('@ali/tingle-search-bar'),
    SelectField: require('@ali/tingle-select-field'),
    Scroller: require('@ali/tingle-scroller'),
    ScrollList: require('@ali/tingle-scroll-list'),
    ScrollView: require('@ali/tingle-scroll-view'),
    Slide: require('@ali/tingle-slide'),
    Slot: require('@ali/tingle-slot'),
    Steps: require('@ali/tingle-steps'),
    Switch: require('@ali/tingle-switch'),
    SwitchField: require('@ali/tingle-switch-field'),
    Tab: require('@ali/tingle-tab'),
    TabBar: require('@ali/tingle-tab-bar'),
    Table: require('@ali/tingle-table'),
    TextareaField: require('@ali/tingle-textarea-field'),
    TextField: require('@ali/tingle-text-field'),
    Timeline: require('@ali/tingle-timeline'),
    Toast: require('@ali/tingle-toast'),
}
```


## 如何添加新的组件

1、安装需要依赖的组件

```
tnpm i you_pac --save
```

2、 修改输出包

```
在 `src/tingle-ui.js` 中添加新安装的组件
```

3、修改样式文件

```
在 `src/components.styl` 中添加新安装的组件的样式文件
```

4、demo补全

```
在 `demo/src/pages/home/PageHome.js` 中添加新安装的组件的demo
```


## 如何发布

1、发布之前，请确认组件已经是你期望的版本

```
修改版本号并执行 tnpm update
```

2、发布前,请确保 demo 可以跑起来

```
gulp d
```

3、打包

```
gulp b
```

4、发布tnpm包

```
gulp p
```

5、推送代码到远端

```
git add .
git commit -m '你的提交信息'
git push origin master
```

## 添加主题

* 在 tingle-style 中添加对应主题变量
* 在 src/theme/添加对应 主题.styl
* 构建样式

```
gulp b
```

* 查看 demo

```
gulp d
```
## 注意

* 发布前,请确保 demo 可以跑起来
