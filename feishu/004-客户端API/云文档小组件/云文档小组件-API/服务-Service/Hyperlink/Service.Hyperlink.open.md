---
title: "Service.Hyperlink.open"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/service/Hyperlink/Service.Hyperlink.open
last_remote_update: 2025-07-31
last_remote_update_timestamp: 1753960566000
---
最后更新于 2025-07-31

# Service.Hyperlink.open
传入url，打开对应链接，该方法为异步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | 所有视图 | - PC  
- 移动端 | 演示模式

## 输入

| **名称** | **数据类型** | **是否必填** | **描述** |
| ------ | -------- | -------- | ------ |
| url    | string   | 是        | 链接     |

## 输出

无

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
DocMiniApp.Service.Hyperlink.open('baidu.com');
```

### 返回示例

无
