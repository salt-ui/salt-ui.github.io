# tingle-scroll-list [![tnpm version](http://web.npm.alibaba-inc.com/badge/v/@ali/tingle-scroll-list.svg?style=flat-square)](http://web.npm.alibaba-inc.com/package/@ali/tingle-scroll-list)

专注滑动列表, 功能: 下拉刷新，上来加载更多,迭代渲染List, 渲染OtherItem+Repeat Item,见Demo

![](https://img.alicdn.com/tfs/TB1Ou9eQXXXXXXSXXXXXXXXXXXX-364-648.gif)


## Install

```
tnpm install @ali/tingle-scroll-list --save
```

## note

- tingle-scroll-list 组件所在的容器必须要限定高度
- 传给 tingle-scroll-list 的子组件, 只有最后一个会用后端返回的数据循环渲染, 其他子组件正常渲染, 详见 Demo 

## 2.x 和 1.x 之间的差异

#### 删除属性

* 删除 iscroll 的 `options` 属性
* 删除 `pushLoadTip`
* 删除 `cache` 属性

#### 删除 API

* 删除 `clearCache` 方法

#### 添加的属性

* 增加 `refreshing` 属性
* 增加 `loading` 属性
* 添加 `noMore` 属性

#### 运行机制变动

* 使用 `tingle-scroll-view` 封装实现，去除了 `iscroll` 的依赖
* 底部加载的交互方式从手动上拉加载更换为触底自动加载
* `onLoad` 回调分解为两个方法：`onRefresh` 和 `onLoad`。分别对应下拉刷新和触底加载的回调。

#### 注意事项

* 新版本的 dom 结构和 class 名称有变化，做了自定义样式的同学需要验证一下新版本的展示是否正确
* onLoad的使用方式有变化，分解为了 `onRefresh` 和 `onLoad`



## Simple Usage

```
    const data=[{
        name:'1'
        },{
        name:'2'
        },{
        name:'3'
        },{
        name:'4'
        },{
        name:'5'
    }];

    <ScrollList data={data} scrollLoad={false}>
         <OtherOne />
         <OtherTwo />
         <RepeatItem />
    </ScrollList>

```

## Props

|属性名称|required|数据类型|默认值|备注|
|---|---|---|---|---|
|className|optional|string|''|className
|scrollLoad|optional|bool|true|是否需要滑动加载|
|dataGetted|required|bool|false|数据是否加载完成|
|data|required|array|[]|传给组件的数据|
|refreshing|required|bool|false|下拉刷新是否在刷新中|
|pullLoadTip|optional|string|'下拉显示更多'|下拉加载更多的提示文案|
|loadDataTip|optional|string|'释放加载数据'|释放加载数据的提示文案|
|onRefresh|required|func|null|下拉刷新回调|
|loading|optional|bool|false|触底加载是否正在加载中|
|loadingTip|optional|string|'加载中...'|数据加载中的提示文案|
|onLoad|required|func|null|触底刷新的触发方法|
|noMore|optional|bool|false|没有更多数据标志位|
|noMoreDataTip|optional|string|'没有更多了'|没有更多数据的提示文案|
|hasError|required|bool|false|加载数据时是否出错|
|errorTip|optional|string|'获取数据失败'|数据加载出错的提示文案|
|noDataImage|optional|string|'https://img.alicdn.com/tps/TB1K6mHNpXXXXXiXpXXXXXXXXXX-1000-1000.svg'|没有数据的背景图|
|noDataTip|optional|string|'暂无数据'|没有数据的提示文案|
|~~cache~~|~~optional~~|~~bool~~|~~true~~|~~是否缓存数据~~|
|~~options~~|~~optional~~|~~object~~||~~传给iscroll的参数~~|
|~~pushLoadTip~~|~~optional~~|~~string~~||~~上推加载更多的提示文案~~|



```

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataGetted: false,
      data: [],
      hasError: false,
      pageSize: 10,
      pageNum: 1,
      loading: false,
      refreshing: false,
    };

    this.fetchTimes = 1;
  }

  onRefresh() {
    this.setState({ refreshing: true });

    setTimeout(() => {
      this.bindJsonpCallback((noMore, items) => {
        this.setState({
          refreshing: false,
          dataGetted: true,
          data: this.state.data.concat(items),
          pageNum: 1,
          noMore: true,
          hasError: false,
        });
      }, () => {
        this.setState({
          refreshing: false,
          dataGetted: true,
          noMore: true,
          hasError: true,
        });
      });

      getJsonp(1, this.state.pageSize);
    }, 2000);
  }

  onLoad() {
    const curr = this.state.pageNum;

    this.setState({ loading: true });

    setTimeout(() => {
      this.bindJsonpCallback((noMore, items) => {
        this.setState({
          loading: false,
          dataGetted: true,
          data: this.state.data.concat(items),
          pageNum: curr + 1,
          noMore,
          hasError: false,
        });
      }, () => {
        this.setState({
          loading: false,
          dataGetted: true,
          noMore: false,
          hasError: true,
        });
      });
      getJsonp(curr, this.state.pageSize);
    }, 2000);
  }

  bindJsonpCallback(success, error) {
    const i = this.fetchTimes;

    window.jsonpCallbak = (data) => {
      if (this.fetchTimes !== i) return;

      if (!data || !data.success) {
        error();
      } else {
        const items = data.content.data;
        const hasNoMore = !items || items.length < this.state.pageSize;

        success(hasNoMore, items);
      }
    };
  }

  render() {
    return (<div >
      <div className="container">
        <ScrollList
          className="scroll-list-demo"
          dataGetted={this.state.dataGetted}
          data={this.state.data}
          hasError={this.state.hasError}
          refreshing={this.state.refreshing}
          onRefresh={this.onRefresh.bind(this)}
          loading={this.state.loading}
          onLoad={this.onLoad.bind(this)}
        >
          <Other1 />
          <Other2 />
          <Item />
        </ScrollList>
      </div>
    </div>);
  }
}
```
## APIs
### ~~clearCache~~
~~如果已经加载的某些数据发生了变化可以在组件渲染前调用clearCache来清除缓存数据~~


## 相关项目


* [tingle-scroll-view](http://gitlab.alibaba-inc.com/tingle-ui/tingle-scroll-view)
* [tingle-refreshcontrol](http://gitlab.alibaba-inc.com/tingle-ui/tingle-refreshcontrol)
* [tingle-infinite-scroll](http://gitlab.alibaba-inc.com/tingle-ui/tingle-infinite-scroll)


## Links

- [Issues](http://gitlab.alibaba-inc.com/tingle-ui/tingle-scroll-list/issues)
- [README 标准写法](http://gitlab.alibaba-inc.com/tingle-ui/doc/blob/master/README%E6%A0%87%E5%87%86%E5%86%99%E6%B3%95.md)
