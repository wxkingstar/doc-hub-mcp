<!--
title: 更新云文档权限设置
id: 7224057619119128580
fullPath: /ukTMukTMukTM/uIzNzUjLyczM14iM3MTN/drive-v2/permission-public/patch
updatedAt: 1751544869000
source: https://open.feishu.cn/document/server-docs/docs/permission/permission-public/patch-2
-->
# 更新云文档权限设置

更新指定云文档的权限设置，包括是否允许内容被分享到组织外、谁可以查看、添加、移除协作者、谁可以复制内容等设置。
{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=drive&version=v2&resource=permission.public&method=patch)

:::html
<md-alert type="tip">
本接口为增量更新，即仅更新传入的参数对应的权限设置。若参数不传，则不更新设置。
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
      <md-td>https://open.feishu.cn/open-apis/drive/v2/permissions/:token/public</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>PATCH</md-td>
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
            <md-perm name="wiki:wiki" desc="查看、编辑和管理知识库" support_app_types="custom,isv" tags="">查看、编辑和管理知识库</md-perm>
            <md-perm name="docs:doc" desc="查看、评论、编辑和管理文档" support_app_types="custom,isv" tags="">查看、评论、编辑和管理文档</md-perm>
            <md-perm name="docs:permission.setting:write_only" desc="修改云文档权限设置" support_app_types="custom,isv" tags="">修改云文档权限设置</md-perm>
            <md-perm name="docx:document" desc="创建及编辑新版文档" support_app_types="custom,isv" tags="">创建及编辑新版文档</md-perm>
            <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
            <md-perm name="drive:file" desc="上传、下载文件到云空间" support_app_types="custom,isv" tags="">上传、下载文件到云空间</md-perm>
            <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
            <md-perm name="bitable:bitable" desc="查看、评论、编辑和管理多维表格（套件内）" support_app_types="custom" tags="history,offline">查看、评论、编辑和管理多维表格（套件内）</md-perm>
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
	<md-text type="field-name" >token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档的 token，需要与 type 参数指定的云文档类型相匹配。可参考[如何获取云文档资源相关 token](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)。

**示例值**："doccnBKgoMyY5OMbUG6Fioabcef"
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
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	云文档类型，需要与云文档的 token 相匹配。

**示例值**：docx

**可选值有**：
<md-enum>
<md-enum-item key="doc" >旧版文档。了解更多，参考[新旧版本文档说明](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/docs/upgraded-docs-access-guide/upgraded-docs-openapi-access-guide)。</md-enum-item>
<md-enum-item key="sheet" >电子表格</md-enum-item>
<md-enum-item key="file" >云空间文件</md-enum-item>
<md-enum-item key="wiki" >知识库节点</md-enum-item>
<md-enum-item key="bitable" >多维表格</md-enum-item>
<md-enum-item key="docx" >新版文档</md-enum-item>
<md-enum-item key="mindnote" >思维笔记</md-enum-item>
<md-enum-item key="minutes" >妙记</md-enum-item>
<md-enum-item key="slides" >幻灯片</md-enum-item>
</md-enum>
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
	<md-text type="field-name" >external_access_entity</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否允许内容被分享到组织外

**示例值**："open"

**可选值有**：
<md-enum>
<md-enum-item key="open" >打开，即允许内容被分享到组织外

