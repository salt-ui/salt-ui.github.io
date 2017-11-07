---
order: 1
title: 间隔线左缩进30px & Item两边缩进14px
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
                <Group.Head className='t-BCe t-FS12 t-LH2 t-PT16'>间隔线左缩进30px & Item两边缩进14px</Group.Head>
                <Group.List lineIndent={30} itemIndent={[14, 14]}>
                    <div className='t-LH44 t-omit'>间隔线的缩进是独立于Item的缩进的，很长很长的测试文字</div>
                    <div className='t-LH44 t-omit'>间隔线的缩进是独立于Item的缩进的，很长很长的测试文字</div>
                </Group.List>
            </div>
        );
    }
}

ReactDOM.render(
  <Demo />, mountNode
);
```