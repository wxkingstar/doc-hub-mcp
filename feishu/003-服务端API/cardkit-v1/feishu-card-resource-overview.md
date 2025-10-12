<!--
title: 飞书卡片资源概述
id: 7461906204383281154
fullPath: /uAjLw4CM/ukTMukTMukTM/cardkit-v1/feishu-card-resource-overview
updatedAt: 1751001906000
source: https://open.feishu.cn/document/cardkit-v1/feishu-card-resource-overview
-->
# 飞书卡片资源概述
飞书卡片是应用的一种能力，包括构建卡片内容所需的组件和发送卡片所需的能力，并提供了[可视化搭建工具](https://open.feishu.cn/cardkit?from=open_docs_overview)。飞书开放平台针对飞书卡片提供了一系列 OpenAPI，使用这些 OpenAPI 你可以在卡片和组件维度，局部或流式更新卡片。

## 典型案例

开放平台提供了包含飞书卡片的案例，详情可参见：
- [智能审批管办一体，助力企业效能提升](https://open.feishu.cn/solutions/detail/automation)
- [运维工单智能派发，信息流转精准顺畅](https://open.feishu.cn/solutions/detail/ticke)
- [当项目管理遇见飞书，协同沉淀更便捷](https://open.feishu.cn/solutions/detail/project)
- [告别手动，基于飞书机器人实现自动群管理](https://open.feishu.cn/solutions/detail/group)
- [深度融合企业系统，飞书审批让流程更轻松](https://open.feishu.cn/solutions/detail/approval)

## 接入流程

卡片 API 的基本接入流程如下图所示，如需了解详细的 API 接入流程，参见[流程概述](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7e2c712313cbc2da9b298804cbcf94e2_MwxGtG3AQH.png?height=214&lazyload=true&maxWidth=900&width=2276)

## 开发指南




- 前往[飞书卡片开发指南文档](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/feishu-card-overview)，了解如何搭建卡片、发送卡片和更新卡片。
- 参考[流式更新卡片](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/streaming-updates-openapi-overview)，了解如何调用卡片接口实现文本流式等能力。

## 资源介绍

飞书卡片 OpenAPI 中，以卡片和组件资源为中心开放接口，支持创建、更新卡片。
:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 10%;">资源</md-th>
      <md-th style="width: 70%;">描述</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>卡片</md-td>
      <md-td>飞书卡片能将结构化的内容以卡片形式嵌入至聊天消息、群置顶消息、链接预览等飞书协作场景中，提升信息传递效率。了解更多参见[飞书卡片概述](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/feishu-card-overview)。通过卡片实体 API，你可从卡片维度创建卡片、更新卡片。</md-td>
    </md-tr>
    <md-tr>
      <md-td>组件</md-td>
      <md-td>飞书卡片中的组件可分为容器类、展示类和交互类组件。了解更多参见[组件概述](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/component-overview)。通过组件 API，你可以在一张卡片中新增、修改组件。</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

## 方法列表

以下提供创建和更新卡片的 API 列表。你可通过[创建卡片实体](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/cardkit-v1/card/create)接口创建卡片，再调用[发送消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)接口通过卡片 ID 发送卡片。之后使用其它接口局部更新卡片。



:::html
<md-alert type="tip">
- 下表中 **商店** 是指商店应用，**自建** 是指企业自建应用。应用类型说明参见[应用类型简介](/ssl:ttdoc/home/app-types-introduction/overview)。
-  下列接口仅支持[卡片 JSON 2.0 结构](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-structure)。

</md-alert>
:::

### 卡片级

:::html
<md-table>
    <md-thead>
<tr>
    <md-th style="width: 35%;"><b>方法 (API)</md-th>
    <md-th style="width: 30%;"><b>权限要求（满足任一）</md-th>
    <md-th style="width: 20%;"><b>访问凭证</md-th>
    <md-th style="width: 10%;"><b>商店</md-th>
    <md-th style="width: 10%;"><b>自建</md-th>
</tr>
    </md-thead>
    <md-tbody>
<md-tr>
    <md-td>
<md-text type="field-name">`POST`[创建卡片实体](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/cardkit-v1/card/create) open-apis/cardkit/v1/cards</md-text>
    </md-td>
    <md-td>
 <md-perm name="cardkit:card:write" desc="创建与更新卡片" support_app_types="custom,isv" tags="">创建与更新卡片</md-perm>
    </md-td>
    <md-td>
<md-tag type="token-tenant">tenant_access_token</md-tag>

    </md-td>
    <md-td>**✓**</md-td>
    <md-td>**✓**</md-td>
</md-tr>
<md-tr>
    <md-td>
<md-text type="field-name">`PUT` [全量更新卡片实体](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/cardkit-v1/card/update) /open-apis/cardkit/v1/cards/:card_id</md-text>
    </md-td>
    <md-td>
 <md-perm name="cardkit:card:write" desc="创建与更新卡片" support_app_types="custom,isv" tags="">创建与更新卡片</md-perm>
    </md-td>
    <md-td>
<md-tag type="token-tenant">tenant_access_token</md-tag>

    </md-td>
    <md-td>**✓**</md-td>
    <md-td>**✓**</md-td>
</md-tr>



<md-tr>
    <md-td>
<md-text type="field-name">`PATCH` [更新卡片配置](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/cardkit-v1/card/settings) /open-apis/cardkit/v1/cards/:card_id/settings</md-text>
    </md-td>
    <md-td>
 <md-perm name="cardkit:card:write" desc="创建与更新卡片" support_app_types="custom,isv" tags="">创建与更新卡片</md-perm>
      
    </md-td>
    <md-td>
<md-tag type="token-tenant">tenant_access_token</md-tag>

    </md-td>
    <md-td>**✓**</md-td>
    <md-td>**✓**</md-td>
</md-tr>



<md-tr>
    <md-td>
<md-text type="field-name">`POST` [批量更新卡片实体](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/cardkit-v1/card/batch_update) /open-apis/cardkit/v1/cards/:card_id/batch_update</md-text>
    </md-td>
    <md-td>
 <md-perm name="cardkit:card:write" desc="创建与更新卡片" support_app_types="custom,isv" tags="">创建与更新卡片</md-perm>
    </md-td>
    <md-td>
<md-tag type="token-tenant">tenant_access_token</md-tag>

    </md-td>
    <md-td>**✓**</md-td>
    <md-td>**✓**</md-td>
</md-tr>





    </md-tbody>
</md-table>
:::

### 组件级
:::html
<md-table>
    <md-thead>
<tr>
    <md-th style="width: 35%;"><b>方法 (API)</md-th>
    <md-th style="width: 30%;"><b>权限要求（满足任一）</md-th>
    <md-th style="width: 20%;"><b>访问凭证</md-th>
    <md-th style="width: 10%;"><b>商店</md-th>
    <md-th style="width: 10%;"><b>自建</md-th>
</tr>
    </md-thead>
    <md-tbody>
<md-tr>
    <md-td>
<md-text type="field-name">`POST`[新增组件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/cardkit-v1/card-element/create) /open-apis/cardkit/v1/cards/:card_id/elements</md-text>
    </md-td>
    <md-td>
 <md-perm name="cardkit:card:write" desc="创建与更新卡片" support_app_types="custom,isv" tags="">创建与更新卡片</md-perm>
    </md-td>
    <md-td>
<md-tag type="token-tenant">tenant_access_token</md-tag>

    </md-td>
    <md-td>**✓**</md-td>
    <md-td>**✓**</md-td>
</md-tr>
<md-tr>
    <md-td>
<md-text type="field-name">`PUT` [更新组件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/cardkit-v1/card-element/update) /open-apis/cardkit/v1/cards/:card_id/elements/:element_id</md-text>
    </md-td>
    <md-td>
 <md-perm name="cardkit:card:write" desc="创建与更新卡片" support_app_types="custom,isv" tags="">创建与更新卡片</md-perm>
    </md-td>
    <md-td>
<md-tag type="token-tenant">tenant_access_token</md-tag>

    </md-td>
    <md-td>**✓**</md-td>
    <md-td>**✓**</md-td>
</md-tr>



<md-tr>
    <md-td>
<md-text type="field-name">`PATCH` [更新组件属性](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/cardkit-v1/card-element/patch) /open-apis/cardkit/v1/cards/:card_id/elements/:element_id</md-text>
    </md-td>
    <md-td>
 <md-perm name="cardkit:card:write" desc="创建与更新卡片" support_app_types="custom,isv" tags="">创建与更新卡片</md-perm>
      
    </md-td>
    <md-td>
<md-tag type="token-tenant">tenant_access_token</md-tag>

    </md-td>
    <md-td>**✓**</md-td>
    <md-td>**✓**</md-td>
</md-tr>



<md-tr>
    <md-td>
<md-text type="field-name">`PUT` [流式更新文本](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/cardkit-v1/card-element/content) /open-apis/cardkit/v1/cards/:card_id/elements/:element_id/content</md-text>
    </md-td>
    <md-td>
 <md-perm name="cardkit:card:write" desc="创建与更新卡片" support_app_types="custom,isv" tags="">创建与更新卡片</md-perm>
    </md-td>
    <md-td>
<md-tag type="token-tenant">tenant_access_token</md-tag>

    </md-td>
    <md-td>**✓**</md-td>
    <md-td>**✓**</md-td>
</md-tr>




<md-tr>
    <md-td>
<md-text type="field-name">`DELETE` [删除组件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/cardkit-v1/card-element/delete) /open-apis/cardkit/v1/cards/:card_id/elements/:element_id</md-text>
    </md-td>
    <md-td>
           <md-perm name="cardkit:card:write" desc="创建与更新卡片" support_app_types="custom,isv" tags="">创建与更新卡片</md-perm>

    </md-td>
    <md-td>
<md-tag type="token-tenant">tenant_access_token</md-tag>

    </md-td>
    <md-td>**✓**</md-td>
    <md-td>**✓**</md-td>
</md-tr>

    </md-tbody>
</md-table>
:::
      