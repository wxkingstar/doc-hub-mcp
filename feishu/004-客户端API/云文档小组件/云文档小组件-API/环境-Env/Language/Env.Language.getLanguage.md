---
title: "Env.Language.getLanguage"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/env/Language/Env.Language.getLanguage
---
最后更新于 2025-07-31

# Env.Language.getLanguage
获取当前文档使用的语言，该方法为异步调用

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | 所有视图 | - PC  
- 移动端 | 演示模式

## 输入

无需传入参数。

## 输出

异步返回当前语言，可选项：
- zh-CN
- zh-TW
- zh-HK
- en-US
- ja-JP
- fr-FR
- hi-IN
- id-ID
- it-IT
- ko-KR
- pt-BR
- ru-RU
- th-TH
- vi-VN
- de-D
- es-ES

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
const language = await DocMiniApp.Env.Language.getLanguage();
console.log('debug', language);
```

### 返回示例

```
'zh-CN'
```
