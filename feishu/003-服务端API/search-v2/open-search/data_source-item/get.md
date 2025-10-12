<!--
title: 查询指定数据项
id: 6953505452630228995
fullPath: /uAjLw4CM/ukTMukTMukTM/search-v2/data_source-item/get
updatedAt: 1725591032000
source: https://open.feishu.cn/document/server-docs/search-v2/open-search/data_source-item/get
-->
# 查询指定数据项

获取单个数据记录。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=search&version=v2&resource=data_source.item&method=get)

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
      <md-td>https://open.feishu.cn/open-apis/search/v2/data_sources/:data_source_id/items/:item_id</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>GET</md-td>
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
            <md-perm name="search:data_item:readonly" desc="查询数据项" support_app_types="custom,isv" tags="">查询数据项</md-perm>
            <md-perm name="search:data_source" desc="查询、创建、修改和删除自定义搜索数据源、数据范式或数据项" support_app_types="custom,isv" tags="">查询、创建、修改和删除自定义搜索数据源、数据范式或数据项</md-perm>
            <md-perm name="search:data_source:readonly" desc="查询自定义搜索数据源、数据范式或数据项" support_app_types="custom,isv" tags="">查询自定义搜索数据源、数据范式或数据项</md-perm>
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

**值格式**："Bearer `access_token`"

**示例值**："Bearer t-7f1bcd13fc57d46bac21793a18e560"

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
	<md-text type="field-name" >data_source_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	数据源的id

**示例值**："service_ticket"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >item_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	数据记录的唯一标识

**注意**：

- 该字段大小写敏感。
- 如果调用成功但返回结果为空数据，请检查该字段传值是否正确。

**示例值**："01010111"
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
	<md-text type="field-name" >item</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >item</md-text>
	</md-dt-td>
	<md-dt-td>
	数据项实例
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	item 在 datasource 中的唯一标识，只允许英文字母、数字和下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >acl</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >acl\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	item 的访问权限控制。 acl 字段为空数组，则默认数据不可见。如果数据是全员可见，需要设置 access="allow"; type="user"; value="everyone"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >access</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	权限类型，优先级：Deny > Allow。

**可选值有**：
<md-enum>
<md-enum-item key="allow" >允许访问</md-enum-item>
<md-enum-item key="deny" >禁止访问</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	设置的权限值，例如 userID ，依赖 type 描述。

**注**：在 type 为 user 且 access 为 allow 时，可填 "everyone" 来表示该数据项对全员可见；
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
	权限值类型

**可选值有**：
<md-enum>
<md-enum-item key="user_id" >用户在租户内的身份ID，详细说明请参考：https://open.feishu.cn/document/home/user-identity-introduction/introduction</md-enum-item>
<md-enum-item key="open_id" >用户在应用内的身份ID，详细说明请参考：https://open.feishu.cn/document/home/user-identity-introduction/introduction</md-enum-item>
<md-enum-item key="union_id" >用户在同一应用开发商提供的多个应用间的统一身份ID，详细说明请参考：https://open.feishu.cn/document/home/user-identity-introduction/introduction</md-enum-item>
<md-enum-item key="department_id" >部门在租户内的唯一ID，详细说明请参考：https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/field-overview#23857fe0</md-enum-item>
<md-enum-item key="open_department_id" >部门在应用内的唯一ID，详细说明请参考：https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/field-overview#23857fe0</md-enum-item>
<md-enum-item key="group_id" >GroupID（灰度中，对部分租户开放）</md-enum-item>
<md-enum-item key="app_group_id" >AppGroupID（灰度中，对部分租户开放）</md-enum-item>
<md-enum-item key="user" >访问权限控制中指定“用户”可以访问或拒绝访问该条数据</md-enum-item>
<md-enum-item key="group" >(已下线)访问权限控制中指定“用户组”可以访问或拒绝访问该条数据</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >metadata</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >item_metadata</md-text>
	</md-dt-td>
	<md-dt-td>
	item 的元信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	该条数据记录对应的标题
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >source_url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	该条数据记录对应的跳转url
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >create_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	数据项的创建时间。Unix 时间，单位为秒
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >update_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	数据项的更新时间。Unix 时间，单位为秒
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >source_url_mobile</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	移动端搜索命中的跳转地址。如果您PC端和移动端有不同的跳转地址，可以在这里写入移动端专用的url，我们会在搜索时为您选择合适的地址
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >structured_data</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	结构化数据（以 json 字符串传递），这些字段是搜索结果的展示字段(特殊字段无须在此另外指定);具体格式可参参考 [接入指南](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/search-v2/common-template-intergration-handbook) **请求创建数据项**部分。这里的示例遵循了”创建数据范式“部分中的数据范式示例，请按自己定义的数据范式填写数据
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >item_content</md-text>
	</md-dt-td>
	<md-dt-td>
	非结构化数据，如文档文本，飞书搜索会用来做召回
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >format</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	内容的格式

**可选值有**：
<md-enum>
<md-enum-item key="html" >html格式</md-enum-item>
<md-enum-item key="plaintext" >纯文本格式</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >content_data</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	全文数据
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
        "item": {
            "id": "01010111",
            "acl": [
                {
                    "access": "allow",
                    "value": "d35e3c23",
                    "type": "user"
                }
            ],
            "metadata": {
                "title": "工单：无法创建文章",
                "source_url": "http://www.abc.com.cn",
                "create_time": 1618831236,
                "update_time": 1618831236
            },
            "structured_data": "{\"key\":\"value\"}",
            "content": {
                "format": "html",
                "content_data": "这是一个很长的文本"
            }
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
  <md-td>500</md-td>
  <md-td>1270001</md-td>
  <md-td>系统内部错误</md-td>
  <md-td>联系系统开发人员协助定位</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1270002</md-td>
  <md-td>参数错误</md-td>
  <md-td>根据错误信息和文档排查非法参数</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1270004</md-td>
  <md-td>数据源不存在</md-td>
  <md-td>确认 datasource ID 是否正确</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1270005</md-td>
  <md-td>该功能仅对旗舰版可用</md-td>
  <md-td>请联系销售人员升级套餐以使用此高级功能</md-td>
</md-tr>


<md-tr>
  <md-td>401</md-td>
  <md-td>1272001</md-td>
  <md-td>无权限操作数据源</md-td>
  <md-td>确认 datasource ID 是否合法</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1272002</md-td>
  <md-td>操作鉴权失败</md-td>
  <md-td>如果重试后仍然失败，请联系系统开发人员协助定位</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




