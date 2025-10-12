<!--
title: 创建知识空间节点副本
id: 7109718703113797635
fullPath: /ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space-node/copy
updatedAt: 1749710137000
source: https://open.feishu.cn/document/server-docs/docs/wiki-v2/space-node/copy
-->
# 创建知识空间节点副本

此接口用于在知识空间创建节点副本到指定位置。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=wiki&version=v2&resource=space.node&method=copy)

:::html
<md-alert type="error">

</md-alert>
:::

:::html
<md-alert type="warn">

</md-alert>
:::

:::html
<md-alert type="tip">

</md-alert>
:::



## 请求
:::html
<md-table>
  <md-thead>
  <tr>
      <md-th>基本</md-th>
      <md-th></md-th>
  </tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-th>HTTP URL</md-th>
      <md-td>https://open.feishu.cn/open-apis/wiki/v2/spaces/:space_id/nodes/:node_token/copy</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>POST</md-td>
    </md-tr>
    <md-tr>
      <md-th>接口频率限制</md-th>
      <md-td>[100 次/分钟](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
    </md-tr>
    <md-tr>
      <md-th>支持的应用类型</md-th>
      <md-td>
      <md-app-support types="custom,isv"></md-app-support>
      </md-td>
    </md-tr>
    <md-tr>
      <md-th>
            权限要求
            <md-tooltip type="info">调用该 API 所需的权限。开启其中任意一项权限即可调用</md-tooltip>
            
            <div style="color: rgb(100, 106, 115);font-size: 12px;line-height: 20px;white-space: pre-line;font-weight: 500;padding-top: 4px;">开启任一权限即可</div>
            
      </md-th>
      <md-td>
            <md-perm name="wiki:node:copy" desc="创建知识空间节点副本" support_app_types="custom,isv" tags="">创建知识空间节点副本</md-perm>
            <md-perm name="wiki:wiki" desc="查看、编辑和管理知识库" support_app_types="custom,isv" tags="">查看、编辑和管理知识库</md-perm>
      </md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::
### 请求头
:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 35%;">名称</md-th>
      <md-th style="width: 13%;">类型</md-th>
       <md-th style="width: 15%;" filters="是,否" >必填</md-th>
      <md-th  style="width: 37%;">描述</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>Authorization</md-td>
      <md-td>string</md-td>
      <md-td>是</md-td>
      	<md-td>
<md-tag mode="inline" type="token-tenant">tenant_access_token</md-tag>
或
<md-tag mode="inline" type="token-user">user_access_token</md-tag>

**值格式**："Bearer `access_token`"

**示例值**："Bearer u-7f1bcd13fc57d46bac21793a18e560"

[了解更多：如何选择与获取 access token](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-choose-which-type-of-token-to-use)

</md-td>
</md-tr>
<md-tr>
<md-td>Content-Type</md-td>
<md-td>string</md-td>
<md-td>是</md-td>
<md-td>**固定值**："application/json; charset=utf-8"</md-td>
</md-tr>
</md-tbody>
</md-table>
:::



### 路径参数
:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 35%;">名称</md-dt-th>
      <md-dt-th style="width: 13%;">类型</md-dt-th>
      <md-dt-th style="width: 52%;">描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>

<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >space_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	知识空间id

**示例值**："6946843325487912356"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >node_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	节点token

**示例值**："wikcnKQ1k3p******8Vabce"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::



### 请求体

:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 35%;">名称</md-dt-th>
      <md-dt-th style="width: 13%;">类型</md-dt-th>
      <md-dt-th style="width: 15%;" filters="是,否" >必填</md-dt-th>
      <md-dt-th style="width: 37%;">描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>

<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >target_parent_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	目标父节点 Token。
- 目标知识空间 ID 与目标父节点 Token 不可同时为空。

**示例值**："wikcnKQ1k3p******8Vabce"

**数据校验规则**：

- 长度范围：`0` ～ `999` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >target_space_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	目标知识空间 ID。
- 目标知识空间 ID 与目标父节点 Token 不可同时为空。

**示例值**："6946843325487912356"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	复制后的新标题。如果填空，则新标题为空。如果不填，则使用原节点标题。

**示例值**："新标题。"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "target_parent_token": "wikcnKQ1k3p******8Vabce",
    "target_space_id": "6946843325487912356",
    "title": "新标题。"
}
</md-code-json>
:::



## 响应





### 响应体
:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 35%;">名称</md-dt-th>
      <md-dt-th style="width: 13%;">类型</md-dt-th>
      <md-dt-th style="width: 52%;">描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>

<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	错误码，非 0 表示失败
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >msg</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	错误描述
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >data</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >\-</md-text>
	</md-dt-td>
	<md-dt-td>
	\-
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >node</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >node</md-text>
	</md-dt-td>
	<md-dt-td>
	创建副本后的新节点
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >space_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	知识空间id
[获取方式](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-overview)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >node_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	节点token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >obj_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	对应文档类型的token，可根据 obj_type 判断属于哪种文档类型。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >obj_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文档类型，对于快捷方式，该字段是对应的实体的obj_type。

