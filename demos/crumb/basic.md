---
order: 0
title: 基本使用
---

```jsx
const { Crumb } = SaltUI;

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.crumbs = [
            { text: '刘一' },
            { text: '陈二' },
            { text: '张三' },
            { text: '李四' },
            { text: '王五' },
            { text: '赵六' },
            { text: '孙七' },
            { text: '周八' },
            { text: '吴九' },
            { text: '郑十' },
    ];
  }

  onClick(idx) {
    console.log(idx);
    this.setState({
      navText: this.crumbs[idx].text,
    });
  }

  render() {
    const t = this;
    return (
      <div>
        <Crumb onClick={t.onClick.bind(t)}>
          {
                        this.crumbs.map((crumb, key) => <Crumb.Item key={key}>{crumb.text}</Crumb.Item>)
                    }
        </Crumb>
        <div style={{ marginTop: '50px' }}>{`you clicked: ${this.state.navText || ''}`}</div>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />, mountNode
);
```