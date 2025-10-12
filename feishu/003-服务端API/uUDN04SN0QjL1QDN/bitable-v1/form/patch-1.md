<!--
title: 更新表单问题
id: 7112628058154893314
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-form-field/patch
updatedAt: 1731477279000
source: https://open.feishu.cn/document/server-docs/docs/bitable-v1/form/patch
-->
# 更新表单问题

更新表单中的问题项。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=bitable&version=v1&resource=app.table.form.field&method=patch)

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
表单视图是多维表格的一种视图类型。每个表单都有唯一标识 `form_id`，即当前视图的 `view_id`。
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
      <md-td>https://open.feishu.cn/open-apis/bitable/v1/apps/:app_token/tables/:table_id/forms/:form_id/fields/:field_id</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>PATCH</md-td>
    </md-tr>
    <md-tr>
      <md-th>接口频率限制</md-th>
      <md-td>[10 次/秒](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
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
            <md-perm name="base:form:update" desc="更新表单数据" support_app_types="custom,isv" tags="">更新表单数据</md-perm>
            <md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理多维表格</md-perm>
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
	<md-text type="field-name" >app_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	多维表格 App 的唯一标识。不同形态的多维表格，其 `app_token` 的获取方式不同：
- 如果多维表格的 URL 以 ==**feishu.cn/base**== 开头，该多维表格的 `app_token` 是下图高亮部分：
    ![app_token.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6916f8cfac4045ba6585b90e3afdfb0a_GxbfkJHZBa.png?height=766&lazyload=true&width=3004)

- 如果多维表格的 URL 以 ==**feishu.cn/wiki**== 开头，你需调用知识库相关[获取知识空间节点信息](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space/get_node)接口获取多维表格的 app_token。当 `obj_type` 的值为 `bitable` 时，`obj_token` 字段的值才是多维表格的 `app_token`。

了解更多，参考[多维表格 app_token 获取方式](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/bitable-overview#-752212c)。

**示例值**："bascnCMII2ORej2RItqpZZUNMIe"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >table_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	多维表格数据表的唯一标识。获取方式：
- 你可通过多维表格 URL 获取 `table_id`，下图高亮部分即为当前数据表的 `table_id`
- 也可通过[列出数据表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table/list)接口获取 `table_id`

  ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/18741fe2a0d3cafafaf9949b263bb57d_yD1wkOrSju.png?height=746&lazyload=true&maxWidth=700&width=2976)

**示例值**："tblsRc9GRRXKqhvW"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >form_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	多维表格中表单的唯一标识。表单也是视图的一种，其获取方式与获取 `view_id` 相同：

- 在多维表格的 URL 地址栏中，`form_id` 是下图中高亮部分：
    ![view_id.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/140668632c97e0095832219001d17c54_DJMgVH9x2S.png?height=748&lazyload=true&width=2998)
- 通过[列出视图](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-view/list)接口获取。暂时无法获取到嵌入到云文档中的多维表格的 `form_id`

**示例值**："vewTpR1urY"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >field_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	表单问题的唯一标识。表单中的问题本质上是表单视图中的字段，因此你可通过[列出字段](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/list)接口获取表单问题的唯一标识。

**示例值**："fldjX7dUj5"
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
	<md-text type="field-name" >pre_field_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	要更新的表单问题的前一个表单问题的 `field_id`，用于更新当前表单问题的位置。若该字段为空字符串，则表示将该表单问题的顺序排至首个位置。

**示例值**："fldjX7dUj5"
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
	表单问题

**示例值**："任务名称"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >description</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	问题描述

**示例值**："请概述该任务"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >required</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	该问题是否必填。可选值：
- true：必填
- false：非必填

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >visible</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	该问题是否可见。当值为 false 时，不允许更新其他字段。可选值：
- true：可见
- false：不可见

**示例值**：true
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "pre_field_id": "fldjX7dUj5",
    "title": "任务名称",
    "description": "请概述该任务",
    "required": true,
    "visible": true
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
	<md-text type="field-name" >field</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >app.table.form.patched_field</md-text>
	</md-dt-td>
	<md-dt-td>
	更新后的表单问题项
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >pre_field_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	要更新的表单问题的前一个表单问题的 `field_id`，用于更新当前表单问题的位置。若该字段为空字符串，则表示将该表单问题的顺序排至首个位置。
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
	表单问题
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >description</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	问题描述
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >required</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否必填
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >visible</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否可见，当值为 false 时，不允许更新其他字段。
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
        "field": {
            "pre_field_id": "fldjX7dUj5",
            "title": "任务名称",
            "description": "请概述该任务",
            "required": true,
            "visible": true
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
  <md-td>1254000</md-td>
  <md-td>WrongRequestJson</md-td>
  <md-td>请求体错误</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254001</md-td>
  <md-td>WrongRequestBody</md-td>
  <md-td>请求体错误</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254002</md-td>
  <md-td>Fail</md-td>
  <md-td>导致报 1254002 错误码的场景较多，请参考以下排查建议排查：
- 如果日志内容显示 changeset size exceed the limit, len:xxxxx，表示单次操作的内容变更较大，你需要在单次操作中减少数据量
- 如果日志内容显示 lock not obtained 或 data not ready，表示并发调用接口导致抢锁失败出错。你需控制请求间隔，稍后重试
- 如果在知识库（wiki）中创建多维表格，请检查你是否使用了知识库[创建知识空间节点](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space-node/create)接口创建多维表格。在此场景下不能使用[创建多维表格](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app/create)接口
- 请检查接口参数是否有误。例如，在分页查询多维表格时，传递了无效的 page_token，或传递了错误的数据表的 table_id
- 如果该报错偶尔发生，可能是服务器超时或不稳定，请重试解决</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254003</md-td>
  <md-td>WrongBaseToken</md-td>
  <md-td>app_token 错误</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254004</md-td>
  <md-td>WrongTableId</md-td>
  <md-td>table_id 错误</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254005</md-td>
  <md-td>WrongViewId</md-td>
  <md-td>view_id 错误</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254006</md-td>
  <md-td>WrongRecordId</md-td>
  <md-td>检查 record_id</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254007</md-td>
  <md-td>EmptyValue</md-td>
  <md-td>空值</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254008</md-td>
  <md-td>EmptyView</md-td>
  <md-td>空视图</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254009</md-td>
  <md-td>WrongFieldId</md-td>
  <md-td>字段 id 错误</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254010</md-td>
  <md-td>ReqConvError</md-td>
  <md-td>请求错误</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254012</md-td>
  <md-td>The field type is not supported.</md-td>
  <md-td>字段类型不支持</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254016</md-td>
  <md-td>InvalidSort</md-td>
  <md-td>Sort参数错误</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254018</md-td>
  <md-td>InvalidFilter</md-td>
  <md-td>filter 参数错误。请参考[记录过滤参数填写指南](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/record-filter-guide)了解如何填写 filter 参数。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254019</md-td>
  <md-td>InvalidViewType</md-td>
  <md-td>视图类型无效</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254020</md-td>
  <md-td>ViewNameDuplicated</md-td>
  <md-td>视图名重复</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254021</md-td>
  <md-td>EmptyViewName</md-td>
  <md-td>视图名为空</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254022</md-td>
  <md-td>InvalidViewName</md-td>
  <md-td>视图名无效</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254030</md-td>
  <md-td>TooLargeResponse</md-td>
  <md-td>响应体过大</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254036</md-td>
  <md-td>Base is copying, please try again later.</md-td>
  <md-td>复制多维表格为异步操作，该错误码表示当前多维表格仍在复制中，在复制期间无法操作当前多维表格。需要等待复制完成后再操作</md-td>
</md-tr>


<md-tr>
  <md-td>404</md-td>
  <md-td>1254040</md-td>
  <md-td>BaseTokenNotFound</md-td>
  <md-td>app_token 不存在</md-td>
</md-tr>


<md-tr>
  <md-td>404</md-td>
  <md-td>1254041</md-td>
  <md-td>TableIdNotFound</md-td>
  <md-td>table_id 不存在</md-td>
</md-tr>


<md-tr>
  <md-td>404</md-td>
  <md-td>1254042</md-td>
  <md-td>ViewIdNotFound</md-td>
  <md-td>view_id 不存在</md-td>
</md-tr>


<md-tr>
  <md-td>404</md-td>
  <md-td>1254043</md-td>
  <md-td>RecordIdNotFound</md-td>
  <md-td>record_id 不存在</md-td>
</md-tr>


<md-tr>
  <md-td>404</md-td>
  <md-td>1254044</md-td>
  <md-td>FieldIdNotFound</md-td>
  <md-td>field_id  不存在</md-td>
</md-tr>


<md-tr>
  <md-td>404</md-td>
  <md-td>1254045</md-td>
  <md-td>FieldNameNotFound</md-td>
  <md-td>字段名称不存在。请检查:
- 接口中字段名称和多维表格中的字段名称是否完全匹配。如果难以排查，建议你调用[列出字段](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/list)接口获取字段名称，因为根据表格页面的 UI 名称可能会忽略空格、换行或特殊符号等差异。
- 表格是否开启了高级权限但调用身份缺少对应字段的权限。你需要为调用身份授予高级权限：
  - 对用户授予高级权限，你需要在多维表格页面右上方 **分享** 入口为当前用户添加可管理权限。![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/df3911b4f747d75914f35a46962d667d_dAsfLjv3QC.png?height=546&lazyload=true&maxWidth=550)
  - 对应用授予高级权限，你需通过多维表格页面右上方 **「...」** -> **「...更多」** ->**「添加文档应用」** 入口为应用添加可管理权限。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/22c027f63c540592d3ca8f41d48bb107_CSas7OYJBR.png?height=1994&maxWidth=550&width=3278)
   
     ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9f3353931fafeea16a39f0eb887db175_0tjzC9P3zU.png?maxWidth=550)
    **注意**：
    在 **添加文档应用** 前，你需确保目标应用至少开通了一个多维表格的 [API 权限](/ssl:ttdoc/ukTMukTMukTM/uYTM5UjL2ETO14iNxkTN/scope-list)。否则你将无法在文档应用窗口搜索到目标应用。    
  - 你也可以在 **多维表格高级权限设置** 中添加用户或一个包含应用的群组, 给予这个群自定义的读写等权限。</md-td>
