---
order: 2
title: 隔线两边缩进10px & Item无缩进(默认)
---



```jsx
const { Group } = SaltUI;

class Demo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='t-FS14'>
                <Group.Head className='t-BCe t-FS12 t-LH2 t-PT16'>间隔线两边缩进10px & Item无缩进(默认)</Group.Head>
                <Group.List lineIndent={[10, 10]}>
                    <div className='t-LH44 t-omit'>间隔线的缩进是独立于Item的缩进的，很长很长的测试文字</div>
                    <div className='t-LH44 t-omit'>间隔线的缩进是独立于Item的缩进的，很长很长的测试文字</div>
                </Group.List>
                <div className='t-PL14 t-PT10 t-BCe'>
                    <div className="t-FS16 t-FC6">总体概览</div>
                    <div className="t-FS12 t-FCa t-LH2 t-omit">小标题蚊子小标题蚊子</div>
                </div>
                <Group>
                    <Group.List itemIndent={[10, 10]}>
                        <div className='t-LH44 t-omit'>间隔线的缩进是独立于Item的缩进的，很长很长的测试文字</div>
                        <div className='t-LH44 t-omit'>间隔线的缩进是独立于Item的缩进的，很长很长的测试文字</div>
                    </Group.List>
                </Group>
                <Group.Head className='t-BCe t-FS12 t-LH2 t-PT16'>列表项有空值(null, undefined, '')的情况</Group.Head>
                <Group>
                    <Group.List itemIndent={[10, 10]}>
                        {0}
                        {''/*该项不输出*/}
                        {null/*该项不输出*/}
                        {undefined/*该项不输出*/}
                        {React.Children.toArray([1, 2, 3].map((value) => {
                            return <div>遍历项: {value}</div>;
                        }))}
                    </Group.List>
                </Group>
            </div>
        );
    }
}

ReactDOM.render(
  <Demo />, mountNode
);
```