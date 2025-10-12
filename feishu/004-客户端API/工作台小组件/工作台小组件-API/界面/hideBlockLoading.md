---
title: "hideBlockLoading"
source_url: https://open.feishu.cn/document/client-docs/block/api/interface/hideblockloading
last_remote_update: 2022-07-15
last_remote_update_timestamp: 1657872181000
---
最后更新于 2022-07-15

# hideBlockLoading
隐藏小组件原生的 Loading 动画。

## 输入
param 继承自[标准对象输入](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/api/standard-object-input)，无额外扩展属性。

## 输出
各 callback 返回对象参数均无额外扩展属性。

## 示例代码
### 调用示例
```json
{
  "sourceData":{
          "tab": "api",
          "item": "hideBlockLoading"
  },
    "openDetail": 1, 
    "title": "hideBlockLoading", 
    "list_page_url": "https://applink.feishu.cn/client/block/workplace/open?appId=cli_a00834ec56f8d01b%26blockTypeId=blk_610a40455f800004c32b6bb6%26sourceData=%7B%22tab%22%3A%22api%22%2C%22item%22%3A%22login%22%7D", 
    "min_lk_ver": {
        "pc": "5.10.0", 
        "mobile": "5.11.0"
    },
    "blockEntity": {
        "sourceData": {
            "type": "api",
            "item": "hideBlockLoading",
            "isNew": true
        },
                  "blockID": "mock-block"
    }
}
```

```js
tt.hideBlockLoading({
  success (res) {
    console.log('hideBlockLoading 调用成功', res.errMsg);
  },
  fail (res) {
    console.log('hideBlockLoading 调用失败', res.errMsg);
  },
  complete (res) {
    console.log('hideBlockLoading 调用结束', res.errMsg);
  }
});
```

### 返回示例

```json
{
  "errMsg": "hideBlockLoading:ok"
}
```
