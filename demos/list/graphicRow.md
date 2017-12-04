---
order: 3
title: 图文纵排
---



```jsx
import { Icon, Group, Boxs, List } from 'saltui';

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

```