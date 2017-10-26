---
order: 1
title: 图标全览
---



```jsx
const { Icon, Grid, Toast } = SaltUI;

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      icons: [
        'angle-down',
        'angle-left',
        'angle-right',
        'angle-up',
        'check-round',
        'check',
        'cross-round',
        'cross',
        'field-required',
        'info-circle',
        'info-round',
        'map',
        'minus-circle',
        'minus-round',
        'note-round',
        'pen',
        'photo',
        'plus-circle',
        'plus-round',
        'plus',
        'search',
        'setting',
        'star',
        'time',
        'toast-error',
        'toast-fail',
        'toast-loading',
        'toast-success',
        'user',
      ],
    };
  }

  render() {
    return (
      <div>
        <div className="t-BCe t-FAC t-LH44">SVG 图标全览</div>
        <div className="t-BCe t-FAC t-LH44">点击图标显示 name</div>
        <Grid col={5} square>
          {React.Children.toArray(this.state.icons.map((icon) => {
            return (
              <Icon name={icon} className="demoIcon" onClick={() => {
                Toast.show({ content: icon });
              }} />
            );
          }))}
        </Grid>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />, mountNode
);
```