**可选值有**：
<md-enum>
<md-enum-item key="doc" >旧版文档</md-enum-item>
<md-enum-item key="sheet" >表格</md-enum-item>
<md-enum-item key="mindnote" >思维导图</md-enum-item>
<md-enum-item key="bitable" >多维表格</md-enum-item>
<md-enum-item key="file" >文件</md-enum-item>
<md-enum-item key="docx" >新版文档</md-enum-item>
<md-enum-item key="slides" >幻灯片</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >parent_node_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	父节点 token。若当前节点为一级节点，父节点 token 为空。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >node_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	节点类型

**可选值有**：
<md-enum>
<md-enum-item key="origin" >实体</md-enum-item>
<md-enum-item key="shortcut" >快捷方式</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >origin_node_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	快捷方式对应的实体node_token，当节点为快捷方式时，该值不为空。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >origin_space_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	快捷方式对应的实体所在的space id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >has_child</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否有子节点
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文档标题
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >obj_create_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文档创建时间
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >obj_edit_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文档最近编辑时间
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >node_create_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	节点创建时间
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >creator</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	节点创建者
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >owner</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	节点所有者
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >node_creator</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	节点创建者
	</md-dt-td>
</md-dt-tr>


  </md-dt-tbody>
</md-dt-table>
:::



### 响应体示例
:::html
<md-code-json>
{
    "code": 0,
    "msg": "success",
    "data": {
        "node": {
            "space_id": "6946843325487912356",
            "node_token": "wikcnKQ1k3p******8Vabcef",
            "obj_token": "doccnzAaOD******Wabcdef",
            "obj_type": "doc",
            "parent_node_token": "wikcnKQ1k3p******8Vabcef",
            "node_type": "origin",
            "origin_node_token": "wikcnKQ1k3p******8Vabcef",
            "origin_space_id": "6946843325487912356",
            "has_child": false,
            "title": "标题",
            "obj_create_time": "1642402428",
            "obj_edit_time": "1642402428",
            "node_create_time": "1642402428",
            "creator": "ou_xxxxx",
            "owner": "ou_xxxxx",
            "node_creator": "ou_xxxxx"
        }
    }
}
</md-code-json>
:::



### 错误码
:::html
<md-table>
    <md-thead>
        <md-tr>
            <md-th style="width: 15%;">HTTP状态码</md-th>
            <md-th style="width: 15%;">错误码</md-th>
            <md-th style="width: 30%;">描述</md-th>
            <md-th style="width: 30%;">排查建议</md-th>
        </md-tr>
    </md-thead>
  <md-tbody>

<md-tr>
  <md-td>400</md-td>
  <md-td>131001</md-td>
  <md-td>rpc fail</md-td>
  <md-td>服务报错，请稍后重试，或者拿响应体的header头里的x-tt-logid咨询[oncall](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952)定位。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>131002</md-td>
  <md-td>param err</md-td>
  <md-td>通常为传参有误，例如数据类型不匹配。请查看**具体接口报错信息**，报错不明确时请咨询[oncall](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>131003</md-td>
  <md-td>out of limit</md-td>
  <md-td>超出操作限制，例如节点数量限制。请参阅下表。
- 原/目标知识空间总节点数不超过40万。
- 原/目标知识空间目录树不超过50层。
- 目的父节点下单层节点数不超过2000。
- 单次移动节点数（带子节点）不超过2000。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>131004</md-td>
  <md-td>invalid user</md-td>
  <md-td>非法用户。请咨询[oncall](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>131005</md-td>
  <md-td>not found</md-td>
  <md-td>未找到相关数据，例如id不存在。相关报错信息参考：

- member not found：用户不是知识空间成员（管理员），无法删除。
- identity not found: userid不存在，无法添加/删除成员。
- space not found：知识空间不存在
- node not found：节点不存在
- document not found：文档不存在


报错不明确时请咨询[oncall](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>131006</md-td>
  <md-td>permission denied</md-td>
  <md-td>权限拒绝，相关报错信息参考：
- wiki space permission denied：知识库权限鉴权不通过，需要成为知识空间管理员（成员）。
- node permission denied：文档节点权限鉴权不通过，读操作需要具备节点阅读权限，写操作（创建、移动等）则需要具备节点容器编辑权限。
- no source parent node permission：需要具备原父节点的容器编辑权限。
- no destination parent node permission：需要具备目标父节点的容器编辑权限，若移动到知识空间下，则需要成为知识空间管理员（成员）。

**注意**：应用访问或操作文档时，除了申请 API 权限，还需授权具体文档资源的阅读、编辑或管理权限。

请参考以下步骤操作： 

1. **当遇到资源权限不足的情况**：参阅[如何给应用授权访问知识库文档资源](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/wiki-qa#a40ad4ca)。
2. **也可直接将应用添加为知识库管理员（成员）**：参阅[如何将应用添加为知识库管理员（成员）](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/wiki-qa#b5da330b)。
3. **若无法解决或报错信息不明确时**：请咨询[技术支持](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>131007</md-td>
  <md-td>internal err</md-td>
  <md-td>服务内部错误，请勿重试，拿返回值的header头里的x-tt-logid咨询[oncall](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952)定位。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>131009</md-td>
  <md-td>lock contention, please retry later.</md-td>
  <md-td>并发请求异常，请稍后重试。</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




