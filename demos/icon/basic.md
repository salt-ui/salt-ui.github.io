---
order: 0
title: 基本使用
---



```jsx
const { Icon, Grid } = SaltUI;

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
          {React.Children.toArray(this.state.colorIcons.map((icon) => {
            return <Icon name={icon} className="demoIcon" />;
          }))}
        </Grid>
        <div className="t-BCe t-FAC t-LH44">单色SVG图标</div>
        <Grid col={5} square>
          {React.Children.toArray(this.state.icons.map((icon) => {
            return <Icon name={icon} className="demoIcon" />;
          }))}
        </Grid>
        <div className="t-BCe t-FAC t-LH44">单色SVG图标, 设置尺寸和颜色</div>
        <Grid col={5} square>
          {React.Children.toArray(this.state.icons.map((icon) => {
            return <Icon name={icon} className="demoIcon2" />;
          }))}
          <Icon name="toast-error" fill="#4d9df0" />
          <Icon name="toast-fail" fill="#9462a9" />
          <Icon name="toast-loading" fill="#7bc380" />
          <Icon name="toast-success" fill="#942a09" />
          <Icon name="plus-circle" fill="#e65100" />
        </Grid>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />, mountNode
);
```