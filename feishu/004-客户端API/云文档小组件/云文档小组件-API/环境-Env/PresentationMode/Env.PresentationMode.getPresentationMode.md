---
title: "Env.PresentationMode.getPresentationMode"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/env/PresentationMode/Env.PresentationMode.getPresentationMode
last_remote_update: 2025-07-31
last_remote_update_timestamp: 1753960448000
---
最后更新于 2025-07-31

# Env.PresentationMode.getPresentationMode
获取当前小应用所在的文档演示模式 ，该方法为异步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | 所有视图 | - PC  
- 移动端 | 演示模式

## 输入

无需传入参数。

## 输出

异步返回文档演示模式类型
| **key**    | **value**  | **描述** |
| ---------- | ---------- | ------ |
| DOCUMENT   | document   | 文档演示时  |
| NONE       | none       | 非演示模式  |
| PAGINATION | pagination | 分页演示时  |

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
const presentationMode = await DocMiniApp.Env.PresentationMode.getPresentationMode();
console.log('debug', presentationMode);
```

### 返回示例

```
'none'
```
