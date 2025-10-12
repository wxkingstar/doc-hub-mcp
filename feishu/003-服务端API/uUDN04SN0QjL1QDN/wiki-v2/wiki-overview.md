<!--
title: 知识库概述
id: 7044101668698456067
fullPath: /ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-overview
updatedAt: 1755587520000
source: https://open.feishu.cn/document/server-docs/docs/wiki-v2/wiki-overview
-->
# 知识库概述

飞书知识库是一个面向组织的知识管理系统。通过结构化沉淀高价值信息，形成完整的知识体系。此外，明确的内容分类，层级式的页面树，还能够轻松提升知识的流转和传播效率，更好地成就组织和个人。

:::html
<md-table>
<md-thead>
<tr>
<md-th style="width: 20%;">资源</md-th>
<md-th style="width: 80%;">资源定义</md-th>
</tr>
</md-thead>
<md-tbody>
  
<md-tr>
<md-td>
**知识空间**
</md-td>
<md-td>
用于管理文件和其它文件夹的容器。
</md-td>
</md-tr>

<md-tr>
<md-td>
**节点**
</md-td>
<md-td>
知识空间中的节点，支持文档、表格等多种文件类型。
</md-td>
</md-tr>

</md-tbody>

</md-table>
:::


你可以通过知识库 API，来自动化管理你的知识库。
:::note
在调用知识库 API 之前，请确保你的应用已经按需申请了以下权限并发布：
- `wiki:wiki`: 可以对知识库进行增删改查
- `wiki:wiki.readonly`: 可以读取知识库内容，无法编辑或修改知识库


相关说明详见：[应用权限](/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN)
:::



## 资源：知识空间 Workspace
知识空间是知识库的基本组成单位，是企业根据需要搭建的不同类别的知识体系，由多个具有层级和所属关系的文档页面构成。每个知识空间，都有唯一的一个 space_id 作为标识。

**可以通过以下任一方法获取知识库的 space_id：**
- 调用 [获取知识空间列表](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space/list)，从返回值中获取；
- 如果你是知识库管理员，可以进入知识库设置页面，复制地址栏的数字部分（见下图）：

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/96ea466a484e8f3fdbfc8c2587b31750_ZpeqCy7xSe.png?height=620&lazyload=true&width=1240)

##  字段说明
:::html
<md-table>
  <md-thead>
      <md-tr>
      <md-th style="width: 20%;">名称</md-th>
      <md-th style="width: 20%;">类型</md-th>
      <md-th style="width: 50%;">描述</md-th>
      </md-tr>
  </md-thead>
  
  <md-tbody>

<md-tr>
	<md-td>
	<md-text type="field-name" >space_id</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	一个知识空间的唯一标识。  <br><br>
    

      
**示例值**："7034502641455497244"

**字段权限要求（任选其一）**：<br>
<md-perm name="wiki:wiki" desc="查看、编辑和管理知识库" support_app_types="custom,isv" tags="">查看、编辑和管理知识库</md-perm>
                    <md-perm name="wiki:wiki:readonly" desc="查看知识库" support_app_types="custom,isv" tags="">查看知识库</md-perm>
	</md-td>
</md-tr>

<md-tr>
	<md-td>
	<md-text type="field-name" >name</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	知识空间的名称。

	</md-td>
</md-tr>

    <md-tr>
	<md-td>
	<md-text type="field-name" >description</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	知识空间的描述内容。

	</md-td>
</md-tr>
    
<md-tr>
	<md-td>
	<md-text type="field-name" >space_type</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
表示知识空间类型

**可选值有**：
- `team`：团队空间，归团队（多人）管理，可添加多个管理员
- `person`：个人空间（旧版，已下线），归个人管理。一人仅可拥有一个，无法添加其他管理员
- `my_library`：我的文档库，归个人管理。一人仅可拥有一个，无法添加其他管理员
	</md-td>
</md-tr>

  </md-tbody>
</md-table>
:::



### 方法列表
>  “商店”代表 [应用商店应用](/ssl:ttdoc/home/app-types-introduction/overview)；“自建”代表 [企业自建应用](/ssl:ttdoc/home/app-types-introduction/overview)
:::html

