---
title: "Service.User.login"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/service/User/Service.User.login
last_remote_update: 2025-07-31
last_remote_update_timestamp: 1753960495000
---
最后更新于 2025-07-31

# Service.User.login
<md-alert type="warn">
  云文档小组件所获取的 User Access Token 将于 **2024 年 01 月 22 日起，无法调用 OpenAPI 。** 如需使用 User Access Token 调用 OpenAPI，则需要业务方进行相关适配，以确保产品功能不受影响。
<md-alert>

登录并获取当前用户的 code，使用该 code， 业务后台可以向飞书后台请求获取该用户的身份，从而实现用户登录流程。
参考流程如下：
1. 在文档小组件内调用 DocMiniApp.Service.User.login，获取 code，并传递给业务后台
```js
const code = await DocMiniApp.Service.User.login();
await axios.post(`https://your_backend/login?code=${code}`)
```
2. 参考 [code2session - 客户端文档 - 开发文档 - 飞书开放平台](https://open.feishu.cn/document/uYjL24iN/ukjM04SOyQjL5IDN)， 业务后台使用 code 获取用户信息
2. 根据用户信息，返回给云文档小组件该用户对应的 session
2. 文档小组件将 session 进行持久化，后续请求使用该 session，便可以正确识别用户身份。
![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/4b44a5d5a04f0fd9ed476a45f3e244c1_ZQok76130m.png?height=1280&lazyload=true&width=1157)

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | 所有视图 | - PC  
- 移动端 | 演示模式

## 输入

无需传入参数。

## 输出

异步返回当前用户的 code

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
const code = await DocMiniApp.Service.User.login();
console.log('debug', code);
```

### 返回示例

```
'user code'
```

## 开放平台集成代码示例

```js
// 需要保证文档小组件的appid和后端服务的appid是一致的。

1. 获取tenant_access_token
curl -i -X POST 'https://open.feishu.cn/open-apis/auth/v3/app_access_token/internal' \
-H 'Content-Type: application/json' \
-d '{
        "app_id": "xxxxxxxxxxxxxxxx",
        "app_secret": "xxxxxxxxxxxxxxxxxxxxxx"
}'
{
    "app_access_token": "t-gsssdsdsdsdsdsdsdsWOAA5XFW44CD3BMONERSZ76",
    "code": 0,
    "expire": 6119,
    "msg": "ok",
    "tenant_access_token": "t-gsdsdsdsdgsdgfdsgsdXFW44CD3BMONERSZ76"
}

2. 前端传入code，获取 open_id
curl -i -X POST 'https://open.feishu.cn/open-apis/mina/v2/tokenLoginValidate' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer t-gsssdsdsdsdsdsdsdsWOAA5XFW44CD3BMONERSZ76' \
-d '{
        "code": "65755f6e63-3bfb257c19311ae9"
}'
{
    "code": 0,
    "data": {
        "access_token": "u-3yDIsssssssssssssssssssssssssssssssss",
        "employee_id": "5b3d15e1",
        "expires_in": 1679407800,
        "open_id": "ssssssssssssssssssssssssss",
        "refresh_token": "ur-2Y127IT693QUbEVaz6p3gV1k6_ok501zU200lgsw2xHF",
        "session_key": "cf1994859671244789de90f52977a25d",
        "tenant_key": "736588c9260f175d",
        "union_id": "ou_3ssssssssssssssssss,
        "msg": "success"
}

3. 根据tenant_access_token获取登录用户open_id对应的用户基本信息
参考文档：https://open.feishu.cn/document/server-docs/contact-v3/user/get
curl -i -X GET 'https://open.feishu.cn/open-apis/contact/v3/users/ou_ssssssssssssssss?user_id_type=open_id' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer u-3yDIsssssssssssssssssssssssssssssssss'

{
    "code": 0,
    "data": {
        "user": {
            "mobile_visible": true,
            "open_id": "ou_xxxxxxxxxxxxxxxxxxxxxxxxxx",
            "union_id": "on_xxxxxxxxxxxxxxxxxxxxxxxxx"
        }
    },
    "msg": "success"
}
```