</md-tr>


<md-tr>
  <md-td>404</md-td>
  <md-td>1254049</md-td>
  <md-td>FormFieldNotFound</md-td>
  <md-td>form_field_id 不存在</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254060</md-td>
  <md-td>TextFieldConvFail</md-td>
  <md-td>多行文本字段错误</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254061</md-td>
  <md-td>NumberFieldConvFail</md-td>
  <md-td>数字字段错误</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254062</md-td>
  <md-td>SingleSelectFieldConvFail</md-td>
  <md-td>单选字段错误</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254063</md-td>
  <md-td>MultiSelectFieldConvFail</md-td>
  <md-td>多选字段错误</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254064</md-td>
  <md-td>DatetimeFieldConvFail</md-td>
  <md-td>日期字段错误</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254065</md-td>
  <md-td>CheckboxFieldConvFail</md-td>
  <md-td>复选框字段错误</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254066</md-td>
  <md-td>UserFieldConvFail</md-td>
  <md-td>人员字段有误。原因可能是：
- `user_id_type` 参数指定的 ID 类型与传入的 ID 类型不匹配
- 传入了不识别的类型或结构，目前只支持填写 `id` 参数，且需要传入数组
- 跨应用传入了 `open_id`。如果跨应用传入 ID，建议使用 `user_id`。不同应用获取的 `open_id` 不能交叉使用</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254067</md-td>
  <md-td>LinkFieldConvFail</md-td>
  <md-td>关联字段错误</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254100</md-td>
  <md-td>TableExceedLimit</md-td>
  <md-td>数据表或仪表盘数量超限。每个多维表格中，数据表加仪表盘的数量最多为 100 个</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254101</md-td>
  <md-td>ViewExceedLimit</md-td>
  <md-td>视图数量超限, 限制200个</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254102</md-td>
  <md-td>FileExceedLimit</md-td>
  <md-td>超限</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254103</md-td>
  <md-td>RecordExceedLimit</md-td>
  <md-td>记录数量超限, 限制20,000条</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254104</md-td>
  <md-td>RecordAddOnceExceedLimit</md-td>
  <md-td>单次添加记录数量超限, 限制500条</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254130</md-td>
  <md-td>TooLargeCell</md-td>
  <md-td>格子内容过大</md-td>
