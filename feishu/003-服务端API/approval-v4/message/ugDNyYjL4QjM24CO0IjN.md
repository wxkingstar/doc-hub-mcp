<!--
title: 发送审批 Bot 消息
id: 6907569742384906242
fullPath: /ukTMukTMukTM/ugDNyYjL4QjM24CO0IjN
updatedAt: 1750674809000
source: https://open.feishu.cn/document/server-docs/approval-v4/message/send-bot-messages
-->
# 发送审批 Bot 消息

此接口可以用来通过飞书审批的 Bot 推送消息给用户，当有新的审批待办，或者审批待办的状态有更新时，可以通过飞书审批的 Bot 告知用户。如果出现推送成功，但是没有收到消息，可能是因为开通了审批机器人的聚合推送。

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
      <md-td>https://open.feishu.cn/open-apis/approval/v1/message/send</md-td>
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
</md-th>
      <md-td>
<md-perm name="approval:approval:readonly" desc="访问审批应用" support_app_types="custom,isv" tags="">访问审批应用</md-perm>
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
 
以应用身份调用 API，可读写的数据范围由应用自身的 [数据权限范围](/ssl:ttdoc/home/introduction-to-scope-and-authorization/configure-app-data-permissions) 决定。参考 [自建应用获取 tenant_access_token](/ssl:ttdoc/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token_internal) 或 [商店应用获取 tenant_access_token](/ssl:ttdoc/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token)。

**值格式**："Bearer `access_token`"

**示例值**："Bearer t-7f1bcd13fc57d46bac21793a181234"
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

### 通用模板请求体

该请求体适用于审批通用模板，可用的模板参见下文 **通用模板** 章节。

:::html
<md-dt-table>
<md-dt-thead>
<md-dt-tr>
<md-dt-th style="width: 35%;">名称</md-dt-th>
<md-dt-th style="width: 13%;">类型</md-dt-th>
<md-dt-th style="width: 15%;">必填</md-dt-th>
<md-dt-th style="width: 37%;">描述</md-dt-th>
</md-dt-tr>
</md-dt-thead>
<md-dt-tbody>

<md-dt-tr level="0">
<md-dt-td>template_id</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>模板编号，具体参考模板列表的 **模板编号** 列。

**示例值**：1001</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>user_id</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>接收审批 Bot 消息的目标用户的 user_id。获取方式参见[如何获取用户的 User ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-user-id)。

**注意**：user_id 和 open_id 需至少传入一个。

**示例值**：b85s39b</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>open_id</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>接收审批 Bot 消息的目标用户的 open_id。获取方式参见[如何获取用户的 Open ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)。

**注意**：user_id 和 open_id 需至少传入一个。

**示例值**：ou-8ec33278bc2</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>uuid</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>自定义的幂等 ID，最大长度为 64。你可以传入唯一的 UUID 以保证审批 Bot 消息只发送一次。

**说明**：UUID 相同的请求，1 小时内只会发送一次审批 Bot 消息。

**示例值**：1234567</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>approval_name</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>对应模板标题的 `{approval_name}` 参数。

**注意**:

- 这里传入的是国际化文案 Key（即 i18n_resources.texts 参数中的 Key），还需要在 i18n_resources.texts 参数中以 Key:Value 格式进行赋值。

- Key 需要以 `@i18n@` 开头。

**示例值**：@i18n@1
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>title_user_id</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>对应模板标题的 `{title_user_id}`，用来指定审批的申请人、审批人、评论人或者抄送人等。需传入用户 ID，ID 类型与 title_user_id_type 取值保持一致。

**示例值**：b85s39b
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>title_user_id_type</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>指定 title_user_id 传入的用户 ID 类型。可选值有：

- user_id：标识一个用户在某个租户内的身份。同一个用户在租户 A 和租户 B 内的 User ID 是不同的。在同一个租户内，一个用户的 User ID 在所有应用（包括商店应用）中都保持一致。User ID 主要用于在不同的应用间打通用户数据。获取方式参见[如何获取用户的 User ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-user-id)。
- open_id：标识一个用户在某个应用中的身份。同一个用户在不同应用中的 Open ID 不同。获取方式参见[如何获取用户的 Open ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)。

**默认值**：user_id
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>comment</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>评论区内容。

