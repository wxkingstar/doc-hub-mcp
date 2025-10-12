---
title: "bridge.getEnv"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/bridge/bridge_getenv
---
最后更新于 2023-09-15

# bridge.getEnv
获取当前文档环境信息（如品牌信息）。

## 输出
Promise 对象，指明当前品牌信息
```js
{
    product: 'lark' | 'feishu';
}
```
## 示例代码
### 调用示例

```js
const res = await bitable.bridge.getEnv();
```

### 返回示例
res:
```js
{
    product: 'lark';
}
```
