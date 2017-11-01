---
order: 0
title: 基本使用
---

```jsx
const { Collapse, Icon } = SaltUI;
const Panel = Collapse.Panel;
class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange = (e) => {
    console.log('onChange: ', e);
  }

  render() {
    const header = <span>自定义头</span>;
    const inconHeader = <span><Icon name="lock" fill="rgba(0, 0, 0, 0.6)" width={22} height={22} />带Icon的头</span>;

    return (
      <div>
        <Collapse
          accordion
          defaultActiveKey={'b'}
          onChange={this.onChange}
        >
          <Panel key="a" header={header} headerClass="my-header-class">
            <div className="collapse-content-demo">this is panel content this is panel content this is panel content</div>
          </Panel>
          <Panel key="b" header="纯字符串头">
            <div className="collapse-content-demo">this is panel content2 or other</div>
          </Panel>
          <Panel key="c" header={inconHeader}>
            <div className="collapse-content-demo">this is panel content3</div>
          </Panel>
        </Collapse>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />, mountNode
);
```

```css
body {
  background-color: #f2f2f2;
}

.collapse-content-demo {
  padding: 0 28px;
  margin: 20px 0;
}
```