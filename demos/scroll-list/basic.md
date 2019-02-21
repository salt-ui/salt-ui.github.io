---
order: 0
title: 基本使用
---

```jsx
import { ScrollList, Icon, Avatar, Badge } from 'saltui';
import { DirectionRight, Map } from 'salt-icon';

const { PropTypes } = React;

const Item = props => (<div className="newlist-demo-item">{`${props.index} ${props.name}`}</div>);
Item.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
};
function Other1() {
  return <div className="newlist-demo-item other1">Other1</div>;
}

function Other2() {
  return <div className="newlist-demo-item other2">Other2</div>;
}

function getJsonp(page, size) {
  const now = (new Date()).getTime();
  const url = `https://www.easy-mock.com/mock/5a2f75a26ce8af6869ec49f0/saltui/scroll-list-data?jsonp_param_name=callback&callback=jsonpCallbak&pageNum=${page}&pageSize=${size}&rnd=${now}`;
  const script = document.createElement('script');
  script.src = url;
  document.head.appendChild(script);
}

const propsMap = [
  {
    title: <span className="newlist-demo-has-avatar"><Avatar name="tingle" size={20} src="https://img.alicdn.com/tps/TB1amOaKpXXXXbsXVXXXXXXXXXX-144-144.png"/>标题文字(如姓名)</span>,
  },
  {
    description: <span className="newlist-demo-has-avatar"><Avatar name="tingle" size={20} src="https://img.alicdn.com/tps/TB1amOaKpXXXXbsXVXXXXXXXXXX-144-144.png"/>标题文字(如姓名)</span>,
  },
  {
    img: 'https://gw.alicdn.com/tfs/TB15larRXXXXXbcXpXXXXXXXXXX-300-300.jpg',
    title: '标题文字(如姓名)',
    badge:  <Badge text="徽章文本" style={{ marginLeft: 10, background: '#ff6600', }}/>,
    description: '放上人物相关简介和title，使人物信息更加饱满，文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容',
    extra: <DirectionRight name="direction-right" className="newlist-demo-icon" />,
  },
  {
    img: 'https://gw.alicdn.com/tfs/TB15larRXXXXXbcXpXXXXXXXXXX-300-300.jpg',
    title: '标题文字(如姓名)',
    badge:  '徽章文本2',
    titleTag: '<span className="newlist-demo-has-title-tag">标题带标签</span>',
    description: '多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容',
  },
  {
    title: '标题文字',
  },
  {
    title: '标题文字',
    extra: <DirectionRight className="newlist-demo-icon" />,
  },
  {
    img: 'https://gw.alicdn.com/tfs/TB15larRXXXXXbcXpXXXXXXXXXX-300-300.jpg',
    title: '标题文字',
    extra: <DirectionRight name="direction-right" className="newlist-demo-icon" />,
  },
  {
    title: <span className="newlist-demo-has-icon"><Map className="newlist-demo-front-icon" />标题文字</span>,
    extra: <DirectionRight name="direction-right" className="newlist-demo-icon" />,
  },
  {
    title: '标题文字',
    description: '副标题',
  },
  {
    title: '标题文字',
    description: '副标题',
    extra: <DirectionRight name="direction-right" className="newlist-demo-icon" />,
  },
  {
    img: 'https://gw.alicdn.com/tfs/TB15larRXXXXXbcXpXXXXXXXXXX-300-300.jpg',
    title: '标题文字',
    description: '副标题',
    extra: <DirectionRight name="direction-right" className="newlist-demo-icon" />,
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
    extra: <DirectionRight name="direction-right" className="newlist-demo-icon" />,
  },
];

const tagListProps1 = {
  onClick: (it) => {console.log(it)},
  data: ['可以直接输入字符串', '每个标签都是显示作用']
}
const tagListProps2 = {
  onClick: (it, index) => {console.log(it, '带value', index)},
  data: [
    { value: '信息平台极致匠心1' },
    { value: '信息平台极致匠心2' },
    { value: '信息平台极致匠心3' },
    { value: '马萨拉蒂1' },
    { value: '马萨拉蒂2' },
    { value: '马萨拉蒂3' },
  ]
}

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataGetted: false,
      data: [],
      hasError: false,
      pageSize: 10,
      pageNum: 0,
      loading: false,
      refreshing: false,
    };

    this.fetchTimes = 1;
  }

  onRefresh = () => {
    console.log('refreshing');
    this.setState({ refreshing: true });

    setTimeout(() => {
      this.bindJsonpCallback((noMore, items) => {
        setTimeout(() => {
          this.setState({
            refreshing: false,
            dataGetted: true,
            data: items,
            pageNum: 1,
            noMore: items.length < this.state.pageSize,
            hasError: false,
          });
        }, 10000);
      }, () => {
        this.setState({
          refreshing: false,
          dataGetted: true,
          noMore: true,
          hasError: true,
        });
      });

      getJsonp(1, this.state.pageSize);
    }, 500);
  }

  onLoad = () => {
    const curr = this.state.pageNum;
    this.setState({ loading: true });
    console.log('will load page', curr);
    if (curr >= 3) {
      this.setState({
        loading: false,
        dataGetted: true,
        noMore: true,
        hasError: false,
      });
      console.log('no more');
      return;
    }
    console.log('start loading page', curr);
    setTimeout(() => {
      this.bindJsonpCallback((noMore, items) => {
        setTimeout(() => {
          this.setState({
            loading: false,
            dataGetted: true,
            data: this.state.data.concat(items),
            pageNum: curr + 1,
            noMore,
            hasError: false,
          });
        }, 0);
      }, () => {
        this.setState({
          loading: false,
          dataGetted: true,
          noMore: false,
          hasError: true,
        });
      });
      getJsonp(curr, this.state.pageSize);
    }, 500);
  }

  bindJsonpCallback(success, error) {
    console.log('jsonp');
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
    return (
      <div >
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
            ref={(c) => { this.list = c; }}
          >
            <Other1 />
            <Other2 />
            <ScrollList.TagList
              {...tagListProps1}
            />
            <ScrollList.TagList
              {...tagListProps2}
            />
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
      </div>
    );
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