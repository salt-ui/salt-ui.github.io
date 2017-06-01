---
order: 0
title: 基础使用
---

```jsx
const { Component } = React;
const { TabBar } = SaltUI;

const starUrl = '//gw.alicdn.com/tps/TB1Ofp3NpXXXXXDXVXXXXXXXXXX-216-200.png';
const starActiveUrl = '//gw.alicdn.com/tps/TB1gERVNpXXXXXXaXXXXXXXXXXX-216-200.png';
const peopleUrl = '//gw.alicdn.com/tps/TB1bc1XNpXXXXciXpXXXXXXXXXX-200-200.png';
const peopleActiveUrl = '//gw.alicdn.com/tps/TB174GlNpXXXXaHXXXXXXXXXXXX-200-200.png';

class TabBarDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
    this.tabBarItems = [
      { title: '收藏', icon: starUrl, activeIcon: starActiveUrl, name: 'star', badge: 122 },
      { title: '地图', icon: 'map', name: 'map', badge: 3 },
      { title: '搜索', icon: 'search', name: 'search' },
      { title: '社区', icon: [peopleUrl, peopleActiveUrl], name: 'user', badge: 200 },
      { title: '设置', icon: 'setting', name: 'setting', badge: 'new' },
      { title: '隐藏', icon: 'setting', name: 'hidden' },
    ];
  }

  onChange(activeIndex) {
    this.setState({ activeIndex });
  }

  render() {
    const tabBarStyle = {
      borderTop: '1px solid #ccc',
      boxShadow: '0 0 4px 0 #999'
    };

    const tabBarItemTitleStyle = {
      //color: '#666',
    };
    const tabBarItemTitleActiveStyle = {
      //color: '#3671D6',
    };
    const tabBarItemIconStyle = {
      //fill: '#333',
      width: 30,
      height: 30,
    };
    const tabBarItemIconActiveStyle = {
      //fill: '#3671D6',
    };

    return <div>
      {`Current Tab Index: ${this.state.activeIndex}`}
      <TabBar tabBarStyle={tabBarStyle} activeIndex={this.state.activeIndex} onChange={this.onChange.bind(this)}>
        {this.tabBarItems.map((item, idx) => {
          if (item.name === 'hidden') {
            return null;
          }
          return <TabBar.Item
            key={idx}
            badge={item.badge}
            title={item.title}
            titleStyle={tabBarItemTitleStyle}
            activeTitleStyle={tabBarItemTitleActiveStyle}
            icon={item.icon}
            activeIcon={item.activeIcon}
            iconStyle={tabBarItemIconStyle}
            activeIconStyle={tabBarItemIconActiveStyle}
          />
        })}
      </TabBar>
    </div>
  }
}

ReactDOM.render(<TabBarDemo />, mountNode);
```
