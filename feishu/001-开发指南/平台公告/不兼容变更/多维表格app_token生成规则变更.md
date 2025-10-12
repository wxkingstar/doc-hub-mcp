---
title: "多维表格app_token生成规则变更"
source_url: https://open.feishu.cn/document/faq/breaking-change/the-unique-identifier-of-bitable-generation-rule-adjustment
---
最后更新于 2022-12-23

# 多维表格app_token生成规则变更
### 变更事项
多维表格的文档标识（app_token）之前会固定以 bas 这种前缀开始，2023年2月1号开始，app_token不再固定以 bas 作为固定前缀。

### 潜在影响
平台开始升级后，新创建的多维表格的app_token不再固定以 bas 开头，若开发者的业务逻辑中仍然在使用前缀匹配的方式判断多维表格的唯一标识，则可能造成错误。
### 解决方案
为了不影响开发者的正常业务，请不再使用字符串匹配的方式判断app_token，去除对固定前缀 bas 的判断。

<br> 如需适配协助，请联系[技术支持](https://applink.feishu.cn/TLJsX982)。
