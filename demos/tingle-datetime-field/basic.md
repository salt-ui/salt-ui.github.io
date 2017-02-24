---
order: 0
title: 基本使用
---

```jsx
const { Group, DatetimeField } = SaltUI;

class Demo extends React.Component {

    constructor(props) {
        super(props);

        let t = this;
        let now = new Date().getTime();
        t.state = {
            value: null,
            value1: now,
            value2: now,
            value3: now,
            value4: now,
            value5: now,
            value6: now
        };
    }

    handleChange(field, value) {
        console.log(value)
        this.setState({
            [field]: value
        });
    }

    render() {
        let t = this;
        return (
            <div>
                <Group>
                    <Group.Head className="t-FS14 t-LH1_5 t-LH20 t-PT10 t-PB10 t-PL18">时间选择器演示</Group.Head>
                    <Group.List>
                        <DatetimeField label="不可选" value={t.state.value} readOnly={true}/>
                        <DatetimeField label="没有默认值" onSelect={t.handleChange.bind(t, 'value')} value={t.state.value} placeholder="请输入"/>
                        <DatetimeField label="年选择" onSelect={t.handleChange.bind(t, 'value1')} value={t.state.value1} columns={[ '年' ]}/>
                        <DatetimeField label="月选择" onSelect={t.handleChange.bind(t, 'value2')} value={t.state.value2} columns={[ '年', '月' ]}/>
                        <DatetimeField label="日选择" onSelect={t.handleChange.bind(t, 'value3')} value={t.state.value3} columns={[ '年', '月', '日' ]}/>
                        <DatetimeField label="时选择" onSelect={t.handleChange.bind(t, 'value4')} value={t.state.value4} columns={[ '年', '月', '日', '时' ]}/>
                        <DatetimeField label="分选择" onSelect={t.handleChange.bind(t, 'value5')} value={t.state.value5} columns={[ '年', '月', '日', '时', '分' ]}/>
                        <DatetimeField label="秒选择" onSelect={t.handleChange.bind(t, 'value6')} value={t.state.value6} columns={[ '年', '月', '日', '时', '分', '秒' ]}/>
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