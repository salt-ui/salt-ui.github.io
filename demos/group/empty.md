---
order: 4
title: 列表项有空值(null, undefined, '')的情况
---



```jsx
const { Group } = SaltUI;

class Demo extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="t-FS14">
        <Group.Head className="t-BCe t-FS12 t-LH2 t-PT16">列表项有空值(null, undefined, '')的情况</Group.Head>
        <Group>
          <Group.List itemIndent={[10, 10]}>
            {0}
            {''/* 该项不输出*/}
            {null/* 该项不输出*/}
            {undefined/* 该项不输出*/}
            {React.Children.toArray([1, 2, 3].map(value => <div>遍历项: {value}</div>))}
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