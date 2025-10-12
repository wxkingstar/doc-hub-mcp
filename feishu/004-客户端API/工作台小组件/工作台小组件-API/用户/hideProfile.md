---
title: "hideProfile"
source_url: https://open.feishu.cn/document/client-docs/block/api/user/hideprofile
---
最后更新于 2022-07-15

# hideProfile

关闭用户信息卡片。
该 API 仅云文档 PC 环境支持。

## 输入

param 继承自[标准对象输入](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/api/standard-object-input)。

## 输出

各 callback 返回对象参数均无额外扩展属性。

## 示例代码

### 调用示例

```js
tt.hideProfile({
  success (res) {
    console.log('hideProfile 调用成功', res.errMsg);
  },
  fail (res) {
    console.log('hideProfile 调用失败', res.errMsg);
  },
  complete (res) {
    console.log('hideProfile 调用结束', res.errMsg);
  } 
});
```

### 返回示例

```json
{
  "errMsg": "hideProfile:ok"
}
```
