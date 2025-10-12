---
title: "getTenantAppScopes"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/open-ability/authorize/gettenantappscopes
last_remote_update: 2025-01-21
last_remote_update_timestamp: 1737430595000
---
最后更新于 2025-01-21

# getTenantAppScopes(Object object)

getTenantAppScopes(Object object) 用于查询租户下当前应用的授权状态。

应用拥有所需权限后，才能调用飞书接口获取相关信息。为了让数据能更好的被保护，开发平台对权限的等级进行拆分。详细信息，可参见[应用权限](https://feishu.feishu.cn/docx/Qpshd2mj4oS5Z6x7y51coUlGnVW)。

## 支持说明

该接口支持小程序和网页应用调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V3.43.0+ | V3.43.0+ | V3.43.0+ | V7.35.0+ | 预览
网页应用 | V3.43.0+ | V3.43.0+ | V3.43.0+ | V7.35.0+ | 预览

## 输入

该接口继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性如下所示。

## 输出

该接口继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，`success` 返回对象的扩展属性如下所示。

名称 | 数据类型 | 描述
--- | --- | ---
scopes | scope[] | 权限列表。
&emsp;  
                    ∟  
                &nbsp;  
                    name | string | 权限名称。
&emsp;  
                    ∟  
                &nbsp;  
                    status | number | 授权状态。可能值：  
- `1`：已授权  
- `2`：未授权

## 示例代码

调用示例：

```js
tt.getTenantAppScopes({ 
    success(res) {
      console.log(JSON.stringify(res));
    },
    fail(res) {
      console.log(`openSetting fail: ${JSON.stringify(res)}`);
    }
});
```

`success`返回对象示例：
```json
{
  "scopes": [
    { "name": "im:message.p2p_msg:readonly", "status": 1 },
    { "name": "im:message:send_as_bot", "status": 1 },
    { "name": "contact:user.identity:readonly", "status": 1 },
    { "name": "docs:docs:operate_as_user", "status": 1 },
    { "name": "im:message.group_at_msg:readonly", "status": 1 },
    { "name": "contact:user.base:readonly", "status": 1 },
    { "name": "im:chat.group_info:readonly", "status": 1 }
  ]
}
```

## 错误码

`fail` 返回对象中可能包含 errno 属性，表示错误码。关于 errno 错误码的详细说明以及通用错误码列表，可参见[Errno 错误码](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)。
