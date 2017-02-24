---
order: 0
title: 基本使用
---

```jsx
const { Gallery } = SaltUI;

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            images: [
            {
                src: 'https://gw.alicdn.com/tps/TB1HMQVJpXXXXbZXpXXXXXXXXXX-640-340.jpg',
                name: '信息平台前端团队',
                href: 'http://www.alibaba-inc.com'
            },
            {
                src: 'https://gw.alicdn.com/tps/TB1X.oFJpXXXXbMXVXXXXXXXXXX-484-282.png',
                name: '信息平台前端团队',
                href: 'http://www.alibaba-inc.com'
            },
            {
                src: 'https://gw.alicdn.com/tps/TB1E2M9JpXXXXXQXXXXXXXXXXXX-820-356.png',
                name: '信息平台前端团队',
                href: 'http://www.alibaba-inc.com'
            },
            {
                src: 'https://gw.alicdn.com/tps/TB1Qy3RJpXXXXcxXFXXXXXXXXXX-2000-680.jpg',
                name: '信息平台前端团队 突破十大障碍最终登上人生巅峰',
                href: 'http://www.alibaba-inc.com'
            }]
        }
    }

    render() {
        return (
            <div>
                <Gallery
                    onGalleryClick={(index, image) => console.debug(index, image)}
                    images={this.state.images}
                    showNav
                />
            </div>
        )
    }
}

ReactDOM.render(
  <Demo />, mountNode
);
```