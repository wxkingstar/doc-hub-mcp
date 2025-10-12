<!--
title: 判断用户云文档权限
id: 7186547801970524161
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/drive-v1/permission-member/auth
updatedAt: 1751544861000
source: https://open.feishu.cn/document/server-docs/docs/permission/permission-member/auth
-->
# 判断用户权限

判断当前请求的应用或用户是否具有指定云文档的指定权限，权限包括阅读、编辑、分享、评论、导出等权限。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=drive&version=v1&resource=permission.member&method=auth)

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
      <md-td>https://open.feishu.cn/open-apis/drive/v1/permissions/:token/members/auth</md-td>
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
            <md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理多维表格</md-perm>
            <md-perm name="wiki:wiki" desc="查看、编辑和管理知识库" support_app_types="custom,isv" tags="">查看、编辑和管理知识库</md-perm>
            <md-perm name="docs:doc" desc="查看、评论、编辑和管理文档" support_app_types="custom,isv" tags="">查看、评论、编辑和管理文档</md-perm>
            <md-perm name="docs:permission.member:auth" desc="判断当前用户是否有云文档权限" support_app_types="custom,isv" tags="">判断当前用户是否有云文档权限</md-perm>
            <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
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


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >action</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	需要判断的权限

**示例值**：view

**可选值有**：
<md-enum>
<md-enum-item key="view" >阅读</md-enum-item>
<md-enum-item key="edit" >编辑</md-enum-item>
<md-enum-item key="share" >分享</md-enum-item>
<md-enum-item key="comment" >评论</md-enum-item>
<md-enum-item key="export" >导出</md-enum-item>
<md-enum-item key="copy" >拷贝</md-enum-item>
<md-enum-item key="print" >打印</md-enum-item>
<md-enum-item key="manage_public" >管理权限设置</md-enum-item>
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
	<md-text type="field-name" >auth_result</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	当前应用或用户是否有指定的权限。可选值：
- true：当前应用或用户具有该权限
- false：当前应用或用户没有该权限
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
        "auth_result": true
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
  <md-td>404</md-td>
  <md-td>1063005</md-td>
  <md-td>Resource is deleted</md-td>
  <md-td>资源已删除，请确认云文档是否还存在。</md-td>
</md-tr>


<md-tr>
  <md-td>429</md-td>
  <md-td>1063006</md-td>
  <md-td>Too many request</md-td>
  <md-td>请求发生限频，请降低请求频率并稍后重试。</md-td>
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




