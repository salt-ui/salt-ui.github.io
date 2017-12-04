---
order: 0
title: 基本使用
---



```jsx
import { Grid } from 'saltui';
import Icon from 'salt-icon';
import ToastError from 'salt-icon/lib/ToastError';
import ToastFail from 'salt-icon/lib/ToastFail';
import ToastLoading from 'salt-icon/lib/ToastLoading';
import ToastSuccess from 'salt-icon/lib/ToastSuccess';
import PlusCircle from 'salt-icon/lib/PlusCircle';

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      colorIcons: [
        'cross',
        'check',
        'map',
        'pen',
        'photo',
      ],
      icons: [
        'plus',
        'search',
        'setting',
        'star',
        'time',
      ],
    };
  }

  render() {
    return (
      <div>
        <div className="t-P20 t-FAC">
          <Icon name="star" className="logo" />
        </div>
        <div className="t-BCe t-FAC t-LH44">多种颜色的SVG图标</div>
        <Grid col={5} square>
          {React.Children.toArray(this.state.colorIcons.map(icon => <Icon name={icon} className="demoIcon" />))}
        </Grid>
        <div className="t-BCe t-FAC t-LH44">单色SVG图标</div>
        <Grid col={5} square>
          {React.Children.toArray(this.state.icons.map(icon => <Icon name={icon} className="demoIcon" />))}
        </Grid>
        <div className="t-BCe t-FAC t-LH44">单色SVG图标, 设置尺寸和颜色</div>
        <Grid col={5} square>
          {React.Children.toArray(this.state.icons.map(icon => <Icon name={icon} className="demoIcon2" />))}
          <ToastError fill="#4d9df0" />
          <ToastFail fill="#9462a9" />
          <ToastLoading fill="#7bc380" />
          <ToastSuccess fill="#942a09" />
          <PlusCircle fill="#e65100" />
        </Grid>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />, mountNode
);
```