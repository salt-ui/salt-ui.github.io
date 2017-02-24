---
order: 0
title: 基本使用
---



```jsx
const { Grid, Icon } = SaltUI;

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      n: 1,
      list: [0,1,2,3,4,5,6]
    }
  }

  add() {
    let t = this;
    t.setState({
      n: t.state.n + 1
    });
  }

  render() {
    let t = this;
    return (
      <div>
        <div className="t-BCe t-FAC t-LH44">单元格可点击</div>
        <Grid col={3} className="t-BCf" square={true} touchable={true}>
          <div className="demo" onClick={t.add.bind(t)}>
            <Icon name="user" fill={'#42A5F5'}/>
            <div className="menu-title">用户</div>
          </div>
          <div className="demo" onClick={t.add.bind(t)}>
            <Icon name="time" fill={'#FF8A65'}/>
            <div className="menu-title">时钟</div>
          </div>
          <div className="demo" onClick={t.add.bind(t)}>
            <Icon name="star" fill={'#EA80FC'}/>
            <div className="menu-title">星星</div>
          </div>
          <div className="demo" onClick={t.add.bind(t)}>
              <Icon name="map" fill={'#EF9A9A'}/>
              <div className="menu-title">地图</div>
          </div>
          <div className="demo" onClick={t.add.bind(t)}>
              <Icon name="pen" fill={'#9FA8DA'}/>
              <div className="menu-title">编辑</div>
          </div>
          <div className="demo" onClick={t.add.bind(t)}>
              <Icon name="info-circle" fill={'#80DEEA'}/>
              <div className="menu-title">信息</div>
          </div>
          <div className="demo" onClick={t.add.bind(t)}>
              <Icon name="plus-circle" fill={'#DCE775'}/>
              <div className="menu-title">添加</div>
          </div>
          <div className="demo" onClick={t.add.bind(t)}>
              <Icon name="search" fill={'#A1887F'}/>
              <div className="menu-title">搜索</div>
          </div>
          <div className="demo" onClick={t.add.bind(t)}>
            <Icon name="plus" fill={'#BDBDBD'}/>
            <div className="menu-title" style={{color: '#bbb'}}>添加</div>
          </div>
        </Grid>
        <div className="t-BCe t-FAC t-LH44">单元格无边线</div>
        <Grid col={4} className="t-BCf t-MB30" square={true} noLine={true}>
          <div className="demo2 t-grid-cell-full t-FBH t-FBAC t-FBJC" style={{background:'#fed678'}}></div>
          <div className="demo2 t-grid-cell-full t-FBH t-FBAC t-FBJC" style={{background:'#7bc380'}}></div>
          <div className="demo2 t-grid-cell-full t-FBH t-FBAC t-FBJC" style={{background:'#f9af45'}}></div>
          <div className="demo2 t-grid-cell-full t-FBH t-FBAC t-FBJC" style={{background:'#9462a9'}}></div>
        </Grid>
      </div>
    );
  }
};

ReactDOM.render(
  <Demo />, mountNode
);
```