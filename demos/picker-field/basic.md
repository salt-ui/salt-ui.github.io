---
order: 0
title: 基本使用
---

```jsx
import { Group, PickerField } from 'saltui';

const monthArray = [
  { value: 0, text: '一月', phonetic: ['yi', 'yue'] },
  { value: 1, text: '二月', phonetic: ['er', 'yue'] },
  { value: 2, text: '三月', phonetic: ['san', 'yue'] },
  { value: 3, text: '四月', phonetic: ['si', 'yue'] },
  { value: 4, text: '五月', phonetic: ['wu', 'yue'] },
  { value: 5, text: '六月', phonetic: ['liu', 'yue'] },
  { value: 6, text: '七月', phonetic: ['qi', 'yue'] },
  { value: 7, text: '八月', phonetic: ['ba', 'yue'] },
  { value: 8, text: '九月', phonetic: ['jiu', 'yue'] },
  { value: 9, text: '十月', phonetic: ['shi', 'yue'] },
  { value: 10, text: '十一月', phonetic: ['shi', 'yi', 'yue'] },
  { value: 11, text: '十二月', phonetic: ['shi', 'er', 'yue'] },
];

class Demo extends React.Component {
  constructor(props) {
    super(props);

    const t = this;
    t.state = {
      value: monthArray[6],
      value1: monthArray[5],
      value2: null,
      value3: monthArray[11],
      value4: monthArray[3],
      value5: monthArray[8],
      value6: monthArray[2],
    };
  }

  handleChange(value) {
    this.setState({
      value,
    });
  }

  handleChange1(value) {
    this.setState({
      value1: value,
    });
  }

  handleChange2(value) {
    this.setState({
      value2: value,
    });
  }

  handleChange3(value) {
    this.setState({
      value3: value,
    });
  }

  handleChange4(value) {
    this.setState({
      value4: value,
    });
  }

  handleChange5(value) {
    this.setState({
      value5: value,
    });
  }

  render() {
    const t = this;
    const fetchUrl = 'https://www.easy-mock.com/mock/5a2f75a26ce8af6869ec49f0/saltui/picker-data?jsonp_param_name=callback';
    return (
      <div>
        <Group>
          <Group.Head className="t-FS14 t-LH1_5 t-LH20 t-PT10 t-PB10 t-PL18">选择器演示</Group.Head>
          <Group.List>
            <PickerField
              label="从本地获取"
              options={monthArray}
              onSelect={(e) => {
                t.handleChange(e);
              }}
              value={t.state.value}
            />
            <PickerField
              label="从接口中获取"
              fetchUrl={fetchUrl}
              onSelect={(e) => {
                t.handleChange1(e);
              }}
              value={t.state.value1}
            />
            <PickerField
              fetchUrl={fetchUrl}
              fetchDataOnOpen
              label="没有默认值"
              onSelect={(e) => {
                t.handleChange2(e);
              }}
              value={t.state.value2}
              placeholder="请输入"
            />
            <PickerField
              fetchUrl={fetchUrl}
              label="无搜索框"
              onSelect={(e) => {
                t.handleChange3(e);
              }}
              value={t.state.value3}
              tip="这里是tip"
              showSearch={false}
            />
            <PickerField
              fetchUrl={fetchUrl}
              label="多选"
              onSelect={(e) => {
                t.handleChange4(e);
              }}
              value={t.state.value4}
              tip="这里是tip"
              multiple
            />
            <PickerField
              label="按字母分组"
              options={monthArray}
              onSelect={(e) => {
                t.handleChange5(e);
              }}
              value={t.state.value5}
              grouping
              groupingIndicator
            />
            <PickerField
              fetchUrl={fetchUrl}
              label="不可选"
              value={t.state.value6}
              readOnly
            />
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