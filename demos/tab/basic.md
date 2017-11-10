---
order: 0
title: 基础使用
---

```jsx
const { Tab } = SaltUI;

ReactDOM.render(
  <Tab active={'1'}>
    <Tab.Item title="已完成" />
    <Tab.Item title="未完成" />
    <Tab.Item title="通过" />

  </Tab>, mountNode
);
```

