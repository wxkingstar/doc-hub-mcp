---
title: "clearStorage"
source_url: https://open.feishu.cn/document/client-docs/block/api/data-cache/clearstorage
---
最后更新于 2022-11-03

# clearStorage

清理**全部**本地缓存数据。

## 输入

param 继承自[标准对象输入](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/api/standard-object-input)，无额外扩展属性。

## 输出

各 callback 的参数均无额外属性。

## 示例代码

### 调用示例
```json
{
  "sourceData":{
          "tab": "api",
          "item": "clearStorage"
  },
    "openDetail": 1, 
    "title": "clearStorage", 
    "list_page_url": "https://applink.feishu.cn/client/block/workplace/open?appId=cli_a00834ec56f8d01b%26blockTypeId=blk_610a40455f800004c32b6bb6%26sourceData=%7B%22tab%22%3A%22api%22%2C%22item%22%3A%22login%22%7D", 
    "min_lk_ver": {
        "pc": "5.10.0", 
        "mobile": "5.11.0"
    },
    "blockEntity": {
        "sourceData": {
            "type": "api",
            "item": "clearStorage",
            "isNew": true
        },
                  "blockID": "mock-block"
    }
}
```

```js
tt.clearStorage({
  success (res) {
    console.log('clearStorage 调用成功', res.errMsg);
  },
  fail (res) {
    console.log('clearStorage 调用失败', res.errMsg);
  },
  complete (res) {
    console.log('clearStorage 调用结束', res.errMsg);
  }
});
```

### 返回示例

```json
{
  "errMsg": "clearStorage:ok"
}
```
