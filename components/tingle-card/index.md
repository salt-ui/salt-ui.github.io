# tingle-card [![tnpm version](http://web.npm.alibaba-inc.com/badge/v/@ali/tingle-card.svg?style=flat-square)](http://web.npm.alibaba-inc.com/package/@ali/tingle-card)

通用卡片容器，可承载文字、列表、图片、段落等内容。

组件效果截图：

![image](https://zos.alipayobjects.com/skylark/4fc46f63-1e7e-4a3a-ab74-2899851a112c/attach/2408/d01188c28788fc9b/image.png)

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

```js
import React from 'react';
import Card from '@ali/tingle-card';

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Card>
          <div className="card-inner">常规卡片场景</div>
        </Card>
        <Card scene="image">
          <div className="card-inner">图片卡片场景</div>
        </Card>
        <Card scene="full">
          <div className="card-inner">通栏场景</div>
        </Card>
      <div>
    );
  }
}

module.exports = Demo;
```

## Props

|属性名称|required|数据类型|默认值|备注|
|---|---|---|---|---|
|className|optional|string|''|className|
|scene|optional|string|'normal'|使用场景，可选 normal/image/full|

## APIs

no

## Links

- [Issues](http://gitlab.alibaba-inc.com/tingle-ui/tingle-card/issues)
- [README 标准写法](http://gitlab.alibaba-inc.com/tingle-ui/doc/blob/master/README%E6%A0%87%E5%87%86%E5%86%99%E6%B3%95.md)
