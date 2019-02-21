---
order: 0
title: 基本使用
---

```jsx
import { NumberInfo, Button } from 'saltui';
const { NumberItem } = NumberInfo;

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div className="number-info-wrap">
          <div className="number-info-wrap-title">基本使用</div>
          <NumberInfo label="年度申报">
            <NumberItem number={1.5} unit="天" />
            <NumberItem number={36} unit="小时" />
            <NumberItem number={18} unit="次" secondary />
          </NumberInfo>
        </div>

        <div className="number-info-wrap">
          <div className="number-info-wrap-title">分隔符</div>
          <NumberInfo label="年度申报">
            <NumberItem groupDigits={3} spliter="," number={7834295} unit="元" />
            <NumberItem groupDigits={4} spliter=" " number={7834295} unit="元" />
          </NumberInfo>
        </div>

        <div className="number-info-wrap">
          <div className="number-info-wrap-title">固定小数位数</div>
          <NumberInfo label="年度申报">
            <NumberItem number={100} digits={2} unit="元" />
          </NumberInfo>
        </div>

        <div className="number-info-wrap">
          <div className="number-info-wrap-title">最大值限制</div>
          <NumberInfo label="年度申报">
            <NumberItem number={567} max={99} unit="次" />
          </NumberInfo>
        </div>

        <div className="number-info-wrap">
          <div className="number-info-wrap-title">强制显示正负号</div>
          <NumberInfo label="涨跌幅">
            <NumberItem number={3.7} unit="%" showSign />
          </NumberInfo>
        </div>

        <div className="number-info-wrap">
          <div className="number-info-wrap-title">颜色表示正负</div>
          <NumberInfo label="涨跌幅">
            <NumberItem number={3.7} digits={2} unit="%" showSign={false} positiveColor="red" negativeColor="green" />
            <NumberItem number={-1.4} digits={2} unit="%" showSign={false} positiveColor="red" negativeColor="green"  />
            <NumberItem number={0} digits={2} unit="%" showSign={false} positiveColor="red" negativeColor="green"  />
          </NumberInfo>
        </div>

        <div className="number-info-wrap">
          <div className="number-info-wrap-title">水平布局</div>
          <NumberInfo label="借款金额" layout="h">
            <NumberItem number={1500} digits={2} unit="CNY" />
          </NumberInfo>
          <NumberInfo label="年度申报" layout="h">
            <NumberItem number={1.5} unit="天" />
            <NumberItem number={36} unit="小时" />
            <NumberItem number={18} unit="次" secondary />
          </NumberInfo>
          <NumberInfo label="涨跌幅" layout="h">
            <NumberItem number={3.7} digits={2} unit="%" showSign={false} positiveColor="red" negativeColor="green" />
            <NumberItem number={-1.4} digits={2} unit="%" showSign={false} positiveColor="red" negativeColor="green" />
            <NumberItem number={0} digits={2} unit="%" showSign={false} positiveColor="red" negativeColor="green" />
          </NumberInfo>
        </div>

        <div className="number-info-wrap">
          <div className="number-info-wrap-title">直接使用 &lt;NumberItem&gt; 和 format() 方法</div>
          <Button className="number-info-wrap-space" onClick={() => {
            console.log(NumberInfo.format(20000, { max: 9999, unit: '次' }));
          }}>
            点赞 <NumberItem number={20000} max={99} unit="次" />
          </Button>
        </div>
        
      </div>
    );
  }
}


ReactDOM.render(
  <Demo />, mountNode
);
```

```css
.number-info-wrap {
  background-color: $basic-100;
  margin-bottom: 16px;
  overflow: hidden;
}
  
.number-info-wrap-title {
  padding: 15px 15px 0;
  font-size: $font-size-t4;
  color: #333;
}
  
.number-info-wrap-space {
  margin: 15px;
}
```