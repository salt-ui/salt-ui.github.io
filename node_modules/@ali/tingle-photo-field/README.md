# tingle-photo-field [![tnpm version](http://web.npm.alibaba-inc.com/badge/v/@ali/tingle-photo-field.svg?style=flat-square)](http://web.npm.alibaba-inc.com/package/@ali/tingle-photo-field)

上传/查看图片的组件。

> 此组件是对 Native API 的封装， 只能在钉钉容器内运行，且运行 demo 时需要在钉钉的白名单域名下。

![image](http://aligitlab.oss-cn-hangzhou-zmf.aliyuncs.com/uploads/tingle-ui/tingle-photo-field/ea60ff01b88b9895d4aa1bf97e0b35be/image.png)

## Install

```
tnpm install @ali/tingle-photo-field --save
```

## Simple Usage

```js
class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            photoList: [
              {
                url: 'http://aligitlab.oss-cn-hangzhou-zmf.aliyuncs.com/uploads/user/avatar/16261/gitlab.gif',
                name: '111'
              },
              {
                url: 'http://aligitlab.oss-cn-hangzhou-zmf.aliyuncs.com/uploads/tingle-ui/tingle-photo-field/eed863a778315746f6f0bf736a3200fc/image.png',
                name: '222'
              },
              {
                url: 'http://gtms02.alicdn.com/tps/i2/TB1Xe3SMpXXXXX6XpXXTCU0QpXX-300-300.jpg',
                name: '222'
              }
            ]
        }
    }

    onDelete(index) {
        let photoList = this.state.photoList.filter((item, i) => {return index != i}) || [];

        this.setState({
            photoList
        })
    }
    onChange(fieldData) {
        const value = [];

        if (fieldData.value && fieldData.value.length) {
          fieldData.value.forEach((url, i) => {
            value.push({
              url,
              name: i,
            });
          });
        }

        this.setState({
            photoList: [].concat(this.state.photoList, value)
        });
    }

    render() {
        return (
            <Group>
                <Group.List>
                    <PhotoField
                        label="图片"
                        photoList={this.state.photoList}
                        corpId={"dingd8e1123006514592"}
                        onChange={this.onChange.bind(this)}
                        onDelete={this.onDelete.bind(this)}
                        />
                </Group.List>
            </Group>
        );
    }
};
```

## Props

### className

描述：自定义样式的`class`名称。  

类型：`String`  

默认：`''`  

必选：否

示例：

```
<PhotoField className="customClass"/>
```

### columns

描述：显示的图片分几列。

类型：`number`  

默认：`3`  

必选：否

示例：

```
<PhotoField columns={3}/>
```

### className

描述：自定义样式的`class`名称。  

类型：`String`  

默认：`''`  

必选：否

示例：

```
<PhotoField className="customClass"/>
```

### multiple

描述：是否同时上传多张照片。  

类型：`Boolean`  

默认：`true`  

必选：否

示例：

```
<PhotoField multiple="true"/>
```

### layout

描述：label 布局,支持上下结构`v`和左右结构`h`。

类型：`String`  

默认：`h`  

必选：否

示例：

```
<PhotoField layout="h"/>
```

### label

描述：显示在fild左侧的名字。  

类型：`String`  

默认：`''`  

必选：否

示例：

```
<PhotoField label="图片"/>
```

### max

描述：钉钉组件一次性最多选择上传的图片数量

类型：`number`  

默认：`9`  

必选：否

示例：

```
<PhotoField max={9}/>
```

### readOnly

描述：是否只读，只读时不能输入，默认false。

类型：`Boolean`  

默认：`false`  

必选：否

示例：

```
<PhotoField readOnly={false}/>
```

### photoList

描述：显示的图片列表。  

类型：`Array`  

默认：`[]`  

必选：否

示例：

```
<PhotoField photoList={this.state.photoList}/>
```

### fill

描述：右侧相机icon的颜色。  

类型：`String`  

默认：`#ccc`  

必选：否

示例：

```
<PhotoField fill="#ccc"/>
```

### placeholder

描述：默认文字  

类型：`String`  

默认：``  

必选：否

示例：

```
<PhotoField placeholder=""/>
```

### corpId

描述：钉钉公司corpId。

类型：`String`  

默认：`''`  

必选：是

示例：

```
<PhotoField corpId="abcdsdsdsdsdsd"/>
```

### onChange(values)

描述：上传图片回调，values是一个数组，里面为上传的多张图片url

类型：`Function`  

默认：`noop`  

必选：否

### onDelete(index)

描述：删除图片回调，index是序号

类型：`Function`  

默认：`noop`  

必选：否

## APIs

## Links

- [Issues](http://gitlab.alibaba-inc.com/tingle-ui/tingle-photo-field/issues)
- [README 标准写法](http://gitlab.alibaba-inc.com/tingle-ui/doc/blob/master/README%E6%A0%87%E5%87%86%E5%86%99%E6%B3%95.md)
