<!--
title: 删除仅特定人可见的消息卡片
id: 6907569742384316418
fullPath: /ukTMukTMukTM/uITOyYjLykjM24iM5IjN
updatedAt: 1724222505000
source: https://open.feishu.cn/document/server-docs/im-v1/message-card/delete-message-cards-that-are-only-visible-to-certain-people
-->
# 删除仅特定人可见的消息卡片

当发送的仅特定人可见的卡片消息已交互完成，可调用本接口删除该卡片。删除后将不会在对应设备上留下任何痕迹。

## 前提条件

- 应用需要启用[机器人能力](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-enable-bot-ability)。
- 应用机器人需要在待操作的消息卡片所在的群聊中。


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
      <md-td>https://open.feishu.cn/open-apis/ephemeral/v1/delete</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>POST</md-td>
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
            <md-perm name="im:message" desc="获取与发送单聊、群组消息" support_app_types="custom,isv" tags="">获取与发送单聊、群组消息</md-perm>
            <md-perm name="im:message:send_as_bot" desc="以应用的身份发消息" support_app_types="custom,isv" tags="">以应用的身份发消息</md-perm>
            <md-perm name="im:message:update" desc="更新消息" support_app_types="custom,isv" tags="">更新消息</md-perm>
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
          
以应用身份调用 API，可读写的数据范围由应用自身的[数据权限范围](/ssl:ttdoc/home/introduction-to-scope-and-authorization/configure-app-data-permissions)决定。参考[自建应用获取 tenant_access_token](/ssl:ttdoc/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token_internal)或[商店应用获取 tenant_access_token](/ssl:ttdoc/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token)。
          
**值格式**："Bearer `access_token`"
          
**示例值**："Bearer t-g1044qeGEDXTB6NDJOGV4JQCYDGHRBARFTGT1234"
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

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">名称</md-th>
<md-th style="width:15%">类型</md-th>
<md-th style="width:15%">必填</md-th>
<md-th style="width:50%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>message_id</md-td>
<md-td>string</md-td>
<md-td>是</md-td>
<md-td>消息 ID。调用[发送仅特定人可见的消息卡片](/ssl:ttdoc/ukTMukTMukTM/uETOyYjLxkjM24SM5IjN)接口后，在返回结果中获取。
  
**示例值**：om_5ad573a6411d72b8305fda3a9c15c70e
</md-td>
</md-tr>


</md-tbody>
</md-table>
:::

### 请求体示例

```json
{
   "message_id": "om_xxxxxxxxxxxx"
}
```

## 响应

### 响应体
|参数|类型|说明|
|-|-|-|
|code|int|返回码，非 0 表示失败|
|msg|string|返回码描述|

### 响应体示例

```json
{
    "code": 0,
    "msg": "ok"
}
```
### 错误码
:::html
<md-table> 
  <md-thead> 
    <md-tr> 
      <md-th style="width: 15%;">错误码</md-th>  
      <md-th style="width: 30%;">说明</md-th>  
       <md-th style="width: 30%;">排查建议</md-th>   
    </md-tr> 
  </md-thead>  
  <md-tbody> 
    <md-tr> 
      <md-td>18051</md-td>  
      <md-td>消息已删除</md-td>  
      <md-td>消息已被删除，无法继续删除</md-td> 
	</md-tr>
  </md-tbody> 
</md-table>
:::

其他通用错误码可参考：[服务端错误码说明](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)