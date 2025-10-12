<!--
title: 登录小程序( 旧版本 )
id: 7330871628166430748
fullPath: /uYjL24iN/ukzMzUjL5MzM14SOzMTN/old-gadget-login
updatedAt: 1706852935000
source: https://open.feishu.cn/document/deprecated-guide/gadgets-/old-gadget-login
-->
# 登录小程序 

小程序可以通过飞书开放平台提供的登录能力，获取到飞书的用户身份标识。依据该标识，小程序应用能快速建立属于自己的用户体系。

## 登录流程时序图

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d27134675b9e055845f10c844954b409_oSWJBEIwyx.png?height=795&lazyload=true&maxWidth=750&width=1153)

## 操作步骤

1. 应用调用开放平台提供的登录接口 [tt.login](/ssl:ttdoc/uYjL24iN/uYzMuYzMuYzM) 获取用户临时的登录凭证 code。

2. 应用后端服务调用登录校验接口 [code2session](/ssl:ttdoc/uYjL24iN/ukjM04SOyQjL5IDN) 验证 code 的合法性，并获取到用户身份。

3. 应用后端设置应用自身的登录态。