<md-table>

<md-thead>

<tr>

<md-th style="width: 70%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>

<md-th style="width: 10%;">权限要求（满足任一）</md-th>

<md-th style="width: 10%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>

<md-th style="width: 5%;">商店</md-th>
<md-th style="width: 5%;">自建</md-th>

</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>

<md-text type="field-name" >[创建知识空间](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space/create)

   `POST` /open-apis/wiki/v2/spaces
  
  </md-text>

</md-td>

<md-td><md-perm name="wiki:wiki" desc="查看、编辑和管理知识库" tags="">查看、编辑和管理知识库</md-perm>

</md-td>

<md-td>

<md-tag type="token-user" >user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>

<md-tr>

<md-td>

<md-text type="field-name" >[获取知识空间列表](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space/list)</md-text>
  
`GET` /open-apis/wiki/v2/spaces
  
</md-td>


<md-td><md-perm name="wiki:wiki" desc="查看、编辑和管理知识库" tags="">查看、编辑和管理知识库</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user" >user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>

<md-tr>

<md-td>

<md-text type="field-name" >[获取知识空间信息](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space/get)</md-text>
  
`GET` open-apis/wiki/v2/spaces/:space_id
 
</md-td>

<md-td>
<md-perm name="wiki:wiki" desc="查看、编辑和管理知识库" tags="">查看、编辑和管理知识库</md-perm>


</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user">user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>




</md-tbody>

</md-table>

:::

## 资源：知识空间成员 Member

知识空间具有权限管控，仅知识空间成员能访问该知识空间。

## 字段说明

:::html
<md-table>
  <md-thead>
      <md-tr>
      <md-th style="width: 20%;">名称</md-th>
      <md-th style="width: 20%;">类型</md-th>
      <md-th style="width: 50%;">描述</md-th>
      </md-tr>
  </md-thead>
  
  <md-tbody>

<md-tr>
	<md-td>
	<md-text type="field-name" >member_id</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	一个知识空间成员的唯一标识。可以使用open_id, email等多种方法表示  <br><br>
    

      
**示例值**："ou_51427140ab9f450411135757bcbf932f"

**字段权限要求（任选其一）**：<br>
<md-perm name="wiki:wiki" desc="查看、编辑和管理知识库" support_app_types="custom,isv" tags="">查看、编辑和管理知识库</md-perm>
<md-perm name="wiki:wiki:readonly" desc="查看知识库" support_app_types="custom,isv" tags="">查看知识库</md-perm>
	</md-td>
</md-tr>

  </md-tbody>
</md-table>
:::

### 方法列表
>  “商店”代表 [应用商店应用](/ssl:ttdoc/home/app-types-introduction/overview)；“自建”代表 [企业自建应用](/ssl:ttdoc/home/app-types-introduction/overview)
:::html
<md-table>
    <md-thead>
        <tr>
            <md-th style="width: 70%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>
            <md-th style="width: 10%;">权限要求（满足任一）</md-th>
            <md-th style="width: 10%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>
            <md-th style="width: 5%;">商店</md-th>
            <md-th style="width: 5%;">自建</md-th>
        </tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[删除知识空间成员](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space-member/delete)

`DELETE` /open-apis/wiki/v2/spaces/:space_id/members/:member_id
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="wiki:wiki" desc="查看、编辑和管理知识库" support_app_types="custom,isv" tags="">查看、编辑和管理知识库</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
            <md-td>
                **✓**
            </md-td>
            <md-td>
                **✓**
            </md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[添加知识空间成员](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space-member/create)

`POST` /open-apis/wiki/v2/spaces/:space_id/members
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="wiki:wiki" desc="查看、编辑和管理知识库" support_app_types="custom,isv" tags="">查看、编辑和管理知识库</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
            <md-td>
                **✓**
            </md-td>
            <md-td>
                **✓**
            </md-td>
        </md-tr>

    </md-tbody>
</md-table>
:::

## 资源：知识空间设置 Setting
  
