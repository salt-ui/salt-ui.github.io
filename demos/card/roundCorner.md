---
order: 1
title: 卡片圆角
---

```jsx
const { Context, Icon, Card } = SaltUI;

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const headerCls = Context.prefixClass('card-header');
    const bodyCls = Context.prefixClass('card-body');
    const footerCls = Context.prefixClass('card-footer');

    return (
      <div>
        <div className="card-wrap">
          <Card className="card-example">
            有效内容区域
          </Card>
        </div>
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
  background-color: #f2f2f2;
}

.card-wrap-title {
  margin: 15px 0 15px 15px;
  font-size: 18px;
  color: #333;
}

.t-card.card-example {
  height: 141px;
  background-color: #fff;
  font-size: 12px;
  color: #999;
  text-align: center;
  line-height: 141px;
}

.t-card-header {
  display: flex;
  padding: 12px 16px 0;
}

.t-card-body {
  padding: 16px 16px 13px;
}

.t-card-footer {
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  font-size: 12px;
}

.card-header-text {
  margin-left: 12px;
}

.card-avatar {
  diplay: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.card-username {
  display: block;
  font-size: $14px;
  color: rgba(0,0,0,0.6);
  line-height: 22px;
}

.card-date {
  font-size: 12px;
  color: rgba(31,56,88,0.4);
  line-height: 18px;
}

.card-title {
  font-size: 16px;
  color: rgba(0,0,0,0.8);
  line-height: 24px;
}

.card-desc {
  margin-top: 5px;
  font-size: 12px;
  color: rgba(0,0,0,0.6);
  line-height: 18px;
}

.card-footer-meta {
  display: flex;
  color: rgba(31,56,88,0.6);
  line-height: 18px;
}

.card-footer-meta-item {
  display: flex;
  margin-right: 17px;
}

.card-icon {
  line-height: 1;
  margin-right: 9px;
}

 .card-icon svg {
    fill: rgba(31,56,88,0.6);
    width: 16px;
    height: 18px;
 }

.card-footer-extra {
  color: rgba(31,56,88,0.4);
  line-height: 18px;
}
```