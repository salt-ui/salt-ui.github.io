---
order: 0
title: 基本使用
---

```jsx
import { AngleRight } from 'salt-icon';
import { Filter, List } from 'saltui';

class TestView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listData: [
        {
          imgUrl: 'https://img.alicdn.com/tps/TB15YftJFXXXXafXpXXXXXXXXXX-699-698.jpg',
          text: '前端开发工程师',
          title: '马慧（穆心）',
        },
        {
          imgUrl: 'https://img.alicdn.com/tps/TB15YftJFXXXXafXpXXXXXXXXXX-699-698.jpg',
          text: '资深交互设计师',
          title: '周姮',
        },
        {
          imgUrl: 'https://img.alicdn.com/tps/TB1P1vaLpXXXXXxaXXXXXXXXXXX-50-50.jpg',
          text: '交互设计师',
          title: '郝晓敏 (钰馨）',
          date: '2017-7-8',
        },
        {
          imgUrl: 'https://img.alicdn.com/tps/TB1P1vaLpXXXXXxaXXXXXXXXXXX-50-50.jpg',
          text: '交互设计师',
          title: '张三丰（曾金）',
          date: '2017-7-8',
        }
      ]
    };
  }

  onClick = (e) => {
    this.props.onChange({'aa': [{text: 'xxx', value: 'xxxx'}]})
  }

  render() {
    return (
      <div>
        <p style={{ lineHeight: '40px', height: '40px', textAlign: 'center' }} onClick={this.onClick}>自定义渲染</p>
      </div>
    )
  }
}

// build之后, 测试一下下面一行, 把上面一行注释掉
// const Field = require('../../dist');

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultFilterValue: {
        sort: [
          {
            text: '默认',
            value: ''
          },
        ],
        quickSort: [
          {
            text: '升序排列',
            value: 'asc'
          }
        ],
        something: [
          {
            text: '10人以下',
            value: 'distance'
          }
        ]
      },
      listData: [
        {
          imgUrl: 'https://img.alicdn.com/tps/TB15YftJFXXXXafXpXXXXXXXXXX-699-698.jpg',
          text: '前端开发工程师',
          title: '马慧（穆心）',
        },
        {
          imgUrl: 'https://img.alicdn.com/tps/TB15YftJFXXXXafXpXXXXXXXXXX-699-698.jpg',
          text: '资深交互设计师',
          title: '周姮',
        },
        {
          imgUrl: 'https://img.alicdn.com/tps/TB1P1vaLpXXXXXxaXXXXXXXXXXX-50-50.jpg',
          text: '交互设计师',
          title: '郝晓敏 (钰馨）',
          date: '2017-7-8',
        },
        {
          imgUrl: 'https://img.alicdn.com/tps/TB1P1vaLpXXXXXxaXXXXXXXXXXX-50-50.jpg',
          text: '交互设计师',
          title: '张三丰（曾金）',
          date: '2017-7-8',
        }
      ]
    };
  }

  handleClick = (event, dataItem) => {
    console.log(event);
    console.log(dataItem);
  }

  handleClickImg = (event, imgUrl) => {
    console.log(event);
    console.log(imgUrl);
  }

  handleDelete = (event, dataItem) => {
    console.log(event);
    console.log(dataItem);
  }

  render() {
    return (
      <div>
        <div style={{ lineHeight: 2 }}>
          <p>something else</p>
          <p>something else</p>
          <p>something else</p>
        </div>
        <Filter
          size={4}
          activeIndex={1}
          defaultValue = {this.state.defaultFilterValue}
          options={
            [
              {
                name: 'sort',
                title: '默认',
                type: 'order',  // select | order | switch
                items: [
                  {
                    text: '默认',
                    value: ''
                  },
                  {
                    text: '距离',
                    value: 'distance'
                  },
                  {
                    text: '评分',
                    value: 'grade'
                  }
                ]
              },
              {
                name: 'quickSort',
                title: '降序排列',
                type: 'switch',
                icon: false,
                items: [
                  {
                    text: '升序排列',
                    value: 'asc'
                  }
                ]
              },
              {
                name: 'something',
                title: '容纳人数',
                type: 'select',
                multiSelect: true,
                items: [
                  {
                    text: '10人以下',
                    value: 'distance'
                  },
                  {
                    text: '10-50人',
                    value: 'grade'
                  },
                  {
                    text: '50-100人',
                    value: 'cainiao'
                  },
                  {
                    text: '100-500人',
                    value: 'youku'
                  },
                  {
                    text: '500人以上',
                    value: 'tianmao'
                  }
                ]
              },
              {
                name: 'brand3',
                title: '品牌',
                type: 'select',
                maxLine: 2,
                multiSelect: false,
                items: [
                  {
                    text: '阿里巴巴',
                    value: 'alibaba'
                  },
                  {
                    text: '淘宝',
                    value: 'taobao'
                  },
                  {
                    text: '菜鸟',
                    value: 'cainiao'
                  },
                  {
                    text: '优酷',
                    value: 'youku'
                  },
                  {
                    text: '天猫',
                    value: 'tianmao'
                  },
                  {
                    text: '百度',
                    value: 'baidu'
                  },
                  {
                    text: '腾讯',
                    value: 'tengxun'
                  },
                  {
                    text: '有道',
                    value: 'youdao'
                  }
                ]
              },
              {
                name: 'someOther',
                title: '自定义渲染',
                renderView: TestView,
              },
              {
                name: 'brand4',
                title: '品牌',
                type: 'select',
                maxLine: 3,
                multiSelect: true,
                items: [
                  {
                    text: '阿里巴巴',
                    value: 'alibaba'
                  },
                  {
                    text: '阿里巴巴2',
                    value: 'alibaba2'
                  },
                  {
                    text: '淘宝',
                    value: 'taobao'
                  },
                  {
                    text: '菜鸟',
                    value: 'cainiao'
                  },
                  {
                    text: '优酷',
                    value: 'youku'
                  },
                  {
                    text: '天猫',
                    value: 'tianmao'
                  },
                  {
                    text: '百度',
                    value: 'baidu'
                  },
                  {
                    text: '腾讯',
                    value: 'tengxun'
                  },
                  {
                    text: '有道',
                    value: 'youdao'
                  }
                ]
              }
            ]
          }
          onChange={(data) => {
            // can do confirm
            console.log('on change: ', data)
            switch (data.name) {
              case 'sort':
              case 'quickSort':
                this.setState({
                  listData: [
                    ...this.state.listData.reverse()
                  ]
                });
                break;
              default:
            }
          }}
          onConfirm={(data) => {
            console.log('on confirm: ', data)
            // do confirm
          }}
          onReset={(data) => {
            console.log('on reset: ', data)
            // do something
          }}
        />
        <List
          layout="left"
          hasRightIcon
          icon={<AngleRight/>}
          iconWidth={20}
          isDelete
          onClick={this.handleClick}
          clickPhoto={this.handleClickImg}
          onDelete={this.handleDelete}
          data={this.state.listData}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />, mountNode
);
```