### 方法列表
>  “商店”代表 [应用商店应用](/ssl:ttdoc/home/app-types-introduction/overview)；“自建”代表 [企业自建应用](/ssl:ttdoc/home/app-types-introduction/overview)
:::html
<md-table>
    <md-thead>
        <tr>
            <md-th style="width: 70%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>
            <md-th style="width: 10%;">权限要求（满足任一）</md-th>
            <md-th style="width: 10%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>
            <md-th style="width: 5%;">商店</md-th>
            <md-th style="width: 5%;">自建</md-th>
        </tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[更新知识空间设置](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space-setting/update)

`PUT` /open-apis/wiki/v2/spaces/:space_id/setting
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="wiki:wiki" desc="查看、编辑和管理知识库" support_app_types="custom,isv" tags="">查看、编辑和管理知识库</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
            <md-td>
                **✓**
            </md-td>
            <md-td>
                **✓**
            </md-td>
        </md-tr>

    </md-tbody>
</md-table>
:::

## 资源：节点 Node
文件是各种类型的文件的统称，泛指云空间内所有的文件。每个文件都有唯一 token 作为标识。


##  字段说明
:::html
<md-table>
  <md-thead>
      <md-tr>
      <md-th style="width: 20%;">名称</md-th>
      <md-th style="width: 20%;">类型</md-th>
      <md-th style="width: 50%;">描述</md-th>
      </md-tr>
  </md-thead>
  <md-tbody>

<md-tr>
	<md-td>
	<md-text type="field-name" >node_token</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	一个节点的唯一标识。  <br><br>
    
      
**示例值**："wikcnpJLIzbAptN4cMQrQoewaLc"<br><br>

**字段权限要求（任选其一）**：<br>
<md-perm name="wiki:wiki" desc="查看、编辑和管理知识库" tags="">查看、编辑和管理知识库</md-perm>
	</md-td>
</md-tr>

<md-tr>
	<md-td>
	<md-text type="field-name" >obj_token</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	节点的真实文档的 token，如果要获取或编辑节点内容，需要使用此 token 调用对应的接口。

	</md-td>

</md-tr>
    
    <md-tr>
	<md-td>
	<md-text type="field-name" >obj_type</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	节点的类型，可能是 doc、sheet、bitable、file、folder 中的一种。

	</md-td>

</md-tr>

  </md-tbody>
</md-table>
:::



### 方法列表
>  “商店”代表 [应用商店应用](/ssl:ttdoc/home/app-types-introduction/overview)；“自建”代表 [企业自建应用](/ssl:ttdoc/home/app-types-introduction/overview)
:::html
<md-table>
    <md-thead>
        <tr>
            <md-th style="width: 70%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>
            <md-th style="width: 10%;">权限要求（满足任一）</md-th>
            <md-th style="width: 10%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>
            <md-th style="width: 5%;">商店</md-th>
            <md-th style="width: 5%;">自建</md-th>
        </tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[创建节点](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space-node/create)

`POST` /open-apis/wiki/v2/spaces/:space_id/nodes
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="wiki:wiki" desc="查看、编辑和管理知识库" support_app_types="custom,isv" tags="">查看、编辑和管理知识库</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
            <md-td>
                **✓**
            </md-td>
            <md-td>
                **✓**
            </md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[获取子节点列表](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space-node/list)

`GET` /open-apis/wiki/v2/spaces/:space_id/nodes
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="wiki:wiki" desc="查看、编辑和管理知识库" support_app_types="custom,isv" tags="">查看、编辑和管理知识库</md-perm>
                    <md-perm name="wiki:wiki:readonly" desc="查看知识库" support_app_types="custom,isv" tags="">查看知识库</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
            <md-td>
                **✓**
            </md-td>
            <md-td>
                **✓**
            </md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[获取节点信息](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space/get_node)

`GET` /open-apis/wiki/v2/spaces/get_node
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="wiki:wiki" desc="查看、编辑和管理知识库" support_app_types="custom,isv" tags="">查看、编辑和管理知识库</md-perm>
                    <md-perm name="wiki:wiki:readonly" desc="查看知识库" support_app_types="custom,isv" tags="">查看知识库</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
            <md-td>
                **✓**
            </md-td>
            <md-td>
                **✓**
            </md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[添加已有云文档至知识库](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space-node/move_docs_to_wiki)

