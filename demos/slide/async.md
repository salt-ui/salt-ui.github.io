---
order: 1
title: 懒加载
---



```jsx
const { Component } = React;
const { Slide } = SaltUI;

class SlideDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideList: [],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
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
      });
    }, 1000);
  }

  render() {
    return (
      <Slide showNav auto>
        {
          this.state.slideList.length ?
            this.state.slideList.map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
              />
            )) : [
              <img width="48" alt="" src="//aliwork.alicdn.com/tps/TB1fPYRMXXXXXcdXFXXXXXXXXXX-480-238.svg" />,
            ]
        }
      </Slide>
    );
  }
}

ReactDOM.render(<SlideDemo />, mountNode);
```
