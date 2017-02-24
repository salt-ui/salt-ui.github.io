# tingle-ui

包含所有组件的 js/css/doc 的合集

## 当前组件列表

```
{
    Avatar: require('@ali/tingle-avatar'),
    Boxs: require('@ali/tingle-box'),
    Button: require('@ali/tingle-button'),
    Calendar: require('@ali/tingle-calendar'),
    CascadeSelectField: require('@ali/tingle-cascade-select-field'),
    CheckboxField: require('@ali/tingle-checkbox-field'),
    Context: require('@ali/tingle-context'),
    DatetimeField: require('@ali/tingle-datetime-field'),
    Dialog: require('@ali/tingle-dialog'),
    Field: require('@ali/tingle-field'),
    Gallery: require('@ali/tingle-gallery'),
    Group: require('@ali/tingle-group'),
    Grid: require('@ali/tingle-grid'),
    Icon: require('@ali/tingle-icon'),
    Layer: require('@ali/tingle-layer'),
    List: require('@ali/tingle-list'),
    Mask: require('@ali/tingle-mask'),
    NavBar: require('@ali/tingle-nav-bar'),
    Note: require('@ali/tingle-note'),
    //Picker: require('@ali/tingle-picker'),
    RadioField: require('@ali/tingle-radio-field'),
    SearchBar: require('@ali/tingle-search-bar'),
    SelectField: require('@ali/tingle-select-field'),
    Scroller: require('@ali/tingle-scroller'),
    ScrollList: require('@ali/tingle-scroll-list'),
    Slide: require('@ali/tingle-slide'),
    Slot: require('@ali/tingle-slot'),
    Switch: require('@ali/tingle-switch'),
    SwitchField: require('@ali/tingle-switch-field'),
    Tab: require('@ali/tingle-tab'),
    TabBar: require('@ali/tingle-tab-bar'),
    TextareaField: require('@ali/tingle-textarea-field'),
    TextField: require('@ali/tingle-text-field'),
    Toast: require('@ali/tingle-toast'),
}
```


## 添加组件
* 安装

```
tnpm i @ali/tingle-xxx --save
```
* 在 src/components.sty 里引入对应 stylus

```
@require "./../node_modules/@ali/tingle-xxx/src/Xxx.styl";
```

* 修改 demo, 添加对应组件

* 构建样式

```
gulp b
```

* 查看 demo

```
gulp d
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
