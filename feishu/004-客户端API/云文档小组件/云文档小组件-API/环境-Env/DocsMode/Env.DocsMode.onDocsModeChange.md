---
title: "Env.DocsMode.onDocsModeChange"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/env/DocsMode/Env.DocsMode.onDocsModeChange
last_remote_update: 2025-07-31
last_remote_update_timestamp: 1753960448000
---
最后更新于 2025-07-31

# Env.DocsMode.onDocsModeChange
监听文档模式变化，该方法为异步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | 所有视图 | - PC  
- 移动端 | 演示模式

## 输入

| **名称**  | **数据类型**              | **是否必填** | **描述**    |
| ------- | --------------------- | -------- | --------- |
| handler | DocsModeChangeHandler | 是        | 文档模式变化监听器 |

### DarkModeChangeHandler

```js
type DocsModeChangeHandler = (docsMode: DOCS_MODE) => void;
```
| **key** | **value** | **描述**                |
| ------- | --------- | --------------------- |
| EDITING | EDITING   | 编辑态                   |
| NONE    | NONE      | 无配置                   |
| READING | READING   | 阅读态                   |
| UNKNOWN | UNKNOWN   | 未知：模板注入失败 或 未刷新切换新的文档 |

## 输出

无

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
const docsModeChangeHandler = (docsMode: DOCS_MODE) => {
        console.log('debug', docsMode);
    };
useEffect(() => {
    docMiniApp.Env.DocsMode.onDocsModeChange(docsModeChangeHandler);
    return () => {
        docMiniApp.Env.DocsMode.offDocsModeChange(docsModeChangeHandler);
    };
});
```

### 返回示例

无