- 这里传入的是国际化文案 Key（即 i18n_resources.texts 参数中的 Key），还需要在 i18n_resources.texts 参数中以 Key:Value 格式进行赋值。
- Key 需要以 `@i18n@` 开头。
- 支持的语法参考[Markdown](/ssl:ttdoc/ukTMukTMukTM/uADOwUjLwgDM14CM4ATN#abc9b025)。

**示例值**：@i18n@2
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>content</md-dt-td>
<md-dt-td>map</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>审批 Bot 消息的内容。当模板的内容存在 `{user_id}`、`{department_id}` 或 `{summaries}` 等参数时，可以通过当前参数配置对应的参数值。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>user_id</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>审批申请人 ID。
  
- 参数为空时不显示申请人。
- ID 类型与 user_id_type 取值保持一致。

**示例值**：b85s39b</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>user_id_type</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>审批申请人 ID 的类型。可选值有：

- user_id：标识一个用户在某个租户内的身份。同一个用户在租户 A 和租户 B 内的 User ID 是不同的。在同一个租户内，一个用户的 User ID 在所有应用（包括商店应用）中都保持一致。User ID 主要用于在不同的应用间打通用户数据。获取方式参见[如何获取用户的 User ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-user-id)。
- open_id：标识一个用户在某个应用中的身份。同一个用户在不同应用中的 Open ID 不同。获取方式参见[如何获取用户的 Open ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)。

**默认值**：user_id
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>department_id</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>审批申请人所属部门的 ID。部门 ID 介绍参见[部门 ID](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/field-overview#9c02ed7a)。

**注意**：
- 仅支持传入 department_id，不支持传入 open_department_id。
- 如果设置了审批申请人 ID（user_id），且该用户仅属于一个部门，则可以不传 department_id 参数。如果用户属于多个部门，则必须传 department_id。

**示例值**：D096
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>user_name</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>审批申请人的名称。

**注意**：
- 该参数用于申请人不是真实用户的场景。如果传入了 user_id 则优先使用 user_id。
- Key 需要以 `@i18n@` 开头。
- 这里传入的是国际化文案 Key（即 i18n_resources.texts 参数中的 Key），还需要在 i18n_resources.texts 参数中以 Key:Value 格式进行赋值。

**示例值**：@i18n@3
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>department_name</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>审批申请人所属的部门名称。

**注意**：
- 该参数用于申请人部门不是真实部门的场景。如果传入了 department_id 则优先使用 department_id。
- Key 需要以 `@i18n@` 开头。
- 这里传入的是国际化文案 Key（即 i18n_resources.texts 参数中的 Key），还需要在 i18n_resources.texts 参数中以 Key:Value 格式进行赋值。


**示例值**：@i18n@4
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>summaries</md-dt-td>
<md-dt-td>list</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>审批事由。最多可传入 5 个。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>summary</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>审批事由。

- 这里传入的是国际化文案 Key（即 i18n_resources.texts 参数中的 Key），还需要在 i18n_resources.texts 参数中以 Key:Value 格式进行赋值。
- Key 需要以 `@i18n@` 开头。
- 支持的语法参考[Markdown](/ssl:ttdoc/ukTMukTMukTM/uADOwUjLwgDM14CM4ATN#abc9b025)。


**示例值**：@i18n@5

</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>note</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>备注。内容用于标注审批来源、访问限制等信息。

**注意**：

- 这里传入的是国际化文案 Key（即 i18n_resources.texts 参数中的 Key），还需要在 i18n_resources.texts 参数中以 Key:Value 格式进行赋值。
- Key 需要以 `@i18n@` 开头。

**示例值**：@i18n@5

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/2d5dca2615a65dadb6119027e9614c44_XOiwf7O08C.png?height=1456&lazyload=true&maxWidth=200&width=952)
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>sender_user_id</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>发送人的 user_id，用于发送 IM 卡片。获取方式参考[如何获取用户的 User ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-user-id)。

**示例值**：b85s39b</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>text</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>转发留言，用于发送 IM 卡片发送一条留言。

**示例值**：请尽快完成审批

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8ef4c5af656f58f92c9cf7721945342f_wLmZNKKY1v.png?height=1280&lazyload=true&maxWidth=200&width=622)
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>actions</md-dt-td>
<md-dt-td>list</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>操作区，最多可设置 2 个操作按钮。其中：

- 第一个按钮固定为 **查看详情**，必传。
- 第二个按钮自定义，可选择传入。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0d9c4339d6296466f784e0dc880b4915_YLGpznrJAe.png?height=1384&lazyload=true&maxWidth=200&width=998)
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>action_name</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>操作类型。其中：

