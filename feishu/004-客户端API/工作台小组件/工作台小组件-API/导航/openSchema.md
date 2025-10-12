---
title: "openSchema"
source_url: https://open.feishu.cn/document/client-docs/block/api/navigator/openschema
last_remote_update: 2022-07-15
last_remote_update_timestamp: 1657872272000
---
最后更新于 2022-07-15

# openSchema

在新窗口打开网页、文档、小程序等。
需要先[配置白名单](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/guide/open-ability/openschema)。如果出现无法跳转的现象，请先检查 schema 是否在白名单里。

## 输入

param 继承自[标准对象输入](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/api/standard-object-input)，扩展属性描述：

| **名称** | **数据类型** | **是否必填** | **默认值** | **描述**                                                                                                        |
| ------ | ------ | ------- | ------ | ------------------------------------------------------------------------------------------------------------- | ---------- |
| schema | string | 是      | -      | 指定应用的 schema，schema 需要满足 URI 协议，可以使用 [AppLink 协议](https://open.feishu.cn/document/uYjL24iN/ucjN1UjL3YTN14yN2UTN)|
| external | boolean | 否      | true      | 是否在外部浏览器打开页面，如果为false，则页面将会在飞书独立窗口内打开，**仅PC支持**|
## 输出

各 callback 返回对象参数均无额外扩展属性。

## 示例代码

### 调用示例
```json
{
  "sourceData":{
          "tab": "api",
          "item": "openSchema"
  },
    "openDetail": 1, 
    "title": "openSchema", 
    "list_page_url": "https://applink.feishu.cn/client/block/workplace/open?appId=cli_a00834ec56f8d01b%26blockTypeId=blk_610a40455f800004c32b6bb6%26sourceData=%7B%22tab%22%3A%22api%22%2C%22item%22%3A%22login%22%7D", 
    "min_lk_ver": {
        "pc": "5.10.0", 
        "mobile": "5.11.0"
    },
    "blockEntity": {
        "sourceData": {
            "type": "api",
            "item": "openSchema",
            "isNew": true
        },
                  "blockID": "mock-block"
    }
}
```

```js
tt.openSchema({
  schema: 'https://feishu.cn/',
  success (res) {
    console.log('openSchema 调用成功', res.errMsg);
  },
  fail (res) {
    console.log('openSchema 调用失败', res.errMsg);
  },
  complete (res) {
    console.log('openSchema 调用结束', res.errMsg);
  }
});
```

### 返回示例

```json
{
  "errMsg": "openSchema:ok"
}
```
