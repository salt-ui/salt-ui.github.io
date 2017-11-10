---
order: 0
title: 基础使用
---

```jsx
const { TabBar, Icon } = SaltUI;

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
    this.tabBarItems = [
      {
        title: '首页',
        icon: <Icon name="time" />,
        path: '/star',
      },
      {
        title: '收藏',
        icon: <Icon name="time" />,
        badge: 'new',
        badgeStyle: { right: -5 },
        path: '/a/star',
      },
      {
        title: '隐藏',
        icon: <Icon name="plus" />,
        iconHeight: 40,
        items: [{
          title: '用户',
          icon: <Icon name="time" />,
          badge: 8,
          name: 'user',
          path: '/b/user',
        }, {
          title: '时间',
          icon: <Icon name="time" />,
          badge: 8,
          name: 'time',
          path: '/b/time',
        }],
        path: '/center',
      },
      { title: '地图', icon: <Icon name="time" />, badge: 8, path: '/b/star' },
      { title: '我的', icon: <Icon name="time" />, badge: 8, path: '/c/star' },
    ];
  }

  render() {
    const onChange = (activeIndex) => {
      // 这里是触发每个item之后的回调，会返回当前点击的item的index 值
      console.log(activeIndex);
    };

    const tabBarStyle = {};

    return (<div>
      <TabBar
        tabBarStyle={tabBarStyle}
        activeIndex={this.state.activeIndex}
        onChange={onChange}
        iconHeight={24}
        cIconHeight={50}
        items={this.tabBarItems}
      />
    </div>);
  }
}

ReactDOM.render(<Demo />, mountNode);
```
