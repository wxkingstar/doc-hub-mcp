<!--
title: 下载人员的附件
id: 6948366696944664579
fullPath: /uAjLw4CM/ukTMukTMukTM/ehr/ehr-v1/attachment/get
updatedAt: 1671763327000
source: https://open.feishu.cn/document/server-docs/ehr-v1/get
-->
# 下载人员的附件

根据文件 token 下载文件。

调用 「批量获取员工花名册信息」接口的返回值中，「文件」类型的字段 id，即是文件 token{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=ehr&version=v1&resource=attachment&method=get)

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
![image.png](//sf1-ttcdn-tos.pstatp.com/obj/open-platform-opendoc/bed391d2a8ce6ed2d5985ea69bf92850_9GY1mnuDXP.png)
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
      <md-td>https://open.feishu.cn/open-apis/ehr/v1/attachments/:token</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>GET</md-td>
    </md-tr>
    <md-tr>
      <md-th>支持的应用类型</md-th>
      <md-td>
      <md-app-support types="custom"></md-app-support>
      </md-td>
    </md-tr>
    <md-tr>
      <md-th>
            权限要求
            <md-tooltip type="info">调用该 API 所需的权限。开启其中任意一项权限即可调用</md-tooltip>
            
      </md-th>
      <md-td>
            <md-perm name="ehr:attachment:readonly" desc="获取飞书人事（标准版）应用中的附件数据" support_app_types="custom" tags="">获取飞书人事（标准版）应用中的附件数据</md-perm>
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
	<md-text type="field-name" >token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文件 token

**示例值**："09bf7b924f9a4a69875788891b5970d8"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





## 响应



HTTP状态码为 200 时，表示成功

返回文件二进制流



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
  <md-td>1241001</md-td>
  <md-td>服务器内部错误</md-td>
  <md-td>重试或联系飞书人事（标准版）客服</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1241002</md-td>
  <md-td>请求参数错误</md-td>
  <md-td>检查查询参数</md-td>
</md-tr>


<md-tr>
  <md-td>404</md-td>
  <md-td>1241003</md-td>
  <md-td>Token 不存在或者已过期</md-td>
  <md-td>重新获取 Token</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1241004</md-td>
  <md-td>你的企业尚未开通飞书人事（标准版）。如需开通，请前往「飞书管理后台」启用飞书人事（标准版）</md-td>
  <md-td>前往「飞书管理后台」启用飞书人事（标准版）</md-td>
</md-tr>

  </md-tbody>
</md-table>
:::




