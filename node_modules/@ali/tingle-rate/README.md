# tingle-rate [![tnpm version](http://web.npm.alibaba-inc.com/badge/v/@ali/tingle-rate.svg?style=flat-square)](http://web.npm.alibaba-inc.com/package/@ali/tingle-rate)

评分组件.

![tingle-rate](http://aligitlab.oss-cn-hangzhou-zmf.aliyuncs.com/uploads/tingle-ui/tingle-icon-source/cb82ed23b86df267ece18d0e28575208/image.png)

## Install

```
tnpm install @ali/tingle-rate --save
```

## Simple Usage

```js
<Rate totalScore={5} height={30} gap={15} score={t.state.score} onChange={t.handleChange.bind(t)} />
```

## Props

#### className

描述：自定义样式的class名称。

类型：String

默认：''

必选：否

#### totalScore

描述：icon的个数，即总分。

类型：Number

默认：5

必选：否



#### height

描述：icon的尺寸，icon一定是正方形的，也就是width=height。

类型：Number 或 String

默认：30

必选：否


#### gap

描述：每一项的padding-let 和 padding-right的总和。但第一项的padding-let和最后一项padding-right均为: 0 !important。

类型：Number 或 String

默认：10

必选：否


#### score

描述：默认已得到的分数。

类型：Number

默认：0

必选：否


#### onChange

描述：回调函数，会返回选中的分数onChange(currentScore)。

类型：Function

默认：noop

必选：否


## Links

- [Issues](http://gitlab.alibaba-inc.com/tingle-ui/tingle-rate/issues)