- 第一个按钮的 action_name 固定取值 DETAIL。
- 第二个按钮的 action_name 自定义配置。这里传入的是国际化文案 Key（即 i18n_resources.texts 参数中的 Key），还需要在 i18n_resources.texts 参数中以 Key:Value 格式进行赋值。Key 需要以 `@i18n@` 开头。

**示例值**：@i18n@7
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>url</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>默认链接，不同的端配置不同的操作跳转 url，链接必须包含 schema 才能生效。例如：https、http

**示例值**：https://www.example.com</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>android_url</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>Android 端的跳转链接。

**示例值**：https://www.example.com
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>ios_url</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>iOS 端的跳转链接。

**示例值**：https://www.example.com</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>pc_url</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>PC 端的跳转链接。

**示例值**：https://www.example.com</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>action_callback</md-dt-td>
<md-dt-td>map</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>快捷审批的回调配置。

**说明**：仅样式为橘黄色的模板支持快捷审批参数。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>action_callback_url</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>三方系统的操作回调 URL。待审批列表的任务审批人点击同意或者拒绝后，审批中心调用该地址通知三方系统。

**示例值**：http://www.example.cn/approval/openapi/instanceOperate</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>action_callback_token</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>回调时带的 token，用于业务系统验证请求来自审批。详情参见[事件订阅概述](/ssl:ttdoc/ukTMukTMukTM/uUTNz4SN1MjL1UzM)。

**示例值**：abc1234def6789</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>action_callback_key</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>请求参数加密密钥，如果配置了该参数，则会对请求参数进行加密，业务需要对请求进行解密。加解密算法详情参考[关联外部选项说明](/ssl:ttdoc/ukTMukTMukTM/uADM4QjLwADO04CMwgDN)。

**示例值**：gfdqedvsadfgfsd</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>action_context</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>操作上下文，回调的时候会把该参数回传。

**示例值**：test</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>action_configs</md-dt-td>
<md-dt-td>list</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>快捷审批的操作配置。

**说明**：仅样式为橘黄色的模板支持快捷审批参数。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9471d869446c112e6dfc33828208f545_8QMtl0q4Rm.png?height=1446&lazyload=true&maxWidth=200&width=938)
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>action_type</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>操作类型。可选值有：

- APPROVE：同意
- REJECT：拒绝
- KEY：任意英文字符串，设置该值时，需要设置 action_name 参数。

**示例值**：APPROVE
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>action_name</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>操作名称。

**注意**：
- 当 action_type 取值为 KEY 时，则必须设置该参数值。
- 这里传入的是国际化文案 Key（即 i18n_resources.texts 参数中的 Key），还需要在 i18n_resources.texts 参数中以 Key:Value 格式进行赋值。
- Key 需要以 `@i18n@` 开头。

**示例值**：@i18n@8</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>is_need_reason</md-dt-td>
<md-dt-td>boolean</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>是否需要填写审核意见。可选值有：

- true：需要
- false：不需要

取值为 true 时，操作者在操作审批 Bot 消息后会跳转到意见填写页面。


**示例值**：true
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>is_reason_required</md-dt-td>
<md-dt-td>boolean</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>意见是否为必填。

**示例值**：true</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>is_need_attachment</md-dt-td>
<md-dt-td>boolean</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>意见是否支持上传附件。

**示例值**：true</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>next_status</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>如果回调成功后，审批 Bot 消息会更新成的状态。如果指定则飞书审批会在用户操作后，把消息卡片的状态更新为 {next_status}。如果不指定则飞书审批不会主动更新消息卡片，需自行更新卡片，状态值参见[更新审批 Bot 消息](/ssl:ttdoc/ukTMukTMukTM/uAjNyYjLwYjM24CM2IjN)。

**示例值**：APPROVED</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>i18n_resources</md-dt-td>
<md-dt-td>list</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>国际化文案。部分参数（如 approval_name、comment 或 note 等）设置了国际化文案 Key 后，需要通过 i18n_resources 设置 Key:Value 关系为参数赋值。

