---
order: 4
title: Use show prop Alert
---

```jsx
import { Button, Dialog } from 'saltui';

class Demo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showAlert: true,
      showConfirm: false,
      showMultiBtns: false,
      showMultiBtnsVertical: false,
      showTransBg: false,
      showNoPadding: false,
      text: '测试文本',
    };
  }

  handleShow(stateProps, show) {
    this.setState({
      [stateProps]: show,
    });
  }

  render() {
    const t = this;

    return (
      <div className="demoWrap">

        <Button key="show-alert" className="demo" onClick={this.handleShow.bind(this, 'showAlert', true)}>Use show prop Alert</Button>

        <Dialog
          key="d-alert"
          title="2.0版本上线啦"
          show={this.state.showAlert}
          onConfirm={() => { console.log('Use show props Alert confirm'); this.handleShow('showAlert', false); }}
        >
          <div>
            <p>我们来自阿里巴巴企业智能事业部事业部用户体验平台，我们的日常是支持集团200+系统／产品的迭代与升级。</p>
            <p>面对200+复杂的产品／系统，我们先进行了调研，其中有鲜活的门户页面也有逻辑复杂的后台页面，更不乏诸多工具类的系统界面。然后，我们记录了每一条业务线上产品的特性，最终提炼出 “通用” “高效” “亲切” 三个关键词，它将指导基础规范的落地和成为我们后续不断迭代的一份指南。</p>
          </div>
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
  padding: 150px 15px 15px 15px;
}
.demo{
  margin-bottom: 15px;
}
```