`POST` /open-apis/wiki/v2/spaces/:space_id/nodes/move_docs_to_wiki
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="wiki:wiki" desc="查看、编辑和管理知识库" support_app_types="custom,isv" tags="">查看、编辑和管理知识库</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
            <md-td>
                **✓**
            </md-td>
            <md-td>
                **✓**
            </md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[知识空间内移动节点](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space-node/move)

`POST` /open-apis/wiki/v2/spaces/:space_id/nodes/:node_token/move
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="wiki:wiki" desc="查看、编辑和管理知识库" support_app_types="custom,isv" tags="">查看、编辑和管理知识库</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
            <md-td>
                **✓**
            </md-td>
            <md-td>
                **✓**
            </md-td>
        </md-tr>

    </md-tbody>
</md-table>
:::
## 资源：任务 Task
对于耗时比较长的操作，例如[添加已有云文档至知识库](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space-node/move_docs_to_wiki)，会以异步任务来表示。

## 字段说明

:::html
<md-table>
  <md-thead>
      <md-tr>
      <md-th style="width: 20%;">名称</md-th>
      <md-th style="width: 20%;">类型</md-th>
      <md-th style="width: 50%;">描述</md-th>
      </md-tr>
  </md-thead>
  
  <md-tbody>

<md-tr>
	<md-td>
	<md-text type="field-name" >task_id</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	一个知识空间的唯一标识。  <br><br>
    

      
**示例值**："7078885194417045524-8316a3d38e2ef0e7c69149d3db4590ec031d9cbc"

**字段权限要求（任选其一）**：<br>
<md-perm name="wiki:wiki" desc="查看、编辑和管理知识库" support_app_types="custom,isv" tags="">查看、编辑和管理知识库</md-perm>
<md-perm name="wiki:wiki:readonly" desc="查看知识库" support_app_types="custom,isv" tags="">查看知识库</md-perm>
	</md-td>
</md-tr>

  </md-tbody>
</md-table>
:::

### 方法列表
>  “商店”代表 [应用商店应用](/ssl:ttdoc/home/app-types-introduction/overview)；“自建”代表 [企业自建应用](/ssl:ttdoc/home/app-types-introduction/overview)
:::html
<md-table>
    <md-thead>
        <tr>
            <md-th style="width: 70%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>
            <md-th style="width: 10%;">权限要求（满足任一）</md-th>
            <md-th style="width: 10%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>
            <md-th style="width: 5%;">商店</md-th>
            <md-th style="width: 5%;">自建</md-th>
        </tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[获取任务结果](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/task/get)

`GET` /open-apis/wiki/v2/tasks/:task_id
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="wiki:wiki" desc="查看、编辑和管理知识库" support_app_types="custom,isv" tags="">查看、编辑和管理知识库</md-perm>
                    <md-perm name="wiki:wiki:readonly" desc="查看知识库" support_app_types="custom,isv" tags="">查看知识库</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
            <md-td>
                **✓**
            </md-td>
            <md-td>
                **✓**
            </md-td>
        </md-tr>

    </md-tbody>
</md-table>
:::

## 权限说明

知识空间具有灵活的权限管控，以下描述通常涉及的权限点位。接口具体权限要求请查看接口文档**知识库权限要求**。

### 节点阅读权限

允许查看节点/文档。

拥有编辑权限时自动拥有阅读权限。

### 容器编辑权限

允许编辑文档。允许添加/删除子节点。

知识空间管理员拥有所有节点的容器编辑权限，且不可移除。

### 单页面编辑权限

允许编辑文档。但不允许添加/删除子节点。

### 知识空间成员默认权限

知识空间成员默认权限为阅读权限，可以在知识空间设置页修改。

### 应用/机器人如何获得权限

有两种途径：添加为知识空间成员/管理员 或 添加为文档协作者。

1. [添加为知识空间成员/管理员](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/wiki-qa#b5da330b)。
2. [添加为文档协作者](/ssl:ttdoc/ukTMukTMukTM/uIzNzUjLyczM14iM3MTN/faq#40c028dd)。