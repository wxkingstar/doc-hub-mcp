<!--
title: Exchange 资源介绍
id: 7062619112195276804
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/exchange_binding/introduction
updatedAt: 1712716298000
source: https://open.feishu.cn/document/server-docs/calendar-v4/exchange_binding/introduction
-->
# Exchange 资源介绍

日历 API 提供了 Exchange 账户和飞书账户绑定、解绑以及状态查询的能力，你可以使用 API 将你的 Exchange 日历同步到飞书日历来使用。当 Exchange 账户绑定了飞书账户后，飞书账户会异步同步 Exchange 日历到飞书日历，同步期间你可以实时查询日历的同步状态。


##  字段说明

Exchange 绑定相关的 API 属性说明如下。

:::html
<md-table>
  <md-thead>
      <md-tr>
      <md-th style="width: 20%;">名称</md-th>
      <md-th style="width: 20%;">类型</md-th>
      <md-th style="width: 50%;">描述</md-th>
      </md-tr>
  </md-thead>
  <md-tbody>
<md-tr>
        <md-td>
        <md-text type="field-name" >exchange_binding_id</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        创建 Exchange 绑定关系时产生的 ID，是 admin 账户、exchange 账户、用户三元组的唯一标识 ID。你可以通过该 ID 查询绑定关系、日历同步状态，或者解除绑定关系。
          
**获取方式**：调用[将 Exchange 账户绑定到飞书账户](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/exchange_binding/create)接口时，从返回结果中获取。

**示例值**： "ZW1haWxfYWRtaW5fZXhhbXBsZUBvdXRsb29rLmNvbSBlbWFpbF9hY2NvdW50X2V4YW1wbGVAb3V0bG9vay5jb20="
        </md-td>
</md-tr>
    
    <md-tr>
        <md-td>
        <md-text type="field-name" >admin_account</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        Exchange 的 admin 账户。

**示例值**： "email_admin_example@outlook.com"
          
**字段权限要求**：
<md-perm name="contact:user.email:readonly" desc="获取用户邮箱信息" support_app_types="custom" tags="">获取用户邮箱信息</md-perm>
        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >exchange_account</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        需绑定的 Exchange 账户。

**示例值**： "email_account_example@outlook.com"

**字段权限要求**：
<md-perm name="contact:user.email:readonly" desc="获取用户邮箱信息" support_app_types="custom" tags="">获取用户邮箱信息</md-perm>
        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >user_id</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        用户 ID，即 Exchange 账户绑定的飞书账户 ID。关于用户 ID 可参见[用户相关的 ID 概念](/ssl:ttdoc/home/user-identity-introduction/introduction)。
       
**示例值**：ou_xxxxxxxxxxxxxxxxxx
        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >status</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        Exchange 账户的同步状态。
          
**可选值**：
- `doing`：日历正在同步
- `cal_done`：日历同步完成
- `timespan_done`：近期时间段同步完成
- `done`：日程同步完成
- `err`：同步错误
          
**示例值**："doing"
        </md-td>
</md-tr>

  </md-tbody>
</md-table>
:::

##  数据示例

```json
{
    "admin_account": "email_admin_example@outlook.com",
    "exchange_account": "email_account_example@outlook.com",
    "user_id": "ou_xxxxxxxxxxxxxxxxxx",
    "status": "doing",
    "exchange_binding_id": "ZW1haWxfYWRtaW5fZXhhbXBsZUBvdXRsb29rLmNvbSBlbWFpbF9hY2NvdW50X2V4YW1wbGVAb3V0bG9vay5jb20="
}
```