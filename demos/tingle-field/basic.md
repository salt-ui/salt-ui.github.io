---
order: 0
title: 基本使用
---

```jsx
const { Group, Field } = SaltUI;

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Group.List >
                    <Field label="左右结构" required={true}>
                        <div>自定义输入元素的区域, 不带图标</div>
                    </Field>
                </Group.List>
                <Group.List >
                    <Field>
                        <div>自定义输入元素的区域, 不带 label, 不带图标</div>
                    </Field>
                </Group.List>
                <Group.List >
                    <Field label="左右结构" icon={{name: 'angle-right', fill: '#ccc', width: 26, height: 26}}>
                        <div>自定义输入元素的区域, 带图标</div>
                    </Field>
                </Group.List>
                <Group.List>
                    <Field layout="v" label="上下结构" icon={{name: 'angle-right', fill: '#ccc', width: 26, height: 26}}>
                        <div>自定义输入元素的区域, 带图标</div>
                    </Field>
                </Group.List>
                <Group.List>
                    <Field layout="h" label="左右结构" multiLine={true}
                           icon={{name: 'angle-right', fill: '#ccc', width: 26, height: 26}}>
                        <div>自定义输入元素的区域多行很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多</div>
                    </Field>
                </Group.List>

                <Group.List>
                    <Field layout="v" label="上下结构" icon={{name: 'angle-right', fill: '#ccc', width: 26, height: 26}}>
                        <div className="t-omit">自定义输入元素的区域多行点点点很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多</div>
                    </Field>
                </Group.List>
            </div>
        );
    }
}

ReactDOM.render(
  <Demo />, mountNode
);
```