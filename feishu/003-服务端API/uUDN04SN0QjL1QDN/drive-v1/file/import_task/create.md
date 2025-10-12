<!--
title: 创建导入任务
id: 6987581325629947905
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/drive-v1/import_task/create
updatedAt: 1728628832000
source: https://open.feishu.cn/document/server-docs/docs/drive-v1/import_task/create
-->
# 创建导入任务

该接口用于创建导入文件的任务，并返回导入任务 ID。导入文件指将本地文件如 Word、TXT、Markdown、Excel 等格式的文件导入为某种格式的飞书在线云文档。该接口为异步接口，需要继续调用[查询导入任务结果](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/import_task/get)接口获取导入结果。了解完整的导入文件步骤，参考[导入文件概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/import_task/import-user-guide)。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=drive&version=v1&resource=import_task&method=create)

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

## 前提条件
创建导入任务前，你需先调用[上传素材](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/upload_all)或[上传文件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/upload_all)接口获取源文件的 token。

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
      <md-td>https://open.feishu.cn/open-apis/drive/v1/import_tasks</md-td>
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
            <md-perm name="docs:document:import" desc="查看、创建云文档导入任务" support_app_types="custom,isv" tags="">查看、创建云文档导入任务</md-perm>
            <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
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
	<md-text type="field-name" >file_extension</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	要导入的文件的扩展名。了解支持的文件格式，参考[导入文件概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/import_task/import-user-guide)。

**注意**：此处填写的文件扩展名需与实际文件的后缀名保持严格一致。请注意区分后缀为 “markdown”、“md”、“mark” 的 Markdown 文件，并在填写相关参数时保持后缀名一致。否则将返回 1069910 错误码。

**示例值**："xlsx"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >file_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	要导入文件的 token。创建任务前，你需先调用[上传素材](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/upload_all)或[上传文件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/upload_all)接口获取源文件的 token。了解更多，参考[导入文件概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/import_task/import-user-guide)。

**示例值**："boxcnrHpsg1QDqXAAAyachabcef"

**数据校验规则**：

- 最大长度：`27` 字符
	</md-dt-td>
</md-dt-tr>


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
	目标云文档格式。不同文件支持的云文档格式不同。详情参考[导入文件概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/import_task/import-user-guide)。可选值如下所示：
- `docx`：新版文档
- `sheet`：电子表格
- `bitable`：多维表格

**示例值**："sheet"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >file_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	导入后的在线云文档名称。参数为空时，使用上传本地文件时的文件名。

**示例值**："销售表"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >point</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >import_task_mount_point</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	挂载点（导入后的云文档所在位置）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >mount_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	挂载类型。取固定值 1，表示将该云文档挂载至云空间下。

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >挂载到云空间</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >mount_key</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	云文档挂载的文件夹的 token，即云空间下文件夹的 token。空表示云空间根目录。了解如何获取文件夹 token，参考[文件夹概述](/ssl:ttdoc/ukTMukTMukTM/ugTNzUjL4UzM14CO1MTN/folder-overview)。

**示例值**："AbqrfuRTjlJEIJduwDwcnIabcef"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "file_extension": "xlsx",
    "file_token": "boxcnrHpsg1QDqXAAAyachabcef",
    "type": "sheet",
    "file_name": "销售表",
    "point": {
        "mount_type": 1,
        "mount_key": "AbqrfuRTjlJEIJduwDwcnIabcef"
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
	<md-text type="field-name" >ticket</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	导入任务 ID
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
        "ticket": "7369583175086912356"
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
  <md-td>1069901</md-td>
  <md-td>internal error</md-td>
  <md-td>服务内部错误，请联系[技术支持](https://applink.feishu.cn/TLJpeNdW)</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>1069902</md-td>
  <md-td>no permission</md-td>
  <md-td>当前访问身份没有文档阅读或编辑权限。请参考以下方式解决：
- 如果你使用的是 `tenant_access_token`，意味着当前应用没有文档阅读或编辑权限。你需通过云文档网页页面右上方 **「...」** -> **「...更多」** ->**「添加文档应用」** 入口为应用添加文档权限。
- 如果你使用的是 `user_access_token`，意味着当前用户没有文档阅读或编辑权限。你需通过云文档网页页面右上方 **分享** 入口为当前用户添加文档权限。

了解具体操作步骤或其它添加权限方式，参考[云文档常见问题 3](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#16c6475a)。</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1069903</md-td>
  <md-td>internal error</md-td>
  <md-td>服务内部错误，请联系[技术支持](https://applink.feishu.cn/TLJpeNdW)</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1069904</md-td>
  <md-td>invalid param</md-td>
  <md-td>无效参数。请检查文件扩展名参数 file_extension 与导入的文件的扩展名是否一致</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1069905</md-td>
  <md-td>internal error</md-td>
  <md-td>服务内部错误，请联系[技术支持](https://applink.feishu.cn/TLJpeNdW)</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>1069906</md-td>
  <md-td>docs deleted</md-td>
  <md-td>文档已被删除。请检查</md-td>
</md-tr>


<md-tr>
  <md-td>404</md-td>
  <md-td>1069907</md-td>
  <md-td>file token not found</md-td>
  <md-td>文件 token 不存在。请检查要导入文件的 token 是否正确</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>1069908</md-td>
  <md-td>mount point not found or no permission</md-td>
  <md-td>挂载点对应的文件夹不存在，或当前身份无导入至该文件夹的权限。请参考以下步骤解决：
1. 检查文件夹的 token 是否填写正确
2. 检查当前身份是否有导入至文件夹的权限：
    - 如果你使用的是 `tenant_access_token`，意味着应用没有导入至当前文件夹的权限。你需要为该应用添加机器人能力，并将该文件夹分享给含有该机器人的群组，为该应用开通文件夹的编辑权限。
    - 如果你使用的是 `user_access_token`，意味着用户没有导入至当前文件夹的权限。你需将该文件夹分享给该用户身份，为用户开通文件夹的编辑权限。

了解具体操作步骤，参考[开通文件夹权限](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-add-permissions-to-app#5ad9169a)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1069909</md-td>
  <md-td>import file size over limit</md-td>
  <md-td>文件超过 20 MB 限制，无法导入</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1069910</md-td>
  <md-td>import file extension not match</md-td>
  <md-td>上传文件和导入任务文件后缀不一致，请检查</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1069911</md-td>
  <md-td>import file type not match</md-td>
  <md-td>上传文件和导入任务指定的文件类型不一致，请检查</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1069912</md-td>
  <md-td>folder not exist</md-td>
  <md-td>目录不存在</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1069913</md-td>
  <md-td>import file token expired</md-td>
  <md-td>上传文件过期，有效期 5 分钟</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1069914</md-td>
  <md-td>invalid file token</md-td>
  <md-td>导出文档 token 不合法。参考[云文档常见问题](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)了解如何获取文档 token。</md-td>
</md-tr>


<md-tr>
  <md-td>429</md-td>
  <md-td>1069923</md-td>
  <md-td>too many requests</md-td>
  <md-td>请求发生限频，请降低请求频率并稍后重试</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




