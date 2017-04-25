# tingle-slide

## 轮播组件

<img src="https://img.alicdn.com/tps/TB1A6YpJFXXXXaeXFXXXXXXXXXX-640-1136.png" width="300"/>

## Simple Usage
```javascript
<Slide
  showNav
  auto
  active={2}
  onMount={this.onMount}
  onSlideEnd={this.onSlideEnd}
  onSlideClick={this.onSlideClick}
  nameList={['图片一','图片二','图片三','图片四','图片五']}
>
  <Slide.Item title="标题" className="t-image-slide-item" style={{backgroundImage: "1.jpg"}}>
    <span className="t-FCf t-OP0">随便写点东西</span>
  </Slide.Item>
  <Slide.Item className="t-image-slide-item" style={{backgroundImage: "1.jpg"}}>
    <Slide.Item className="t-FCf t-OP0">随便写点东西</span>
  </Slide.Item>
  <Slide.Item className="t-image-slide-item" style={{backgroundImage: "1.jpg"}}>
    <span className="t-FCf t-OP0">随便写点东西</span>
  </Slide.Item>
  <Slide.Item className="t-image-slide-item" style={{backgroundImage: "1.jpg"}}>
    <span className="t-FCf t-OP0">随便写点东西</span>
  </Slide.Item>
  <Slide.Item className="t-image-slide-item" style={{backgroundImage: "1.jpg"}}>
    <span className="t-FCf t-OP0">随便写点东西2</span>
  </Slide.Item>
</Slide>
```

## Props

### className

- 描述：自定义样式的 `class` 名称。
- 类型：`String`
- 默认：`''`
- 必选：否

示例：

```javascript
<Slide className="customClass">
    ...
</Slide>
```

### height

- 描述：Slide 的高度
- 类型：`String` or `Number`
- 默认：`null`
- 必选：否

示例：

```javascript
<Slide height={100}>
    ...
</Slide>
```

### active

- 描述：开始轮播的 item 序号
- 类型：`Number`
- 默认：`0`
- 必选：否

示例：

```javascript
<Slide active={3}>
    ...
</Slide>
```

### auto

- 描述：是否自动播放
- 类型：`Boolean`
- 默认：`false`
- 必选：否

示例：

```javascript
<Slide auto={true}>
    ...
</Slide>
```

### loop

- 描述：是否循环播放
- 类型：`Boolean`
- 默认：`true`
- 必选：否

示例：

```javascript
<Slide loop={false}>
    ...
</Slide>
```

### showNav

- 描述：是否显示导航用的小点
- 类型：`Boolean`
- 默认：`false`
- 必选：否

示例：

```javascript
<Slide showNav={true}>
    ...
</Slide>
```

### onMount

- 描述：内容变更的时候触发的callback
- 类型：`Function`
- 默认：`null`
- 必选：否

示例：

```javascript
<Slide onMount={()=>{alert('Mounted!')}}>
    ...
</Slide>
```

### onSlideEnd

- 描述：切换轮播图之后触发的callback，接受一个参数`option`，可以通过`option`获取到改变后的`index`
- 类型：`Function`
- 默认：`null`
- 必选：否

示例：

```javascript
<Slide onSlideEnd={(option)=>{alert('Current index is:' + option.index)}}>
    ...
</Slide>
```

### onSlideClick

- 描述：点击轮播图之后触发的callback，接受一个参数`option`，可以通过`option`获取到改变后的`index`
- 类型：`Function`
- 默认：`null`
- 必选：否

示例：

```javascript
<Slide onSlideClick={(option)=>{alert('Clicked index is:' + option.index)}}>
    ...
</Slide>
```

### showTitle

- 描述：是否展示轮播标题
- 类型：`bool`
- 默认：`false`
- 必选：否

示例：

```javascript
<Slide showTitle>
    <Slide.Item title={'标题'}></Slide.Item>
</Slide>
```

### autoSlideTime

- 描述：切换动画的时长，接受一个参数`number`, 默认时长4000(4s)；
- 类型：`number`
- 默认：4000
- 必选：否

示例：

```javascript
<Slide autoSlideTime={4000}>
    ...
</Slide>
```

## Slide.Item props

名称 | 类型 | 描述
--- | --- | ---
title | string | 标题
style | object | 样式
className | string | 类名

## Links

- [Issues](https://github.com/salt-ui/saltui/issues/new)