例如，approval_name取值为 @i18n@8，则需要在 i18n_resources.texts 中传入 `@i18n@8： 审批实例名称` 为参数赋值。
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>locale</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>语言。可选值有：

- zh-CN：中文
- en-US：英文
- ja-JP：日文

**示例值**：zh-CN
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>is_default</md-dt-td>
<md-dt-td>boolean</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>当前语言是否为默认语言。默认语言需要在 texts 中传入所有的 Key:Value，非默认语言如果缺失 Key，则会使用默认语言代替。

**示例值**：true</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>texts</md-dt-td>
<md-dt-td>map</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>文案的 Key:Value。Key 需要以 `@i18n@` 开头，并按照各个参数的要求传入 Value。

**示例值**：

```
{
	"@i18n@1": "权限申请"，
	"@i18n@2": "OA审批"，
	"@i18n@3": "Permission"
}
```
</md-dt-td>
</md-dt-tr>

</md-dt-tbody>
</md-dt-table>
:::

### 通用模板请求体示例

:::note
实际使用时请将示例值改为真实值。
:::

```json
{
    "template_id":"1001",
    "user_id":"b85s39b",
    "uuid":"uuid",
    "approval_name":"@i18n@1",
    "title_user_id":"od-8ec33278bc2",
    "title_user_id_type": "user_id",
    "comment":"@i18n@2",
    "content":{
        "user_id":"b85s39b",
      	 "user_id_type": "user_id",
        "department_id":"od-8ec33278bc2",
        "summaries":[
            {
                "summary":"@i18n@3"
            }
        ]
    },
    "note":"@i18n@4",
    "actions":[
        {
            "action_name":"DETAIL",
            "url":" https://bytedance.com",
            "android_url":"https://bytedance.com",
            "ios_url":"https://bytedance.com",
            "pc_url":"https://bytedance.com"
        }
    ],
    "action_configs": [
        {
            "action_type": "APPROVE",
            "is_need_reason": true,
            "is_reason_required": true,
            "is_need_attachment": true,
            "next_status": "APPROVED"
        },
        {
            "action_type": "REJECT",
            "action_name": "@i18n@5",
            "next_status": "REJECTED"
        }
    ],
    "action_callback": {
        "action_callback_url":"http://feish.cn/approval/openapi/operate",
        "action_callback_token":"sdjkljkx9lsadf110",
        "action_callback_key":"gfdqedvsadfgfsd",
        "action_context":"acasdasd"
    },
    "i18n_resources":[
        {
            "locale":"en-US",
            "is_default":true,
            "texts":{
                "@i18n@1":"Temporary release",
                "@i18n@2":"Disapproval",
                "@i18n@3":"Need to modify",
                "@i18n@4":"From OA,please access through the internal network.",
                "@i18n@5":"Cancel"
            }
        }
    ]
}
```

### 自定义模板请求体

该请求体适用于审批自定义模板，可用的模板参见下文 **自定义模板** 章节。

:::html
<md-dt-table>
<md-dt-thead>
<md-dt-tr>
<md-dt-th style="width: 35%;">名称</md-dt-th>
<md-dt-th style="width: 13%;">类型</md-dt-th>
<md-dt-th style="width: 15%;">必填</md-dt-th>
<md-dt-th style="width: 37%;">描述</md-dt-th>
</md-dt-tr>
</md-dt-thead>
<md-dt-tbody>

<md-dt-tr level="0">
<md-dt-td>template_id</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>模板编号，自定义模板编号为 1021。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>user_id</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>接收审批 Bot 消息的目标用户的 user_id。获取方式参见[如何获取用户的 User ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-user-id)。

**注意**：user_id 和 open_id 需至少传入一个。

**示例值**：b85s39b</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>uuid</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>自定义的幂等 ID，最大长度为 ，用于保证消息只发送一次。64UUID 和 user_id 相同的请求，只会发送一次消息。

**示例值**：1234567</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>custom_title</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>模板标题。

**注意**:

- 这里传入的是国际化文案 Key（即 i18n_resources.texts 参数中的 Key），还需要在 i18n_resources.texts 参数中以 Key：Value 格式进行赋值。

- Key 需要以 `@i18n@` 开头。

