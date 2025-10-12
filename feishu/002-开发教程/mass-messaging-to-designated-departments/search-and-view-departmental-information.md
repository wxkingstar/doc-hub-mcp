<!--
title: 步骤二：获取访问凭证
id: 6999971130074578972
fullPath: /home/mass-messaging-to-designated-departments/search-and-view-departmental-information
updatedAt: 1695107521000
source: https://open.feishu.cn/document/mass-messaging-to-designated-departments/search-and-view-departmental-information
-->
# 步骤二：获取访问凭证

在调用飞书开放平台接口之前，你需要先获取对应应用的访问凭证（access_token）。访问凭证代表应用得到了平台、租户和用户的授权。在本文中，你将使用 API 调试台获取自建应用的访问凭证 **tenant_access_token**，以及用户访问凭证 **user_access_token**。

:::note
本教程自建应用已切为测试版本，因此仅测试企业的 **创建者** 或 **测试人员** 账号有权限访问应用并调用 API。 
:::

## 操作步骤

1. 打开[API调试台](https://open.feishu.cn/api-explorer)，在页面左上角点击 **切换应用**，选择已创建的应用。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/39135f46288eaf4a4c5b922ed949084c_LvszrC0SB9.png?height=1552&lazyload=true&maxWidth=600&width=2882)

2. 在左侧 **查看鉴权凭证** 区域，获取应用的 **tenant_access_token** 以及用户的 **user_access_token**。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8e98d936923d00aa428807e90766196b_extFQcnIHJ.png?height=1444&lazyload=true&maxWidth=600&width=2880)