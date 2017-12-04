---
order: 0
title: 基本使用
---

```jsx
import { ScrollView } from 'saltui';

class Item extends React.Component {
  static defaultProps = {
    index: 0,
    name: 'name',
  };

  static propTypes = {
    index: React.PropTypes.number,
    name: React.PropTypes.string,
  };

  render() {
    return <div className="demo-item">{`${this.props.index} ${this.props.name}`}</div>;
  }
}

function Other1() {
  return <div className="demo-item other1">{'Other1'}</div>;
}

function Other2() {
  return <div className="demo-item other2">{'Other2'}</div>;
}


class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      loading: false,
      refreshing: false,
    };
  }

  onRefresh() {
    this.setState({ refreshing: true });

    setTimeout(() => {
      this.setState({ refreshing: false });
    }, 2000);
  }

  onLoad() {
    this.setState({ loading: true });

    setTimeout(() => {
      this.setState({ page: this.state.page + 1, loading: false });
    }, 2000);
  }

  renderItems() {
    const { page } = this.state;
    const pages = [];

    for (let i = 0; i < page; i++) {
      pages.push(<div key={`page-${i}`}>
        <Other1 />
        <Other2 />
        <Item />
      </div>);
    }

    return pages;
  }

  render() {
    return (<div >
      <div className="container">
        <ScrollView
          infiniteScroll
          refreshControl
          refreshControlOptions={{
            refreshing: this.state.refreshing,
            onRefresh: this.onRefresh.bind(this),
          }}

          infiniteScrollOptions={{
            loading: this.state.loading,
            onLoad: this.onLoad.bind(this),
          }}
          className="scroll-view-demo"
        >

          {this.renderItems()}
        </ScrollView>
      </div>
    </div>);
  }
}

ReactDOM.render(
  <Demo />, mountNode
);
```

```css
html, body{
  background-color: #f2f2f2;
  height: 100%;
}
.demo-item {
  height: 80px;
  line-height: 80px;
  text-align: center;
  margin-bottom: 10px;
  background-color: #e2e2e2;
}

.demo-item:last-child {
  margin-bottom: 0;
}

.other1 {
  background-color: green;
}

.other2 {
  background-color: #666;
}

.container {
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
}

.container .t-scroll-view {
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
}

```