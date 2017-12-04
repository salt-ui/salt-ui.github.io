---
order: 1
title: 查看图片2
---

```jsx
import { Button, ImageViewer } from 'saltui';


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
                  src: 'http://gtms01.alicdn.com/tps/i1/TB12i5PHFXXXXaKXVXXY7J9SpXX-500-699.jpeg',
                },
                {
                  src: 'http://gtms04.alicdn.com/tps/i4/TB1E4yUHFXXXXboXFXXK0qsSpXX-500-750.jpeg',
                },
              ],
              current: 0,
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