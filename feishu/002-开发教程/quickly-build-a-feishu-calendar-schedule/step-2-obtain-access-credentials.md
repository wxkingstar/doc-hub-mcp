<!--
title: 步骤二：获取访问凭证
id: 7254822274065809410
fullPath: /home/quickly-build-a-feishu-calendar-schedule/step-2-obtain-access-credentials
updatedAt: 1698392893000
source: https://open.feishu.cn/document/quickly-build-a-feishu-calendar-schedule/step-2-obtain-access-credentials
-->
# 步骤二：获取访问凭证

本教程以 API 调试台工具为例，介绍如何使用飞书开放平台日历服务的 API ，将企业原有的工作日程同步至飞书日历中。你可以参考 API 调用逻辑完善自己的服务端代码。在调用 API 之前，你需要先通过调试台获取访问凭证。

:::note
由于本教程使用的应用为测试版本，因此后续所有的 API 调用、飞书客户端操作，均使用测试企业中的人员账号登录进行。
:::

## 操作步骤

1. 打开 [API调试台](https://open.feishu.cn/api-explorer)。

2. 在页面左上角点击 **切换应用**，并选择步骤一中已创建的应用。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/cd4a097c9c442a228c7d119ac49bf1a9_wvFwZRihzh.png?height=1512&lazyload=true&maxWidth=600&width=2882)

3. 在左侧 **查看鉴权凭证** 区域，获取应用的 **tenant_access_token**。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/351bd89d1734dc722ac129efe66439fe_8J2zJOx0Y1.png?height=1380&lazyload=true&maxWidth=600&width=2882)