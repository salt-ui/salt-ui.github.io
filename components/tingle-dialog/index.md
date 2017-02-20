# tingle-dialog [![tnpm version](http://web.npm.alibaba-inc.com/badge/v/@ali/tingle-dialog.svg?style=flat-square)](http://web.npm.alibaba-inc.com/package/@ali/tingle-dialog)
提示窗体: alert, confirm

<img src="https://img.alicdn.com/tps/TB1fFPeJFXXXXa2XVXXXXXXXXXX-640-1136.png" width="300"/>

## Install

```
tnpm install @ali/tingle-dialog --save
```

## Simple Usage

支持 `函数调用` 和 `React show prop`

### 函数调用

```javascript
Dialog.alert({
    title: '测试',
    content: '我是测试内容我是测试内容我是测试内容我是测试内容我是测试内容我是测试内容我是测试内',
    onConfirm() {
        console.log('multi lines confirm');
    }
});

Dialog.confirm({
    title: '测试',
    content: '我是测试内容我是测试内容我是测试内容我是测试内容我是测试内容我是测试内容我是测试内',
    onConfirm() {
        console.log('confirm confirm');
    },
    onCancel() {
        console.log('confirm cancel');
    }
});

Dialog.hide();
```

### 直接使用

```javascript

render() {
    return (
        <div>
            <Dialog title="Absolute Alert" onConfirm={() => {this.setState({showAlert: false})}}>
                我是直接通过父 state 控制的模态窗口 alert, 我没有 onCancel 回调
            </Dialog>

            <Dialog title="Absolute Confirm"
                type="confirm"
                show={ false }
                onConfirm={() => {this.setState({showConfirm: false})}}
                onCancel={() => {this.setState({showConfirm: false})}}>
                我是直接通过父 state 控制的模态窗口 confirm, 我的 type 是 confirm
            </Dialog>
        </div>
    )
}

```

## Props

### className

- 描述：自定义样式的`class`名称。  
- 类型：`String`  
- 默认：`''`  
- 必选：否

示例：

```javascript
<Dialog className="customClass">内容内容</Dialog>
```

### title

- 描述：提示窗显示的标题
- 类型：`String`  
- 默认：`''`
- 必选：否

示例：

```javascript
<Dialog title="我是标题">内容内容</Dialog>
```

### onConfirm

- 描述：点击确认按钮回调函数
- 类型：`function`
- 默认：`null`
- 必选：否

示例：

```javascript
<Dialog title="我是标题" type="confirm" onConfirm={() => {alert('点击了confirm')}}>
    我是confirm弹出层
</Dialog>
```

### onCancel

- 描述：点击取消按钮回调函数
- 类型：`function`
- 默认：`null`
- 必选：否

示例：

```javascript
<Dialog title="我是标题" type="confirm" onConfirm={() => {alert('点击了confirm')}}>
    我是confirm弹出层
</Dialog>
```

### type

- 描述：提示窗的类型
- 类型：`'alert'`，`'confirm'`之一
- 默认：`'alert'`
- 必选：否

示例：

```javascript
<Dialog title="我是标题" type="confirm">我是confirm弹出层</Dialog>
```

### show

- 描述：是否展现
- 类型：`boolean` 之一
- 默认：`true`
- 必选：否

示例：

```javascript
<Dialog show={false} title="我是标题" type="confirm">我是confirm弹出层</Dialog>
```

### locale

- 描述：国际化(包括 zh_CN, en_US)
- 类型：`string`
- 默认：`zh_CN`
- 必选：否

## APIs

### Dialog.alert(option)

- 描述：显示 alert 类型的提示
- 参数说明
    - option.title：对应 props.title
    - option.content：对应 props.children
    - option.onConfirm：对应 props.onConfirm

```javascript
Dialog.alert({
    title: '测试',
    content: '我是测试内容我是测试内容我是测试内容我是测试内容我是测试内容我是测试内容我是测试内',
    onConfirm() {
        console.log('multi lines confirm');
    }
});
```

### Dialog.confirm(option)

- 描述：显示 confirm 类型的提示
- 参数说明
    - option.title：对应 props.title
    - option.content：对应 props.children
    - option.onConfirm：对应 props.onConfirm
    - option.onCancel：对应 props.onCancel

```javascript
Dialog.confirm({
    title: '测试',
    content: '我是测试内容我是测试内容我是测试内容我是测试内容我是测试内容我是测试内容我是测试内',
    onConfirm() {
        console.log('confirm confirm');
    },
    onCancel() {
        console.log('confirm cancel');
    }
});
```

### Dialog.hide()

- 描述：在使用函数式调用之后，在切换页面的场景下，往往需要手动来关闭 Dialog.

```javascript
Dialog.hide()
```

## Links

- [Issues](http://gitlab.alibaba-inc.com/tingle-ui/tingle-dialog/issues)
