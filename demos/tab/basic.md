---
order: 0
title: 基础使用
---

```jsx
import { Tab } from 'saltui';

ReactDOM.render(
  <Tab activeKey={'1'}>
    <Tab.Item title="已完成" />
    <Tab.Item title="未完成" />
    <Tab.Item title="通过" />

  </Tab>, mountNode
);
```

