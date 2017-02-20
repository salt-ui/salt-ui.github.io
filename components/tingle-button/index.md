# tingle-button 按钮 [![tnpm version](http://web.npm.alibaba-inc.com/badge/v/@ali/tingle-button.svg?style=flat-square)](http://web.npm.alibaba-inc.com/package/@ali/tingle-button)

<img src="https://img.alicdn.com/tps/TB1_8LfJFXXXXbOXFXXXXXXXXXX-640-1136.png" width="300"/>

## Install

```
tnpm install @ali/tingle-button --save
```

## Props

#### className

描述：自定义的扩展样式名称

类型：String

默认：''

必填：否

#### disabled

描述：按钮失效

类型：Boolean

默认：false

必填：否

#### type

描述：按钮的类型, 可选的参数 primary、secondary、minor、danger、text

类型：String

默认：'primary'

必填：否

#### size

描述：按钮的大小, 可选的参数 small 、medium 、large

类型：String

默认：'large'

必填：否

#### onClick

描述：按钮点击时的回调

类型：Function

默认：noop

必填：否

#### style

描述：按钮的行内样式复写

类型：object

默认：`{}`

必填：否

## Simple Usage

```javascript
import {Button} from 'tingle';

let View = React.createClass({
  handleClick() {
    console.log('a button clicked')
  },

  render() {
      return (
        <div style={{padding:'20px'}}>
          <Button>默认按钮</Button> <br/>
          <Button type="primary" onClick={this.handleClick}>一级按钮</Button> <br/>
          <Button type="secondary" onClick={this.handleClick}>二级按钮</Button> <br/>
          <Button type="minor" onClick={this.handleClick}>次要按钮</Button> <br/>
          <Button disabled={true}>不可点击</Button> <br/>
          <div className="demo-row">
              <div className="demo-cell"><Button type="primary" onClick={this.handleClick}>一级按钮</Button></div>
              <div className="demo-cell"><Button type="secondary" onClick={this.handleClick}>二级按钮</Button></div>
          </div> <br/>
          <Button style={{marginLeft:-20,marginRight:-20,borderRadius:0}} onClick={this.handleClick}>通栏按钮</Button> <br/>
          <Button type="primary" size="large" onClick={this.handleClick}>大按钮</Button> <br/>
          <Button type="primary" size="medium" onClick={this.handleClick}>中按钮</Button> <br/>
          <Button type="primary" size="small" onClick={this.handleClick}>小按钮</Button> <br/>
        </div>
      )
  }
})
```

## Links 相关链接

- [Fire a bug/Issues 提Bug](http://gitlab.alibaba-inc.com/tingle-ui/tingle-button/issues)
