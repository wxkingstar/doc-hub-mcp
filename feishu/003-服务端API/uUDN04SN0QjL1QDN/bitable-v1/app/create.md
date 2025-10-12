<!--
title: 创建多维表格
id: 7047733935745007620
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app/create
updatedAt: 1730950327000
source: https://open.feishu.cn/document/server-docs/docs/bitable-v1/app/create
-->
# 创建多维表格

在指定文件夹中创建一个多维表格，包含一个空白的数据表。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=bitable&version=v1&resource=app&method=create)

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
要基于模板创建多维表格，可先获取模板多维表格 `app_token` 作为文件 token，再调用[复制文件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/copy)接口创建多维表格。
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
      <md-td>https://open.feishu.cn/open-apis/bitable/v1/apps</md-td>
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
            <md-perm name="base:app:create" desc="创建多维表格" support_app_types="custom,isv" tags="">创建多维表格</md-perm>
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
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	多维表格 App 名称。最长为 255 个字符。

**示例值**："一篇新的多维表格"
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
	多维表格 App 归属文件夹。默认为空，表示多维表格将被创建在云空间根目录。了解如何获取文件夹 Token，参考[如何获取云文档资源相关 Token](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)。


**注意**：
请确保调用身份拥有在该文件夹中的编辑权限。若应用使用的是 `tenant_access_token` 权限，此处仅可指定应用创建的文件夹。详情参考[如何为应用开通云文档相关资源的权限](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-add-permissions-to-app)。

