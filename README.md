# html_plus

vue for html_plus(vue + vue-router + smacss + es6 + webpack)

使用软链接引入外部依赖 ln –s 源文件 目标文件

```
ln -s ~/github/pandoraui/smacss-extend/src/styles/ scss
```

## 规划

将组件以作为 HTML 标签扩展为方向实现才是正途，以下称之为扩展标签。

扩展标签名称全部使用小写，并添加 plus_ 前缀？？ 待定，全使用小写

[注意]：何为扩展（作为一个 HTML 的扩展标签），一个 list-block 不能称之为扩展标签，只能称之为参考布局，其实现由很多标签组合而成。而扩展标签则是精简的，可能包含多个标签，但功能及实现不可替换，且没有太多的结构变化。

扩展标签，具有属性、方法，以及内容、主题等，可用于调整控制不同的展现形式。如弹层标签，一个标签可以实现弹层，遮罩层，关闭按钮等等（组合 box-shadow以及伪标签来实现）

为了避免混淆，扩展标签以 PLUS 前缀命名，而参考布局使用 Layout 命名

## 开发

```
git clone https://github.com/webcoding/html_plus.git
cd html_plus
npm install
npm run dev
```
运行`npm run dev`命令，会监听目录下所有文件的变更，并且默认会在`8080`端口启动服务器，然后在浏览器打开 `http://localhost:8080`。

## 参考项目

实现以及 UI 样式，参考并使用了以下项目，Framework7、SUI、Bootstrap、AmazeUI、WeUI、vue-hackernews、vux ...
