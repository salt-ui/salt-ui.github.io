# tingle-search-bar

## 搜索条

<img src="//gw.alicdn.com/tps/TB1LDd6LXXXXXbkXXXXXXXXXXXX-684-92.png" width="342">

<img src="//gw.alicdn.com/tps/TB1TCV9LXXXXXXgXXXXXXXXXXXX-684-352.png" width="342">


## Simple Usage

```html
<SearchBar
  onSearch={(value)=> {
    console.info(`Do search>>${value}`);
  }}
/>
    
```

## Props

### className

描述：自定义样式的`class`名称

类型：`String`

默认：`''`

必选：否

示例：

```
<SearchBar className="customClass"/>
```

### placeholder

描述：占位提示

类型：`string`  或 i18n `object` 

默认：`'{'zh_CN': '搜索', 'en_US': 'Search'}`

示例：

```
<SearchBar placeholder='搜索标题'/>
```

### hasHistory

描述：是否开启搜索历史功能，搜索历史保存于localstorage中，key名使用属性historyName

类型：`boolean`

默认：`true`

示例：

```
<SearchBar hasHistory={false}/>
```

### locale

描述：语言，zh_CN或en_US

类型：`string`

默认：`zh_CN`

示例：

```
<SearchBar locale="en_US"}/>
```

### historyName

描述：历史记录存储键名

类型：`string`

默认：`'SEARCH_BAR_HISTORY'`

示例：

```
<SearchBar historyName='USER_LIST_SEARCH_HISTORY'/>
```

### instantSearch

描述：是否开启即时搜索，即输入过程中触发搜索，和属性searchDelay配合使用

类型：`boolean`

默认：`true`

示例：

```
<SearchBar instantSearch={false}/>
```

### searchDelay

描述：触发频率限制，输入过程中多少毫秒后未输入才触发搜索

类型：`number`

默认：`350`

示例：

```
<SearchBar searchDelay={450}/>
```

### onSearch

描述：搜索触发 callback

类型：`funtion`

示例：

```
<SearchBar onSearch={(value)=>{}}/>
```

### onChange

描述：输入内容变化 callback (from为变化来源 输入'input'和清空'clear')

类型：`funtion`

示例：

```
<SearchBar onChange={(value, from, e)=>{}}/>
```

### onEnter

描述：进入搜索模式 callback

类型：`funtion`

示例：

```
<SearchBar onEnter={()=>{}}/>
```

### onExit

描述：退出搜索模式 callback

类型：`funtion`

示例：

```
<SearchBar onExit={()=>{}}/>
```


## Links

- [Issues](https://github.com/salt-ui/saltui/issues/new)
