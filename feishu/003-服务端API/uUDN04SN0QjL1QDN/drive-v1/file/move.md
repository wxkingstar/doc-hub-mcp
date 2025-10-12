<!--
title: 移动文件或文件夹
id: 7080903916725993474
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/move
updatedAt: 1726818321000
source: https://open.feishu.cn/document/server-docs/docs/drive-v1/file/move
-->
# 移动文件或文件夹

将文件或者文件夹移动到用户云空间的其他位置。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=drive&version=v1&resource=file&method=move)

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
如果你移动的是文件夹，该接口将异步执行，同时返回该异步任务的 ID。你可使用[查询异步任务状态](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/task_check)接口查询任务执行的状态。
</md-alert>
:::

## 使用限制

该接口不支持并发调用，且调用频率上限为 5 QPS 且 10000次/天。否则会返回 1061045 错误码，可通过稍后重试解决。

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
      <md-td>https://open.feishu.cn/open-apis/drive/v1/files/:file_token/move</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>POST</md-td>
    </md-tr>
    <md-tr>
      <md-th>接口频率限制</md-th>
      <md-td>[20 次/分钟](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
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
            <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
            <md-perm name="space:document:move" desc="移动云空间文件夹和云文档" support_app_types="custom,isv" tags="">移动云空间文件夹和云文档</md-perm>
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
	<md-text type="field-name" >file_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	需要移动的文件或文件夹 token。

了解如何获取文件 token，参考[文件概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/file-overview)。

了解如何获取文件夹 token，参考[文件夹概述](/ssl:ttdoc/ukTMukTMukTM/ugTNzUjL4UzM14CO1MTN/folder-overview)。

**示例值**："boxcnrHpsg1QDqXAAAyachabcef"
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
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文件类型。该参数为必填，请忽略左侧必填列的“否”。如果该值为空或者与文件实际类型不匹配，接口会返回失败。

**示例值**："file"

**可选值有**：
<md-enum>
<md-enum-item key="file" >普通文件类型</md-enum-item>
<md-enum-item key="docx" >新版文档类型</md-enum-item>
<md-enum-item key="bitable" >多维表格类型</md-enum-item>
<md-enum-item key="doc" >文档类型</md-enum-item>
<md-enum-item key="sheet" >电子表格类型</md-enum-item>
<md-enum-item key="mindnote" >思维笔记类型</md-enum-item>
<md-enum-item key="folder" >文件夹类型</md-enum-item>
<md-enum-item key="slides" >幻灯片类型</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >folder_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	目标文件夹的 token。了解如何获取文件夹 token，参考[文件夹概述](/ssl:ttdoc/ukTMukTMukTM/ugTNzUjL4UzM14CO1MTN/folder-overview)。

**示例值**："fldbcO1UuPz8VwnpPx5a92abcef"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "type": "file",
    "folder_token": "fldbcO1UuPz8VwnpPx5a92abcef"
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
	<md-text type="field-name" >task_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	异步任务 ID，移动文件夹时返回。你可继续使用[查询异步任务状态](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/task_check)接口查询任务执行状态
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
        "task_id": "7360595374803812356"
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
  <md-td>500</md-td>
  <md-td>1061001</md-td>
  <md-td>internal error.</md-td>
  <md-td>服务内部错误，包括超时，错误码没处理。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1061002</md-td>
  <md-td>params error.</md-td>
  <md-td>请检查请求参数是否正确。</md-td>
</md-tr>


<md-tr>
  <md-td>404</md-td>
  <md-td>1061003</md-td>
  <md-td>not found.</md-td>
  <md-td>请确认对应资源是否存在。</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>1061004</md-td>
  <md-td>forbidden.</md-td>
  <md-td>当前调用身份没有文件或文件夹的阅读或编辑等权限。请参考以下方式解决：

- 若上传素材，请确保当前调用身份具有目标云文档的编辑权限
- 若上传文件，请确保当前调用身份具有文件夹的编辑权限
- 若对文件或文件夹进行增删改等操作，请确保调用身份具有足够文档权限：
    - 对于新建文件接口，调用身份需要有目标文件夹的编辑权限
    - 对于复制文件接口，调用身份需要有文件的阅读或编辑权限、并且具有目标文件夹的编辑权限
    - 对于移动文件接口，调用身份需要有被移动文件的可管理权限、被移动文件所在位置的编辑权限、目标位置的编辑权限
    - 对于删除文件接口，调用身份需要具有以下两种权限之一：
        - 该应用或用户是文件所有者并且具有该文件所在父文件夹的编辑权限
        - 该应用或用户并非文件所有者，但是该文件所在父文件夹的所有者或者拥有该父文件夹的所有权限（full access）

了解开通权限步骤，参考[如何为应用开通云文档相关资源的权限](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-add-permissions-to-app)。</md-td>
</md-tr>


<md-tr>
  <md-td>404</md-td>
  <md-td>1061007</md-td>
  <md-td>file has been delete.</md-td>
  <md-td>请确认对应节点未被删除。</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>1062524</md-td>
  <md-td>source parent no permission.</md-td>
  <md-td>请检查是否拥有移动文件所在文件夹的编辑权限。</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>1062535</md-td>
  <md-td>destination parent no permission.</md-td>
  <md-td>请检查目标文件夹是否有编辑权限。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1062507</md-td>
  <md-td>parent node out of sibling num.</md-td>
  <md-td>云空间中根目录或文件夹的单层节点超限。上限为 1500 个，你可通过将文件新建到不同文件夹中解决。</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




