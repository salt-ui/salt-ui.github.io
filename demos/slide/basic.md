---
order: 0
title: 基础使用
---



```jsx
import { Slide } from 'saltui';

const { Component } = React;

class SlideDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideList: [
        {
          img: '//img.alicdn.com/tps/TB1hhOmPFXXXXaSXXXXXXXXXXXX-640-387.jpg',
          url: '',
          title: 'item0',
        }, {
          img: '//img.alicdn.com/tps/TB1LxF5PFXXXXXoXFXXXXXXXXXX-640-340.jpg',
          url: '',
          title: 'item1',
        }, {
          img: '//img.alicdn.com/tps/TB1i6mhPFXXXXcQXXXXXXXXXXXX-640-340.jpg',
          url: '',
          title: 'item2',
        }, {
          img: '//img.alicdn.com/tps/TB1kGxIPFXXXXX_aXXXXXXXXXXX-640-340.jpg',
          url: '',
          title: 'item3',
        },
      ],
    };
  }

  render() {
    return (
      <Slide showNav auto>
        {this.state.slideList.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${item.img})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          />
        ))}
      </Slide>
    );
  }
}

ReactDOM.render(<SlideDemo />, mountNode);
```
