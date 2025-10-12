<!--
title: 简介
id: 7122074496182763522
fullPath: /home/quickly-develop-three-party-approvals/introduction
updatedAt: 1700461183000
source: https://open.feishu.cn/document/quickly-develop-three-party-approvals/introduction
-->
# 简介

当企业拥有多套审批系统时，可以选用飞书开放平台的审批服务，将三方审批系统的数据汇总至飞书中。无需跨平台、无需反复迁移数据，用户在飞书中即可统一完成审批信息处理，享受一站式的办公体验。本教程介绍如何通过开放平台审批服务的 OpenAPI 开发三方审批流程。

## 操作流程

本教程通过 API 调试台工具开发三方审批，操作时序图如下所示。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5bb5697e40b2a7d7e071ce4fd30a4dda_kaF0QzaOL8.png?height=884&lazyload=true&maxWidth=750&width=953)


## 实现效果

- 效果一：通过飞书审批机器人（bot），快速处理三方审批。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/90a334d0b8c42ccf9538e999f69c94be_9eNf6kAvdN.png?height=1516&lazyload=true&maxWidth=700&width=2012)

- 效果二：通过飞书工作台的审批中心，查看或处理三方审批。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/480a0b5ed768a336e8cdc716689b4816_cJYmMWFbLe.png?height=1622&lazyload=true&maxWidth=700&width=2882)

## 使用到的 OpenAPI

本教程将调用以下 OpenAPI 快速开发三方审批。

:::html
<md-table>
<md-thead>
<tr>

<md-th style="width: 40%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>
<md-th style="width: 30%;">权限要求（满足任一）</md-th>
<md-th style="width: 30%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)**</md-td></md-th>

</tr>

</md-thead>
<md-tbody>

<md-tr>

<md-td>
<md-text type="field-name" >[创建三方审批定义](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/external_approval/create)

`POST` https://open.feishu.cn/open-apis/approval/v4/external_approvals

</md-text>
</md-td>

<md-td>
<md-perm name="approval:approval" desc="查看、创建、更新、删除审批应用相关信息" support_app_types="custom,isv" tags="">查看、创建、更新、删除审批应用相关信息</md-perm>
<md-perm name="approval:external_approval" desc="查看、创建、更新、删除三方审批定义相关信息" support_app_types="custom,isv" tags="">查看、创建、更新、删除三方审批定义相关信息</md-perm>
</md-td> 

<md-td>
<md-tag mode="inline" type="token-tenant">tenant_access_token</md-tag>
</md-td>

</md-tr>

<md-tr>

<md-td>
<md-text type="field-name" >[同步三方审批实例](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/external_instance/create)

`POST` https://open.feishu.cn/open-apis/approval/v4/external_instances

</md-text>
</md-td>

<md-td>
<md-perm name="approval:approval" desc="查看、创建、更新、删除审批应用相关信息" support_app_types="custom,isv" tags="">查看、创建、更新、删除审批应用相关信息</md-perm>
<md-perm name="approval:external_instance" desc="查看、创建、更新、删除三方审批实例相关信息" support_app_types="custom,isv" tags="">查看、创建、更新、删除三方审批实例相关信息</md-perm>
</md-td> 

<md-td>
<md-tag mode="inline" type="token-tenant">tenant_access_token</md-tag>
</md-td>

</md-tr>

<md-tr>

<md-td>
<md-text type="field-name" >[发送审批 Bot 消息](/ssl:ttdoc/ukTMukTMukTM/ugDNyYjL4QjM24CO0IjN)

`POST` https://www.feishu.cn/approval/openapi/v1/message/send

</md-text>
</md-td>

<md-td>
<md-perm name="approval:approval:readonly" desc="访问审批应用" support_app_types="custom,isv" tags="">访问审批应用</md-perm>
</md-td> 

<md-td>
<md-tag mode="inline" type="token-tenant">tenant_access_token</md-tag>
</md-td>

</md-tr>

<md-tr>

<md-td>
<md-text type="field-name" >[更新审批 Bot 消息](/ssl:ttdoc/ukTMukTMukTM/uAjNyYjLwYjM24CM2IjN)

`POST` https://www.feishu.cn/approval/openapi/v1/message/update

</md-text>
</md-td>

<md-td>
<md-perm name="approval:approval:readonly" desc="访问审批应用" support_app_types="custom,isv" tags="">访问审批应用</md-perm>
</md-td> 

<md-td>
<md-tag mode="inline" type="token-tenant">tenant_access_token</md-tag>
</md-td>

</md-tr>
  
<md-tr>

<md-td>
<md-text type="field-name" >[校验三方审批实例](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/external_instance/check)

`POST` https://open.feishu.cn/open-apis/approval/v4/external_instances/check

</md-text>
</md-td>

<md-td>
<md-perm name="approval:approval" desc="查看、创建、更新、删除审批应用相关信息" support_app_types="custom,isv" tags="">查看、创建、更新、删除审批应用相关信息</md-perm>
<md-perm name="approval:approval:readonly" desc="访问审批应用" support_app_types="custom,isv" tags="">访问审批应用</md-perm>
<md-perm name="approval:external_instance" desc="查看、创建、更新、删除三方审批实例相关信息" support_app_types="custom,isv" tags="">查看、创建、更新、删除三方审批实例相关信息</md-perm>
</md-td> 

<md-td>
<md-tag mode="inline" type="token-tenant">tenant_access_token</md-tag>
</md-td>

</md-tr>

</md-tbody>
</md-table>
:::