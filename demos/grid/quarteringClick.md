---
order: 0
title: 四等分可点击
---



```jsx
const { Grid, Icon, Badge } = SaltUI;


class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      n: 1,
      list: [0, 1, 2, 3, 4, 5, 6],
    };
  }

  add() {
    const t = this;
    t.setState({
      n: t.state.n + 1,
    });
  }

  render() {
    const t = this;
    return (
      <div>
        <Grid col={4} className="t-BCf" square touchable>
          <div className="demo" onClick={t.add.bind(t)}>
            <Icon name="user" fill={'#42A5F5'} />
            <div className="menu-title">用户</div>
          </div>
          <div className="demo" onClick={t.add.bind(t)}>
            <Icon name="time" fill={'#FF8A65'} />
            <div className="menu-title">时钟</div>
          </div>
          <div className="demo" onClick={t.add.bind(t)}>
            <Icon name="star" fill={'#EA80FC'} />
            <div className="menu-title">星星</div>
          </div>
          <div className="demo" onClick={t.add.bind(t)}>
            <Icon name="map" fill={'#EF9A9A'} />
            <div className="menu-title">地图</div>
          </div>
          <div className="demo" onClick={t.add.bind(t)}>
            <Icon name="pen" fill={'#9FA8DA'} />
            <div className="menu-title">编辑</div>
          </div>
          <div className="demo" onClick={t.add.bind(t)}>
            <Icon name="info-circle" fill={'#80DEEA'} />
            <div className="menu-title">信息</div>
          </div>
          <div className="demo" onClick={t.add.bind(t)}>
            <Icon name="plus-circle" fill={'#DCE775'} />
            <div className="menu-title">添加</div>
          </div>
          <div className="demo" onClick={t.add.bind(t)}>
            <Icon name="search" fill={'#A1887F'} />
            <div className="menu-title">搜索</div>
          </div>
          <div className="demo" onClick={t.add.bind(t)}>
            <Icon name="plus" fill={'#BDBDBD'} />
          </div>
        </Grid>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />, mountNode
);
```

```css
body {
    overflow-x: hidden;
}

.demo {
    width: 90px;
    height: 90px;
    text-align: center;
    display: -webkit-flex;
    -webkit-align-items: center;
    -webkit-justify-content: center;
    flex-direction: column;
}

.menu-title {
    font-size: 12px;
    margin-top: 10px;
    color: #333;
}

.demo-cell {
   height: 80px;
}

.icon-round {
    border-radius: 4px;
    background-color: #eee;
    width: 40px;
    height: 40px;
    text-align: center;
}

.icon-desc h5 {
    font-size: 13px;
}
.icon-desc p {
    font-size: 11px;
    color: #666;
    margin-top: 6px;
}

```