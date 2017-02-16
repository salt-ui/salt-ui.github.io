# tingle-grid [![tnpm version](http://web.npm.alibaba-inc.com/badge/v/@ali/tingle-grid.svg?style=flat-square)](http://web.npm.alibaba-inc.com/package/@ali/tingle-grid)
删格布局方案

<img src="https://img.alicdn.com/tps/TB1CXzlJFXXXXa5XFXXXXXXXXXX-640-1136.png" width="300"/>

## Install

```shell
tnpm install @ali/tingle-grid --save
```

## Simple Usage

九宫格菜单案例

```javascript
<Grid col={3} className="t-BCf" square={true} touchable={true}>
  <div className="demo" onClick={t.add.bind(t)}>
    <Icon name="user" fill={'#42A5F5'}/>
    <div className="menu-title">用户</div>
  </div>
  <div className="demo" onClick={t.add.bind(t)}>
    <Icon name="time" fill={'#FF8A65'}/>
    <div className="menu-title">时钟</div>
  </div>
  <div className="demo" onClick={t.add.bind(t)}>
    <Icon name="star" fill={'#EA80FC'}/>
    <div className="menu-title">星星</div>
  </div>
  <div className="demo" onClick={t.add.bind(t)}>
      <Icon name="map" fill={'#EF9A9A'}/>
      <div className="menu-title">地图</div>
  </div>
  <div className="demo" onClick={t.add.bind(t)}>
      <Icon name="pen" fill={'#9FA8DA'}/>
      <div className="menu-title">编辑</div>
  </div>
  <div className="demo" onClick={t.add.bind(t)}>
      <Icon name="info-circle" fill={'#80DEEA'}/>
      <div className="menu-title">信息</div>
  </div>
  <div className="demo" onClick={t.add.bind(t)}>
      <Icon name="plus-circle" fill={'#DCE775'}/>
      <div className="menu-title">添加</div>
  </div>
  <div className="demo" onClick={t.add.bind(t)}>
      <Icon name="search" fill={'#A1887F'}/>
      <div className="menu-title">搜索</div>
  </div>
  <div className="demo" onClick={t.add.bind(t)}>
    <Icon name="plus" fill={'#BDBDBD'}/>
    <div className="menu-title" style={{color: '#bbb'}}>添加</div>
  </div>
</Grid>
```

单元格为正方形

```javascript
<Grid col={5} className="background-color-white" square={true}>
    <div className="demo">1</div>
    <div className="demo">1</div>
    <div className="demo">1</div>
    <div className="demo">1</div>
    <div className="demo">1</div>
    <div className="demo">1</div>
    <div className="demo">1</div>
</Grid>
```

如果像要单元格充满整个cell，就添加`grid-cell-full`给单元格的className，如：

```javascript
<Grid col={5} className="background-color-white" square={true}>
    <div className="demo grid-cell-full">1</div>
    <div className="demo grid-cell-full">1</div>
    <div className="demo grid-cell-full">1</div>
    <div className="demo grid-cell-full">1</div>
    <div className="demo grid-cell-full">1</div>
    <div className="demo grid-cell-full">1</div>
    <div className="demo grid-cell-full">1</div>
</Grid>
```

## Props

### className

- 描述：自定义样式的 `class` 名称。
- 类型：`String`
- 默认：`''`
- 必选：否

示例：

```javascript
<Grid className="customClass">
    ...
</Grid>
```

### col

- 描述：单元格的列数
- 类型：`Number`
- 默认：`4`
- 必选：否

示例：

```javascript
<Grid col={5}>
    <div>item</div>
    <div>item</div>
    <div>item</div>
    <div>item</div>
    <div>item</div>
    <div>item</div>
</Grid>
```

### square

- 描述：单元格的高度是否始终与宽相等
- 类型：`Boolean`
- 默认：`false`
- 必选：否

示例：

```javascript
<Grid square={true}>
    ...
</Grid>
```

### noLine

- 描述：是否隐藏单元格的分割线
- 类型：`Boolean`
- 默认：`false`
- 必选：否

示例：

```javascript
<Grid noLine={true}>
    ...
</Grid>
```

### itemHAlign

- 描述：单元格中元素的水平对齐方式
- 类型：`String` (`'center'`, `'start'`, `'end'` 之一)
- 默认：`'center'`
- 必选：否

示例：

```javascript
<Grid itemHAlign={'end'}>
    ...
</Grid>
```

### itemVAlign

- 描述：单元格中元素的垂直对齐方式
- 类型：`String` (`'center'`, `'start'`, `'end'` 之一)
- 默认：`'center'`
- 必选：否

示例：

```javascript
<Grid itemVAlign={'end'}>
    ...
</Grid>
```

### touchable

- 描述：单元格是否可点击
- 类型：`Boolean`
- 默认：`false`
- 必选：否

## Links

- [Issues](http://gitlab.alibaba-inc.com/tingle-ui/tingle-grid/issues)
