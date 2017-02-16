# tingle-scroll-list [![tnpm version](http://web.npm.alibaba-inc.com/badge/v/@ali/tingle-scroll-list.svg?style=flat-square)](http://web.npm.alibaba-inc.com/package/@ali/tingle-scroll-list)

专注滑动列表, 功能: 下拉刷新，上来加载更多,迭代渲染List, 渲染OtherItem+Repeat Item,见Demo

![](https://img.alicdn.com/tps/TB1WtTVLXXXXXbbXVXXXXXXXXXX-387-521.gif)


## Install

```
tnpm install @ali/tingle-scroll-list --save
```

## note

- tingle-scroll-list组件所在的容器必须要限定高度
- 传tingle-scroll-list的子组件, 只有最后一个会用后端返回的数据循环渲染, 其他子组件正常渲染, 详见Demo 

## Simple Usage

  ```
    let dataSource={
        type:'DATA',
        data:[{
            name:'1'
            },{
            name:'2'
            },{
            name:'3'
            },{
            name:'4'
            },{
            name:'5'
        }]
    };

    <ScrollList dataSource={dataSource}>
         <ItemOne/>
         <ItemTwo/>
         <RepeatItem/>
    </ScrollList>

  ```

## Props

|属性名称|required|数据类型|默认值|备注|
|---|---|---|---|---|
|className|optional|string|''|className
|scrollLoad|optional|bool|true|是否需要滑动加载|
|dataSource|required|json|""|获取数据的方式,兼容VE|



## dataSource介绍, 见[here](http://gitlab.alibaba-inc.com:vision-components/vu-data-source-parser.git)

|属性名称|required|数据类型|默认值|备注|
|---|---|---|---|---|
|type|required|string|`DATA`|`URL` or `DATA`|
|method|optional|string|`JSONP`| `JSONP` or `JSON`|
|data|optional|object|`{}`|当type类型是DATA时的静态数据|
|url|optional|string|""|当type类型是URL时的数据请求url|
|cache|optional|bool|true|是否缓存数据|
|process|optional|function|`()=>{}`|fetch数据后的数据处理函数|
|willFetch|optional|function|`()=>{}`|fetch之前的参数处理等|

```
    let dataSource2= {
        type:'URL',
        method:'JSONP',
        url:'http://dip.alibaba-inc.com/api/v2/services/schema/mock/35042?q=1',
        params:[{
            name:'key1',
            value:1
        },{
            name:'key2',
            value:1
        }],
        willFetch: function(params) { //参数处理,会默认加currentPage
            console.info("+++willFetch+++");
            return params;
        },
        process: function  (data) { //数据处理
            console.info("++++process+++");
            return data.data;
        }
    };

        <ScrollList dataSource={dataSource2}>
         <ItemOne/>
         <ItemTwo/>
         <RepeatItem/>
    </ScrollList>

```
## APIs
### clearCache
如果已经加载的某些数据发生了变化可以在组件渲染前调用clearCache来清除缓存数据

## Links

- [Issues](http://gitlab.alibaba-inc.com/tingle-ui/tingle-scroll-list/issues)
- [README 标准写法](http://gitlab.alibaba-inc.com/tingle-ui/doc/blob/master/README%E6%A0%87%E5%87%86%E5%86%99%E6%B3%95.md)
