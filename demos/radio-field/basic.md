---
order: 0
title: 基本使用
---



```jsx
const { RadioField } = SaltUI;

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const radioFieldProps = {
      data: [
        {
          value: {
            name: '周姮',
            postName: '资深交互设计师',
          },
          checked: false,
          text: (
                    <table className="demoTable">
                    <tbody>
                    <tr>
                    <td className="avatar-td"><img className="avatar" src="https://img.alicdn.com/tps/TB1vZnyJFXXXXX5XpXXXXXXXXXX-32-32.png" /></td>
                    <td className="info-td"><div className="name">周姮</div><div className="postName">资深交互设计师</div></td>
                    </tr>
                    </tbody></table>),
          disable: false,
        },
        {
          value: {
            name: '李伟（孟则）',
            postName: '资深交互设计师',
          },
          checked: false,
          text: (
                    <table className="demoTable">
                    <tbody>
                    <tr>
                    <td className="avatar-td"><img className="avatar" src="https://img.alicdn.com/tps/TB1CmDsJFXXXXcxXpXXXXXXXXXX-32-32.png" /></td>
                    <td className="info-td"><div className="name">李伟（孟则）</div><div className="postName">资深交互设计师</div></td>
                    </tr>
                    </tbody></table>
                ),
          disable: false,
        },
        {
          value: '1',
          checked: false,
          text: '我也好',
          disable: false,
        },
        {
          value: '2',
          checked: true,
          text: '大家都好',
          disable: true,
        },
      ],
      onChange(value, index, data) {
        console.log(value, index, data);
      },
      groupListArgument: {
        lineIndent: 15,
        itemIndent: 15,
      },
      label: '这是一个label哦',
      groupListFlag: true,
      className: 'ccc'
    };
    return (<div>
        <RadioField {...radioFieldProps} />
    </div>);
  }
}

ReactDOM.render(
  <Demo />, mountNode
);
```