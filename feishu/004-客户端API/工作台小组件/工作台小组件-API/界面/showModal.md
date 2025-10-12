---
title: "showModal"
source_url: https://open.feishu.cn/document/client-docs/block/api/interface/showmodal
last_remote_update: 2022-07-15
last_remote_update_timestamp: 1657872150000
---
最后更新于 2022-07-15

# showModal

显示模态弹窗。

## 输入

param 继承自[标准对象输入](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/api/standard-object-input)，扩展属性描述：

| **名称** | **数据类型** | **是否必填** | **默认值** | **描述** |
| -------- | ------------------------------------------- | --------- | ------ | ------------- | ---------- |
| title | string |否 | '' | 文本内容 | PC 端 1.0.0 |
| content |string|否|''|内容|
| confirmText | string |  否 | 'ok' | 「确定」按钮的文案，最多 8 个字符，一个中文按照 2 个字符计算 | PC 端 1.0.0 |
|showCancel|boolean|否|true|是否显示「取消」按钮|
|cancelText|string|否|'cancel'|「取消」按钮的文案，最多 8 个字符，一个中文按照 2 个字符计算|
`title` 和 `content` 字段不可以同时为空。

## 输出

success 函数返回对象参数扩展属性：

| **名称** | **数据类型** | **描述**                 |
| ------ | ------ | ---------------------- | ---------- |
| confirm   | boolean | 是否点击了「确定」按钮 | PC 端 1.0.0 |
| cancel   | boolean | 是否点击了「取消」按钮 | PC 端 1.0.0 |

## 示例代码

### 调用示例
```json
{
  "sourceData":{
          "tab": "api",
          "item": "showModal"
  },
    "openDetail": 1, 
    "title": "showModal", 
    "list_page_url": "https://applink.feishu.cn/client/block/workplace/open?appId=cli_a00834ec56f8d01b%26blockTypeId=blk_610a40455f800004c32b6bb6%26sourceData=%7B%22tab%22%3A%22api%22%2C%22item%22%3A%22login%22%7D", 
    "min_lk_ver": {
        "pc": "5.10.0", 
        "mobile": "5.11.0"
    },
    "blockEntity": {
        "sourceData": {
            "type": "api",
            "item": "showModal",
            "isNew": true
        },
                  "blockID": "mock-block"
    }
}
```

```js
tt.showModal({
  title: '弹框标题',
  content: '弹框内容',
  confirmText: '确定',
  cancelText: '取消',
  success(res) {
    console.log('showModal 调用成功', res);
  },
  fail(res) {
    console.log('showModal 调用失败', res.errMsg);
  },
  complete(res) {
    console.log('showModal 调用结束', res.errMsg);
  }  
});
```
### 返回示例

```json
{
  "errMsg": "showModal:ok",
  "cancel": false
  "confirm": true
}
```

## 已知问题
- `title`的长度限制：
	- Android 端限制为**1**行，每行约 13 个汉字。
	- iOS 端限制为**3**行，每行约 17 个汉字。
- `content`的长度限制：
	- Android 端没有限制，Modal 最高为屏幕高度，内容滚动。
	- iOS 端限制为**3**行，每行约 17 个汉字。