**示例值**：@i18n@1</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>custom_content</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>模板内容。

- 这里传入的是国际化文案 Key（即 i18n_resources.texts 参数中的 Key），还需要在 i18n_resources.texts 参数中以 Key：Value 格式进行赋值。
- Key 需要以 `@i18n@` 开头。
- 支持的语法参考[Markdown](/ssl:ttdoc/ukTMukTMukTM/uADOwUjLwgDM14CM4ATN#abc9b025)。

**示例值**：@i18n@2</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>note</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>备注。内容用于标注审批来源、访问限制等信息。

**注意**：

- 这里传入的是国际化文案 Key（即 i18n_resources.texts 参数中的 Key），还需要在 i18n_resources.texts 参数中以 Key：Value 格式进行赋值。
- Key 需要以 `@i18n@` 开头。

**示例值**：@i18n@3
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>actions</md-dt-td>
<md-dt-td>list</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>操作区，用于设置操作按钮，最多可设置 2 个按钮。
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>action_name</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>操作按钮的内容。

**注意**：

- 这里传入的是国际化文案 Key（即 i18n_resources.texts 参数中的 Key），还需要在 i18n_resources.texts 参数中以 Key：Value 格式进行赋值。
- Key 需要以 `@i18n@` 开头。

**示例值**：@i18n@3
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>url</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>默认链接，不同的端配置不同的操作跳转 url，链接必须包含 schema 才能生效。例如：https、http

**示例值**：https://www.example.com</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>android_url</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>Android 端的跳转链接。

**示例值**：https://www.example.com
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>ios_url</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>iOS 端的跳转链接。

**示例值**：https://www.example.com</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>pc_url</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>PC 端的跳转链接。

**示例值**：https://www.example.com</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>i18n_resources</md-dt-td>
<md-dt-td>list</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>国际化文案。部分参数（如 approval_name、comment 或 note 等）设置了国际化文案 Key 后，需要通过 i18n_resources 设置 Key：value 关系为参数赋值。

例如，approval_name取值为 @i18n@8，则需要在 i18n_resources.texts 中传入 `@i18n@8： 审批实例名称` 为参数赋值。
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>locale</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>语言。可选值有：

- zh-CN：中文
- en-US：英文
- ja-JP：日文

**示例值**：zh-CN
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>is_default</md-dt-td>
<md-dt-td>boolean</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>当前语言是否为默认语言。默认语言需要在 texts 中传入所有的 Key：Value，非默认语言如果缺失 Key，则会使用默认语言代替。

**示例值**：true</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>texts</md-dt-td>
<md-dt-td>map</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>文案的 Key:Value。Key 需要以 `@i18n@` 开头，并按照各个参数的要求传入 Value。

**示例值**：

```
{
	"@i18n@1": "权限申请"，
	"@i18n@2": "OA审批"，
	"@i18n@3": "Permission"
}
```
</md-dt-td>
</md-dt-tr>

</md-dt-tbody>
</md-dt-table>
:::

### 自定义模板请求体示例

:::note
实际使用时请将示例值改为真实值。
:::

```json
{
    "template_id":"1021",
    "user_id":"employeeId1",
    "uuid":"uuid",
    "custom_title":"@i18n@1",
    "custom_content":"@i18n@2",
    "note":"@i18n@3",
    "actions":[
        {
            "action_name":"@i18n@4",
            "url":" https://bytedance.com",
            "android_url":"https://bytedance.com",
            "ios_url":"https://bytedance.com",
            "pc_url":"https://bytedance.com"
        }
    ],
    "i18n_resources":[
        {
            "locale":"en-US",
            "is_default":true,
            "texts":{
                "@i18n@1":"Custom template",
                "@i18n@2":"Please help process my approval as soon as possible.",
                "@i18n@3":"From OA,please access through the internal network.",
                "@i18n@4":"DETAIL"
            }
        }
    ]
}

```

## 响应

### 响应体

|参数|类型|说明|
|-|-|-|-|
|code|int|错误码，非 0 表示失败|
|msg|string|返回码的描述|
|data|map|返回业务信息|
|&emsp;∟message_id|string|消息 ID，用于[更新审批 Bot 消息](/ssl:ttdoc/ukTMukTMukTM/uAjNyYjLwYjM24CM2IjN)|

### 响应体示例 
```json
{
    "code":0,
    "msg":"success",
    "data":{
        "message_id": "6968359519504171036"
    }
}
```

### 错误码

具体可参考：[服务端错误码说明](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)

## 模板列表

模板分为通用模板和自定义模板两类，使用时，需要传入对应模板的编号以及参数信息。

### 通用模板

:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 10%;">模版编号</md-th>
      <md-th style="width: 30%;">模板名称</md-th>
      <md-th style="width: 30%;">模板样式</md-th>
      <md-th style="width: 30%;">说明</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>1001</md-td>
      <md-td>收到评论</md-td>
      <md-td>模板样式如下图所示，其中`{xxx}`占位符对应着请求参数在模板内生效的位置。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8fb9760d9942485a563ca1a6ae4d7a80_DC69JK4Cb3.png?height=744&lazyload=true&width=612)
      
      </md-td>
      <md-td>必填参数：
