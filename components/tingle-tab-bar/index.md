# tingle-tab-bar

## 底部选项卡菜单

<img src="http://alipay-rmsdeploy-image.cn-hangzhou.alipay.aliyun-inc.com/skylark/attach/5304/92f2deaaa2f4dd1c/image.png" width="345"/>

## Simple Usage

```es6

const TabBar = require('@ali/tingle-tab-bar');

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    }
  }

  render() {
    const onChange = (activeIndex)=> {
      console.log(activeIndex);
    };
    const tabBarStyle = {
      borderTop: '1px solid #3671D6',
    };
    const tabBarItemStyle = {
      titleStyle: { color: '#333', },
      titleActiveStyle: { color: '#3671D6', },
      iconStyle: { fill: '#333', },
      iconActiveStyle: { fill: '#3671D6', },
      badge: 100,
    };
    return <div>
      <TabBar tabBarStyle={tabBarStyle} activeIndex={this.state.activeIndex} onChange={onChange.bind(this)}>
        <TabBar.Item {...tabBarItemStyle} title="收藏" icon="star">这里是 "收藏"</TabBar.Item>
        <TabBar.Item {...tabBarItemStyle} title="地图" icon="map">这里是 "地图"</TabBar.Item>
        <TabBar.Item {...tabBarItemStyle} title="搜索" icon="search">这里是 "搜索"</TabBar.Item>
        <TabBar.Item {...tabBarItemStyle} title="社区" icon={[
          'https://gw.alicdn.com/tps/TB1bc1XNpXXXXciXpXXXXXXXXXX-200-200.png',
          'https://gw.alicdn.com/tps/TB174GlNpXXXXaHXXXXXXXXXXXX-200-200.png',
        ]}>这里是 "社区"</TabBar.Item>
        <TabBar.Item {...tabBarItemStyle} badge="new" title="设置" icon="setting">这里是 "设置"</TabBar.Item>
      </TabBar>
    </div>
  }
}
```

## Props

### TabBar props

|属性名称|必选|数据类型|默认值|备注|
|---|---|---|---|---|
|className|-|string|-|className
|activeIndex|-|Number|`0`|当前激活的选项卡序号(从0开始)
|onChange|-|Function|`function(activeIndex){ }`|tab切换事件, 参数为当前tab的index
|tabBarStyle|-|`object`|-|选项卡容器样式(version>=1.1.4)

### TabBar.Item props

注: 激活态即为选中时的状态

|属性名称|必选|数据类型|默认值|备注|
|---|---|---|---|---|
|title|*|`string`|-|选项卡标题
|titleStyle|-|`object`|-|选项卡标题样式(version>=1.1.4)
|activeTitleStyle|-|`object`|-|选项卡标题样式(激活态)(version>=1.1.4)
|icon|-|`String`|-|选项卡图标(tingle-icon名称或者图片地址)
|activeIcon|-|`String`|-|选项卡图标(激活态, 图标为图片地址时建议必填)
|iconStyle|-|`object`|-|选项卡图标样式(version>=1.1.4)
|activeIconStyle|-|`object`|-|选项卡图标样式(激活态)(version>=1.1.4)
|badge|*|`string` or `number`|-|选项卡角标 非数字时只会显示红点(version>=1.2.0)
|badgeStyle|-|`object`|-|选项卡自定义角标样式(version>=1.2.0)

## APIs

* onChange 
 * type:function
 * 点击每个item的时候触发的事件；

## Links

- [Issues](https://github.com/salt-ui/saltui/issues/new)