**注意**：内容是否支持分享到组织外，还与企业的安全设置相关。如果文档位于知识库中，还与知识空间的安全设置相关。</md-enum-item>
<md-enum-item key="closed" >关闭，即不允许内容被分享到组织外</md-enum-item>
<md-enum-item key="allow_share_partner_tenant" >仅允许内容分享给关联组织。了解关联组织，参考飞书帮助中心文档[关联组织介绍](https://www.feishu.cn/hc/zh-CN/articles/657083794612-%E5%85%B3%E8%81%94%E7%BB%84%E7%BB%87%E4%BB%8B%E7%BB%8D)。<br>
**注意**：只有企业管理后台设置仅允许关联组织分享，才能设置为该值。
</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >security_entity</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	谁可以创建副本、打印、下载

**示例值**："anyone_can_view"

**可选值有**：
<md-enum>
<md-enum-item key="anyone_can_view" >拥有可阅读权限的用户</md-enum-item>
<md-enum-item key="anyone_can_edit" >拥有可编辑权限的用户</md-enum-item>
<md-enum-item key="only_full_access" >拥有可管理权限（包括我）的用户</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >comment_entity</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	谁可以评论

**示例值**："anyone_can_view"

**可选值有**：
<md-enum>
<md-enum-item key="anyone_can_view" >拥有可阅读权限的用户</md-enum-item>
<md-enum-item key="anyone_can_edit" >拥有可编辑权限的用户</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >share_entity</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	从组织维度，设置谁可以查看、添加、移除协作者

**示例值**："anyone"

**可选值有**：
<md-enum>
<md-enum-item key="anyone" >所有可阅读或编辑此文档的用户</md-enum-item>
<md-enum-item key="same_tenant" >组织内所有可阅读或编辑此文档的用户</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >manage_collaborator_entity</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	从协作者维度，设置谁可以查看、添加、移除协作者

**示例值**："collaborator_can_view"

**可选值有**：
<md-enum>
<md-enum-item key="collaborator_can_view" >拥有可阅读权限的协作者</md-enum-item>
<md-enum-item key="collaborator_can_edit" >拥有可编辑权限的协作者</md-enum-item>
<md-enum-item key="collaborator_full_access" >拥有可管理权限（包括我）的协作者</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >link_share_entity</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	链接分享设置

**示例值**："tenant_readable"

**可选值有**：
<md-enum>
<md-enum-item key="tenant_readable" >组织内获得链接的人可阅读</md-enum-item>
<md-enum-item key="tenant_editable" >组织内获得链接的人可编辑</md-enum-item>
<md-enum-item key="partner_tenant_readable" >[关联组织](https://www.feishu.cn/hc/zh-CN/articles/657083794612-%E5%85%B3%E8%81%94%E7%BB%84%E7%BB%87%E4%BB%8B%E7%BB%8D)的人可阅读
<br>
**注意**：只有企业管理后台设置仅允许关联组织分享，才能设置为该值。</md-enum-item>
<md-enum-item key="partner_tenant_editable" >[关联组织](https://www.feishu.cn/hc/zh-CN/articles/657083794612-%E5%85%B3%E8%81%94%E7%BB%84%E7%BB%87%E4%BB%8B%E7%BB%8D)的人可编辑
<br>
**注意**：只有企业管理后台设置仅允许关联组织分享，才能设置为该值。</md-enum-item>
<md-enum-item key="anyone_readable" >互联网上获得链接的任何人可阅读（仅external_access=“open” 时有效）</md-enum-item>
<md-enum-item key="anyone_editable" >互联网上获得链接的任何人可编辑（仅 external_access=“open” 时有效）</md-enum-item>
<md-enum-item key="closed" >关闭链接分享</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >copy_entity</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	谁可以复制内容

**示例值**："anyone_can_view"

**可选值有**：
<md-enum>
<md-enum-item key="anyone_can_view" >拥有可阅读权限的用户</md-enum-item>
<md-enum-item key="anyone_can_edit" >拥有可编辑权限的用户</md-enum-item>
<md-enum-item key="only_full_access" >拥有可管理权限（包括我）的协作者</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "external_access_entity": "open",
    "security_entity": "anyone_can_view",
    "comment_entity": "anyone_can_view",
    "share_entity": "anyone",
    "manage_collaborator_entity": "collaborator_can_view",
    "link_share_entity": "tenant_readable",
    "copy_entity": "anyone_can_view"
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
	<md-text type="field-name" >permission_public</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >permission_public</md-text>
	</md-dt-td>
	<md-dt-td>
	本次更新后的文档权限设置。如权限设置未更新，则不返回对应参数。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >external_access_entity</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	允许内容被分享到组织外

**可选值有**：
<md-enum>
<md-enum-item key="open" >打开，即允许内容被分享到组织外</md-enum-item>
<md-enum-item key="closed" >关闭，即不允许内容被分享到组织外</md-enum-item>
<md-enum-item key="allow_share_partner_tenant" >仅允许分享给关联组织</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >security_entity</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	谁可以创建副本、打印、下载

**可选值有**：
<md-enum>
<md-enum-item key="anyone_can_view" >拥有可阅读权限的用户</md-enum-item>
<md-enum-item key="anyone_can_edit" >拥有可编辑权限的用户</md-enum-item>
<md-enum-item key="only_full_access" >拥有可管理权限（包括我）的用户</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >comment_entity</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	谁可以评论

**可选值有**：
<md-enum>
<md-enum-item key="anyone_can_view" >拥有可阅读权限的用户</md-enum-item>
<md-enum-item key="anyone_can_edit" >拥有可编辑权限的用户</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >share_entity</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	从组织维度，设置谁可以查看、添加、移除协作者

**可选值有**：
<md-enum>
<md-enum-item key="anyone" >所有可阅读或编辑此文档的用户</md-enum-item>
<md-enum-item key="same_tenant" >组织内所有可阅读或编辑此文档的用户</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >manage_collaborator_entity</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	谁可以添加和管理协作者-协作者维度

**可选值有**：
<md-enum>
<md-enum-item key="collaborator_can_view" >拥有可阅读权限的协作者</md-enum-item>
<md-enum-item key="collaborator_can_edit" >拥有可编辑权限的协作者</md-enum-item>
<md-enum-item key="collaborator_full_access" >拥有可管理权限（包括我）的协作者</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >link_share_entity</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	链接分享设置

**可选值有**：
<md-enum>
<md-enum-item key="tenant_readable" >组织内获得链接的人可阅读</md-enum-item>
<md-enum-item key="tenant_editable" >组织内获得链接的人可编辑</md-enum-item>
<md-enum-item key="partner_tenant_readable" >关联组织的人可阅读</md-enum-item>
<md-enum-item key="partner_tenant_editable" >关联组织的人可编辑</md-enum-item>
<md-enum-item key="anyone_readable" >互联网上获得链接的任何人可阅读（仅 external_access_entity=“open” 时有效）</md-enum-item>
<md-enum-item key="anyone_editable" >互联网上获得链接的任何人可编辑（仅 external_access_entity=“open” 时有效）</md-enum-item>
<md-enum-item key="closed" >关闭链接分享</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >copy_entity</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	谁可以复制内容

**可选值有**：
<md-enum>
<md-enum-item key="anyone_can_view" >拥有可阅读权限的用户</md-enum-item>
<md-enum-item key="anyone_can_edit" >拥有可编辑权限的用户</md-enum-item>
<md-enum-item key="only_full_access" >拥有可管理权限（包括我）的协作者</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >lock_switch</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	知识库中的子页面是否已限制权限，不再继承父级页面的权限设置。

**枚举值有：** 
- `true`: 已限制权限
- `false`: 未限制权限

**提示**：当知识库中的子页面权限范围小于父级页面时，该页面权限将默认限制权限。


![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a99780710c3f7e5e390280ff6d87fc47_HIjzKDxscr.png?maxWidth=200)
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
        "permission_public": {
            "external_access_entity": "open",
            "security_entity": "anyone_can_view",
            "comment_entity": "anyone_can_view",
            "share_entity": "anyone",
            "manage_collaborator_entity": "collaborator_can_view",
            "link_share_entity": "tenant_readable",
            "copy_entity": "anyone_can_view",
            "lock_switch": false
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
  <md-td>1063001</md-td>
  <md-td>Invalid parameter</md-td>
  <md-td>参数异常，可能是如下原因：
- 参数类型不匹配，如：
    - 云文档的 token 和 type 不匹配
    - 云文档不存在
    - 添加协作者的 member_id 和 member_type 不匹配
    - 添加的协作者不存在
- 不支持的参数调用，如：
    - 使用 <md-tag mode="inline" type="token-tenant">tenant_access_token</md-tag> 添加部门协作者
    - 给妙记添加可管理角色</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>1063002</md-td>
  <md-td>Permission denied</md-td>
  <md-td>调用身份对应的用户或应用不是云文档的[协作者](https://www.feishu.cn/hc/zh-CN/articles/064037224266-%E4%BA%91%E6%96%87%E6%A1%A3%E5%92%8C%E6%96%87%E4%BB%B6%E5%A4%B9%E5%8D%8F%E4%BD%9C%E8%80%85%E4%BB%8B%E7%BB%8D)或对云文档的权限（如编辑、管理权限）不足。请参考以下方式解决：

- 对于转移所有者接口，你需确保调用身份为云文档的所有者
- 对于协作者、权限设置相关接口，你需先参考[谁可以查看、添加、移除协作者](https://www.feishu.cn/hc/zh-CN/articles/360049067527-%E8%AE%BE%E7%BD%AE%E4%BA%91%E6%96%87%E6%A1%A3%E5%88%86%E4%BA%AB-%E5%A4%8D%E5%88%B6-%E4%B8%8B%E8%BD%BD-%E8%AF%84%E8%AE%BA%E7%AD%89%E6%9D%83%E9%99%90#tabs0|lineguid-Bp0bI)了解当前云文档的权限设置，再为调用身份开通所需权限：
  - 如果你使用的是 `tenant_access_token`，你需通过云文档网页页面右上方 **「...」** -> **「...更多」** ->**「添加文档应用」** 入口为应用添加权限。
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/22c027f63c540592d3ca8f41d48bb107_CSas7OYJBR.png?height=1994&maxWidth=550&width=3278)
    
    **注意**：
     - 在 **添加文档应用** 前，你需确保目标应用至少开通了一个云文档或多维表格的 [API 权限](/ssl:ttdoc/ukTMukTMukTM/uYTM5UjL2ETO14iNxkTN/scope-list)。否则你将无法在文档应用窗口搜索到目标应用。
      - 如果多维表格开启了高级权限，你需为应用添加多维表格的 **可管理** 权限，否则仍无法操作多维表格。

          ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9f3353931fafeea16a39f0eb887db175_0tjzC9P3zU.png?maxWidth=550)

- 如果你使用的是 `user_access_token`，你需通过云文档网页页面右上方 **分享** 入口为当前用户添加权限。

  ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3e052d3bac56f9441296ae22e2969d63_a2DEYrJup8.png?height=278&maxWidth=550&width=1383)

了解具体操作步骤或其它添加权限方式，参考[云文档常见问题 3](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#16c6475a)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1063003</md-td>
  <md-td>Invalid operation</md-td>
  <md-td>非法操作。该错误码表示基本参数校验没有问题，但操作不被允许，可能是如下原因：
- 云文档的协作者数量到达上限，请减少协作者数量
- 因企业设置的管控策略而无法修改权限
- 受可见性限制无法修改权限。例如：
    - **添加用户协作者**：需要调用身份与被授权对象为联系人或同组织内可搜索，且互相未屏蔽。
    - **添加群协作者**：需要调用身份在群内。要使用 `tenant_access_token` 身份添加群协作者，则需要将该应用作为机器人添加至群组中，使应用对群可见。详细步骤参考[如何为应用开通云文档相关资源的权限](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-add-permissions-to-app)。
    - **添加部门协作者**：需要调用身份对部门可见。由于应用对企业内的组织架构都不可见，所以暂不支持通过 `tenant_access_token`  添加部门协作者。
- 给文档所有者添加权限（不允许对文档所有者操作权限）
- 协作者本身已有的权限大于请求参数内设置的权限</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>1063004</md-td>
  <md-td>User has no share permission</md-td>
  <md-td>用户无分享权限，请确认调用身份对该文档是否有分享权限。</md-td>
</md-tr>


<md-tr>
  <md-td>404</md-td>
  <md-td>1063005</md-td>
  <md-td>Resource is deleted</md-td>
  <md-td>资源已删除，请确认云文档是否还存在。</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1066001</md-td>
  <md-td>Internal Error</md-td>
  <md-td>服务内部错误，包括服务端内部超时、错误码没处理等，请联系[技术支持](https://applink.feishu.cn/TLJpeNdW)排查。</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1066002</md-td>
  <md-td>Concurrency error, please retry</md-td>
  <md-td>服务内部错误，请重试或联系[技术支持](https://applink.feishu.cn/TLJpeNdW)排查。</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




