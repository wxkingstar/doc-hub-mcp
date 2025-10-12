---
title: "getUserInfo 接口变更"
source_url: https://open.feishu.cn/document/faq/breaking-change/getuserinfo-api-change
---
最后更新于 2022-03-03

# getUserInfo 接口变更
### 变更事项
为支持《个人信息保护法》落地，我们将对开放平台的 [getUserInfo API](https://open.feishu.cn/document/uYjL24iN/ucjMx4yNyEjL3ITM) 进行升级，调用升级后的接口需获得用户授权。同时，我们将下线 province 字段，保留 country 和 city 字段来管理地区信息。

是否跟版：是<br>
预计生效版本：5.2.0<br>
预计生效时间：2021-12-10<br>

### 潜在影响
客户端版本升级至 V5.2.0 后，当应用调用该接口时，用户首次打开应用将收到授权申请的弹窗提醒。若用户拒绝授权，用户基本信息（包含昵称、头像、性别及地区等）将无法返回。

### 解决方案
开发者可以调用 [openSetting API](https://open.feishu.cn/document/uYjL24iN/uUzMx4SNzEjL1MTM) 打开权限设置界面，引导用户开启授权。
为确保应用的正常运行，请完成以下适配工作：
1. 兼容用户拒绝授权的场景
2. 修改依赖 province 字段的业务逻辑（若有）。

<br> 如需适配协助，请洽技术支持
