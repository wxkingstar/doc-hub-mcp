---
title: "login"
source_url: https://open.feishu.cn/document/client-docs/block/api/user/login
last_remote_update: 2022-07-15
last_remote_update_timestamp: 1657872029000
---
最后更新于 2022-07-15

# login

获取临时登录凭证。

## 输入

param 继承自[标准对象输入](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/api/standard-object-input)，无额外扩展属性。

## 输出

success 函数返回对象参数扩展属性：

名称 | 数据类型 | 描述
--- | --- | ---
code | string | 临时登录凭证，有效期 3 分钟，只能使用一次

## 示例代码

### 调用示例
```json
{
  "sourceData":{
  	"tab": "api",
  	"item": "login"
  },
    "openDetail": 1, 
    "title": "login", 
    "list_page_url": "https://applink.feishu.cn/client/block/workplace/open?appId=cli_a00834ec56f8d01b%26blockTypeId=blk_610a40455f800004c32b6bb6%26sourceData=%7B%22tab%22%3A%22api%22%2C%22item%22%3A%22login%22%7D", 
    "min_lk_ver": {
        "pc": "5.10.0", 
        "mobile": "5.11.0"
    },
    "blockEntity": {
        "sourceData": {
            "type": "api",
            "item": "login",
            "isNew": true
        },
  		"blockID": "mock-block"
    }
}
```

```js
tt.login({
  success (res) {
    console.log('login 调用成功', res.code);
  },
  fail (res) {
    console.log('login 调用失败', res.errMsg);
  },
  complete (res) {
    console.log('login 调用结束', res.errMsg);
  } 
});
```

### 返回示例

```json
{
  "errMsg": "login:ok",
  "code": "46c725e3d6fa545b"
}
```
