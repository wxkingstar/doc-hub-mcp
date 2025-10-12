---
title: "Env.DarkMode.onDarkModeChange"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/env/DarkMode/Env.DarkMode.onDarkModeChange
---
最后更新于 2025-07-31

# Env.DarkMode.onDarkModeChange
监听暗黑模式变化，该方法为异步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | 所有视图 | - PC  
- 移动端 | 演示模式

## 输入

| **名称**  | **数据类型**              | **是否必填** | **描述**  |
| ------- | --------------------- | -------- | ------- |
| handler | DarkModeChangeHandler | 是        | 文档变化监听器 |

### DarkModeChangeHandler

```js
type DocumentChangeHandler = (isDarkMode: boolean) => void;
```
| **名称**     | **数据类型** | **是否必填** | **描述**  |
| ---------- | -------- | -------- | ------- |
| isDarkMode | boolean  | 是        | 是否是暗黑模式 |

## 输出

无

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
const darkModeChangeHandler = (isDarkMode: boolean) => {
        console.log('debug', isDarkMode);
    };
useEffect(() => {
    docMiniApp.Env.DarkMode.onDarkModeChange(darkModeChangeHandler);
    return () => {
        docMiniApp.Env.DarkMode.offDarkModeChange(darkModeChangeHandler);
    };
});
```

### 返回示例

无
