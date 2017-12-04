---
order: 0
title: 左侧多选
---

```jsx
import { Group, CheckboxField } from 'salt-ui';

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  getCheckboxFieldProps() {
    return {
      data: [
        {
          checked: false,
          text: (
            <table className="demoTable">
              <tbody>
                <tr>
                  <td className="avatar-td">
                    <img
                      role="presentation"
                      className="avatar"
                      src="https://img.alicdn.com/tps/TB1vZnyJFXXXXX5XpXXXXXXXXXX-32-32.png"
                    />
                  </td>
                  <td className="info-td">
                    <div className="name">周姮</div>
                    <div className="postName">资深交互设计师</div>
                  </td>
                </tr>
              </tbody>
            </table>),
          disable: false,
          value: '1',
          slotText: '周姮',
        }, {
          checked: false,
          text: (
            <table className="demoTable">
              <tbody>
                <tr>
                  <td className="avatar-td">
                    <img
                      role="presentation"
                      className="avatar"
                      src="https://img.alicdn.com/tps/TB1CmDsJFXXXXcxXpXXXXXXXXXX-32-32.png"
                    />
                  </td>
                  <td className="info-td">
                    <div className="name">李伟（孟则）</div>
                    <div className="postName">资深交互设计师</div>
                  </td>
                </tr>
              </tbody>
            </table>
          ),
          disable: true,
          value: '2',
          slotText: '李伟（孟则）',
        },
        {
          checked: true,
          text: '刘艳芬',
          disable: true,
          value: '3',
        },
        {
          checked: false,
          text: '邓丽娲',
          disable: false,
          value: '4',
        },
      ],
      readOnly: false,
      placeholder: '请选择',
      maskCloseable: true,
      groupListFlag: true,
      onChange(data) {
        console.log(data);
      },
      /* groupListArgument: {
          lineIndent: 25,
          itemIndent: 45
      },*/
      label: '多选（list模式）',
      mode: 'list',
      required: true,
      tip: <div>这里是提示信息</div>,
      // iconPosition: 'right',
    };
  }

  render() {
    const CheckboxFieldProps = this.getCheckboxFieldProps();
    return (
      <div className="checkbox-field-demo">
        <Group className="checkbox-field-demo-group">
          <Group.List><CheckboxField {...CheckboxFieldProps} /></Group.List>
        </Group>
      </div>

    );
  }
}

ReactDOM.render(
  <Demo />, mountNode
);
```

```css
.demoTable td{
    padding: 10px 0;
    vertical-align: middle;
} 
.demoTable .info-td{
    padding-left: 10px;
}
.demoTable .avatar-td{
    width: 32px;
}
.demoTable .avatar{
    border-radius: 50%;
}
.demoTable .name{
    margin-bottom: 5px;
    font-size: 16px;
    color: #222;
}
.demoTable .postName{
    font-size: 12px;
    color: #999;
}
.t-checkbox-field-readonly .name, 
.t-checkbox-field-readonly .postName{
    color: #ccc;
}
```