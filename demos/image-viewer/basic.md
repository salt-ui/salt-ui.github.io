---
order: 0
title: 查看图片1
---

```jsx
const { Button, ImageViewer } = SaltUI;



class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div
        style={{
          marginTop: '200px',
          height: 1000,
        }}
      >
        <Button
          onClick={() => {
            ImageViewer.show({
              photos: [
                {
                  src: 'http://img.alicdn.com/imgextra/i2/927018118/TB13fBjKFXXXXbPXpXXXXXXXXXX_!!0-tstar.jpg',
                },
                {
                  src: 'http://img.alicdn.com/tps/i4/TB1bokgFVXXXXbKXFXXYCct.pXX-238-238.png',
                },
              ],
              current: 1,
            });
          }}
        >点击查看</Button>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />, mountNode
);
```

```css
body {
  background-color: #f2f2f2;
}

.collapse-content-demo {
  padding: 0 28px;
  margin: 20px 0;
}
```