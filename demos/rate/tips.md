---
order: 1
title: Tips
---



```jsx
const { Rate } = SaltUI;

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      score1: 2,
    };
  }

  handleChange(label, score) {
    this.setState({
      [label]: score,
    });
  }

  render() {
    const t = this;
    const totalScore = 6;
    return (
      <div className="t-M10">
        <div className="t-FBH t-FBAC t-H44">
          <div className="tFB1">服务态度：</div>
          <div>
            <Rate
              total={totalScore}
              scoreTips={['不合格', '合格', '良好', '优秀', '卓越']}
              size="normal"
              score={t.state.score1}
              onChange={(value) => { t.handleChange('score1', value); }}
            />
          </div>
        </div>
        <div className="t-FBH t-FBAC t-H44">
          <div className="tFB1">认路能力：</div>
          <div>
            <Rate
              showTip={false}
              size="normal"
              value={t.state.score2}
              onChange={(value) => { t.handleChange('score2', value); }}
            />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />, mountNode
);
```