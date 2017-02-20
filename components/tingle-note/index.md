# tingle-note [![tnpm version](http://web.npm.alibaba-inc.com/badge/v/@ali/tingle-note.svg?style=flat-square)](http://web.npm.alibaba-inc.com/package/@ali/tingle-note)

 全局提醒，警示, 非pop式

![](http://aligitlab.oss-cn-hangzhou-zmf.aliyuncs.com/uploads/tingle-ui/tingle-ui/34525f5e79d32e427af039df4bd6c49e/image.png)


## Install

```
tnpm install @ali/tingle-note --save
```

## Simple Usage

  ```
      <Note message='当前年假余额10天' type='warning' closeText='查看详情'/>

  ```
## Props

### type
    
描述：通知类型 `message` `warning`

类型：string

默认：`message`

必选：否
    
### closable
    
描述：true  提醒可关闭,配置后会出现关闭按钮, false 提醒看详情,配置后会出现右导航箭头
    
类型：Boolean

默认：false

必选：否
    
### closeText
    
描述：关闭文案

类型：string

默认：''

必选：否
    
### message
    
描述：通知正文

类型：string

默认：''

必选：是
    
### onClose
    
描述：关闭回调

类型：Function

默认：Context.noop

必选：否

## APIs

### doClose

关闭提示

## Links

- [Issues](http://gitlab.alibaba-inc.com/tingle-ui/tingle-note/issues)
