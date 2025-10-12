<!--
title: 获取工单内图像
id: 6955768699895611394
fullPath: /uAjLw4CM/ukTMukTMukTM/helpdesk-v1/ticket/ticket_image
updatedAt: 1740053884000
source: https://open.feishu.cn/document/server-docs/helpdesk-v1/ticket-management/ticket/ticket_image
-->
# 获取工单内图像

该接口用于获取服务台工单消息图象。仅支持自建应用。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=helpdesk&version=v1&resource=ticket&method=ticket_image)

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
      <md-td>https://open.feishu.cn/open-apis/helpdesk/v1/ticket_images</md-td>
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
      <md-app-support types="custom"></md-app-support>
      </md-td>
    </md-tr>
    <md-tr>
      <md-th>
            权限要求
            <md-tooltip type="info">调用该 API 所需的权限。开启其中任意一项权限即可调用</md-tooltip>
            
      </md-th>
      <md-td>
            <md-perm name="helpdesk:all:readonly" desc="获取服务台资源详情" support_app_types="custom" tags="">获取服务台资源详情</md-perm>
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

:::html
<md-alert type="tip">
服务台请求Header中还需添加“服务台token”参数：
  
  Key: X-Lark-Helpdesk-Authorization
  
  Value: base64(helpdesk_id:helpdesk_token)，通过base64加密将helpdesk_id和helpdesk_token用':'连接而成的字符串。
  
  [了解更多：获取与使用服务台token](/ssl:ttdoc/ukTMukTMukTM/ugDOyYjL4gjM24CO4IjN)
</md-alert>
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
	<md-text type="field-name" >ticket_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	工单ID

**示例值**：12345
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >msg_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	消息ID

[查询消息ID](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/ticket-message/list)

**示例值**：12345
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >index</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	index，当消息类型为post时，需指定图片index，index从0开始。当消息类型为img时，无需index

**示例值**：0
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
  <md-td>400</md-td>
  <md-td>154000</md-td>
  <md-td>Bad request, please check your request body</md-td>
  <md-td>请求不合法，可能是 index 未填写或填写不正确。请检查 index 参数</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>154003</md-td>
  <md-td>Please check you have the correct access</md-td>
  <md-td>无权限。检查Authorization 和 X-Lark-Helpdesk-Authorization 是否正确、应用和服务台是否属于同一租户</md-td>
</md-tr>


<md-tr>
  <md-td>404</md-td>
  <md-td>154004</md-td>
  <md-td>Resource not found</md-td>
  <md-td>资源不存在，可能是 `ticket_id` 和 `msg_id` 不匹配。请检查 ID 值</md-td>
</md-tr>


<md-tr>
  <md-td>401</md-td>
  <md-td>154404</md-td>
  <md-td>Image might be deleted</md-td>
  <md-td>图片被删除</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>155000</md-td>
  <md-td>Internal error</md-td>
  <md-td>内部错误，请联系[技术支持](https://applink.feishu.cn/TLJpeNdW)</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




