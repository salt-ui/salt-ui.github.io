# tingle-table [![tnpm version](http://web.npm.alibaba-inc.com/badge/v/@ali/tingle-table.svg?style=flat-square)](http://web.npm.alibaba-inc.com/package/@ali/tingle-table)
一句话描述
一张截图


### 普通表格

![普通表格.png](https://work.alibaba-inc.com/aliwork_tfs/g01_alibaba-inc_com/tfscom/TB1nzpPQXXXXXaGXpXXXXXXXXXX.tfsprivate.png)


### 列固定

![列固定.png](https://work.alibaba-inc.com/aliwork_tfs/g01_alibaba-inc_com/tfscom/TB1YbVNQXXXXXaYXpXXXXXXXXXX.tfsprivate.png)


### 列固定且不显示表头

![列固定不显示标题.png](https://work.alibaba-inc.com/aliwork_tfs/g01_alibaba-inc_com/tfscom/TB1ZapVQXXXXXcVXXXXXXXXXXXX.tfsprivate.png)

## Props

| 配置项 | 必填 | 默认值 | 功能/备注 |
|---|----|---|----|
|data|required|{}|数据源|
|columns|required|-|列配置项|
|emptyText|optional|'暂无数据'|没有数据时的展示|
|leftFixed|optional|0|左侧有几列固定|
|showHeader|optional|true|是否显示标题|


### Columns 配置

| 配置项 | 必填 | 默认值 | 功能/备注 |
|---|----|---|----|
|title|required|''|列头|
|dataKey|required|''|表格的数据中用于查看模式展示的字段|
|width|optional|0.25|只支持小数配置，表示占屏幕的比例|
|align|optional|'left'|该列的对其方式|


### data 的数据结构

```javascript
{
    "data":[
        {   
            "id":'1'
            "grade":"grade1",
            "email":"email1",
            "firstName":"firstName1",
            "lastName":"lastName1",
            "birthDate":"birthDate1",
            "country":"country1",
            "city":"city1"
        }
        ...

    ],
}
```



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

## Props

## APIs

## Links

- [Issues](http://gitlab.alibaba-inc.com/tingle-ui/tingle-table/issues)
- [README 标准写法](http://gitlab.alibaba-inc.com/tingle-ui/doc/blob/master/README%E6%A0%87%E5%87%86%E5%86%99%E6%B3%95.md)