</md-tr>


<md-tr>
  <md-td>429</md-td>
  <md-td>1254290</md-td>
  <md-td>TooManyRequest</md-td>
  <md-td>请求过快，稍后重试</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254291</md-td>
  <md-td>Write conflict</md-td>
  <md-td>同一个数据表(table) 不支持并发调用写接口，请检查是否存在并发调用写接口。写接口包括：新增、修改、删除记录；新增、修改、删除字段；修改表单；修改视图等。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254301</md-td>
  <md-td>OperationTypeError</md-td>
  <md-td>多维表格未开启高级权限或不支持开启高级权限</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>1254302</md-td>
  <md-td>Permission denied.</md-td>
  <md-td>调用身份缺少多维表格的高级权限。你需要为调用身份授予高级权限：
- 对用户授予高级权限，你需要在多维表格页面右上方 **分享** 入口为当前用户添加可管理权限。![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/df3911b4f747d75914f35a46962d667d_dAsfLjv3QC.png?height=546&lazyload=true&maxWidth=550)
- 对应用授予高级权限，你需通过多维表格页面右上方 **「...」** -> **「...更多」** ->**「添加文档应用」** 入口为应用添加可管理权限。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/22c027f63c540592d3ca8f41d48bb107_CSas7OYJBR.png?height=1994&maxWidth=550&width=3278)
   
     ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9f3353931fafeea16a39f0eb887db175_0tjzC9P3zU.png?maxWidth=550)
    **注意**：
    在 **添加文档应用** 前，你需确保目标应用至少开通了一个多维表格的 [API 权限](/ssl:ttdoc/ukTMukTMukTM/uYTM5UjL2ETO14iNxkTN/scope-list)。否则你将无法在文档应用窗口搜索到目标应用。    
- 你也可以在 **多维表格高级权限设置** 中添加用户或一个包含应用的群组, 给予这个群自定义的读写等权限。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1255001</md-td>
  <md-td>InternalError</md-td>
  <md-td>内部错误，请联系[技术支持](https://applink.feishu.cn/TLJpeNdW)</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1255002</md-td>
  <md-td>RpcError</md-td>
  <md-td>内部错误，请联系[技术支持](https://applink.feishu.cn/TLJpeNdW)</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1255003</md-td>
  <md-td>MarshalError</md-td>
  <md-td>序列化错误，请联系[技术支持](https://applink.feishu.cn/TLJpeNdW)</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1255004</md-td>
  <md-td>UmMarshalError</md-td>
  <md-td>反序列化错误</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1255005</md-td>
  <md-td>ConvError</md-td>
  <md-td>内部错误，请联系[技术支持](https://applink.feishu.cn/TLJpeNdW)</md-td>
</md-tr>


<md-tr>
  <md-td>504</md-td>
  <md-td>1255040</md-td>
  <md-td>请求超时</md-td>
  <md-td>进行重试</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




