---
order: 0
title: 基本使用
---

```jsx
import { Slider } from 'saltui';

class Demo extends React.Component {
  log = name => (value) => {
    console.log(`${name}: ${value}`);
  }

  render() {
    return (
      <div className="t-slider-example">
        <p className="sub-title">基本滑块</p>
        <Slider
          className="slider-demo"
          defaultValue={30}
          onChange={this.log('change')}
          onAfterChange={this.log('afterChange')}
        />
        <p className="sub-title">滑块-禁用</p>
        <Slider
          className="slider-demo"
          defaultValue={30}
          min={0}
          max={50}
          disabled
          onChange={this.log('change')}
          onAfterChange={this.log('afterChange')}
        />
        <p className="sub-title">滑块-带刻度</p>
        <Slider
          className="slider-demo"
          defaultValue={30}
          min={0}
          max={50}
          marks={{ 5: 'mark1', 15: 'mark2' }}
          onChange={this.log('change')}
          onAfterChange={this.log('afterChange')}
        />
        <p className="sub-title">滑块-自定义颜色</p>
        <Slider
          className="slider-demo"
          defaultValue={30}
          min={0}
          max={50}
          trackStyle={{
            backgroundColor: '#F4606C',
            height: '5px',
          }}
          railStyle={{
            backgroundColor: '#BEE7E9',
            height: '5px',
          }}
          handleStyle={{
            borderColor: '#BEE7E9',
            height: '14px',
            width: '14px',
            marginLeft: '-7px',
            marginTop: '-4.5px',
            backgroundColor: '#BEE7E9',
          }}
        />
      </div>
    );
  }
}


ReactDOM.render(
  <Demo />, mountNode
);
```

```css
.slider-demo-wrapper {
  margin-bottom: 15px;
  margin-left: 30px;
  margin-right: 30px;
}

.sub-title {
  color: #888;
  font-size: 14px;
  padding: 30px 0 18px 0;
  margin-left: 10px;
}
```