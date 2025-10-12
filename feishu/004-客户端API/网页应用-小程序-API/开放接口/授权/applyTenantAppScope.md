---
title: "applyTenantAppScope"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/open-ability/authorize/applytenantappscope
last_remote_update: 2025-01-21
last_remote_update_timestamp: 1737430617000
---
最后更新于 2025-01-21

# applyTenantAppScope(Object object)

弹窗咨询用户是否向租户管理员申请所有未授予权限(不包括租户敏感权限)。详情见[应用权限](https://feishu.feishu.cn/docx/Qpshd2mj4oS5Z6x7y51coUlGnVW)

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V3.43.0+ | V3.43.0+ | V3.43.0+ | V7.35.0+ | 预览
网页应用 | V3.43.0+ | V3.43.0+ | V3.43.0+ | V7.35.0+ | 预览

## 输入
继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，无扩展属性

## 输出
`success`返回对象的扩展属性：

名称 | 数据类型 | 描述
--- | --- | ---
data | object | 权限申请结果
&emsp;  
                    ∟  
                &nbsp;  
                    status | number | 状态码  
**可选值(飞书 [V7.25.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility) 及以上版本)**：  
- `1`：无可申请列表  
- `2`：未申请权限(包括申请被拒绝)  
- `3`：权限申请中  
**Notice**：**注意**:             
**可选值(飞书 [V7.25.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility) 以下版本)**：  
-  `1`：用户已申请权限  
-  `2`：未申请权限(包括申请被拒绝)  
-  `3`：权限申请中  
-  `4`：无可申请列表  
-  `5`：相同授权超过数量限制  
-  `6`：仅租户敏感权限未授权
&emsp;  
                    ∟  
                &nbsp;  
                    msg | string | 结果信息  
**可选值(飞书 [V7.25.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility) 及以上版本)**：  
- `no application list to apply`：对应status1  
- `user cancels application`：对应status2  
- `administrator is processing`：对应status3  
**Notice**：**注意**：             
**可选值(飞书 [V7.25.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility) 以下版本)**：            
- `user agrees to apply`：对应status1  
- `user cancels application`：对应status2  
- `administrator is processing`：对应status3  
- `no application list to apply`：对应status4  
- `the number of applications exceeds the limit`：对应status5  
- `permission is not within the scope of application`：对应status6

## 示例代码

```js
tt.applyTenantAppScope({ 
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
  "data": {
    "status": 1,
    "msg": "no application list to apply"
  }
}
```
