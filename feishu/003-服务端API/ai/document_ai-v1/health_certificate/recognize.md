<!--
title: 识别文件中的健康证
id: 7319756481343766532
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/ai/document_ai-v1/health_certificate/recognize
updatedAt: 1731477938000
source: https://open.feishu.cn/document/ai/document_ai-v1/health_certificate/recognize
-->
# 识别文件中的健康证

健康证识别接口，支持JPG/JPEG/PNG/BMP四种文件类型的一次性的识别。文件大小需要小于10M。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=document_ai&version=v1&resource=health_certificate&method=recognize)

:::html
<md-alert type="tip">
单租户限流：10QPS，同租户下的应用没有限流，共享本租户的 10QPS 限流
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
      <md-td>https://open.feishu.cn/open-apis/document_ai/v1/health_certificate/recognize</md-td>
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
            <md-perm name="document_ai:health_certificate:recognize" desc="识别健康证" support_app_types="custom,isv" tags="">识别健康证</md-perm>
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
<md-td>

**示例值**："multipart/form-data; boundary=---7MA4YWxkTrZu0gW"</md-td>
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
	<md-text type="field-name" >file</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >file</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	识别的健康证源文件

**示例值**：file binary
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例

```HTTP
---7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="file";
Content-Type: application/octet-stream


---7MA4YWxkTrZu0gW
```



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
	<md-text type="field-name" >health_certificate</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >health_certificate</md-text>
	</md-dt-td>
	<md-dt-td>
	健康证信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >entities</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >health_certificate_entity\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	识别出的实体类型
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
	识别的字段种类

**可选值有**：
<md-enum>
<md-enum-item key="name" >姓名</md-enum-item>
<md-enum-item key="issued_by" >发证机关</md-enum-item>
<md-enum-item key="date_of_handling" >办证日期</md-enum-item>
<md-enum-item key="date_of_issue" >发证日期</md-enum-item>
<md-enum-item key="date_of_medical_examination" >体检日期</md-enum-item>
<md-enum-item key="valid_date" >有效日期</md-enum-item>
<md-enum-item key="other_date" >其他日期</md-enum-item>
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
	识别出字段的文本信息
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
        "health_certificate": {
            "entities": [
                {
                    "type": "id_number",
                    "value": "张三"
                }
            ]
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
  <md-td>2110001</md-td>
  <md-td>Param is invalid</md-td>
  <md-td>输入文件错误，参考文档检查输入参数</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2110002</md-td>
  <md-td>No valid entity</md-td>
  <md-td>未检测出健康证信息，参考文档检查输入文件是否有效</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2110003</md-td>
  <md-td>You have reached the Intelligent document parsing limit. To continue using this function, please contact sales to purchase more.</md-td>
  <md-td>后端服务异常或网络异常，可重新请求</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>2110010</md-td>
  <md-td>Internal error, please try later.</md-td>
  <md-td>智能文档解析次数已达使用上限，如需继续使用，请联系销售购买</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




