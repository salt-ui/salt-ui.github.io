---
order: 0
title: 基本使用
---

```jsx
const { Button, Dialog } = SaltUI;

class Demo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showConfirm: false,
            showAlert: true,
            text : '测试文本'
        }
    }

    handleAlert() {
        Dialog.alert({
            title: '测试',

            content: '我是 Dialog.alert 的调用',
            onConfirm() {
                console.log('alert confirm');
            }
        });
    }

    handleTitle() {
        Dialog.alert({
            content: '我是测试内容我是测试内容',
            onConfirm() {
                console.log('no title confirm');
            }
        });
    }

    handleMultiLines() {
        Dialog.alert({
            title: '提示',
            content: '同学，你赢了！同学，你赢了！同学，你赢了！同学，你赢了！同学，你赢了！',
            onConfirm() {
                console.log('multi lines confirm');
            }
        });
    }

    handleConfirm() {
        Dialog.confirm({
            title: '测试',
            locale: 'en_US',
            content: '我是测试内容我是测试内容我是测试内容我是测试内容我是测试内容我是测试内容我是测试内',
            onConfirm() {
                console.log('confirm confirm');
            },
            onCancel() {
                console.log('confirm cancel');
            }
        });
    }

    render() {
        let t = this;

        return (
            <div className="demoWrap">

                <Button className="demo" onClick={this.handleAlert.bind(this)}>Alert</Button>

                <Button className="demo" onClick={this.handleConfirm.bind(this)}>Confirm</Button>

                <Button className="demo" onClick={this.handleTitle.bind(this)}>No title</Button>

                <Button className="demo" onClick={this.handleMultiLines.bind(this)}>Multi lines</Button>

                <Button className="demo" onClick={() => {this.setState({showAlert: true})}}>Use show prop Alert</Button>

                <Button className="demo" onClick={() => {this.setState({showConfirm: true})}}>Use show prop Confirm</Button>


                <Dialog title="Absolute Alert"
                    show={this.state.showAlert}
                    onConfirm={() => {this.setState({showAlert: false})}}>
                    这是一个默认展示的 Dialog
                </Dialog>

                <Dialog title="Absolute Confirm"
                    show={this.state.showConfirm}
                    type="confirm"
                    locale={'en_US'}
                    onConfirm={() => {this.setState({showConfirm: false})}}
                    onCancel={() => {this.setState({showConfirm: false})}}>
                    <textarea value={this.state.text} onChange={e => this.setState({ text: e.target.value })}/>
                </Dialog>

            </div>
        );
    }
}

ReactDOM.render(
  <Demo />, mountNode
);
```

```css
.demoWrap{
  padding: 15px;
}
.demo{
  margin-bottom: 15px;
}
```