- approval_name
- title_user_id
- summaries
- actions
- comment</md-td>
    </md-tr>
    <md-tr>
      <md-td>1002</md-td>
      <md-td>审批暂存待办</md-td>
      <md-td>模板样式如下图所示，其中`{xxx}`占位符对应着请求参数在模板内生效的位置。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6965ac41d8b28b37e3a20f37795d14a1_jCZDbsfssB.png?height=600&lazyload=true&width=610)</md-td>
      <md-td>必填参数：
- approval_name
- title_user_id
- summaries
- actions</md-td>
    </md-tr>
    <md-tr>
      <md-td>1003</md-td>
      <md-td>审批已拒绝</md-td>
      <md-td>模板样式如下图所示，其中`{xxx}`占位符对应着请求参数在模板内生效的位置。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e09421ab669877a077df2dedbe7886d1_ZD7GaPZh05.png?height=740&lazyload=true&width=610)</md-td>
      <md-td>必填参数：
- approval_name
- title_user_id
- summaries
- actions</md-td>
    </md-tr>
    <md-tr>
      <md-td>1004</md-td>
      <md-td>审批已通过</md-td>
      <md-td>模板样式如下图所示，其中`{xxx}`占位符对应着请求参数在模板内生效的位置。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/33961fa40872dfcf7c920cdc54824f65_zFfabDOlyJ.png?height=698&lazyload=true&width=612)</md-td>
      <md-td>必填参数：
- approval_name
- title_user_id
- summaries
- actions
- comment</md-td>
    </md-tr>
    <md-tr>
      <md-td>1005</md-td>
      <md-td>成功发起了审批</md-td>
      <md-td>模板样式如下图所示，其中`{xxx}`占位符对应着请求参数在模板内生效的位置。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/71e6428e1762b1489803669d308ed9a6_7ey4z5EJ10.png?height=558&lazyload=true&width=614)</md-td>
      <md-td>必填参数：
- approval_name
- summaries
- actions</md-td>
    </md-tr>
    <md-tr>
      <md-td>1006</md-td>
      <md-td>审批将被关闭</md-td>
      <md-td>模板样式如下图所示，其中`{xxx}`占位符对应着请求参数在模板内生效的位置。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/50aac7f26cedc703061207c19070e6e8_nVaYgR6XQ9.png?height=556&lazyload=true&width=614)</md-td>
      <md-td>必填参数：
- approval_name
- summaries
- actions</md-td>
    </md-tr>
    <md-tr>
      <md-td>1007</md-td>
      <md-td>审批已被关闭</md-td>
      <md-td>模板样式如下图所示，其中`{xxx}`占位符对应着请求参数在模板内生效的位置。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ced4e31bcea1371dc7dd265d831fb928_CKG7WDzkXy.png?height=558&lazyload=true&width=610)</md-td>
      <md-td>必填参数：
- approval_name
- summaries
- actions</md-td>
    </md-tr>
    <md-tr>
      <md-td>1008</md-td>
      <md-td>收到审批待办</md-td>
      <md-td>模板样式如下图所示，其中`{xxx}`占位符对应着请求参数在模板内生效的位置。该模板支持快捷审批参数。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/dafea7bff2c4f9882adf1504726880ec_87Cb86lNiP.png?height=676&lazyload=true&width=610)</md-td>
      <md-td>必填参数：
- approval_name
- title_user_id
- summaries
- actions

