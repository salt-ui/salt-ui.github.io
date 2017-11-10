---
order: 1
title: 图文列表
---



```jsx
const { Icon, Group, Boxs, List } = SaltUI;
const { HBox, Box } = Boxs;

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleClick(event, dataItem) {
    console.log(event);
    console.log(dataItem);
  }

  handleClickImg(event, imgUrl) {
    console.log(event);
    console.log(imgUrl);
  }

  handleDelete(event, dataItem) {
    console.log(event);
    console.log(dataItem);
  }

  render() {
    return (<div>
      <List
        layout="left"
        hasRightIcon
        iconName="angle-right"
        iconWidth={20}
        isDelete
        onClick={this.handleClick.bind(this)}
        clickPhoto={this.handleClickImg.bind(this)}
        onDelete={this.handleDelete.bind(this)}
        demoTitle="左图右文有箭头icon"
        data={[{
          text: '前端开发工程师',
          title: '马慧（穆心）',
        }, {
          imgUrl: 'https://img.alicdn.com/tps/TB15YftJFXXXXafXpXXXXXXXXXX-699-698.jpg',
          text: '资深交互设计师',
          title: '周姮',
        }, {
          imgUrl: 'https://img.alicdn.com/tps/TB1P1vaLpXXXXXxaXXXXXXXXXXX-50-50.jpg',
          text: '交互设计师',
          title: '郝晓敏 (钰馨）',
          date: '2017-7-8',
        }]}
      />
      <List
        layout="right"
        hasRightIcon={false}
        isDelete={false}
        demoTitle="右图左文无箭头"
        data={[{
          imgUrl: 'https://img.alicdn.com/tps/TB1j2u5JFXXXXaEXVXXXXXXXXXX-564-1004.jpg',
          text: '静静的看着这世界，最后疯了',
          title: '远眺',
        }, {
          imgUrl: 'https://img.alicdn.com/tps/TB1GnjaJFXXXXcpXFXXXXXXXXXX-2448-1836.jpg',
          text: '就想要这样一间小木屋，夏天挫冰吃，冬天为炉取暖，秋天静看落叶，春天畅闻花香',
          title: '小木屋',
        }, {
          imgUrl: 'https://img.alicdn.com/tps/TB1KC9.JFXXXXX0XVXXXXXXXXXX-225-225.jpg',
          text: '能和心爱的人一起睡觉，是件幸福的事情',
          title: '幸福',
        }]}
      />
    </div>);
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
```