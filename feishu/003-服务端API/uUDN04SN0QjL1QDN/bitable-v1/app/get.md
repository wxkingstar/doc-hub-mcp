<!--
title: 获取多维表格元数据
id: 6960166873968574467
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app/get
updatedAt: 1736393539000
source: https://open.feishu.cn/document/server-docs/docs/bitable-v1/app/get
-->
# 获取多维表格元数据

获取指定多维表格的元数据信息，包括多维表格名称、多维表格版本号、多维表格是否开启高级权限等。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=bitable&version=v1&resource=app&method=get)

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
      <md-td>https://open.feishu.cn/open-apis/bitable/v1/apps/:app_token</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>GET</md-td>
    </md-tr>
    <md-tr>
      <md-th>接口频率限制</md-th>
      <md-td>[20 次/秒](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
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
            <md-perm name="base:app:read" desc="获取多维表格信息" support_app_types="custom,isv" tags="">获取多维表格信息</md-perm>
            <md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理多维表格</md-perm>
            <md-perm name="bitable:app:readonly" desc="查看、评论和导出多维表格" support_app_types="custom,isv" tags="">查看、评论和导出多维表格</md-perm>
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

**示例值**："appbcbWCzen6D8dezhoCH2RpMAh"
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
	<md-text type="field-name" >app</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >display_app</md-text>
	</md-dt-td>
	<md-dt-td>
	多维表格元数据
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
	<md-text type="field-name" >revision</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	多维表格的版本号。对多维表格进行修改时更新，如新增、删除数据表，修改数据表名等，初始为 1，每次更新+1
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >is_advanced</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	多维表格是否开启了高级权限。取值包括：
- true：开启了高级权限
- false：关闭了高级权限

了解更多参考飞书帮助中心文档[使用多维表格高级权限](https://www.feishu.cn/hc/zh-CN/articles/588604550568)。
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
	多维表格的时区
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >formula_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	多维表格的公式字段类型。可结合[字段相关 API](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/create)使用。

**可选值有**：
<md-enum>
<md-enum-item key="1" >不支持指定公式字段类型</md-enum-item>
<md-enum-item key="2" >支持指定公式字段类型</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >advance_version</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文档高级权限版本。可结合[自定义角色 API](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-role/create)使用。

**可选值有**：
<md-enum>
<md-enum-item key="v1" >v1版本</md-enum-item>
<md-enum-item key="v2" >v2版本</md-enum-item>
</md-enum>
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
        "app": {
            "app_token": "appbcbWCzen6D8dezhoCH2RpMAh",
            "name": "mybase",
            "revision": 1,
            "is_advanced": false,
            "time_zone": "Asia/Beijing",
            "formula_type": 1,
            "advance_version": "v1"
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
  <md-td>导致报 1254002 错误码的场景较多，请参考以下建议排查：
- 如果单次操作的内容变更较大，请尝试在单次操作中减少数据量
- 如果你并发调用了接口，请尝试控制请求间隔，稍后重试
- 如果在知识库（wiki）中创建多维表格，请检查你是否使用了知识库[创建知识空间节点](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space-node/create)接口创建多维表格。在此场景下不能使用[创建多维表格](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app/create)接口
- 请检查接口参数是否有误。例如，在分页查询多维表格时，传递了无效的 page_token，或传递了错误的数据表的 table_id
- 如果该报错偶尔发生，可能是服务器超时或不稳定，请重试解决</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254003</md-td>
  <md-td>WrongBaseToken</md-td>
  <md-td>app_token 错误。app_token 是多维表格 App 的唯一标识。不同形态的多维表格，其 `app_token` 的获取方式不同：
- 如果多维表格的 URL 以 ==**feishu.cn/base**== 开头，该多维表格的 `app_token` 是下图高亮部分：
    ![app_token.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6916f8cfac4045ba6585b90e3afdfb0a_GxbfkJHZBa.png?height=766&lazyload=true&width=3004)

- 如果多维表格的 URL 以 ==**feishu.cn/wiki**== 开头，你需调用知识库相关[获取知识空间节点信息](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space/get_node)接口获取多维表格的 app_token。当 `obj_type` 的值为 `bitable` 时，`obj_token` 字段的值才是多维表格的 `app_token`。

了解更多，参考[多维表格 app_token 获取方式](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/bitable-overview#-752212c)。</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254004</md-td>
  <md-td>WrongTableId</md-td>
  <md-td>table_id 错误。table_id 是多维表格数据表的唯一标识。获取方式：
- 你可通过多维表格 URL 获取 `table_id`，下图高亮部分即为当前数据表的 `table_id`
- 也可通过[列出数据表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table/list)接口获取 `table_id`

  ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/18741fe2a0d3cafafaf9949b263bb57d_yD1wkOrSju.png?height=746&lazyload=true&maxWidth=700&width=2976)</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254005</md-td>
  <md-td>WrongViewId</md-td>
  <md-td>view_id 错误。view_id 是多维表格中视图的唯一标识。获取方式：

- 在多维表格的 URL 地址栏中，`view_id` 是下图中高亮部分：
    ![view_id.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/140668632c97e0095832219001d17c54_DJMgVH9x2S.png?height=748&lazyload=true&width=2998)
- 通过[列出视图](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-view/list)接口获取。暂时无法获取到嵌入到云文档中的多维表格的 `view_id`。

**注意**：
当 `filter` 参数 或 `sort` 参数不为空时，请求视为对数据表中的全部数据做条件过滤，指定的 `view_id` 会被忽略。</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254006</md-td>
  <md-td>WrongRecordId</md-td>
  <md-td>record_id 错误。record_id 是数据表中一条记录的唯一标识。通过[查询记录](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/search)接口获取</md-td>
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
  <md-td>field_id 错误。field_id 是数据表中一个字段的唯一标识。通过[列出字段](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/list)接口获取</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254010</md-td>
  <md-td>ReqConvError</md-td>
  <md-td>请求错误</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
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
  <md-td>200</md-td>
  <md-td>1254040</md-td>
  <md-td>BaseTokenNotFound</md-td>
  <md-td>app_token 不存在。不同形态的多维表格，其 `app_token` 的获取方式不同：
- 如果多维表格的 URL 以 ==**feishu.cn/base**== 开头，该多维表格的 `app_token` 是下图高亮部分：
    ![app_token.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6916f8cfac4045ba6585b90e3afdfb0a_GxbfkJHZBa.png?height=766&lazyload=true&width=3004)

- 如果多维表格的 URL 以 ==**feishu.cn/wiki**== 开头，你需调用知识库相关[获取知识空间节点信息](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space/get_node)接口获取多维表格的 app_token。当 `obj_type` 的值为 `bitable` 时，`obj_token` 字段的值才是多维表格的 `app_token`。

了解更多，参考[多维表格 app_token 获取方式](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/bitable-overview#-752212c)。</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254041</md-td>
  <md-td>TableIdNotFound</md-td>
  <md-td>table_id 不存在。获取方式：
- 你可通过多维表格 URL 获取 `table_id`，下图高亮部分即为当前数据表的 `table_id`
- 也可通过[列出数据表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table/list)接口获取 `table_id`

  ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/18741fe2a0d3cafafaf9949b263bb57d_yD1wkOrSju.png?height=746&lazyload=true&maxWidth=700&width=2976)</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254042</md-td>
  <md-td>ViewIdNotFound</md-td>
  <md-td>view_id 不存在。获取方式：

- 在多维表格的 URL 地址栏中，`view_id` 是下图中高亮部分：
    ![view_id.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/140668632c97e0095832219001d17c54_DJMgVH9x2S.png?height=748&lazyload=true&width=2998)
- 通过[列出视图](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-view/list)接口获取。暂时无法获取到嵌入到云文档中的多维表格的 `view_id`。

**注意**：
当 `filter` 参数 或 `sort` 参数不为空时，请求视为对数据表中的全部数据做条件过滤，指定的 `view_id` 会被忽略。</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254043</md-td>
  <md-td>RecordIdNotFound</md-td>
  <md-td>record_id 不存在。record_id 是数据表中一条记录的唯一标识。请通过[查询记录](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/search)接口获取。</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254044</md-td>
  <md-td>FieldIdNotFound</md-td>
  <md-td>field_id  不存在。field_id  是数据表中一个字段的唯一标识。通过[列出字段](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/list)接口获取。</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254060</md-td>
  <md-td>TextFieldConvFail</md-td>
  <md-td>文本字段错误</md-td>
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
- 跨应用传入了 `open_id`。如果跨应用传入 ID，建议使用 `user_id`。不同应用获取的 `open_id` 不能交叉使用
- 若想对人员字段传空，可传 null</md-td>
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
  <md-td>视图数量超限, 限制200个</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254102</md-td>
  <md-td>FileExceedLimit</md-td>
  <md-td>文件数量超限</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254103</md-td>
  <md-td>RecordExceedLimit</md-td>
  <md-td>记录数量超限, 限制20,000条</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254104</md-td>
  <md-td>RecordAddOnceExceedLimit</md-td>
  <md-td>单次添加记录数量超限, 单次调用最多更新 1,000 条记录</md-td>
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
  <md-td>在同一个数据表中，并发调用了读写接口或请求过快，出现冲突。请参考以下建议解决：
- 确保没有并发调用多维表格读写相关接口
- 若操作量较大，建议在接口与接口之间增加 0.5 或 1 秒的延迟，也可在报错中增加重试逻辑，确保业务的稳定性
- 对于写接口，可以将接口中的查询参数 `ignore_consistency_check` 设置为 true，表示在读写操作时，暂时忽略一致性检查，以提高性能</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254301</md-td>
  <md-td>OperationTypeError</md-td>
  <md-td>多维表格未开启高级权限或不支持开启高级权限</md-td>
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
  <md-td>反序列化错误，请联系[技术支持](https://applink.feishu.cn/TLJpeNdW)</md-td>
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
  <md-td>Request timed out, please try again later</md-td>
  <md-td>请求超时，进行重试</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




