<!--
title: 发送邮件
id: 7205136193486356481
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/mail-v1/user_mailbox-message/send
updatedAt: 1755077627000
source: https://open.feishu.cn/document/server-docs/mail-v1/user_mailbox-message/send
-->
# 发送邮件

发送邮件{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=mail&version=v1&resource=user_mailbox.message&method=send)

:::html
<md-alert type="error">

</md-alert>
:::

:::html
<md-alert type="warn">
该接口基于单个用户加锁，只能串行调用
</md-alert>
:::

:::html
<md-alert type="tip">
发送邮件使用 base64url 编码。与普通 base64 的区别是将「+/」替换为「-_」。
对于 Golang 使用 base64.URLEncoding。
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
      <md-td>https://open.feishu.cn/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/messages/send</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>POST</md-td>
    </md-tr>
    <md-tr>
      <md-th>接口频率限制</md-th>
      <md-td>[100 次/分钟](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
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
            <md-perm name="mail:user_mailbox.message:send" desc="发送用户邮件" support_app_types="custom" tags="">发送用户邮件</md-perm>
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
<md-td>**固定值**："application/json; charset=utf-8"</md-td>
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
	<md-text type="field-name" >user_mailbox_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户邮箱地址 或 输入me代表当前调用接口用户

**示例值**："user@xxx.xx 或 me"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
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
	<md-text type="field-name" >subject</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	主题

**示例值**："邮件标题"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >to</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mail_address\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	收件人
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >mail_address</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	邮件地址

**示例值**："user@xxx.xx"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	名称

**示例值**："Mike"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >raw</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	eml数据

**示例值**："U3ViamVjdDogSGVsbG8hCkZyb206ICJtaWtlIiA8bWlrZUBtaWtlLmNvbT4KTWltZS1WZXJzaW9uOiAxLjAKQ29udGVudC1UeXBlOiBtdWx0aXBhcnQvYWx0ZXJuYXRpdmU7CiBib3VuZGFyeT1iMjhmYTIyNGExZWU2ZDY3ZjE3OTViNGUxZDEwM2Q3MTBlNzM5ZWVmYjFmZjlmOWQ4NWI4M2NlOTRmMTEKRGF0ZTogV2VkLCAyMyBKdWwgMjAyNSAxNTo0NDoxOCArMDgwMApNZXNzYWdlLUlkOiA8bW9ja3V1aWRtZXNzYWdlX2lkQGxhcmsuY29tPgpUbzogImphY2siIDxqYWNrQGphY2suY29tPgoKLS1iMjhmYTIyNGExZWU2ZDY3ZjE3OTViNGUxZDEwM2Q3MTBlNzM5ZWVmYjFmZjlmOWQ4NWI4M2NlOTRmMTEKQ29udGVudC1UcmFuc2Zlci1FbmNvZGluZzogN2JpdApDb250ZW50LVR5cGU6IHRleHQvcGxhaW47IGNoYXJzZXQ9VVRGLTgKCldlbGNvbWUgdG8gTGFyayBtYWlsIQotLWIyOGZhMjI0YTFlZTZkNjdmMTc5NWI0ZTFkMTAzZDcxMGU3MzllZWZiMWZmOWY5ZDg1YjgzY2U5NGYxMQo="
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >cc</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mail_address\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	抄送
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >mail_address</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	邮件地址

**示例值**："user@xxx.xx"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	名称

**示例值**："Mike"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >bcc</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mail_address\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	密送
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >mail_address</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	邮件地址

**示例值**："user@xxx.xx"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	名称

**示例值**："Mike"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >body_html</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	正文

**示例值**："xxxx"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >body_plain_text</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	正文纯文本

**示例值**："xxxx"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >attachments</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >attachment\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	附件
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >body</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	附件的正文，使用 base64url 编码（支持的文件最大 37MB）

**示例值**："aGVsbG8gd29ybGQK"

**数据校验规则**：

- 最大长度：`51729750` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >filename</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	附件文件名

**示例值**："helloworld.txt"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >is_inline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否为内联图片，true 表示是内联图片

**示例值**：false

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >cid</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	内容 ID，HTML 中通过 cid: 协议引用该图片

**示例值**："image1@example.com"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >dedupe_key</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	去重键

**示例值**："abc-ddd-eee-fff-ggg"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >head_from</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mail_address</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	EML中发件人信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	名称

**示例值**："Mike"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "subject": "邮件标题",
    "to": [
        {
            "mail_address": "user@xxx.xx",
            "name": "Mike"
        }
    ],
    "raw": "U3ViamVjdDogSGVsbG8hCkZyb206ICJtaWtlIiA8bWlrZUBtaWtlLmNvbT4KTWltZS1WZXJzaW9uOiAxLjAKQ29udGVudC1UeXBlOiBtdWx0aXBhcnQvYWx0ZXJuYXRpdmU7CiBib3VuZGFyeT1iMjhmYTIyNGExZWU2ZDY3ZjE3OTViNGUxZDEwM2Q3MTBlNzM5ZWVmYjFmZjlmOWQ4NWI4M2NlOTRmMTEKRGF0ZTogV2VkLCAyMyBKdWwgMjAyNSAxNTo0NDoxOCArMDgwMApNZXNzYWdlLUlkOiA8bW9ja3V1aWRtZXNzYWdlX2lkQGxhcmsuY29tPgpUbzogImphY2siIDxqYWNrQGphY2suY29tPgoKLS1iMjhmYTIyNGExZWU2ZDY3ZjE3OTViNGUxZDEwM2Q3MTBlNzM5ZWVmYjFmZjlmOWQ4NWI4M2NlOTRmMTEKQ29udGVudC1UcmFuc2Zlci1FbmNvZGluZzogN2JpdApDb250ZW50LVR5cGU6IHRleHQvcGxhaW47IGNoYXJzZXQ9VVRGLTgKCldlbGNvbWUgdG8gTGFyayBtYWlsIQotLWIyOGZhMjI0YTFlZTZkNjdmMTc5NWI0ZTFkMTAzZDcxMGU3MzllZWZiMWZmOWY5ZDg1YjgzY2U5NGYxMQo=",
    "cc": [
        {
            "mail_address": "user@xxx.xx",
            "name": "Mike"
        }
    ],
    "bcc": [
        {
            "mail_address": "user@xxx.xx",
            "name": "Mike"
        }
    ],
    "body_html": "xxxx",
    "body_plain_text": "xxxx",
    "attachments": [
        {
            "body": "aGVsbG8gd29ybGQK",
            "filename": "helloworld.txt",
            "is_inline": false,
            "cid": "image1@example.com"
        }
    ],
    "dedupe_key": "abc-ddd-eee-fff-ggg",
    "head_from": {
        "name": "Mike"
    }
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
	<md-text type="field-name" >message_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	邮件ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >thread_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	会话ID
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
        "message_id": "48451e97-4743-4a55-a9a3-b5c656b69c05",
        "thread_id": "14151e97-4743-4a55-a9a3-b5c656b69c05"
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
  <md-td>404</md-td>
  <md-td>1234013</md-td>
  <md-td>user mailbox not found or user mailbox not active</md-td>
  <md-td>邮箱地址状态错误，请更换邮箱地址</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>1234017</md-td>
  <md-td>permission deny</md-td>
  <md-td>申请邮箱使用权限</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1234008</md-td>
  <md-td>request parameter error</md-td>
  <md-td>请检查请求参数是否正确</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1236001</md-td>
  <md-td>raw size over limit</md-td>
  <md-td>邮件大小超过限制，请减小邮件大小</md-td>
</md-tr>


<md-tr>
  <md-td>429</md-td>
  <md-td>1236006</md-td>
  <md-td>too many request</md-td>
  <md-td>同用户请勿并发请求</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1236002</md-td>
  <md-td>invalid mime format</md-td>
  <md-td>非法MIME格式邮件，请检查邮件格式以及确保基于base64url编码</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1236003</md-td>
  <md-td>the number of recipients exceeds the limit</md-td>
  <md-td>邮件收件人数量超过500限制，请减少邮件收件人</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1236004</md-td>
  <md-td>the number of attachments exceeds the limit</md-td>
  <md-td>邮件附件数量超过500限制，请减少邮件附件数量</md-td>
</md-tr>


<md-tr>
  <md-td>409</md-td>
  <md-td>1236005</md-td>
  <md-td>send mail repeatedly</md-td>
  <md-td>重复发送邮件，请勿使用相同Message-ID发送邮件</md-td>
</md-tr>


<md-tr>
  <md-td>429</md-td>
  <md-td>1236007</md-td>
  <md-td>the daily number of emails sent by the user exceeds the limit</md-td>
  <md-td>用户每天发送邮件数量超过限制</md-td>
</md-tr>


<md-tr>
  <md-td>429</md-td>
  <md-td>1236008</md-td>
  <md-td>the number of external recipients the user sends messages to each day exceeds the limit</md-td>
  <md-td>用户每天发送邮件的外部收件人数量超过限制</md-td>
</md-tr>


<md-tr>
  <md-td>429</md-td>
  <md-td>1236009</md-td>
  <md-td>the number of external recipients the tenant sends messages to each day exceeds the limit</md-td>
  <md-td>企业每天发送邮件的外部收件人数量超过限制</md-td>
</md-tr>


<md-tr>
  <md-td>429</md-td>
  <md-td>1236010</md-td>
  <md-td>mail quota limit</md-td>
  <md-td>用户的发信请求被系统限流，请重试</md-td>
</md-tr>


<md-tr>
  <md-td>429</md-td>
  <md-td>1236012</md-td>
  <md-td>reach send mail restriction</md-td>
  <md-td>用户发送的邮件达到发信阈值限制</md-td>
</md-tr>


<md-tr>
  <md-td>429</md-td>
  <md-td>1236013</md-td>
  <md-td>tenant storage limit</md-td>
  <md-td>租户存储空间已满，无法发送更多邮件</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1236014</md-td>
  <md-td>content risk</md-td>
  <md-td>由于邮件内容被识别为风险内容，邮件发送失败</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1236017</md-td>
  <md-td>sender check fail</md-td>
  <md-td>邮件发件人检测失败，请检查发件人信息和状态</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1236018</md-td>
  <md-td>receiver check fail</md-td>
  <md-td>邮件收件人检测失败，请检查收件人信息</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1236019</md-td>
  <md-td>internal server error</md-td>
  <md-td>系统内部报错</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




