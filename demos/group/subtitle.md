---
order: 0
title: 小标题
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
        <div className="t-PL14 t-PT10 t-BCe">
          <div className="t-FS16 t-FC6">总体概览</div>
          <div className="t-FS12 t-FCa t-LH2 t-omit">小标题蚊子小标题蚊子</div>
        </div>
        <Group>
          <Group.List itemIndent={[10, 10]}>
            <div className="t-LH44 t-omit">间隔线的缩进是独立于Item的缩进的，很长很长的测试文字</div>
            <div className="t-LH44 t-omit">间隔线的缩进是独立于Item的缩进的，很长很长的测试文字</div>
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