

## 轮播组件

曾用名 Slide，现 Carousel

## Props 定义

配置项 |	类型 |	必填 |	默认值 |	功能/备注
--- | --- | --- | --- | ---
className | string | optional | null | 额外的css class
height | number, string | optional | '5rem' | 定义轮播的高度
active | number | optional | 0 | 当前轮播项的下标
auto | boolean | optional | true | 是否自动轮播
loop | boolean | optional | true | 是否循环轮播
showNav | boolean | optional | true | 是否展示指示器
onMount | function | optional | null | 轮播组件初始化并加载到页面之后的回调
onSlideEnd | function | optional | null | 轮播执行完之后的回调
onSlideClick | function | optional | null | 轮播项被点击后的回调，参数为 { index, data, item }
showTitle | boolean | optional | true | 是否展示标题
autoSlideTime | number | optional | 4000 | 轮播自动滚动的间隔时间，单位：ms
displayMode | string | optional | 'normal' | 显示风格，有 normal 和 card 两种方式

## Carousel.Item props 定义

配置项 | 类型 | 功能/备注
--- | --- | ---
title | string | 标题
style | object | 样式
className | string | 类名

## Simple Usage
```javascript
<Carousel
  showNav
  auto
  active={2}
  onMount={this.onMount}
  onSlideEnd={this.onSlideEnd}
  onSlideClick={this.onSlideClick}
  nameList={['图片一','图片二','图片三','图片四','图片五']}
>
  <Carousel.Item title="标题" className="t-image-slide-item" style={{backgroundImage: "1.jpg"}}>
    <span className="t-FCf t-OP0">随便写点东西</span>
  </Carousel.Item>
  <Carousel.Item className="t-image-slide-item" style={{backgroundImage: "1.jpg"}}>
    <Carousel.Item className="t-FCf t-OP0">随便写点东西</span>
  </Carousel.Item>
  <Carousel.Item className="t-image-slide-item" style={{backgroundImage: "1.jpg"}}>
    <span className="t-FCf t-OP0">随便写点东西</span>
  </Carousel.Item>
  <Carousel.Item className="t-image-slide-item" style={{backgroundImage: "1.jpg"}}>
    <span className="t-FCf t-OP0">随便写点东西</span>
  </Carousel.Item>
  <Carousel.Item className="t-image-slide-item" style={{backgroundImage: "1.jpg"}}>
    <span className="t-FCf t-OP0">随便写点东西2</span>
  </Carousel.Item>
</Carousel>
```

## Props

### className

- 描述：自定义样式的 `class` 名称。
- 类型：`String`
- 默认：`''`
- 必选：否

示例：

```javascript
<Carousel className="customClass">
    ...
</Carousel>
```

### height

- 描述：Slide 的高度
- 类型：`String` or `Number`
- 默认：`null`
- 必选：否

示例：

```javascript
<Carousel height={100}>
    ...
</Carousel>
```

### active

- 描述：开始轮播的 item 序号
- 类型：`Number`
- 默认：`0`
- 必选：否

示例：

```javascript
<Carousel active={3}>
    ...
</Carousel>
```

### auto

- 描述：是否自动播放
- 类型：`Boolean`
- 默认：`false`
- 必选：否

示例：

```javascript
<Carousel auto={true}>
    ...
</Carousel>
```

### loop

- 描述：是否循环播放
- 类型：`Boolean`
- 默认：`true`
- 必选：否

示例：

```javascript
<Carousel loop={false}>
    ...
</Carousel>
```

### showNav

- 描述：是否显示导航用的小点
- 类型：`Boolean`
- 默认：`false`
- 必选：否

示例：

```javascript
<Carousel showNav={true}>
    ...
</Carousel>
```

### onMount

- 描述：内容变更的时候触发的callback
- 类型：`Function`
- 默认：`null`
- 必选：否

示例：

```javascript
<Carousel onMount={()=>{alert('Mounted!')}}>
    ...
</Carousel>
```

### onSlideEnd

- 描述：切换轮播图之后触发的callback，接受一个参数`option`，可以通过`option`获取到改变后的`index`
- 类型：`Function`
- 默认：`null`
- 必选：否

示例：

```javascript
<Carousel onSlideEnd={(option)=>{alert('Current index is:' + option.index)}}>
    ...
</Carousel>
```

### onSlideClick

- 描述：点击轮播图之后触发的callback，接受一个参数`option`，可以通过`option`获取到改变后的`index`
- 类型：`Function`
- 默认：`null`
- 必选：否

示例：

```javascript
<Carousel onSlideClick={(option)=>{alert('Clicked index is:' + option.index)}}>
    ...
</Carousel>
```

### showTitle

- 描述：是否展示轮播标题
- 类型：`bool`
- 默认：`false`
- 必选：否

示例：

```javascript
<Carousel showTitle>
    <Carousel.Item title={'标题'}></Carousel.Item>
</Carousel>
```

### autoSlideTime

- 描述：切换动画的时长，接受一个参数`number`, 默认时长4000(4s)；
- 类型：`number`
- 默认：4000
- 必选：否

示例：

```javascript
<Carousel autoSlideTime={4000}>
    ...
</Carousel>
```