快捷审批参数：
- action_configs
- action_callback

**注意**：
- title_user_id 为空时，标题展示为：`{approval_name}待你审批`
- 申请人user_id，取content下的user_id
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>1028</md-td>
      <md-td>收到审批待办（无审批发起人）</md-td>
      <md-td>模板样式如下图所示，其中`{xxx}`占位符对应着请求参数在模板内生效的位置。该模板支持快捷审批参数。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ffe9be0aff6d1f2f4ac0f72ef3984703_kSi0G6Wxrg.png?height=622&lazyload=true&width=608)</md-td>
      <md-td>必填参数：
- approval_name
- summaries
- actions
        
快捷审批参数：
- action_configs
- action_callback</md-td>
    </md-tr>
    <md-tr>
      <md-td>1009</md-td>
      <md-td>被加签</md-td>
      <md-td>模板样式如下图所示，其中`{xxx}`占位符对应着请求参数在模板内生效的位置。该模板支持快捷审批参数。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b2e556c8537a354d96e01891bcc9036f_t76Ku80hI9.png?height=818&lazyload=true&width=612)</md-td>
      <md-td>必填参数：
- approval_name
- title_user_id
- summaries
- actions
        
快捷审批参数：
- action_configs
- action_callback

**注意**：
- 申请人user_id，取content下的user_id
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>1010</md-td>
      <md-td>被转交</md-td>
      <md-td>模板样式如下图所示，其中`{xxx}`占位符对应着请求参数在模板内生效的位置。该模板支持快捷审批参数。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d20ead5685436adfdb264704af6b1b87_oyxuciPjYF.png?height=814&lazyload=true&width=612)</md-td>
      <md-td>必填参数：
- approval_name
- title_user_id
- summaries
- actions

快捷审批参数：
- action_configs
- action_callback
      
**注意**：
- 申请人user_id，取content下的user_id
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>1011</md-td>
      <md-td>被委托</md-td>
      <md-td>模板样式如下图所示，其中`{xxx}`占位符对应着请求参数在模板内生效的位置。该模板支持快捷审批参数。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a36faf13a0ce10489a20928ad97c0f1a_A2jsLDHvsp.png?height=674&lazyload=true&width=612)</md-td>
      <md-td>必填参数：
- approval_name
- title_user_id
- summaries
- actions

        
快捷审批参数：
- action_configs
- action_callback
      
**注意**：
- 申请人user_id，取content下的user_id
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>1012</md-td>
      <md-td>被回退</md-td>
      <md-td>模板样式如下图所示，其中`{xxx}`占位符对应着请求参数在模板内生效的位置。该模板支持快捷审批参数。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/2235a11f4c7be3d633f2473816d671e1_0SBP8ABvGr.png?height=816&lazyload=true&width=610)</md-td>
      <md-td>必填参数：
- approval_name
- title_user_id
- summaries
- actions

        
快捷审批参数：
- action_configs
- action_callback
      
**注意**：
- 申请人user_id，取content下的user_id
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>1013</md-td>
      <md-td>人工催办（个人 IM）</md-td>
      <md-td>模板样式如下图所示，其中`{xxx}`占位符对应着请求参数在模板内生效的位置。该模板支持快捷审批参数。

![1013.jpeg](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c07487b55994fcd15ce39b8850706181_PwsxdB8lOv.png?height=1174&lazyload=true&width=946)</md-td>
      <md-td>必填参数：
- approval_name
- title_user_id
- summaries
- actions
- sender_user_id

快捷审批参数：
- action_configs
- action_callback
      
**注意**：
- 申请人user_id，取content下的user_id
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>1015</md-td>
      <md-td>被撤回</md-td>
      <md-td>模板样式如下图所示，其中`{xxx}`占位符对应着请求参数在模板内生效的位置。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/73cb77eb1c541a84cff03f20cd111037_kSdabPPy27.png?height=848&lazyload=true&width=610)</md-td>
      <md-td>必填参数：
- approval_name
- title_user_id
- summaries
- actions
      
**注意**：
- 申请人user_id，取content下的user_id
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>1016</md-td>
      <md-td>被抄送</md-td>
      <md-td>模板样式如下图所示，其中`{xxx}`占位符对应着请求参数在模板内生效的位置。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/57b4790def282828b8a6045b1f54b470_NYBfNguOVd.png?height=844&lazyload=true&width=612)</md-td>
      <md-td>必填参数：
