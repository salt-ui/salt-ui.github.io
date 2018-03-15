---
order: 2
title: 弹窗形式
---



```jsx
import { RadioField, Group } from 'saltui';


class Demo extends React.Component {
  render() {
    const radioFieldProps1 = {
      data: [
        {
          value: {
            name: '周姮',
            postName: '资深交互设计师',
          },
          checked: true,
          content: (
            <table className="demoTable">
              <tbody>
                <tr>
                  <td className="avatar-td"><img alt="" className="avatar" src="https://img.alicdn.com/tps/TB1vZnyJFXXXXX5XpXXXXXXXXXX-32-32.png" /></td>
                  <td className="info-td"><div className="name">周姮</div><div className="postName">资深交互设计师</div></td>
                </tr>
              </tbody>
            </table>
          ),
          disable: false,
          label: '周姮',
        },
        {
          value: {
            name: '李伟（孟则）',
            postName: '资深交互设计师',
          },
          checked: false,
          content: (
            <table className="demoTable">
              <tbody>
                <tr>
                  <td className="avatar-td"><img alt="" className="avatar" src="https://img.alicdn.com/tps/TB1CmDsJFXXXXcxXpXXXXXXXXXX-32-32.png" /></td>
                  <td className="info-td"><div className="name">李伟（孟则）</div><div className="postName">资深交互设计师</div></td>
                </tr>
              </tbody>
            </table>
          ),
          disable: false,
          label: '李伟（孟则）',
        },
      ],
      onChange(value, index, data) {
        console.log(value, index, data);
      },
      groupListArgument: {
        lineIndent: 15,
        itemIndent: 15,
      },
    };
    return (
      <div>
        <Group>
          <Group.List>
            <RadioField {...radioFieldProps1} mode="popup" label="复选" />
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