**示例值**："fldcnqquW1svRIYVT2Np6Iabcef"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >time_zone</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文档时区，详情参考[文档时区介绍](https://feishu.feishu.cn/docx/YKRndTM7VoyDqpxqqeEcd67MnEf)。

**示例值**："Asia/Macau"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "name":"一篇新的多维表格",
    "folder_token": "fldcnqquW1svRIYVT2Np6Iabcef"
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
	<md-text type="field-name" >app</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >app</md-text>
	</md-dt-td>
	<md-dt-td>
	返回响应体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >app_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	多维表格的唯一标识 app_token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	多维表格的名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >folder_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	多维表格 App 归属文件夹
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
	多维表格 App 的 URL 链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >default_table_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	默认创建的数据表 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >time_zone</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文档时区
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
    "data": {
        "app": {
            "app_token": "S404b*****e9PQsYDWYcNryFn0g",
            "default_table_id": "tbl********oumSQ",
            "folder_token": "fldcnqquW1svRIYVT2Np6Iabcef",
            "name": "一篇新的多维表格",
            "url": "https://example.feishu.cn/base/S404b*****e9PQsYDWYcNryFn0g"
        }
    },
    "msg": "success"
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
  <md-td>200</md-td>
  <md-td>1254000</md-td>
  <md-td>WrongRequestJson</md-td>
  <md-td>请求体错误</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254001</md-td>
  <md-td>WrongRequestBody</md-td>
  <md-td>请求体错误</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254002</md-td>
  <md-td>Fail</md-td>
  <md-td>内部错误，请联系[技术支持](https://applink.feishu.cn/TLJpeNdW)</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254003</md-td>
  <md-td>WrongBaseToken</md-td>
  <md-td>app_token 错误</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254004</md-td>
  <md-td>WrongTableId</md-td>
  <md-td>table_id 错误</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254005</md-td>
  <md-td>WrongViewId</md-td>
  <md-td>view_id 错误</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254006</md-td>
  <md-td>WrongRecordId</md-td>
  <md-td>检查 record_id</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254007</md-td>
  <md-td>EmptyValue</md-td>
  <md-td>空值</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254008</md-td>
  <md-td>EmptyView</md-td>
  <md-td>空视图</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254009</md-td>
  <md-td>WrongFieldId</md-td>
  <md-td>字段 id 错误</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254010</md-td>
  <md-td>ReqConvError</md-td>
  <md-td>请求错误</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254025</md-td>
  <md-td>InvalidCopyTypes</md-td>
  <md-td>Copy Type参数无效</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254030</md-td>
  <md-td>TooLargeResponse</md-td>
  <md-td>响应体过大</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254031</md-td>
  <md-td>InvalidAppName</md-td>
  <md-td>名称不能超过255个字符</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254036</md-td>
  <md-td>Base is copying, please try again later.</md-td>
  <md-td>复制多维表格为异步操作，该错误码表示当前多维表格仍在复制中，在复制期间无法操作当前多维表格。需要等待复制完成后再操作</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254040</md-td>
  <md-td>BaseTokenNotFound</md-td>
  <md-td>app_token 不存在</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254041</md-td>
  <md-td>TableIdNotFound</md-td>
  <md-td>table_id 不存在</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254042</md-td>
  <md-td>ViewIdNotFound</md-td>
  <md-td>view_id 不存在</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254043</md-td>
  <md-td>RecordIdNotFound</md-td>
  <md-td>record_id 不存在</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254044</md-td>
  <md-td>FieldIdNotFound</md-td>
  <md-td>field_id  不存在</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254060</md-td>
  <md-td>TextFieldConvFail</md-td>
  <md-td>多行文本字段错误</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254061</md-td>
  <md-td>NumberFieldConvFail</md-td>
  <md-td>数字字段错误</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254062</md-td>
  <md-td>SingleSelectFieldConvFail</md-td>
  <md-td>单选字段错误</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254063</md-td>
  <md-td>MultiSelectFieldConvFail</md-td>
  <md-td>多选字段错误</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254064</md-td>
  <md-td>DatetimeFieldConvFail</md-td>
  <md-td>日期字段错误</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254065</md-td>
  <md-td>CheckboxFieldConvFail</md-td>
  <md-td>复选框字段错误</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254066</md-td>
  <md-td>UserFieldConvFail</md-td>
  <md-td>人员字段有误。原因可能是：
- `user_id_type` 参数指定的 ID 类型与传入的 ID 类型不匹配
- 传入了不识别的类型或结构，目前只支持填写 `id` 参数，且需要传入数组
- 跨应用传入了 `open_id`。如果跨应用传入 ID，建议使用 `user_id`。不同应用获取的 `open_id` 不能交叉使用</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254067</md-td>
  <md-td>LinkFieldConvFail</md-td>
  <md-td>关联字段错误</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254100</md-td>
  <md-td>TableExceedLimit</md-td>
  <md-td>数据表或仪表盘数量超限。每个多维表格中，数据表加仪表盘的数量最多为 100 个</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254101</md-td>
  <md-td>ViewExceedLimit</md-td>
  <md-td>视图数量超限，限制 200 个，包括公共视图、锁定视图和个人视图（即只有视图所有者才能看到的视图）</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254102</md-td>
  <md-td>FileExceedLimit</md-td>
  <md-td>文档数量超限</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254103</md-td>
  <md-td>RecordExceedLimit</md-td>
  <md-td>记录数量超限，限制 20,000 条</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254104</md-td>
  <md-td>RecordAddOnceExceedLimit</md-td>
  <md-td>单次添加记录数量超限，限制 500 条</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254130</md-td>
  <md-td>TooLargeCell</md-td>
  <md-td>格子内容过大</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254290</md-td>
  <md-td>TooManyRequest</md-td>
  <md-td>请求过快，稍后重试</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254291</md-td>
  <md-td>Write conflict</md-td>
  <md-td>同一个数据表 (table) 不支持并发调用写接口，请检查是否存在并发调用写接口。写接口包括：新增、修改、删除记录；新增、修改、删除字段；修改表单；修改视图等。</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254301</md-td>
  <md-td>OperationTypeError</md-td>
  <md-td>多维表格未开启高级权限或不支持开启高级权限</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254304</md-td>
  <md-td>PermNotAllow</md-td>
  <md-td>仅企业版和旗舰版飞书支持行列权限</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>1254701</md-td>
  <md-td>DriveNodePermNotAllow</md-td>
  <md-td>对目标云空间节点没有权限</md-td>
</md-tr>


<md-tr>
  <md-td>404</md-td>
  <md-td>1254702</md-td>
  <md-td>DriveNodeNotExist</md-td>
  <md-td>云空间节点不存在，检查参数正确性</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254800</md-td>
  <md-td>InvalidParameter</md-td>
  <md-td>参数错误，请根据msg修正后重试</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1255001</md-td>
  <md-td>InternalError</md-td>
  <md-td>内部错误，请联系[技术支持](https://applink.feishu.cn/TLJpeNdW)</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1255002</md-td>
  <md-td>RpcError</md-td>
  <md-td>内部错误，请联系[技术支持](https://applink.feishu.cn/TLJpeNdW)</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1255003</md-td>
  <md-td>MarshalError</md-td>
  <md-td>序列化错误，请联系[技术支持](https://applink.feishu.cn/TLJpeNdW)</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1255004</md-td>
  <md-td>UmMarshalError</md-td>
  <md-td>反序列化错误</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
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




