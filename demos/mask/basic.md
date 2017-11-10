---
order: 0
title: 基本使用
---



```jsx
const { Mask } = SaltUI;

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      maskvisible: false,
    };
  }

  showMask() {
    this.setState({
      maskvisible: true,
    });
  }

  handleWillHide() {
    console.log('mask will hide');
        // 如果返回false 则Mask是不能关闭的
        // return false;
  }

  handleDidHide() {
    console.log('mask did hide');
  }

  render() {
    const t = this;
    return (
      <div className="t-P10">
        <h3 className="t-F18 t-MB6" onClick={t.showMask.bind(this)}>点击打开mask</h3>
        <Mask visible={t.state.maskvisible}
          onWillHide={t.handleWillHide.bind(t)}
          onDidHide={t.handleDidHide.bind(t)}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />, mountNode
);
```