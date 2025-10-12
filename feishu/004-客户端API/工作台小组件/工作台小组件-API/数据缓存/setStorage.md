---
title: "setStorage"
source_url: https://open.feishu.cn/document/client-docs/block/api/data-cache/setstorage
---
最后更新于 2022-11-03

# setStorage

设置本地缓存数据。

## 输入

param 继承自[标准对象输入](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/api/standard-object-input)，扩展属性描述：

| **名称** | **数据类型** | **是否必填**   | **默认值** | **描述**  |
| ------ | ------ | --------- | ------ | ------- | ---------- |
| key    | string | 是        | -      | 键名      | PC 端 1.0.4 |
| data   | any    |否  | undefined      | 键名对应的数据 | PC 端 1.0.4 |

## 输出

各 callback 的参数均无额外扩展属性。

## 示例代码

### 调用示例
```json
{
  "sourceData":{
          "tab": "api",
          "item": "setStorage"
  },
    "openDetail": 1, 
    "title": "setStorage", 
    "list_page_url": "https://applink.feishu.cn/client/block/workplace/open?appId=cli_a00834ec56f8d01b%26blockTypeId=blk_610a40455f800004c32b6bb6%26sourceData=%7B%22tab%22%3A%22api%22%2C%22item%22%3A%22login%22%7D", 
    "min_lk_ver": {
        "pc": "5.10.0", 
        "mobile": "5.11.0"
    },
    "blockEntity": {
        "sourceData": {
            "type": "api",
            "item": "setStorage",
            "isNew": true
        },
                  "blockID": "mock-block"
    }
}
```

```js
tt.setStorage({
  key: '测试',
  data: '测试数据',
  success (res) {
    console.log('setStorage 调用成功', res.errMsg);
  },
  fail (res) {
    console.log('setStorage 调用失败', res.errMsg);
  },
  complete (res) {
    console.log('setStorage 调用结束', res.errMsg);
  }
});
```

### 返回示例

```json
{
  "errMsg": "setStorage:ok"
}
```
