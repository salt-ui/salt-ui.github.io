---
order: 4
title: 高宽不相等
---



```jsx
import { Grid, Badge } from 'saltui';
import User from 'salt-icon/lib/User';
import Time from 'salt-icon/lib/Time';
import Map from 'salt-icon/lib/Map';
import Star from 'salt-icon/lib/Star';

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
        <Grid col={2} className="t-BCf t-MB30">
          <div className="t-FBH t-FBAC demo-cell" onClick={() => { t.add(); }}>
            <div className="icon-round t-FBH t-FBJC t-FBAC"><User fill={'#42A5F5'} /></div>&nbsp;&nbsp;
            <div className="t-FBV t-FBJC icon-desc">
              <h5>标题文字 <Badge count={99} /></h5>
              <p>协议优先，信用支付</p>
            </div>
          </div>
          <div className="t-FBH t-FBAC demo-cell" onClick={() => { t.add(); }}>
            <div className="icon-round t-FBH t-FBJC t-FBAC"><Time fill={'#FF8A65'} /></div>&nbsp;&nbsp;
            <div className="t-FBV t-FBJC icon-desc">
              <h5>标题文字</h5>
              <p>协议优先，信用支付</p>
            </div>
          </div>
          <div className="t-FBH t-FBAC demo-cell" onClick={() => { t.add(); }}>
            <div className="icon-round t-FBH t-FBJC t-FBAC"><Star fill={'#EA80FC'} /></div>&nbsp;&nbsp;
            <div className="t-FBV t-FBJC icon-desc">
              <h5>标题文字 <Badge dot /></h5>
              <p>协议优先，信用支付</p>
            </div>
          </div>
          <div className="t-FBH t-FBAC demo-cell" onClick={() => { t.add(); }}>
            <div className="icon-round t-FBH t-FBJC t-FBAC"><Map fill={'#EF9A9A'} /></div>&nbsp;&nbsp;
            <div className="t-FBV t-FBJC icon-desc">
              <h5>标题文字</h5>
              <p>协议优先，信用支付</p>
            </div>
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