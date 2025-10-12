<!--
title: 创建审批实例
id: 7114621541589827587
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/create
updatedAt: 1747194126000
source: https://open.feishu.cn/document/server-docs/approval-v4/instance/create
-->
# 创建审批实例

调用本接口使用指定审批定义 Code 创建一个审批实例，接口调用者需对审批定义的表单有详细了解，按照定义的表单结构，将表单 Value 通过本接口传入。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=approval&version=v4&resource=instance&method=create)

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
      <md-td>https://open.feishu.cn/open-apis/approval/v4/instances</md-td>
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
            <md-perm name="approval:approval" desc="查看、创建、更新、删除审批应用相关信息" support_app_types="custom,isv" tags="">查看、创建、更新、删除审批应用相关信息</md-perm>
            <md-perm name="approval:instance" desc="查看、创建、更新、删除原生审批实例相关信息" support_app_types="custom,isv" tags="">查看、创建、更新、删除原生审批实例相关信息</md-perm>
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
	<md-text type="field-name" >approval_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	审批定义 Code。获取方式：

- 调用[创建审批定义](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval/create)接口后，从响应参数 approval_code 获取。
- 登录审批管理后台，在指定审批定义的 URL 中获取，具体操作参见[什么是 Approval Code](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval/overview-of-approval-resources#8151e0ae)。

**示例值**："7C468A54-8745-2245-9675-08B7C63E7A85"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	审批发起人的 user_id，与 open_id 必须传入其中一个。如果传入了 user_id 则优先使用 user_id。获取方式参考[如何获取用户的 User ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-user-id)。

**示例值**："f7cb567e"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >open_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	审批发起人的 open_id，与 user_id 必须传入其中一个。如果传入了 user_id 则优先使用 user_id。获取方式参考[如何获取用户的 Open ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)

**示例值**："ou_3cda9c969f737aaa05e6915dce306cb9"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >department_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	审批发起人所属部门 ID。如果用户只属于一个部门，可以不填。如果用户属于多个部门，不填值则默认选择部门列表第一个部门。获取方式参见[部门 ID](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/field-overview#9c02ed7a)。

**说明**：

- 不支持填写根部门。
- 需填写 department_id 类型的部门 ID。

**示例值**："9293493ccacbdb9a"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >form</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	填写的审批表单控件值，JSON 数组，传值时需要压缩转义为字符串。各控件值的参数说明参考[审批实例表单控件参数](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/approval-instance-form-control-parameters)。

**示例值**："[{\"id\":\"111\", \"type\": \"input\", \"value\":\"test\"}]"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >node_approver_user_id_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >node_approver\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	如果审批定义的流程中，有节点需要发起人自选审批人，则需要通过本参数填写对应节点的审批人（通过用户 user_id 指定审批人）。

**说明**：如果同时传入了 node_approver_user_id_list、node_approver_open_id_list，则取两个参数的并集生效审批人。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >key</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	节点的 node_id 或 custom_node_id，可调用 [查看指定审批定义](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval/get) 接口，从接口返回的 node_list 参数中获取。

**示例值**："46e6d96cfa756980907209209ec03b64"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	审批人列表，需传入用户 user_id。获取方式参考[如何获取用户的 User ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-user-id)。

**示例值**：["f7cb567e"]
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >node_approver_open_id_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >node_approver\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	如果审批定义的流程中，有节点需要发起人自选审批人，则需要通过本参数填写对应节点的审批人（通过用户 open_id 指定审批人）。

**说明**：如果同时传入了 node_approver_user_id_list、node_approver_open_id_list，则取两个参数的并集生效审批人。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >key</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	节点的 node_id 或 custom_node_id，可调用 [查看指定审批定义](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval/get) 接口，从接口返回的 node_list 参数中获取。

**示例值**："46e6d96cfa756980907209209ec03b64"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	审批人列表，需传入用户 open_id。获取方式参考[如何获取用户的 Open ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)。

**示例值**：["f7cb567e"]
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >node_cc_user_id_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >node_cc\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	如果审批定义的流程中，有节点需要发起人自选抄送人，则需要通过本参数填写对应节点的抄送人（通过用户 user_id 指定审批人）。

**说明**：如果同时传入了 node_cc_user_id_list、node_cc_open_id_list，则取两个参数的并集生效抄送人。

**数据校验规则**：

- 最大长度：`20`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >key</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	节点的 node_id，可调用 [查看指定审批定义](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval/get) 接口，从接口返回的 node_list 参数中获取。

**示例值**："46e6d96cfa756980907209209ec03b75"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	抄送人列表，需传入用户 user_id。获取方式参考[如何获取用户的 User ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-user-id)。

**示例值**：["f7cb567e"]
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >node_cc_open_id_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >node_cc\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	如果审批定义的流程中，有节点需要发起人自选抄送人，则需要通过本参数填写对应节点的抄送人（通过用户 open_id 指定审批人）。

**说明**：如果同时传入了 node_cc_user_id_list、node_cc_open_id_list，则取两个参数的并集生效抄送人。

**数据校验规则**：

- 最大长度：`20`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >key</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	节点的 node_id，可调用 [查看指定审批定义](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval/get) 接口，从接口返回的 node_list 参数中获取。

**示例值**："46e6d96cfa756980907209209ec03b75"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	抄送人列表，需传入用户 open_id。获取方式参考[如何获取用户的 Open ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)。

**示例值**：["f7cb567e"]
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >uuid</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	审批实例 uuid，用于幂等操作，单个企业内的唯一 key。同一个 uuid 只能用于创建一个审批实例，如果冲突则创建失败并返回错误码 60012 ，格式建议为 XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX，不区分大小写。

**示例值**："7C468A54-8745-2245-9675-08B7C63E7A87"

**数据校验规则**：

- 长度范围：`1` ～ `64` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >allow_resubmit</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否配置 **提交** 按钮，适用于任务的审批人退回审批单据后，审批提交人可以在同一个审批实例内点击 **提交**，提交单据。

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >allow_submit_again</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否配置 **再次提交** 按钮，适用于周期性提单场景，按照当前表单内容再次发起一个新审批实例。

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >cancel_bot_notification</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	取消指定的 Bot 推送通知。可选值有：

- 1：取消审批实例通过推送。
- 2：取消审批实例拒绝推送。
- 4：取消审批实例取消推送。

支持同时取消多个 bot 推送通知。位运算，即如需取消 1 和 2 两种通知，则需要传入加和值 3。

**示例值**："1"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >forbid_revoke</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否禁止撤销审批实例

**示例值**：false

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >i18n_resources</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >i18n_resource\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	国际化文案。目前只支持为表单的单行、多行文本控件赋值。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >locale</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	语言

**示例值**："zh-CN"

**可选值有**：
<md-enum>
<md-enum-item key="zh-CN" >中文</md-enum-item>
<md-enum-item key="en-US" >英文</md-enum-item>
<md-enum-item key="ja-JP" >日文</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >texts</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >i18n_resource_text\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	文案的 Key:Value。Key 需要以 @i18n@ 开头，并按照各个参数的要求传入 Value。

**说明**：该字段主要用于适配国际化，允许同时设置多个语言的文案，审批中心会根据实际用户当前的语音环境使用匹配的文案。如果没有设置用户当前的语音环境文案，则会使用默认的语言文案。

**示例值**：{ "@i18n@1": "权限申请", "@i18n@2": "OA审批", "@i18n@3": "Permission" }
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >key</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	文案 Key，需要和各个参数 Key 相匹配。

**示例值**："@i18n@1"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	文案 Value，即文案 Key 对应的参数值。

**示例值**："people"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >is_default</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	是否为默认语言。默认语言需要包含所有所需的文案 Key，非默认语言如果 Key 不存在，则会使用默认语言代替。

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	审批实例的展示名称。如果填写了该参数，则审批列表中的审批名称使用该参数，如果不填该参数，则审批名称使用审批定义的名称。

**说明**：这里传入的是国际化文案 Key（即 i18n_resources.texts 参数中的 Key），必须以 @i18n@ 开头，还需要在 i18n_resources.texts 参数中以 Key:Value 格式进行赋值。

**示例值**："@i18n@1"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >title_display_method</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	审批详情页 title 展示模式。

**示例值**：0

**可选值有**：
<md-enum>
<md-enum-item key="0" >如果审批定义和审批实例都有 title，则全部展示，通过竖线分割。</md-enum-item>
<md-enum-item key="1" >如果审批定义和审批实例都有 title，只展示审批实例的 title。</md-enum-item>
</md-enum>

**默认值**：`0`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >node_auto_approval_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >node_auto_approval\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	设置自动通过的节点。

**数据校验规则**：

- 最大长度：`10`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >node_id_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	节点 ID 类型

**示例值**："NON_CUSTOM"

**可选值有**：
<md-enum>
<md-enum-item key="CUSTOM" >自定义节点ID</md-enum-item>
<md-enum-item key="NON_CUSTOM" >非自定义节点ID</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >node_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	节点 ID 值，可调用 [查看指定审批定义](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval/get) 接口，从接口返回的 node_list 参数中获取。

**示例值**："manager_node_id"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "approval_code":"4202AD96-9EC1-4284-9C48-B923CDC4F30B",
    "user_id":"59a92c4a",
    "open_id":"ou_806a18fb5bdf525e38ba219733bdbd73",
    "form":"[{\"id\":\"111\",\"type\":\"input\",\"value\":\"11111\"},{\"id\":\"222\",\"required\":true,\"type\":\"dateInterval\",\"value\":{\"start\":\"2019-10-01T08:12:01+08:00\",\"end\":\"2019-10-02T08:12:01+08:00\",\"interval\": 2.0}},{\"id\":\"333\",\"type\":\"radioV2\",\"value\":\"1\"},{\"id\":\"444\",\"type\":\"number\", \"value\":\"4\"},{\"id\":\"555\",\"type\":\"textarea\",\"value\":\"fsafs\"}]",
    "node_approver_user_id_list":[
        {"key": "46e6d96cfa756980907209209ec03b64","value":["59a92c4a"]},
        {"key": "manager_node_id","value":["59a92c4a"]}
    ],
    "node_approver_open_id_list":[
        {"key": "46e6d96cfa756980907209209ec03b64","value":["ou_806a18fb5bdf525e38ba219733bdbd73"]},
        {"key": "manager_node_id","value":["ou_806a18fb5bdf525e38ba219733bdbd73"]}
    ],
    "node_cc_user_id_list":[
        {"key": "46e6d96cfa756980907209209ec03b64","value":["59a92c4a"]},
        {"key": "manager_node_id","value":["59a92c4a"]}
    ],
    "node_cc_open_id_list":[
        {"key": "46e6d96cfa756980907209209ec03b64","value":["ou_806a18fb5bdf525e38ba219733bdbd73"]},
        {"key": "manager_node_id","value":["ou_806a18fb5bdf525e38ba219733bdbd73"]}
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
	<md-text type="field-name" >instance_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批实例 Code
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
        "instance_code": "81D31358-93AF-92D6-7425-01A5D67C4E71"
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
  <md-td>1390001</md-td>
  <md-td>param is invalid</md-td>
  <md-td>参数错误。排查方案：

- 根据接口文档的参数说明，检查请求时传入的参数是否正确。

- 如果传入的有表单参数（form），则需要检查该参数内传入的表单控件数据是否正确。如果报错信息内包含控件 ID（如 `控件= widget17261088448220001`），可以调用[查看指定审批定义](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval/get)或者[获取单个审批实例详情](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/get)接口，获取响应参数 form 值，检索有问题的控件 ID，然后检查该控件的配置是否正确。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1390015</md-td>
  <md-td>approval is not active</md-td>
  <md-td>审批定义已停用，请确保当前所用的审批定义已启用后重试。你可以登录[飞书审批管理后台](https://www.feishu.cn/approval/admin/approvalList)，查看相应审批定义是否被停用。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3991337412ec292a8f61d5c57a5d590b_MbHV5E0Qmr.png)</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1390013</md-td>
  <md-td>unsupported approval for free process</md-td>
  <md-td>不支持自定义审批流程。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1395001</md-td>
  <md-td>There have been some errors. Please try again later</md-td>
  <md-td>服务出现错误。排查方案：

1. 参考接口文档的参数说明，检查请求时传入的参数是否正确。如果传入的有表单参数（form），则需要检查传入的表单控件数据是否正确。

2. 降低请求频率，并重试。如果重试仍然报错，请联系[技术支持](https://applink.feishu.cn/TLJpeNdW)。</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::

更多错误码信息，参见[通用错误码](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)。


