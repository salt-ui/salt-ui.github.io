---
order: 0
title: 基本使用
---

```jsx
const { PhotoField } = SaltUI;

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      photoList: [
        {
          name: '111',
          response: {
            url: 'http://aligitlab.oss-cn-hangzhou-zmf.aliyuncs.com/uploads/tingle-ui/tingle-photo-field/eed863a778315746f6f0bf736a3200fc/image.png',
          },
        },
        {
          url: 'http://aligitlab.oss-cn-hangzhou-zmf.aliyuncs.com/uploads/tingle-ui/tingle-photo-field/eed863a778315746f6f0bf736a3200fc/image.png',
          name: '222',
        },
        {
          url: 'http://gtms02.alicdn.com/tps/i2/TB1Xe3SMpXXXXX6XpXXTCU0QpXX-300-300.jpg',
          name: '222',
        },
        {
          url: 'http://gtms02.alicdn.com/tps/i2/TB1Xe3SMpXXXXX6XpXXTCU0QpXX-300-300.jpg',
          name: '222',
        },
        {
          url: 'http://aligitlab.oss-cn-hangzhou-zmf.aliyuncs.com/uploads/tingle-ui/tingle-photo-field/eed863a778315746f6f0bf736a3200fc/image.png',
          name: '222',
        },
        {
          url: 'http://gtms02.alicdn.com/tps/i2/TB1Xe3SMpXXXXX6XpXXTCU0QpXX-300-300.jpg',
          name: '222',
        },
      ],
    };
  }

  onDelete(index) {
    const photoList = this.state.photoList.filter((item, i) =>
      index !== i
    ) || [];

    this.setState({
      photoList,
    });
  }

  onChange(fieldData, photoList) {
    this.setState({
      photoList,
    });
  }

  render() {
    return (
      <div>
        <PhotoField.H5
          label="H5 图片"
          placeholder="请选择图片"
          required
          max={4}
          maxUpload={9}
          name="file"
          url="http://eternalsky.me:8122/file/upload"
          photoList={this.state.photoList}
          tip="这里是提示信息"
          onChange={this.onChange.bind(this)}
          onDelete={this.onDelete.bind(this)}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />, mountNode
);
```