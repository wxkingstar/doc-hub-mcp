---
title: "Env.DocsMode.getDocsMode"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/env/DocsMode/Env.DocsMode.getDocsMode
last_remote_update: 2025-07-31
last_remote_update_timestamp: 1753960448000
---
最后更新于 2025-07-31

# Env.DocsMode.getDocsMode
获取当前的文档模式，该方法为异步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | 所有视图 | - PC  
- 移动端 | 演示模式

## 输入

无需传入参数。

## 输出

文档阅读/编辑模式
| **key** | **value** | **描述**                |
| ------- | --------- | --------------------- |
| EDITING | EDITING   | 编辑态                   |
| NONE    | NONE      | 无配置                   |
| READING | READING   | 阅读态                   |
| UNKNOWN | UNKNOWN   | 未知：模板注入失败 或 未刷新切换新的文档 |

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
const mode = await DocMiniApp.Env.DocsMode.getDocsMode();
console.log('debug', mode);
```

### 返回示例

```
'EDITING'
```
