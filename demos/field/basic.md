---
order: 0
title: 左右结构
---

```jsx
const { Group, Field, Icon, Toast } = SaltUI;


class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const angleIconProps = { fill: 'rgba(31,56,88,0.40)', width: 20, height: 20 };
    return (
      <div>
        <Group.List >
          <Field label="左右结构" tip={<div>这里是tip这里是tip这里是tip这里是tip这里是tip这里是tip这里是tip这里是tip<a href="https://salt-ui.github.io/" target="_blank">salt-ui</a>这里是tip</div>}>
            <div>自定义输入元素的区域, 带tip</div>
          </Field>
        </Group.List>

        <Group.List >
          <Field label="左右结构" icon={<Icon name="angle-right" {...angleIconProps} />}>
            <div>自定义输入元素的区域, 带图标</div>
          </Field>
        </Group.List>

        <Group.List >
          <Field label="左右结构" icon={<Icon name="angle-right" {...angleIconProps} />} errMsg="输入有误" toastComponent={Toast}>
            <div>自定义输入元素的区域, 带图标, 带错误提示</div>
          </Field>
        </Group.List>

        <Group.List>
          <Field
            layout="h" label="左右结构" multiLine
          >
            <div>自定义输入元素的区域多行很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多</div>
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