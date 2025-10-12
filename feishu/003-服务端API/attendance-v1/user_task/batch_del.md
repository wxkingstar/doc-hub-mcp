<!--
title: 删除打卡流水
id: 7473096091899805715
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/user_flow/batch_del
updatedAt: 1740018250000
source: https://open.feishu.cn/document/attendance-v1/user_task/batch_del
-->
# 删除打卡流水

删除员工从开放平台导入的打卡记录。删除后会重新计算打卡记录对应考勤任务结果。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=attendance&version=v1&resource=user_flow&method=batch_del)

:::html
<md-alert type="tip">
当返回结果fail_record_ids不为空时，msg字段返回对应失败原因，格式为：{"xx id": "xx reason"}
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
      <md-td>https://open.feishu.cn/open-apis/attendance/v1/user_flows/batch_del</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>POST</md-td>
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
            
      </md-th>
      <md-td>
            <md-perm name="attendance:task" desc="写入打卡数据" support_app_types="custom,isv" tags="">写入打卡数据</md-perm>
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
	<md-text type="field-name" >record_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	打卡流水记录 ID，获取方式：1）[批量查询打卡流水记录](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/user_flow/query) 2）[获取打卡结果](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/user_task/query) 3）[导入打卡流水记录](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/user_flow/batch_create)

**示例值**：["6709359313699356941"]

**数据校验规则**：

- 长度范围：`1` ～ `10`
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "record_ids": [
        "6709359313699356941"
    ]
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
	<md-text type="field-name" >success_record_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	删除成功的流水记录ID列表
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >fail_record_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	删除失败的流水记录ID列表
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
        "success_record_ids": [
            "6709359313699356941"
        ],
        "fail_record_ids": [
            "6709359313699356941"
        ]
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
  <md-td>1220001</md-td>
  <md-td>param is invalid</md-td>
  <md-td>请参考实际返回的错误信息排查问题。例如“internal server error”代表内部服务异常。如仍无法解决可联系 [技术支持](https://applink.feishu.cn/TLJpeNdW)</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1220002</md-td>
  <md-td>tenant_id is empty</md-td>
  <md-td>检查租户 ID</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1220003</md-td>
  <md-td>user_id type is not employee_id or employee_no</md-td>
  <md-td>无效的用户 ID</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1220006</md-td>
  <md-td>enterprise tenant app has no privilege</md-td>
  <md-td>按照错误信息指引，开启应用权限</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1225000</md-td>
  <md-td>system error</md-td>
  <md-td>系统错误，可重试解决或咨询[技术支持](https://applink.feishu.cn/TLJpeNdW)</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1227000</md-td>
  <md-td>management service error</md-td>
  <md-td>系统错误，可重试解决或咨询[技术支持](https://applink.feishu.cn/TLJpeNdW)</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