- approval_name
- title_user_id
- summaries
- actions
      
**注意**：
- 申请人user_id，取content下的user_id
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>1017</md-td>
      <md-td>评论被回复</md-td>
      <md-td>模板样式如下图所示，其中`{xxx}`占位符对应着请求参数在模板内生效的位置。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f353ef1941cf1678912e0c01b4294b2d_Mc6ZKsI2E9.png?height=848&lazyload=true&width=612)</md-td>
      <md-td>必填参数：
- approval_name
- title_user_id
- summaries
- actions
- comment
      
**注意**：
- 申请人user_id，取content下的user_id
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>1018</md-td>
      <md-td>评论被提及</md-td>
      <md-td>模板样式如下图所示，其中`{xxx}`占位符对应着请求参数在模板内生效的位置。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/61216b9689fbeabe57cda30f64741838_7kh1DlwWvd.png?height=852&lazyload=true&width=616)</md-td>
      <md-td>必填参数：
- approval_name
- title_user_id
- ummaries
- actions
- comment
      
**注意**：
- 申请人user_id，取content下的user_id
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>1019</md-td>
      <md-td>申请人离职转交主管</md-td>
      <md-td>模板样式如下图所示，其中`{xxx}`占位符对应着请求参数在模板内生效的位置。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/930476e2ea2226418e78f73a44bdfa5f_MXWaavp7XW.png?height=706&lazyload=true&width=612)</md-td>
      <md-td>必填参数：
- approval_name
- title_user_id
- summaries
- actions
      
**注意**：
- 申请人user_id，取content下的user_id
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>1020</md-td>
      <md-td>审批人离职抄送主管</md-td>
      <md-td>模板样式如下图所示，其中`{xxx}`占位符对应着请求参数在模板内生效的位置。该模板支持快捷审批参数。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8334dad4a247eaee980908c32e846a8e_3RnJGRDMc7.png?height=676&lazyload=true&width=612)</md-td>
      <md-td>必填参数：
- approval_name
- title_user_id
- summaries
- actions
        
快捷审批参数：
- action_configs
- action_callback
      
**注意**：
- 申请人user_id，取content下的user_id
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>1024</md-td>
      <md-td>审批分享</md-td>
      <md-td>模板样式如下图所示，其中`{xxx}`占位符对应着请求参数在模板内生效的位置。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0414cfe2ad23056f7194591387b05f9e_fP2g2pOtoe.png?height=660&lazyload=true&width=614)</md-td>
      <md-td>必填参数：
- approval_name
- summaries
- actions
      
**注意**：
- 申请人user_id，取content下的user_id
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>1026</md-td>
      <md-td>系统抄送</md-td>
      <md-td>模板样式如下图所示，其中`{xxx}`占位符对应着请求参数在模板内生效的位置。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b819176c4f20f0d1cd8b0de15fe8924a_2PypN4k7Wi.png?height=712&lazyload=true&width=614)</md-td>
      <md-td>必填参数：
- approval_name
- title_user_id
- summaries
- actions
      
**注意**：
- 申请人user_id，取content下的user_id
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>1027</md-td>
      <md-td>添加评论</md-td>
      <md-td>模板样式如下图所示，其中`{xxx}`占位符对应着请求参数在模板内生效的位置。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/481c26811420a62d9f69556935578acf_OjJglPSBgn.png?height=846&lazyload=true&width=614)</md-td>
      <md-td>必填字段：
- approval_name
- title_user_id
- summaries
- actions
- comment
      
**注意**：
- 申请人user_id，取content下的user_id
      </md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

### 自定义模板

:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 10%;">模版编号</md-th>
      <md-th style="width: 30%;">模板名称</md-th>
      <md-th style="width: 30%;">模板样式与字段</md-th>
      <md-th style="width: 30%;">说明</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>1021</md-td>
      <md-td>自定义模板</md-td>
      <md-td>样式固定、内容完全自定义的模板。
        
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0b9bad0f497b1cfa2bb869ea2ccd22e7_0D5KuuHDfl.png?height=472&lazyload=true&width=612)</md-td>
      <md-td>必填字段：
- custom_title
- custom_content</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::