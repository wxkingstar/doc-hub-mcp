<!--
title: 邀请参会人
id: 6960861158593134596
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting/invite
updatedAt: 1692770962000
source: https://open.feishu.cn/document/server-docs/vc-v1/meeting/invite
-->
# 邀请参会人

邀请参会人进入会议。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=vc&version=v1&resource=meeting&method=invite)

:::html
<md-alert type="error">

</md-alert>
:::

:::html
<md-alert type="warn">
发起邀请的操作者必须具有相应的权限（如果操作者为用户，则必须在会中），如果会议被锁定、或参会人数如果达到上限，则会邀请失败
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
      <md-td>https://open.feishu.cn/open-apis/vc/v1/meetings/:meeting_id/invite</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>PATCH</md-td>
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
            <md-perm name="vc:meeting" desc="更新会议信息" support_app_types="custom,isv" tags="">更新会议信息</md-perm>
      </md-td>
    </md-tr>
    <md-tr>
      <md-th>
            字段权限要求
      </md-th>
      <md-td>
        <md-alert type="tip" icon="none">
        该接口返回体中存在下列敏感字段，仅当开启对应的权限后才会返回；如果无需获取这些字段，则不建议申请
        </md-alert>
        <md-perm name="contact:user.employee_id:readonly" desc="获取用户 user ID" support_app_types="custom" tags="">获取用户 user ID</md-perm>
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
	<md-text type="field-name" >meeting_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	会议ID（视频会议的唯一标识，视频会议开始后才会产生）

**示例值**："6911188411932033028"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
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
	<md-text type="field-name" >user_id_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	用户 ID 类型

**示例值**：open_id

**可选值有**：
<md-enum>
<md-enum-item key="open_id" >标识一个用户在某个应用中的身份。同一个用户在不同应用中的 Open ID 不同。[了解更多：如何获取 Open ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)</md-enum-item>
<md-enum-item key="union_id" >标识一个用户在某个应用开发商下的身份。同一用户在同一开发商下的应用中的 Union ID 是相同的，在不同开发商下的应用中的 Union ID 是不同的。通过 Union ID，应用开发商可以把同个用户在多个应用中的身份关联起来。[了解更多：如何获取 Union ID？](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-union-id)</md-enum-item>
<md-enum-item key="user_id" >标识一个用户在某个租户内的身份。同一个用户在租户 A 和租户 B 内的 User ID 是不同的。在同一个租户内，一个用户的 User ID 在所有应用（包括商店应用）中都保持一致。User ID 主要用于在不同的应用间打通用户数据。[了解更多：如何获取 User ID？](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-user-id)</md-enum-item>
</md-enum>

**默认值**：`open_id`

**当值为 `user_id`，字段权限要求**：
<md-perm name="contact:user.employee_id:readonly" desc="获取用户 user ID" support_app_types="custom" tags="">获取用户 user ID</md-perm>
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
	<md-text type="field-name" >invitees</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >meeting_user\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	被邀请的用户列表【一次性最多支持邀请10人】
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	用户ID

**示例值**："ou_3ec3f6a28a0d08c45d895276e8e5e19b"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >user_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	用户类型

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >飞书用户</md-enum-item>
<md-enum-item key="2" >rooms用户</md-enum-item>
<md-enum-item key="3" >文档用户</md-enum-item>
<md-enum-item key="4" >neo单品用户</md-enum-item>
<md-enum-item key="5" >neo单品游客用户</md-enum-item>
<md-enum-item key="6" >pstn用户</md-enum-item>
<md-enum-item key="7" >sip用户</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "invitees": [
        {
            "id": "ou_3ec3f6a28a0d08c45d895276e8e5e19b",
            "user_type": 1
        }
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
	<md-text type="field-name" >invite_results</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >meeting_invite_status\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	邀请结果
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >user_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	用户类型

**可选值有**：
<md-enum>
<md-enum-item key="1" >飞书用户</md-enum-item>
<md-enum-item key="2" >rooms用户</md-enum-item>
<md-enum-item key="3" >文档用户</md-enum-item>
<md-enum-item key="4" >neo单品用户</md-enum-item>
<md-enum-item key="5" >neo单品游客用户</md-enum-item>
<md-enum-item key="6" >pstn用户</md-enum-item>
<md-enum-item key="7" >sip用户</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	邀请结果

**可选值有**：
<md-enum>
<md-enum-item key="1" >邀请成功</md-enum-item>
<md-enum-item key="2" >邀请失败</md-enum-item>
</md-enum>
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
        "invite_results": [
            {
                "id": "ou_3ec3f6a28a0d08c45d895276e8e5e19b",
                "user_type": 1,
                "status": 1
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
  <md-td>500</md-td>
  <md-td>121001</md-td>
  <md-td>internal error</md-td>
  <md-td>服务器内部错误，如果重试无效可联系管理员</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>121002</md-td>
  <md-td>not support</md-td>
  <md-td>暂不支持该功能</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>121003</md-td>
  <md-td>param error</md-td>
  <md-td>参数错误，检查参数的取值范围（请按照上面字段说明自查）</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>121005</md-td>
  <md-td>no permission</md-td>
  <md-td>无权限进行该操作，建议检查token类型、操作者身份以及资源的归属</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>122001</md-td>
  <md-td>meeting status unexpected</md-td>
  <md-td>会议状态不正确（例如：会中操作而会议不在进行中状态）</md-td>
</md-tr>


<md-tr>
  <md-td>404</md-td>
  <md-td>122002</md-td>
  <md-td>meeting not exist</md-td>
  <md-td>所操作的会议不存在</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>122003</md-td>
  <md-td>operator user not in meeting</md-td>
  <md-td>进行会中操作的用户必须在会中</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>122005</md-td>
  <md-td>cannot operate self</md-td>
  <md-td>用户进行会中操作时，操作对象不能是自己</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>122006</md-td>
  <md-td>participant count reach limit</md-td>
  <md-td>会议参会人数达到了上限</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>122007</md-td>
  <md-td>callee is busy</md-td>
  <md-td>被呼叫方正忙</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>122008</md-td>
  <md-td>meeting is locked</md-td>
  <md-td>会议被锁定</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




