<!--
title: 获取任务结果
id: 7041549010980634626
fullPath: /ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/task/get
updatedAt: 1749710138000
source: https://open.feishu.cn/document/server-docs/docs/wiki-v2/task/get
-->
# 获取任务结果

该方法用于获取wiki异步任务的结果{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=wiki&version=v2&resource=task&method=get)

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
知识库权限要求，当前 access token 所代表的用户或应用（机器人）：
- 为任务创建者
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
      <md-td>https://open.feishu.cn/open-apis/wiki/v2/tasks/:task_id</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>GET</md-td>
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
            <md-perm name="wiki:space:read" desc="查看知识空间信息" support_app_types="custom,isv" tags="">查看知识空间信息</md-perm>
            <md-perm name="wiki:wiki" desc="查看、编辑和管理知识库" support_app_types="custom,isv" tags="">查看、编辑和管理知识库</md-perm>
            <md-perm name="wiki:wiki:readonly" desc="查看知识库" support_app_types="custom,isv" tags="">查看知识库</md-perm>
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
	<md-text type="field-name" >task_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	任务id

**示例值**："7037044037068177428-075c9481e6a0007c1df689dfbe5b55a08b6b06f7"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::



### 查询参数
:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 35%;">名称</md-dt-th>
      <md-dt-th style="width: 13%;">类型</md-dt-th>
      <md-dt-th style="width: 15%;" filters="是,否" >必填</md-dt-th>
      <md-dt-th style="width: 37%;" >描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >task_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	任务类型

**示例值**：move

**可选值有**：
<md-enum>
<md-enum-item key="move" >[移动云空间文档至知识空间](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space-node/move_docs_to_wiki)任务</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
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
	<md-text type="field-name" >task</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >task_result</md-text>
	</md-dt-td>
	<md-dt-td>
	任务结果
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >task_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	任务id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >move_result</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >move_result\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	[移动云空间文档至知识空间](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space-node/move_docs_to_wiki)任务结果
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >node</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >node</md-text>
	</md-dt-td>
	<md-dt-td>
	移动完成的节点信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
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


<md-dt-tr level="4">
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


<md-dt-tr level="4">
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


<md-dt-tr level="4">
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


<md-dt-tr level="4">
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


<md-dt-tr level="4">
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


<md-dt-tr level="4">
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


<md-dt-tr level="4">
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


<md-dt-tr level="4">
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


<md-dt-tr level="4">
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


<md-dt-tr level="4">
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


<md-dt-tr level="4">
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


<md-dt-tr level="4">
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


<md-dt-tr level="4">
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


<md-dt-tr level="4">
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


<md-dt-tr level="4">
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


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	节点移动状态码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >status_msg</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	节点移动状态信息
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
        "task": {
            "task_id": "7037044037068177428-075c9481e6a0007c1df689dfbe5b55a08b6b06f7",
            "move_result": [
                {
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
                    },
                    "status": 0,
                    "status_msg": "success"
                }
            ]
        }
    }
}
</md-code-json>
:::

### [移动云空间文档至知识空间](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space-node/move_docs_to_wiki)任务 ###

- 结果为什么是数组？

  未来计划支持多个节点批量迁入。因此结果由数组表示，表示批量迁入多个节点的结果。例如，迁入3个节点时，结果返回长度为3的数组，其中可能部分节点迁入成功，部分失败。当前仅支持单个节点迁入，结果返回长度为1。

#### 状态说明 ####

:::html
<md-table>
    <md-thead>
        <md-tr>
            <md-th style="width: 10%;">status取值</md-th>
            <md-th stype="width: 30%;">status_msg取值</md-th>
            <md-th style="width: 60%;">描述</md-th>
        </md-tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>0</md-td>
            <md-td>success</md-td>
            <md-td>任务成功</md-td>
        </md-tr>
    </md-tbody>
    <md-tbody>
        <md-tr>
            <md-td>1</md-td>
            <md-td>processing</md-td>
            <md-td>任务正在进行</md-td>
        </md-tr>
    </md-tbody>
    <md-tbody>
        <md-tr>
            <md-td>-1</md-td>
            <md-td>already in wiki</md-td>
            <md-td>任务失败，文档已经在wiki中</md-td>
        </md-tr>
    </md-tbody>
    <md-tbody>
        <md-tr>
            <md-td>-1</md-td>
            <md-td>permission denied</md-td>
            <md-td>任务失败，权限拒绝访问</md-td>
        </md-tr>
    </md-tbody>
        <md-tbody>
        <md-tr>
            <md-td>-1</md-td>
            <md-td>not support advanced bitable</md-td>
            <md-td>任务失败，不支持高级权限多维表格</md-td>
        </md-tr>
    </md-tbody>
        <md-tbody>
        <md-tr>
            <md-td>-1</md-td>
            <md-td>source not exist</md-td>
            <md-td>任务失败，源文档不存在</md-td>
        </md-tr>
    </md-tbody>
        <md-tbody>
        <md-tr>
            <md-td>-1</md-td>
            <md-td>not support obj type</md-td>
            <md-td>任务失败，不支持的文件类型</md-td>
        </md-tr>
    </md-tbody>
        <md-tbody>
        <md-tr>
            <md-td>-1</md-td>
            <md-td>tree limit</md-td>
            <md-td>任务失败，wiki树节点已满</md-td>
        </md-tr>
    </md-tbody>
        <md-tbody>
        <md-tr>
            <md-td>-1</md-td>
            <md-td>failure</md-td>
            <md-td>任务失败，未知原因，请咨询[oncall](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952)</md-td>
        </md-tr>
    </md-tbody>
</md-table>
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
- only task creator can query status：只有任务创建者才能获取任务结果（用户或应用）。
- no move permission for document：缺少移动文档的权限，需要具备文档可管理权限和父文件夹编辑权限。参阅
[如何为应用身份（tenant_access_token）开通个人云空间中文件夹的查看或编辑权限](
/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/faq#b02e5bfb)

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


  </md-tbody>
</md-table>
:::




