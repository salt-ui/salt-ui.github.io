---
order: 0
title: 基本使用
---

```jsx
const { HBox, VBox, Box } = SaltUI.Boxs;

class Demo extends React.Component {
    render() {
        let t = this;
        return <div>
            <HBox className="wrapper">
                <Box className="box1">60 * 60</Box>
                <Box className="box2">
                    auto * auto
                </Box>
                <Box className="box3" flex={1}>flex:1</Box>
            </HBox>

            <HBox vAlign="start" className="wrapper">
                <Box className="box1">60 * 60</Box>
                <Box className="box2">
                    auto * auto
                </Box>
                <Box className="box3" flex={1}>flex:1</Box>
            </HBox>

            <HBox vAlign="center" className="wrapper">
                <Box className="box1">60 * 60</Box>
                <Box className="box2">
                    auto * auto
                </Box>
                <Box className="box3" flex={1}>flex:1</Box>
            </HBox>

            <HBox vAlign="end" className="wrapper">
                <Box className="box1">60 * 60</Box>
                <Box className="box2">
                    auto * auto
                </Box>
                <Box className="box3" flex={1}>flex:1</Box>
            </HBox>

            <VBox className="wrapper">
                <Box className="box1">60 * 60</Box>
                <Box className="box2">
                    auto * auto
                </Box>
            </VBox>

            <VBox hAlign="start" className="wrapper">
                <Box className="box1">60 * 60</Box>
                <Box className="box2">
                    auto * auto
                </Box>
            </VBox>

            <VBox hAlign="center" className="wrapper">
                <Box className="box1">60 * 60</Box>
                <Box className="box2">
                    auto * auto
                </Box>
            </VBox>
            <VBox hAlign="end" className="wrapper">
                <Box className="box1">60 * 60</Box>
                <Box className="box2">
                    auto * auto
                </Box>
            </VBox>
            <HBox vAlign="center" hAlign="center" className="wrapper">
                <Box className="box1">60 * 60</Box>
                <Box className="box2">
                    auto * auto
                </Box>
            </HBox>
            <VBox vAlign="center" hAlign="center" className="wrapper">
                <Box className="box1">60 * 60</Box>
                <Box className="box2">
                    auto * auto
                </Box>
            </VBox>

            <HBox className="wrapper">
                <VBox className="tBCa" flex={2}>
                    <Box className="tBCd" flex={1}>1</Box>
                    <Box className="tBCe" flex={2}>2</Box>
                </VBox>
                <Box className="tBCb" flex={2}>2</Box>
                <Box className="tBCc" flex={1}>1</Box>
            </HBox>
        </div>
    }
}

ReactDOM.render(
  <Demo />, mountNode
);
```

````css
.wrapper{
  background-color: #ddd;
  margin-bottom: 10px;
  height: 120px;
}
.box1, .box2, .box3, .box4{
  text-align: center;
  color: #fff;
  line-height: 30px;
}
.box1{
  background-color: #64b044;
  width: 60px;
  height: 60px;
}
.box2{
  background-color: #f2a21c;
}
.box3{
  background-color: #7e499e;
  height: 40px;
}
````