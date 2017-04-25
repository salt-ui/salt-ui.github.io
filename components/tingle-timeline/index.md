# tingle-timeline [![tnpm version](http://web.npm.alibaba-inc.com/badge/v/@ali/tingle-timeline.svg?style=flat-square)](http://web.npm.alibaba-inc.com/package/@ali/tingle-timeline)
用时间线来记录时间的过程和结果，方便查看与追溯

![img](https://img.alicdn.com/tps/TB12A7FPFXXXXXIaXXXXXXXXXXX-384-235.png)

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
```javascript
<Timeline>
  <Timeline.Item 
  color="#ff6600"  
  icon={'https://gw.alicdn.com/tps/TB17VvjPFXXXXXjXVXXXXXXXXXX-50-50.png'}  
  description="Angelababy 将参与 adidas Originals..." >
    第一步
  </Timeline.Item>
  <Timeline.Item color="red">
    <div className="txt">123</div>
  </Timeline.Item>
  <Timeline.Item color="#e8e8e8" >
    <div className="txt">
      <p>123</p>
      <p>2uiqwi</p>
    </div>
  </Timeline.Item>
  <Timeline.Item color="#ff6600" icon={<Icon fill='#F53E37' name='map'/>} description={<div className="test">sjkdjsk</div>} >
    第一步
  </Timeline.Item>
</Timeline>
```

## Props
属性 | 类型 | 默认值| 描述
---- | ---- | ----- | ----
color | string | - | 配置点和线的颜色
icon | object | - | 配置icon
description | object | - | 配置描述项

## APIs

## Links

- [Issues](http://gitlab.alibaba-inc.com/tingle-ui/tingle-timeline/issues)
- [README 标准写法](http://gitlab.alibaba-inc.com/tingle-ui/doc/blob/master/README%E6%A0%87%E5%87%86%E5%86%99%E6%B3%95.md)


