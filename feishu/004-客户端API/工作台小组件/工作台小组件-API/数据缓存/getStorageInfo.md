---
title: "getStorageInfo"
source_url: https://open.feishu.cn/document/client-docs/block/api/data-cache/getstorageinfo
last_remote_update: 2022-07-15
last_remote_update_timestamp: 1657872257000
---
最后更新于 2022-07-15

# getStorageInfo

获取本地缓存数据的相关信息。

## 输入

param 继承自[标准对象输入](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/api/standard-object-input)，无额外扩展属性。

## 输出

success 函数返回对象参数扩展属性：

| **名称**      | **数据类型**    | **描述**                                                                              |
| ----------- | --------- | ----------------------------------------------------------------------------------- | ---------- |
| keys        | string[] | 本地数据缓存中的所有键名列表，如果没有本地数据则返回空数组键名对应的数据，如无数据或数据类型不支持会返回空字符串键名对应的数据，如无数据或数据类型不支持会返回空字符串 | PC 端 1.0.4 |
| currentSize | number    | 占用空间大小，以 KB 为单位                                                                     | PC 端 1.0.4 |
| limitSize   | number    | 存储空间上限，以 KB 为单位                                                                     | PC 端 1.0.4 |

## 示例代码

### 调用示例
```json
{
  "sourceData":{
          "tab": "api",
          "item": "getStorageInfo"
  },
    "openDetail": 1, 
    "title": "getStorageInfo", 
    "list_page_url": "https://applink.feishu.cn/client/block/workplace/open?appId=cli_a00834ec56f8d01b%26blockTypeId=blk_610a40455f800004c32b6bb6%26sourceData=%7B%22tab%22%3A%22api%22%2C%22item%22%3A%22login%22%7D", 
    "min_lk_ver": {
        "pc": "5.10.0", 
        "mobile": "5.11.0"
    },
    "blockEntity": {
        "sourceData": {
            "type": "api",
            "item": "getStorageInfo",
            "isNew": true
        },
                  "blockID": "mock-block"
    }
}
```

```js
tt.getStorageInfo({
  success (res) {
    console.log('getStorageInfo 调用成功', res);
  },
  fail (res) {
    console.log('getStorageInfo 调用失败', res.errMsg);
  },
  complete (res) {
    console.log('getStorageInfo 调用结束', res.errMsg);
  }
});
```

### 返回示例

```json
{
  "keys": [
    "五月天"
  ],
  "currentSize": 1,
  "limitSize": 10240,
  "errMsg": "getStorageInfo:ok"
}
```
