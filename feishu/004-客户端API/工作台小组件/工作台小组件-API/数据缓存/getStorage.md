---
title: "getStorage"
source_url: https://open.feishu.cn/document/client-docs/block/api/data-cache/getstorage
last_remote_update: 2022-11-03
last_remote_update_timestamp: 1667490461000
---
最后更新于 2022-11-03

# getStorage

获取本地缓存数据。

## 输入

param 继承自[标准对象输入](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/api/standard-object-input)，扩展属性描述：

| **名称** | **数据类型** | **是否必填** | **默认值** | **描述** |
| ------ | ------ | ------- | ------ | ------ | ---------- |
| key    | string | 是      | -      | 键名     | PC 端 1.0.4 |

## 输出

success 函数返回对象参数扩展属性：

| **名称** | **数据类型** | **描述**                      |
| ------ | ------ | --------------------------- | ---------- |
| data   | any    | 键名对应的数据，如无数据或数据类型不支持会返回空字符串 | PC 端 1.0.4 |

## 示例代码

### 请求示例
```json
{
  "sourceData":{
          "tab": "api",
          "item": "getStorage"
  },
    "openDetail": 1, 
    "title": "getStorage", 
    "list_page_url": "https://applink.feishu.cn/client/block/workplace/open?appId=cli_a00834ec56f8d01b%26blockTypeId=blk_610a40455f800004c32b6bb6%26sourceData=%7B%22tab%22%3A%22api%22%2C%22item%22%3A%22login%22%7D", 
    "min_lk_ver": {
        "pc": "5.10.0", 
        "mobile": "5.11.0"
    },
    "blockEntity": {
        "sourceData": {
            "type": "api",
            "item": "getStorage",
            "isNew": true
        },
                  "blockID": "mock-block"
    }
}
```

```js
tt.getStorage({
  key: '测试',
  success (res) {
    console.log('getStorage 调用成功', res.data);
  },
  fail (res) {
    console.log('getStorage 调用失败', res.errMsg);
  },
  complete (res) {
    console.log('getStorage 调用结束', res.errMsg);
  }
});
```

### 返回示例

```json
{
  "errMsg": "getStorage:ok",
  "data": "第二人生"
}
```
