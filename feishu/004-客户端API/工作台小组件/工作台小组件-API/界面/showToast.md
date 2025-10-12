---
title: "showToast"
source_url: https://open.feishu.cn/document/client-docs/block/api/interface/showtoast
last_remote_update: 2022-07-15
last_remote_update_timestamp: 1657872165000
---
最后更新于 2022-07-15

# showToast

显示全局提示框。

## 输入

param 继承自[标准对象输入](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/api/standard-object-input)，扩展属性描述：

| **名称**   | **数据类型**                                      | **是否必填**   | **默认值** | **描述**        |
| -------- | ------------------------------------------- | --------- | ------ | ------------- | ---------- |
| title    | string                                      |     是   | -      | 文本内容          | PC 端 1.0.0 |
| icon     | **移动端 :**<br> 'success' \| 'loading' \| 'none'<br>  **PC端：**<br> 'success' \|'loading' \| 'info' \| 'error' \| 'warning' | 否 | 'success'      | 图标            | PC 端 1.0.0 |
| duration | number                                      | 否      | 1500      | 提示框停留时间，单位为 ms | PC 端 1.0.0 |
| mask | boolean                                      | 否      | false      | 是否显示透明蒙层，防止触摸穿透（仅Android/iOS端支持） | PC 端 1.0.0 |
## 输出

各 callback 参数均无额外属性。

## 示例代码

### 调用示例
```json
{
  "sourceData":{
          "tab": "api",
          "item": "showToast"
  },
    "openDetail": 1, 
    "title": "showToast", 
    "list_page_url": "https://applink.feishu.cn/client/block/workplace/open?appId=cli_a00834ec56f8d01b%26blockTypeId=blk_610a40455f800004c32b6bb6%26sourceData=%7B%22tab%22%3A%22api%22%2C%22item%22%3A%22login%22%7D", 
    "min_lk_ver": {
        "pc": "5.10.0", 
        "mobile": "5.11.0"
    },
    "blockEntity": {
        "sourceData": {
            "type": "api",
            "item": "showToast",
            "isNew": true
        },
                  "blockID": "mock-block"
    }
}
```

```js
tt.showToast({
  title: '一颗苹果',
  icon: 'success',
  duration: 1500,
  success (res) {
    console.log('showToast 调用成功', res.errMsg);
  },
  fail (res) {
    console.log('showToast 调用失败', res.errMsg);
  },
  complete (res) {
    console.log('showToast 调用结束', res.errMsg);
  }
});
```

### 返回示例

```json
{
  "errMsg": "showToast:ok"
}
```
