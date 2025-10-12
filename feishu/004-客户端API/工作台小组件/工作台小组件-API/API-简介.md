---
title: "API 简介"
source_url: https://open.feishu.cn/document/client-docs/block/api/api-introduction
---
最后更新于 2022-07-15

# API 简介

## API 是什么

API 是在 block 场景下暴露出来的特定功能的集合，包括获取用户信息、获取本地存储等功能，我们将这些功能统一封装成 API 供用户调用。后面的章节详细介绍了各 API 的功能及其使用方法。

## 如何使用 API

在[逻辑层](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/logic-layer/logic-layer)代码创建 block 实例时（即执行 onLoad 生命周期时）注入了 tt 对象，tt 对象上有各个 API。您可以在这之后在逻辑层代码中调用 API （即 `tt.xxx` 的形式）以获取您想要的能力。
为了更清晰地查阅特定 API 的使用，请先阅读[标准对象输入](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/api/standard-object-input)章节。

## 代码示例
如下是正确调用示例：

```js
Block({
  onLoad() {
    tt.API({
      success (res) {
        console.log('API 调用成功');
      },
      fail (res) {
        console.log('API 调用失败');
      },
      complete (res) {
        console.log('API 调用结束');
      }
    });
  }
});
```
如下是错误调用示例，因为，此时 Block 实例还未创建，故不存在 tt 对象，不能在这里调用。
```javascript
tt.API({});
```
