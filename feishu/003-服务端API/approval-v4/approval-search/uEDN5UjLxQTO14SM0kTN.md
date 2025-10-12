<!--
title: 查询审批 ID（专用）
id: 6907568031544737794
fullPath: /ukTMukTMukTM/uEDN5UjLxQTO14SM0kTN
updatedAt: 1745207231000
source: https://open.feishu.cn/document/server-docs/approval-v4/approval-search/search-approval-id-(dedicated)
-->
# 查询审批 ID（专用）

用于灰度企业内的 userID、larkID 相互转换。

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
      <md-td>https://www.feishu.cn/approval/openapi/v1/id/get</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>POST</md-td>
    </md-tr>
    
    
  </md-tbody>
</md-table>
:::
### 请求头
:::html
<md-table> 
  <md-thead> 
    <md-tr> 
      <md-th style="width: 18%;">名称</md-th>  
      <md-th style="width: 15%;">类型</md-th>  
       <md-th style="width: 15%;">必填</md-th>  
      <md-th>描述</md-th> 
    </md-tr> 
  </md-thead>  
  <md-tbody> 
    <md-tr> 
      <md-td>Authorization</md-td>  
      <md-td>string</md-td>  
      <md-td> 是 </md-td> 
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
      <md-td> 是 </md-td> 
     <md-td>**固定值**："application/json; charset=utf-8"</md-td>
</md-tr>
   
  </md-tbody> 
</md-table>
:::

### 请求体

| 名称         | 类型           | 必须        | 说明        |
| --------- | --------------- | -------   | --------- |
|tenant_key | string | 否 |  企业标识（user_id_list 不为空时必须） |
|user_id_list | list<string> | 否 | Employee ID 数组（最大100个）  |
|lark_id_list | list<i64> | 否 |  Lark User ID 数组（最大100个） |
  
### 请求体示例

```json
{
    "tenant_key":"2ec1bb30a64f1666",
    "user_id_list":["18gee666"],
    "lark_id_list":[6636933555614666666,6636933555614666667]
}
````

## 响应

### 响应体
| 参数         |类型         |必须  | 说明        |
| --------- | ----------|----- | --------- |
|code |int |是 |错误码，非0表示失败 |
|msg | string |是| 返回码的描述|
&emsp;  ∟user_id_map |map |是|&emsp;Employee ID数组
&emsp;  ∟lark_id_map |map |是|&emsp;Lark User ID数组
  
### 响应体示例

```json
{
    "code":0,  //错误码，非0表示失败
    "msg":"success",  //返回消息
     "data":{
       "user_id_map": {  //Employee ID 数组
            "18gee666": "6636933555614666666",
            "18gee666": "6636933555614666666",
            "18gee666": "6636933555614666666"
        },
        "lark_id_map": { //Lark User ID 数组
            "6636933555614121998": "18gee666",
            "6747579129199067139": "18gee666"
        }
    }
}
```