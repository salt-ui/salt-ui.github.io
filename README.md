# salt-ui.github.io
---
Official Site of SaltUI

## 更新

```sh
tnpm install
```

> 请使用 tnpm@^3

## 开发

```sh
tnpm start
```

## 部署

```sh
tnpm run deploy
```

## 添加demo

1. 在 `demos` 文件夹中添加与 `components` 里同名的组件名文件夹
2. 在组件文件夹中添加一个 *.md* 文件
3. demo.md 需要添加 *order* 与 *title* 字段，分别表示这个demo的顺序与名字
4. 添加jsx代码与css代码(可选), 具体请参考`./demos/tingle-button/basic.md`

## 更新目录

修改 `site/constants.js`
