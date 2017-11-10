---
order: 0
title: 基本使用
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
      <div>
        <Group className="demo-t-list">
          <Group.Head className="t-demo-title">图加标题</Group.Head>
          <Group.List lineIndent={15}>
            <div>
              <div className="demo-t-list-wrap-single">
                <HBox vAlign="center">
                  <HBox flex={1}>
                    <Box>
                        <img src="https://img.alicdn.com/tps/TB1S02rJFXXXXcuXpXXXXXXXXXX-58-58.png" className="demo-t-list-img" />
                      </Box>
                    <Box className="demo-t-list-text-content-single" flex={1}>
                        <p className="demo-t-list-title-single omit">手机通讯录</p>
                      </Box>
                  </HBox>
                  <Box>
                    <Icon name="angle-right" width={20} fill="#ccc" className="demo-t-list-arrow" />
                  </Box>
                </HBox>
              </div>
            </div>
            <div>
              <div className="demo-t-list-wrap-single">
                <HBox vAlign="center">
                  <HBox flex={1}>
                    <Box>
                        <img src="https://img.alicdn.com/tps/TB1eoLXJFXXXXaFXVXXXXXXXXXX-60-60.png" className="demo-t-list-img" />
                      </Box>
                    <Box className="demo-t-list-text-content-single" flex={1}>
                        <p className="demo-t-list-title-single omit">特别关注</p>
                      </Box>
                  </HBox>
                  <Box>
                    <Icon name="angle-right" width={20} fill="#ccc" className="demo-t-list-arrow" />
                  </Box>
                </HBox>
              </div>
            </div>
          </Group.List>
        </Group>
        <Group className="demo-t-list">
          <Group.Head className="t-demo-title">图文纵排</Group.Head>
          <Group.List>
            <div className="demo2-t-list-wrap">
              <HBox vAlign="center">
                <HBox flex={1}>
                  <Box className="demo2-t-list-img-wrap">
                    <img src="https://img.alicdn.com/tps/TB1mKYuJFXXXXbFXpXXXXXXXXXX-375-140.png" className="demo2-t-list-img" />
                  </Box>
                </HBox>
              </HBox>
              <HBox className="demo2-t-list-title">
                <Box flex={1}>
                  <p className="demo2-t-list-title-content t-omit">标题</p>
                </Box>
                <Box>
                  <span className="demo2-t-list-time">2015.08.09</span>
                </Box>
              </HBox>
            </div>
            <div className="demo2-t-list-wrap">
              <HBox vAlign="center">
                <HBox flex={1}>
                  <Box className="demo2-t-list-img-wrap">
                    <img src="https://img.alicdn.com/tps/TB1EtbhJFXXXXc5XFXXXXXXXXXX-375-140.png" className="demo2-t-list-img" />
                  </Box>
                </HBox>
              </HBox>
              <HBox className="demo2-t-list-title">
                <Box flex={1}>
                  <p className="demo2-t-list-title-content t-omit">标题文字</p>
                </Box>
                <Box>
                  <span className="demo2-t-list-time">2015.08.09</span>
                </Box>
              </HBox>
            </div>
          </Group.List>
        </Group>
        <Group className="demo-t-list">
          <Group.Head className="t-demo-title">信息卡列表</Group.Head>
          <Group.List lineIndent={80}>
            <div className="demo3-t-list-wrap">
              <HBox vAlign="center">
                <HBox flex={1}>
                  <Box>
                    <img src="https://img.alicdn.com/tps/TB1HInCJFXXXXXcXpXXXXXXXXXX-60-60.png" className="demo3-t-list-img" />
                  </Box>
                  <Box className="demo3-t-list-text-content" flex={1}>
                    <p className="demo3-t-list-title t-omit">信息卡片名称<span className="demo3-t-list-cricle" /></p>
                    <p className="demo3-t-list-text t-omit">辅助信息介绍辅助信息介绍辅助信息介绍</p>
                    <p className="demo3-t-list-time t-omit">有效期：2016.10.12-2016.11.21</p>
                  </Box>
                </HBox>
              </HBox>
            </div>
            <div className="demo3-t-list-wrap">
              <HBox vAlign="center">
                <HBox flex={1}>
                  <Box>
                    <img src="https://img.alicdn.com/tps/TB1HInCJFXXXXXcXpXXXXXXXXXX-60-60.png" className="demo3-t-list-img" />
                  </Box>
                  <Box className="demo3-t-list-text-content" flex={1}>
                    <p className="demo3-t-list-title t-omit">信息卡片名称<span className="demo3-t-list-cricle" /></p>
                    <p className="demo3-t-list-text t-omit">辅助信息介绍辅助信息介绍辅助信息介绍</p>
                    <p className="demo3-t-list-time t-omit">有效期：2016.10.12-2016.11.21</p>
                  </Box>
                </HBox>
              </HBox>
            </div>
          </Group.List>
        </Group>
      </div>
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

.t-demo-title {
    font-size : 16px;
    height : 30px;
    line-height : 30px;
    padding-left : 10px;

}

.demo-t-list-wrap {
    padding : 10px;
}

.demo-t-list-wrap-single {
    display : block;
    padding : 8px 10px;
}

.demo-t-list-img {
    width : 28px;
    height : 28px;
    border-radius : 50%;
    margin-right : 10px;
    margin-left : 5px;
}

.demo-t-list-text-content {
    margin-right : 10px;
}

.demo-t-list-text-content-single {
    line-height : 28px;
}

.demo-t-list-title {
    color : #222;
    font-size : 16px;
    line-height : 22px;
    padding-bottom : 4px;
}

.demo-t-list-title-single {
    font-size : 17px;
    color : #222;
    padding-bottom : 0;
}

.demo-t-list-text {
    color : #999;
    font-size : 12px;
    line-height : 18px;
    padding-bottom : 4px;
}

.demo-t-list-time {
    color : #999;
    font-size : 12px;
}

.demo-t-list-title-tag {
    display: inline-block;
    background: #ccc;
    color: #fff;
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 3px;
    margin-left: 5px;
}

.demo-t-list-img-right {
    -webkit-flex-direction : row-reverse;
    flex-direction : row-reverse;
}

.demo2-t-list-wrap {
    padding-top : 10px;
    background : #f4f4f4;
}

.demo2-t-list-title {
    background : #fff;
    height : 30px;
    line-height : 30px;
    padding-left : 15px;
    padding-right : 12px;
    -webkit-justify-content : space-between;
    justify-content: space-between;
}

.demo2-t-list-title-content {
    color : #222;
    font-size : 15px;
}

.demo2-t-list-time {
    color : #999;
    margin-left : 5px;
}

.demo2-t-list-img-wrap {
    width : 100%
    height : 5rem;
}

.demo2-t-list-img {
    width : 100%
    height : 5rem;
}

.demo3-t-list-wrap {
    padding : 10px;
}

.demo3-t-list-img {
    width : 60px;
    height : 60px;
    border-radius : 4px;
    margin-right : 10px;
}

.demo3-t-list-title {
    color : #222;
    font-size : 14px;
    line-height : 20px;
}

.demo3-t-list-text {
    color : #999;
    font-size : 12px;
    line-height : 18px;
}

.demo3-t-list-time {
    color : #666;
    font-size : 12px;
    line-height : 18px;
}

.demo3-t-list-cricle {
    display : block;
    width : 8px;
    height : 8px;
    border-radius : 50%;
    background : #f04631;
    float : right;
}



```