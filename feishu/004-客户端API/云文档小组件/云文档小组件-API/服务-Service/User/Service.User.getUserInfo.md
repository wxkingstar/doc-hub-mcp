---
title: "Service.User.getUserInfo"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/service/User/Service.User.getUserinfo
---
最后更新于 2025-07-31

# Service.User.getUserInfo
获取当前用户的信息，该方法为异步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | 所有视图 | - PC  
- 移动端 | 演示模式

## 输入

无需传入参数。

## 输出

异步返回一个 [UserInfo](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/UserInfo)

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
DocMiniApp.Service.User.getUserInfo()
  .then((userInfo) => {
    console.log('debug', userInfo);
  })
```

### 返回示例

```json
{
    "nickName": "用户昵称",
    "avatarUrl": "用户头像",
    "gender": "male",
    "country": "CN",
    "city": "深圳",
    "language": "zh_CN",
    "tenantId": "1"
}
```
