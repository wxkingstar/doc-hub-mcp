<!--
title: 订阅云文档事件
id: 7094878915034464284
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/subscribe
updatedAt: 1752548674000
source: https://open.feishu.cn/document/server-docs/docs/drive-v1/event/subscribe
-->
# 订阅云文档事件

订阅云文档的各类通知事件。调用该接口并在开发者后台添加事件后，当云文档发生指定事件时，系统会向配置的地址发送事件。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=drive&version=v1&resource=file&method=subscribe)

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
了解事件订阅的整体流程，参考[事件概述](/ssl:ttdoc/ukTMukTMukTM/uUTNz4SN1MjL1UzM)。了解云文档支持的事件类型，参考[事件列表](/ssl:ttdoc/ukTMukTMukTM/uYDNxYjL2QTM24iN0EjN/event-list)。
</md-alert>
:::

## 注意事项
- 文档管理者仅能接收到[文件编辑](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/event/file-edited)、[多维表格字段变更](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/events/bitable_field_changed)、[多维表格记录变更](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/events/bitable_record_changed)事件。
- 若应用是以应用身份（`tenant_access_token`） 订阅的事件，在接收事件时需要同时申请应用和用户两个身份接收事件的权限。例如，要订阅 [文件夹下文件创建](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/events/created_in_folder) 事件，你需要在开发者后台，为应用同时开通两个身份的 `space:document.event:read` 权限。

## 前提条件
- 调用该接口之前，请确保在开发者后台配置了订阅方式并添加了具体事件。详情参考[配置订阅方式](/ssl:ttdoc/ukTMukTMukTM/uYDNxYjL2QTM24iN0EjN/event-subscription-configure-/request-url-configuration-case)和[添加事件](/ssl:ttdoc/ukTMukTMukTM/uYDNxYjL2QTM24iN0EjN/event-subscription-configure-/subscription-event-case)。
- 文档的通知事件仅支持文档拥有者和文档管理者订阅。调用接口前请确保应用或用户具有文档可管理权限。


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
      <md-td>https://open.feishu.cn/open-apis/drive/v1/files/:file_token/subscribe</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>POST</md-td>
    </md-tr>
    <md-tr>
      <md-th>接口频率限制</md-th>
      <md-td>[1000 次/分钟、50 次/秒](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
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
            <md-perm name="docs:doc" desc="查看、评论、编辑和管理文档" support_app_types="custom,isv" tags="">查看、评论、编辑和管理文档</md-perm>
            <md-perm name="docs:event:subscribe" desc="订阅云文档事件" support_app_types="custom,isv" tags="">订阅云文档事件</md-perm>
            <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
            <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
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
	<md-text type="field-name" >file_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档的 token。了解如何获取各类云文档的 token，参考[云空间常见问题](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/faq)。

**示例值**："doccnfYZzTlvXqZIGTdAHKabcef"
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
	<md-text type="field-name" >file_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	云文档类型

**示例值**：docx

**可选值有**：
<md-enum>
<md-enum-item key="doc" >旧版文档。已不推荐使用</md-enum-item>
<md-enum-item key="docx" >新版文档</md-enum-item>
<md-enum-item key="sheet" >电子表格</md-enum-item>
<md-enum-item key="bitable" >多维表格</md-enum-item>
<md-enum-item key="file" >文件</md-enum-item>
<md-enum-item key="folder" >文件夹</md-enum-item>
<md-enum-item key="slides" >幻灯片</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >event_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	事件类型。
- 若 `file_type` 为 `folder`，需要填写该字段，且字段必须填写为 `file.created_in_folder_v1`，表示订阅[文件夹下文件创建](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/events/created_in_folder)事件
- 若 `file_type` 不为 `folder`，请勿填写该字段。对于文档、电子表格、多维表格等云文档类型，目前仅支持订阅所有相关的云文档事件，暂不支持只订阅该云文档类型下的某个或某些事件

**示例值**：file.created_in_folder_v1
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


  </md-dt-tbody>
</md-dt-table>
:::



### 响应体示例
:::html
<md-code-json>
{
    "code": 0,
    "msg": "success",
    "data": {}
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
  <md-td>1069601</md-td>
  <md-td>fail</md-td>
  <md-td>重试，若稳定失败请联系[技术支持](https://applink.feishu.cn/client/helpdesk)</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1069602</md-td>
  <md-td>param error</md-td>
  <md-td>检查参数有效性</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>1069603</md-td>
  <md-td>forbidden</md-td>
  <md-td>无权限操作，可能是如下原因：
* 调用身份无文档管理权限
* 当前租户未开启文档访问记录功能

请参考以下方式为调用身份开通文档管理权限：

- 如果你使用的是 `tenant_access_token`，意味着当前应用没有云文档权限。你需通过云文档网页页面右上方 **「...」** -> **「...更多」** ->**「添加文档应用」** 入口为应用添加管理权限。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/22c027f63c540592d3ca8f41d48bb107_CSas7OYJBR.png?height=1994&maxWidth=550&width=3278)
    
    **注意**：在 **添加文档应用** 前，你需确保目标应用至少开通了一个云文档或多维表格的 [API 权限](/ssl:ttdoc/ukTMukTMukTM/uYTM5UjL2ETO14iNxkTN/scope-list)。否则你将无法在文档应用窗口搜索到目标应用。

    ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9f3353931fafeea16a39f0eb887db175_0tjzC9P3zU.png?maxWidth=550)

- 如果你使用的是 `user_access_token`，意味着当前用户没有云文档权限。你需通过云文档网页页面右上方 **分享** 入口为当前用户添加管理权限。

  ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3e052d3bac56f9441296ae22e2969d63_a2DEYrJup8.png?height=278&maxWidth=550&width=1383)

了解具体操作步骤或其它添加权限方式，参考[云文档常见问题 3](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#16c6475a)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1069604</md-td>
  <md-td>document not found</md-td>
  <md-td>检查文件是否存在</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




