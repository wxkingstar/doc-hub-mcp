<!--
title: 创建数据知识
id: 7441589456115892227
fullPath: /uAjLw4CM/ukTMukTMukTM/aily-v1/app-data_asset/create
updatedAt: 1752154988000
source: https://open.feishu.cn/document/aily-v1/data-knowledge/data-knowledge-management/create
-->
# 创建数据知识

在 Aily 中添加单个数据知识{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=aily&version=v1&resource=app.data_asset&method=create)

:::html
<md-alert type="tip">
- 仅支持开发环境
- 开发者需要 Aily 平台的应用协作者角色，包括管理员、开发者、运维人员
- 使用应用身份仅支持[ Aily 平台](https://aily.feishu.cn)渠道的应用身份
</md-alert>
:::

:::html
<md-alert type="warn">

</md-alert>
:::

:::html
<md-alert type="error">

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
      <md-td>https://open.feishu.cn/open-apis/aily/v1/apps/:app_id/data_assets</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>POST</md-td>
    </md-tr>
    <md-tr>
      <md-th>接口频率限制</md-th>
      <md-td>[20 次/秒](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
    </md-tr>
    <md-tr>
      <md-th>支持的应用类型</md-th>
      <md-td>
      <md-app-support types="custom"></md-app-support>
      </md-td>
    </md-tr>
    <md-tr>
      <md-th>
            权限要求
            <md-tooltip type="info">调用该 API 所需的权限。开启其中任意一项权限即可调用</md-tooltip>
            
      </md-th>
      <md-td>
            <md-perm name="aily:data_asset:write" desc="创建、更新、删除智能伙伴创建平台数据知识资产" support_app_types="custom" tags="">创建、更新、删除智能伙伴创建平台数据知识资产</md-perm>
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
	<md-text type="field-name" >app_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	Aily 平台的应用的APPID，可以直接从 Aily 应用的URL中获取。获取示例：/ai/{APPID}

**示例值**："spring_dfasdf__c"

**数据校验规则**：

- 长度范围：`0` ～ `255` 字符
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
	<md-text type="field-name" >tenant_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	应用环境，枚举值：
- `online`：线上环境（默认值）
- `dev`：开发环境；目前只支持 `dev`

**示例值**：dev

**数据校验规则**：

- 长度范围：`0` ～ `255` 字符
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
	<md-text type="field-name" >connect_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	连接类型

**示例值**："direct"

**可选值有**：
<md-enum>
<md-enum-item key="import" >导入模式</md-enum-item>
<md-enum-item key="direct" >直连模式</md-enum-item>
</md-enum>

**数据校验规则**：

- 长度范围：`0` ～ `255` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >source_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	数据源类型

**示例值**："file"

**可选值有**：
<md-enum>
<md-enum-item key="file" >文件，只支持导入模式</md-enum-item>
<md-enum-item key="lark_wiki_space" >飞书知识空间，只支持直连模式</md-enum-item>
<md-enum-item key="lark_doc" >飞书云文档，导入模式只支持docx</md-enum-item>
<md-enum-item key="lark_helpdesk" >飞书服务台，只支持直连模式</md-enum-item>
</md-enum>

**数据校验规则**：

- 长度范围：`0` ～ `255` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >import_knowledge_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >data_asset_import_knowledge_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	知识导入配置
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >chunk_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >data_asset_knowledge_chunk_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	知识切片配置
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >rule_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	切片规则

**示例值**："intelligent"

**可选值有**：
<md-enum>
<md-enum-item key="separator" >按标识符</md-enum-item>
<md-enum-item key="intelligent" >智能切片</md-enum-item>
</md-enum>

**数据校验规则**：

- 长度范围：`0` ～ `255` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >separate_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	切片分割符类型

**示例值**："paragraph"

**可选值有**：
<md-enum>
<md-enum-item key="paragraph" >段落分隔符："\n\n"、"\n"、空格</md-enum-item>
<md-enum-item key="title" >标题分割符：######</md-enum-item>
</md-enum>

**数据校验规则**：

- 长度范围：`0` ～ `255` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >size</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	分段最大长度（字符），按标识符切片时必须填写

**示例值**：600

**数据校验规则**：

- 取值范围：`200` ～ `1000`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >overlap</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	分段重叠字符数，按标识符切片时必须填写，不能超过size的数值

**示例值**：10

**数据校验规则**：

- 取值范围：`0` ～ `200`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >file</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >data_asset_import_knowledge_file</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	知识导入-文件
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
	否
	</md-dt-td>
	<md-dt-td>
	文件标题

**示例值**："文件标题"

**数据校验规则**：

- 长度范围：`0` ～ `255` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	上传文件获取到的token。和content二选一，优先使用token。

**示例值**："bb690637b49440b08f39459a2fdcd2ca"

**数据校验规则**：

- 长度范围：`0` ～ `255` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文件内容。和token二选一，优先使用token。有长度限制，大文件优先使用token方式。

**示例值**："这是文件内容"

**数据校验规则**：

- 长度范围：`0` ～ `65536` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >mime_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文件内容对应的 MIME 类型，必须填写
可选值：
- text/plain (.txt)
- application/pdf (.pdf)
- application/vnd.openxmlformats-officedocument.presentationml.presentation (.pptx)
- application/vnd.openxmlformats-officedocument.wordprocessingml.document (.docx)

**示例值**："application/pdf"

**数据校验规则**：

- 长度范围：`0` ～ `255` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文件源的URL

**示例值**："https://document.com/1"

**数据校验规则**：

- 长度范围：`0` ～ `65535` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >lark_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >data_asset_import_knowledge_lark_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	知识导入-飞书云文档
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	云文档类型

**示例值**："docx"

**可选值有**：
<md-enum>
<md-enum-item key="doc" >飞书文档</md-enum-item>
<md-enum-item key="file" >飞书文件</md-enum-item>
<md-enum-item key="wiki" >飞书知识库</md-enum-item>
<md-enum-item key="docx" >飞书新版文档</md-enum-item>
<md-enum-item key="folder" >飞书文件夹</md-enum-item>
</md-enum>

**数据校验规则**：

- 长度范围：`0` ～ `255` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	云文档token，可以通过[搜索云文档](https://open.larkoffice.com/document/server-docs/docs/drive-v1/search/document-search)API获取

**示例值**："T8FAcuilgC1fdaxkt58vcp91xngh"

**数据校验规则**：

- 长度范围：`0` ～ `255` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >with_sub_docs</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否包含子文档，只有wiki类型的云文档支持

**示例值**：false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >lark_wiki_space</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >data_asset_import_knowledge_wiki</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	知识导入-飞书知识空间
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
	是
	</md-dt-td>
	<md-dt-td>
	飞书知识空间ID，可以通过[搜索 Wiki](https://open.larkoffice.com/document/server-docs/docs/wiki-v2/search_wiki)API获取

**示例值**："798546548961351"

**数据校验规则**：

- 长度范围：`0` ～ `255` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >sub_docs</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >data_asset_import_knowledge_wiki_sub_doc\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	指定知识空间子节点时使用
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	云文档类型，只支持wiki中的云文档

**示例值**："wiki"

**可选值有**：
<md-enum>
<md-enum-item key="wiki" >飞书知识库</md-enum-item>
</md-enum>

**数据校验规则**：

- 长度范围：`0` ～ `255` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	云文档token，可以通过[搜索云文档](https://open.larkoffice.com/document/server-docs/docs/drive-v1/search/document-search)API获取

**示例值**："T8FAcuilgC1fdaxkt58vcp91xngh"

**数据校验规则**：

- 长度范围：`0` ～ `255` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	云文档链接

**示例值**："https://cdas.feishu.cn/wiki/fdisu1"

**数据校验规则**：

- 长度范围：`0` ～ `65535` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	知识空间URL

**示例值**："https://ai-tenant.feishu-boe.cn/wiki/space/7283525110814736404"

**数据校验规则**：

- 长度范围：`0` ～ `65535` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >lark_helpdesk</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >data_asset_import_knowledge_helpdesk</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	知识导入-飞书服务台
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >helpdesk_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	飞书服务台ID，可以通过[服务台-接入指南](https://open.larkoffice.com/document/server-docs/helpdesk-v1/access-guide) 获取

**示例值**："123"

**数据校验规则**：

- 长度范围：`0` ～ `255` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >description</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >map&lt;string, string&gt;</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	数据知识描述信息

**示例值**：{"zh_cn":"描述"}
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "connect_type": "direct",
    "source_type": "file",
    "import_knowledge_setting": {
        "chunk_setting": {
            "rule_type": "intelligent",
            "separate_type": "paragraph",
            "size": 600,
            "overlap": 10
        },
        "file": {
            "title": "文件标题",
            "token": "bb690637b49440b08f39459a2fdcd2ca",
            "content": "这是文件内容",
            "mime_type": "application/pdf",
            "url": "https://document.com/1"
        },
        "lark_doc": {
            "type": "docx",
            "token": "T8FAcuilgC1fdaxkt58vcp91xngh",
            "with_sub_docs": false
        },
        "lark_wiki_space": {
            "space_id": "798546548961351",
            "sub_docs": [
                {
                    "type": "wiki",
                    "token": "T8FAcuilgC1fdaxkt58vcp91xngh",
                    "url": "https://cdas.feishu.cn/wiki/fdisu1"
                }
            ],
            "url": "https://ai-tenant.feishu-boe.cn/wiki/space/7283525110814736404"
        },
        "lark_helpdesk": {
            "helpdesk_id": "123"
        }
    },
    "description": {
        "zh_cn": "描述"
    }
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
	<md-text type="field-name" >data_asset</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >data_asset</md-text>
	</md-dt-td>
	<md-dt-td>
	数据知识
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >data_asset_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	数据知识ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >label</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >map&lt;string, string&gt;</md-text>
	</md-dt-td>
	<md-dt-td>
	数据知识标题
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >description</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >map&lt;string, string&gt;</md-text>
	</md-dt-td>
	<md-dt-td>
	数据知识描述
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >data_source_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	数据资源类型

**可选值有**：
<md-enum>
<md-enum-item key="excel" >excel</md-enum-item>
<md-enum-item key="pdf" >pdf</md-enum-item>
<md-enum-item key="pptx" >pptx</md-enum-item>
<md-enum-item key="txt" >txt</md-enum-item>
<md-enum-item key="docx" >docx</md-enum-item>
<md-enum-item key="mysql" >mysql</md-enum-item>
<md-enum-item key="postgresql" >postgresql</md-enum-item>
<md-enum-item key="larkbase" >飞书多维表格</md-enum-item>
<md-enum-item key="salesforce" >salesforce</md-enum-item>
<md-enum-item key="fenxiangxiaoke" >分享逍客</md-enum-item>
<md-enum-item key="qianchuan" >巨量千川</md-enum-item>
<md-enum-item key="clickhouse" >clickhouse</md-enum-item>
<md-enum-item key="databricks" >databricks</md-enum-item>
<md-enum-item key="servicedesk" >飞书服务台</md-enum-item>
<md-enum-item key="larkbiz_wiki" >飞书Wiki</md-enum-item>
<md-enum-item key="larkbiz_doc" >旧版飞书云文档，目前已不支持</md-enum-item>
<md-enum-item key="larkbiz_docs" >飞书docs</md-enum-item>
<md-enum-item key="larkbiz_docx" >新版飞书云文档，当前创建的飞书云文档均为此类型</md-enum-item>
<md-enum-item key="larkbiz_pdf" >云盘/wiki中的pdf文件pdf文件</md-enum-item>
<md-enum-item key="larkbiz_word" >云盘/wiki中的.docx（Word）</md-enum-item>
<md-enum-item key="larkbiz_pptx" >云盘/wiki中的.pptx（Powerpoint）</md-enum-item>
<md-enum-item key="larkbiz_sheets" >飞书电子表格</md-enum-item>
<md-enum-item key="larkbiz_base" >飞书多维表格</md-enum-item>
<md-enum-item key="larkbiz_personalfolder" >飞书个人文件夹</md-enum-item>
<md-enum-item key="larkbiz_sharedfolder" >飞书共享文件夹</md-enum-item>
<md-enum-item key="object" >数据表</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >connect_status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	数据连接状态

**可选值有**：
<md-enum>
<md-enum-item key="awaiting" >等待连接</md-enum-item>
<md-enum-item key="syncing" >连接中</md-enum-item>
<md-enum-item key="successful" >连接成功</md-enum-item>
<md-enum-item key="continuously_syncing" >增量同步中</md-enum-item>
<md-enum-item key="partially_successful" >部分成功</md-enum-item>
<md-enum-item key="failed" >连接失败</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >tags</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >data_asset_tag\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	数据知识分类列表
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >data_asset_tag_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	数据知识分类名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	数据知识分类ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >items</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >data_asset_item\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	数据知识项列表
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >data_asset_item_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	数据知识项ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >api_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	数据知识项标识
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >label</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >map&lt;string, string&gt;</md-text>
	</md-dt-td>
	<md-dt-td>
	数据知识项标题
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >description</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >map&lt;string, string&gt;</md-text>
	</md-dt-td>
	<md-dt-td>
	数据知识项描述
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >resources</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >data_asset_resource\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	数据知识资源
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >resource_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	数据知识资源ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >resource_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	数据知识资源类型

**可选值有**：
<md-enum>
<md-enum-item key="dataset" >数据视图</md-enum-item>
<md-enum-item key="vector" >知识视图</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >connect_failed_reason</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	连接状态失败信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >connect_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	数据连接类型

**可选值有**：
<md-enum>
<md-enum-item key="import" >导入</md-enum-item>
<md-enum-item key="direct" >直连</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >created_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	创建时间，毫秒时间戳
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >updated_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	更新时间，毫秒时间戳
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
        "data_asset": {
            "data_asset_id": "asset_aadg3mcgvpybu",
            "label": {
                "zh_cn": "标题"
            },
            "description": {
                "zh_cn": "描述"
            },
            "data_source_type": "excel",
            "connect_status": "successful",
            "tags": [
                {
                    "data_asset_tag_id": "spring_5862e4fea8__c__asset_tag_aadg2b5ql4gbs",
                    "name": "电影"
                }
            ],
            "items": [
                {
                    "data_asset_item_id": "asset_item_aadg3mcgvpydu",
                    "api_name": "movie",
                    "label": {
                        "zh_cn": "标题"
                    },
                    "description": {
                        "zh_cn": "描述"
                    },
                    "resources": [
                        {
                            "resource_id": "spring_5862e4fea8__c__dataset_aadg3lxm4j6mg",
                            "resource_type": "dataset"
                        }
                    ]
                }
            ],
            "connect_failed_reason": "连接超时",
            "connect_type": "direct",
            "created_time": "1711975665710",
            "updated_time": "1711975665710"
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
  <md-td>2700001</md-td>
  <md-td>param is invalid</md-td>
  <md-td>参数错误，请结合说明文档排查</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>2701004</md-td>
  <md-td>permission denied</md-td>
  <md-td>无权限，请检查是否有开发者或者运维权限

</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2700026</md-td>
  <md-td>only support development environment</md-td>
  <md-td>仅支持开发环境操作</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2700027</md-td>
  <md-td>only supports uploading a single file</md-td>
  <md-td>仅支持上传单个文件</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2700028</md-td>
  <md-td>invalid chunk setting parameter</md-td>
  <md-td>无效的切片参数</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2700029</md-td>
  <md-td>the data source information is invalid</md-td>
  <md-td>数据源信息无效</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2700030</md-td>
  <md-td>data source not found</md-td>
  <md-td>未找到数据源</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>2700031</md-td>
  <md-td>import cloud document permission check failed</md-td>
  <md-td>导入云文档权限检查失败，操作者需要有云文档的下载权限</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2700032</md-td>
  <md-td>unsupported data connection type</md-td>
  <md-td>不支持的数据连接类型，请结合文档排查</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2700033</md-td>
  <md-td>unsupported data source type</md-td>
  <md-td>不支持的数据源类型，请结合文档排查</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2700034</md-td>
  <md-td>unsupported file types</md-td>
  <md-td>不支持的文件类型</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2700460</md-td>
  <md-td>failed to get doc meta</md-td>
  <md-td>获取云文档元信息失败，请检查云文档参数是否正确以及操作者是否拥有相关文档的权限</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2700036</md-td>
  <md-td>cloud document-related resources only support user identity calls</md-td>
  <md-td>云文档相关资源仅支持用户身份调用</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2700472</md-td>
  <md-td>some param miss or invalid</md-td>
  <md-td>请求参数缺失或者不合法</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




