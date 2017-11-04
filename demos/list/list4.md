---
order: 4
title: 信息卡列表
---



```jsx
const { Icon, Group, Boxs, List } = SaltUI;
const { HBox, Box } = Boxs; 

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleClick(event,dataItem){

        console.log(event);
        console.log(dataItem);

    }

    handleClickImg(event,imgUrl){

        console.log(event);
        console.log(imgUrl);
    }

    handleDelete(event,dataItem){

        console.log(event);
        console.log(dataItem);
    }

    render() {
        return <div>
            <Group className='demo-t-list'>
                <Group.Head className='t-demo-title'>信息卡列表</Group.Head>
                <Group.List lineIndent={80}>
                    <div className='demo3-t-list-wrap'>
                        <HBox vAlign="center">
                            <HBox flex={1}>
                                <Box>
                                    <img src='https://img.alicdn.com/tps/TB1HInCJFXXXXXcXpXXXXXXXXXX-60-60.png' className='demo3-t-list-img'/>
                                </Box>
                                <Box className='demo3-t-list-text-content' flex={1}>
                                    <p className='demo3-t-list-title t-omit'>信息卡片名称<span className='demo3-t-list-cricle'></span></p>
                                    <p className='demo3-t-list-text t-omit'>辅助信息介绍辅助信息介绍辅助信息介绍</p>
                                    <p className='demo3-t-list-time t-omit'>有效期：2016.10.12-2016.11.21</p>
                                </Box>
                            </HBox>
                        </HBox>
                    </div>
                    <div className='demo3-t-list-wrap'>
                        <HBox vAlign="center">
                            <HBox flex={1}>
                                <Box>
                                    <img src='https://img.alicdn.com/tps/TB1HInCJFXXXXXcXpXXXXXXXXXX-60-60.png' className='demo3-t-list-img'/>
                                </Box>
                                <Box className='demo3-t-list-text-content' flex={1}>
                                    <p className='demo3-t-list-title t-omit'>信息卡片名称<span className='demo3-t-list-cricle'></span></p>
                                    <p className='demo3-t-list-text t-omit'>辅助信息介绍辅助信息介绍辅助信息介绍</p>
                                    <p className='demo3-t-list-time t-omit'>有效期：2016.10.12-2016.11.21</p>
                                </Box>
                            </HBox>
                        </HBox>
                    </div>
                </Group.List>
            </Group>
        </div>
    }
};

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