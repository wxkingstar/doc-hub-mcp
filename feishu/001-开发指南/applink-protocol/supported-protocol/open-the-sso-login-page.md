<!--
title: 打开SSO登录页
id: 6986995291975581700
fullPath: /uAjLw4CM/uYjL24iN/applink-protocol/supported-protocol/open-the-sso-login-page
updatedAt: 1651824945000
source: https://open.feishu.cn/document/common-capabilities/applink-protocol/supported-protocol/open-the-sso-login-page
-->
# 打开SSO登录页
::: note 
从飞书 3.35.0 版本开始支持。
:::

## 使用场景
在飞书客户端中打开租户在admin后台配置的SSO登录页

## 协议
[https://applink.feishu.cn/client/passport/sso_login?sso_domain=A&tenant_name=B](https://applink.feishu.cn/client/passport/sso_login?sso_domain=A&tenant_name=B)

## 参数

| 字段         | 必填           | 说明        | 
| --------- | --------------- | -------   | 
|**sso_domain** |    是      | 租户的域名，填写的是租户在admin后台配置的租户域名信息。当在admin后台改动租户的域名时，需要同步修改applink该参数值 | 
|**tenant_name** | 是 | 租户名，用于在切换租户时，客户端展示即将登录到的租户名称，一般填写公司名即可 | 



## 使用示例
用租户域名和租户名称打开SSO登录页。租户域名为"idptest.feishu.cn" ，租户名称为"测试租户"。
`https://applink.feishu.cn/client/passport/sso_login?sso_domain=idptest.feishu.cn&tenant_name=测试租户` 


因为飞书支持多user身份，当用户在飞书上登录了非当前applink对应的sso租户下的user时，会提示用户是否需要切换到sso租户下的user。具体的展示格式见下图

![图片名称](//sf3-cn.feishucdn.com/obj/website-img/13ba3fa628380dbca6b4886d909db5c0_ydFGqSKZ5F.png)