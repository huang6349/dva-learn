# 编译后的文件名带hash，防止浏览器缓存

## 使用 `ejs` 模版语言

编辑 `.webpackrc`，使 `html-webpack-plugin` 插件生效

```diff
{
+  "html": {
+    "template": "./src/index.ejs"
+  }
}
```

新建 `./src/index.ejs`

```html
<!DOCTYPE html>
<html lang="zh-CN">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <title>DVA</title>
</head>

<body>
  <div id="root"></div>
</body>

</html>
```

## 配置 `hash` ，使编译后的文件名带 `hash`

编辑 `.webpackrc`

```diff
{
+  "hash": true
}
```
