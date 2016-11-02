URL2io node.js SDK
======

> Author : Wang Jie <i@i8e.net>

### 官方文档

<http://www.url2io.com/docs>

### 使用说明

#### npm安装
    npm install url2io

#### 使用

```js
var url2io = require('url2io');

var t = new url2io(token);
t.article(url, fields, callback);
// 回调函数的唯一一个参数为api返回的json构成的对象
```
