URL2io node.js SDK
======

> Author : Wang Jie <i@i8e.net>

### 官方文档

<http://www.url2io.com/docs>

### 使用说明

#### npm安装
    npm install cnwangjie/url2io

#### 使用

```js
var url2io = require('url2io');
url2io(token, url, callback, fields);
// 回调函数只有一个参数即服务器返回的json所构成的对象

var t = new url2io(token);
t.handle(url, callback, fields);
// 实例化后可以使用该对象的handle方法进行处理
```
