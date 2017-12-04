---
order: 0
title: 基本使用
---

```jsx
import { InfiniteScroll } from 'saltui';

const Item = props => <div className="demo-item">{props.children}</div>;

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      page: 1,
    };
  }

  onLoad() {
    this.setState({ loading: true });

    setTimeout(() => {
      this.setState({ loading: false, page: this.state.page + 1 });
    }, 2000);
  }

  renderItems() {
    const pages = [];

    for (let p = this.state.page; p >= 0; p--) {
      pages.push(<div key={`page-${p}`}>
        <Item>{`page ${p} item 1`}</Item>
        <Item>{`page ${p} item 2`}</Item>
      </div>);
    }

    return pages;
  }

  render() {
    return (<InfiniteScroll loading={this.state.loading} onLoad={this.onLoad.bind(this)} >
      <div className="demo">
        <div className="demo-inner">
          {this.renderItems()}
        </div>
      </div>
    </InfiniteScroll>);
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

.demo {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
}

.demo-item {
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: chartreuse;
  margin-bottom: 10px;
}
```