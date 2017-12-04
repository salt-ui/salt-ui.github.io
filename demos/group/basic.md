---
order: 0
title: 默认样式
---



```jsx
import { Group } from 'saltui';

class Demo extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="t-FS14">
        <Group.Head className="t-BCe t-FS12 t-LH2 t-PT16">默认样式</Group.Head>
        <Group.List>
          <div className="t-LH44">GroupList是一个容器类组件</div>
          <div className="t-LH30">Item的高度取决于内容的高度</div>
        </Group.List>
        <Group.List>
          <div className="t-LH44">当两个Group.List相邻时，后一个无上边框</div>
        </Group.List>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />, mountNode
);
```