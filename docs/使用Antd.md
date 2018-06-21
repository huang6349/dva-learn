# 使用Antd

## 安装 `antd` 和 `babel-plugin-import`。`babel-plugin-import` 是用来按需加载 `antd` 的脚本和样式的

```bash
$ npm install antd --save
$ npm install babel-plugin-import --save-dev
```

编辑 `.webpackrc`，使 `babel-plugin-import` 插件生效

```diff
{
+  "extraBabelPlugins": [
+    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
+  ]
}
```
