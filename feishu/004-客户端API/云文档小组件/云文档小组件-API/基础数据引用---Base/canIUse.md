---
title: "canIUse"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/basic-data-reference---base/caniuse
last_remote_update: 2025-07-31
last_remote_update_timestamp: 1753959942000
---
最后更新于 2025-07-31

# canIUse
检测异步 API 是否可用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
无需权限 | &nbsp;所有视图  
[关于视图请参见概念说明](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/02-cloud-doc-block-noun-explanation) | - PC  
- 移动端 | 演示模式

## 输入

| **名称** | **数据类型**  | **是否必填** | **描述**         |
| ------ | --------- | -------- | -------------- |
| scopes | string[] | 是        | 异步 API 的scopes |

## 输出

异步返回查询API是否可用

## 示例代码

### 调用示例

```js
DocMiniApp.canIUse(['Selection', 'setSelection']).then((res) => {
    console.log('debug', res);
})
```

### 返回示例

```json
{
    "canIUse": true,
    "message": ""
}
```
