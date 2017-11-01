---
order: 0
title: 基本使用
---

```jsx
const { ScrollList, Icon } = SaltUI;

const { PropTypes } = React;

const Item = props => (<div className="newlist-demo-item">{`${props.index} ${props.name}`}</div>);
Item.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
};
function Other1() {
  return <div className="newlist-demo-item other1">{'Other1'}</div>;
}

function Other2() {
  return <div className="newlist-demo-item other2">{'Other2'}</div>;
}

function getJsonp(page, size) {
  const now = (new Date()).getTime();
  const url = `http://dip.alibaba-inc.com/api/v2/services/schema/mock/36906.jsonp?callback=jsonpCallbak&pageNum=${page}&pageSize=${size}&rnd=${now}`;
  const script = document.createElement('script');
  script.src = url;
  document.head.appendChild(script);
}

const propsMap = [
  {
    title: '标题文字',
  },
  {
    title: '标题文字',
    extra: <Icon name="direction-right" className="newlist-demo-icon" />,
  },
  {
    img: 'https://gw.alicdn.com/tfs/TB15larRXXXXXbcXpXXXXXXXXXX-300-300.jpg',
    title: '标题文字',
    extra: <Icon name="direction-right" className="newlist-demo-icon" />,
  },
  {
    title: <span className="newlist-demo-has-icon"><Icon
    name="map"
    className="newlist-demo-front-icon" />标题文字</span>,
    extra: <Icon name="direction-right" className="newlist-demo-icon" />,
  },
  {
    title: '标题文字',
    description: '副标题',
  },
  {
    title: '标题文字',
    description: '副标题',
    extra: <Icon name="direction-right" className="newlist-demo-icon" />,
  },
  {
    img: 'https://gw.alicdn.com/tfs/TB15larRXXXXXbcXpXXXXXXXXXX-300-300.jpg',
    title: '标题文字',
    description: '副标题',
    extra: <Icon name="direction-right" className="newlist-demo-icon" />,
  },
  {
    title: '2017财年绩效评估',
    description: '多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容',
    desMaxLine: 1,
  },
  {
    title: '2017财年绩效评估',
    description: '多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容',
  },
  {
    img: 'https://gw.alicdn.com/tfs/TB15larRXXXXXbcXpXXXXXXXXXX-300-300.jpg',
    title: '2017财年绩效评估',
    description: '多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容',
    extra: <Icon name="direction-right" className="newlist-demo-icon" />,
  },
];

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

  onRefresh = () => {
    this.setState({ refreshing: true });

    setTimeout(() => {
      this.bindJsonpCallback((noMore, items) => {
        this.setState({
          refreshing: false,
          dataGetted: true,
          data: items,
          pageNum: 1,
          noMore: items.length < this.state.pageSize,
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

  onLoad = () => {
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
    }, 1000);
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
          noMore={this.state.noMore}
          refreshing={this.state.refreshing}
          onRefresh={this.onRefresh}
          loading={this.state.loading}
          onLoad={this.onLoad}
        >
          <Other1 />
          <Other2 />
          {(data, index) => {
            const itemProps = propsMap[index % 9];
            return (
              <ScrollList.Item
                key={index}
                {...itemProps}
              />
            );
          }}
        </ScrollList>
      </div>
    </div>);
  }
}

ReactDOM.render(
  <Demo />, mountNode
);
```

```css
.newlist-demo-item {
   height: 80px;
   line-height:80px;
   text-align:center;
   margin-bottom:10px;
   background-color: #e2e2e2;
}

.newlist-demo-item:last-child {
  margin-bottom: 0;
}

.other1{
   background-color: green;
}

.other2{
   background-color: #666;
}

.container{
    margin: 0px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

  .t-scroll-view {
    height 100%
    width 100%
    overflow auto
  }
}


.vc-scrolldemo {
  color: black;
  padding: 30px 10px;
  text-align: center;
  background: #a9c8f4;
}

.newlist-demo-icon svg {
    fill: rgba(31,56,88,0.4);
    width: 20px;
    height: 20px;
}

.newlist-demo-has-icon {
  display: flex;
  align-items: center;
}

.newlist-demo-front-icon {
  display: inline-block;
  line-height: 0;
  margin-right: 12px;
}
.newlist-demo-front-icon svg {
    fill: rgba(0,0,0,0.6);
    width: 20px;
    height: 20px;
  }

```