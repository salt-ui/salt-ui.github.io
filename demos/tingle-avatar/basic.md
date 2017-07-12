---
order: 0
title: 基本使用
---

```jsx
const { Avatar } = SaltUI;
const avatarColors = ['#78C06E', '#3BC2B5', '#78919D', '#5EC9F6', '#F6BF26'];

class Demo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="hash-code">
                    <h2>hashCode 测试：</h2>
                    <dl>
                        <dt>天晟</dt>
                        <dd>hashCode: {Avatar.hashCode('天晟')}</dd>
                    </dl>
                    <dl>
                        <dt>阿里巴巴集团</dt>
                        <dd>hashCode: {Avatar.hashCode('阿里巴巴集团')}</dd>
                    </dl>
                    <dl>
                        <dt>阿里巴巴集团</dt>
                        <dd>hashCode(long): {Avatar.hashCode('阿里巴巴集团', true)}</dd>
                    </dl>
                    <dl>
                        <dt>alex</dt>
                        <dd>hashCode: {Avatar.hashCode('alex')}</dd>
                    </dl>
                </div>
                <div className="avatar-demo">
                    <h2>Demo</h2>
                    <div className="t-FBH">
                        <Avatar name="tingle"/>
                        <Avatar name="天晟"/>
                        <Avatar name="马天明"/>
                        <Avatar name="欧阳夏丹"/>
                        <Avatar />
                        <Avatar src="https://img.alicdn.com/tps/TB1amOaKpXXXXbsXVXXXXXXXXXX-144-144.png"/>
                    </div>
                    <h2>自定义颜色集合</h2>
                    <div className="t-FBH">
                        <Avatar name="tingle" colors={avatarColors}/>
                        <Avatar name="天晟" colors={avatarColors}/>
                        <Avatar name="马天明" colors={avatarColors}/>
                        <Avatar name="欧阳夏丹" colors={avatarColors}/>
                        <Avatar name="钉钉" colors={avatarColors}/>
                        <Avatar name="马明" defaultColor={'#F6BF26'}/>
                    </div>
                    <h2>自定义大小</h2>
                    <div className="t-FBH">
                        <Avatar name="tingle" size={60}/>
                        <Avatar name="天晟" size={80} fontSize={16}/>
                        <Avatar name="马天明" size={100} fontSize={20}/>
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

```css
.avatar-demo{
    padding: 20px;
}
.avatar-demo h2{
    line-height: 30px;
    margin-top: 30px;
}
.hash-code{
    padding: 10px;
}
.hash-code dt, .hash-code dd{
    line-height: 24px;
}
.t-avatar{
    margin-right: 5px;
}
```