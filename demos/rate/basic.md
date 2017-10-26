---
order: 0
title: 基本使用
---



```jsx
const { Rate } = SaltUI;

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            score: 0,
        };
    }

    handleChange(label, score) {
        this.setState({
            [label]: score,
        });
    }

    render() {
        const t = this;
        let [totalScore, height, gap] = [5, 30, 15];
        return (
            <div className="t-M10">
                <div className="t-FBH t-FBAC t-H44">
                    <div className="tFB1">服务态度：</div>
                    <div>
                        <Rate
                            totalScore={totalScore}
                            height={height}
                            gap={gap}
                            score={t.state.score1}
                            onChange={t.handleChange.bind(t, 'score1')}
                        />
                    </div>
                </div>
                <div className="t-FBH t-FBAC t-H44">
                    <div className="tFB1">认路能力：</div>
                    <div>
                        <Rate
                            totalScore={totalScore}
                            height={height}
                            gap={gap}
                            score={t.state.score2}
                            onChange={t.handleChange.bind(t, 'score2')}
                        />
                    </div>
                </div>
                <div className="t-FBH t-FBAC t-H44">
                    <div className="tFB1">开车水平：</div>
                    <div>
                        <Rate
                            totalScore={totalScore}
                            height={height}
                            gap={gap}
                            score={t.state.score3}
                            onChange={t.handleChange.bind(t, 'score3')}
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