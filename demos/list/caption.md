---
order: 2
title: 图加标题
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
```