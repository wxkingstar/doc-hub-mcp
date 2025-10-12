<!--
title: 识别文件中的名片
id: 7205462689421066244
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/ai/document_ai-v1/business_card/recognize
updatedAt: 1698768487000
source: https://open.feishu.cn/document/server-docs/ai/document_ai-v1/business_card/recognize
-->
# 识别文件中的名片

名片识别接口，通过上传 JPG / PNG / PDF 等文件类型进行一次性的名片识别。接口适用于20MB以下的文件，适用于英文、日语的名片。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=document_ai&version=v1&resource=business_card&method=recognize)

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
单租户限流：10QPS，同租户下的应用没有限流，共享本租户的 10QPS 限流
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
      <md-td>https://open.feishu.cn/open-apis/document_ai/v1/business_card/recognize</md-td>
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
            <md-perm name="document_ai:business_card:recognize" desc="识别名片" support_app_types="custom,isv" tags="">识别名片</md-perm>
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
	识别名片的源文件（支持 JPG / PNG / PDF）

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
	<md-text type="field-name" >business_cards</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >recognized_entities\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	名片信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >entities</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >recognized_entity\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	识别的实体列表
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
<md-enum-item key="contact_names" >联系人名</md-enum-item>
<md-enum-item key="company_names" >公司名</md-enum-item>
<md-enum-item key="departments" >部门</md-enum-item>
<md-enum-item key="job_titles" >职位</md-enum-item>
<md-enum-item key="emails" >邮箱</md-enum-item>
<md-enum-item key="websites" >网站</md-enum-item>
<md-enum-item key="addresses" >地址</md-enum-item>
<md-enum-item key="mobile_phones" >移动电话</md-enum-item>
<md-enum-item key="work_phones" >工作电话</md-enum-item>
<md-enum-item key="other_phones" >其他电话</md-enum-item>
<md-enum-item key="faxes" >传真</md-enum-item>
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
        "business_cards": [
            {
                "entities": [
                    {
                        "type": "contact_names",
                        "value": "张三"
                    }
                ]
            }
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
  <md-td>2110001</md-td>
  <md-td>Invalid file</md-td>
  <md-td>输入文件错误，参考文档检查输入参数</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2110002</md-td>
  <md-td>No business card detected.</md-td>
  <md-td>未检测出名片信息，参考文档检查输入文件是否有效</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>2110010</md-td>
  <md-td>Network anomaly, please try again.</md-td>
  <md-td>后端服务异常或网络异常，可重新请求</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2110003</md-td>
  <md-td>You have reached the Intelligent document parsing limit. To continue using this function, please contact sales to purchase more.</md-td>
  <md-td>智能文档解析次数已达使用上限，如需继续使用，请联系销售购买</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




