---
order: 0
title: 基本使用
---

```jsx
const { Scroller, Group } = SaltUI;

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    handleScrollEnd(scroller) {
        let { x, y } = scroller;
        console.log({x, y});
    }

    render() {
        return (
            <Scroller className="page" mouseWheel={true} onScrollEnd={this.handleScrollEnd.bind(this)}>
                <Group.Head className='t-FS12 t-LH2 t-PT16'>列表标题1</Group.Head>
                <Group.List >
                    <div className="t-FBH">
                        {/*横向滚动 DEMO*/}
                        <Scroller className="t-FB1" scrollX={true} scrollY={false}>
                            <div className="t-LH44 nowrap">
                                我可以横向滚动
                                我可以横向滚动
                                我可以横向滚动
                                我可以横向滚动
                                我可以横向滚动
                                我可以横向滚动
                                我可以横向滚动
                                我可以横向滚动
                                我可以横向滚动
                                我可以横向滚动
                                我可以横向滚动
                                我可以横向滚动
                                我可以横向滚动
                                我可以横向滚动
                                我可以横向滚动
                                我可以横向滚动
                            </div>
                        </Scroller>
                    </div>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                </Group.List>
                <Group.Head className='tFS12 t-LH2 tPT16'>列表标题2</Group.Head>
                <Group.List>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                </Group.List>
            </Scroller>
        );
    }
}

ReactDOM.render(
  <Demo />, mountNode
);
```

```css
body {
    background-color #f2f2f2
}

#TingleDemo .page {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
}
#TingleDemo .page .nowrap {
        white-space: nowrap;
}

```