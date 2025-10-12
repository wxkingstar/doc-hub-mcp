<!--
title: 查询批量消息整体进度
id: 7039583318606217220
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/im-v1/batch_message/get_progress
updatedAt: 1736756542000
source: https://open.feishu.cn/document/server-docs/im-v1/batch_message/get_progress
-->
# 查询批量消息整体进度

[批量发送消息](/ssl:ttdoc/ukTMukTMukTM/ucDO1EjL3gTNx4yN4UTM)或者[批量撤回消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/batch_message/delete)后，可通过该接口查询消息的发送进度和撤回进度。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=im&version=v1&resource=batch_message&method=get_progress)

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

## 注意事项
- 只能查询 30 天内，通过[批量发送消息](/ssl:ttdoc/ukTMukTMukTM/ucDO1EjL3gTNx4yN4UTM)接口发送的消息。
- 该接口返回的数据为查询时刻的快照数据。

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
      <md-td>https://open.feishu.cn/open-apis/im/v1/batch_messages/:batch_message_id/get_progress</md-td>
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
            <md-perm name="im:message:send_multi_depts" desc="给一个或多个部门的成员批量发消息" support_app_types="custom,isv" tags="">给一个或多个部门的成员批量发消息</md-perm>
            <md-perm name="im:message:send_multi_users" desc="给多个用户批量发消息" support_app_types="custom,isv" tags="">给多个用户批量发消息</md-perm>
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
	<md-text type="field-name" >batch_message_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	待查询的批量消息任务 ID，该 ID 为[批量发送消息](	/ssl:ttdoc/ukTMukTMukTM/ucDO1EjL3gTNx4yN4UTM)接口返回值中的 `message_id` 字段，用于标识一次批量发送消息请求。

**示例值**："bm-0b3d5d1b2df7c6d5dbd1abe2c91e2217"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
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
	<md-text type="field-name" >batch_message_send_progress</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >batch_message_send_progress</md-text>
	</md-dt-td>
	<md-dt-td>
	批量发送消息的进度。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >valid_user_ids_count</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	批量发送消息请求中，有效的用户数量。

**注意**： 
- 不在当前机器人的通讯录权限数据范围内但有效的用户，也会被统计在内。了解通讯录数据权限范围参见[配置应用数据权限](/ssl:ttdoc/home/introduction-to-scope-and-authorization/configure-app-data-permissions)。
- `valid_user_ids_count` 值为 0 有两种情况：
    - 批量发送消息接口为异步调用，任务还没有开始被调度便查询当前接口则取值为 0。建议你等待片刻再调用该接口。
    - 批量发送消息时传入的所有 department_ids、open_ids、user_ids、union_ids 均未包含有效的用户。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >success_user_ids_count</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	已向用户成功发送消息的数量。

**注意**：最终 `success_user_ids_count` 不一定等于 `valid_user_ids_count`，原因是 `valid_user_ids_count` 包含了对机器人不可见的用户。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >read_user_ids_count</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	已读消息的用户数量。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >batch_message_recall_progress</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >batch_message_recall_progress</md-text>
	</md-dt-td>
	<md-dt-td>
	批量撤回消息的进度。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >recall</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	当前查询的批量发送消息任务是否执行过撤回操作。可能值：

- true：消息被撤回过
- false：消息未被撤回过
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >recall_count</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	已经成功撤回的消息数量。
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
        "batch_message_send_progress": {
            "valid_user_ids_count": 204,
            "success_user_ids_count": 200,
            "read_user_ids_count": 150
        },
        "batch_message_recall_progress": {
            "recall": true,
            "recall_count": 100
        }
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
  <md-td>230001</md-td>
  <md-td>Your request contains an invalid request parameter.</md-td>
  <md-td>参数错误，请根据接口返回的错误信息并参考文档检查输入参数。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230006</md-td>
  <md-td>Bot ability is not activated.</md-td>
  <md-td>应用未开启机器人能力。开启方式参见[如何开启机器人能力](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-enable-bot-ability)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230012</md-td>
  <md-td>Bot is NOT the sender of the message.</md-td>
  <md-td>机器人不是消息的发送者。应用机器人只能操作自己发送的消息。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230027</md-td>
  <md-td>Lack of necessary permissions.</md-td>
  <md-td>无权进行本次操作。可能的原因有：

1. 缺少相应权限，可根据实际的错误信息进行排查。
2. 未检查到用户授权信息。
3. 如果需要机器人在外部群操作，则需要先为机器人开启对外共享能力，详情参见[机器人支持外部群和外部用户单聊](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/develop-robots/add-bot-to-external-group)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230030</md-td>
  <md-td>The message id is invalid, record not found.</md-td>
  <md-td>消息 ID 无效，未找到记录。你需要检查并传入正确的 batch_message_id 参数后重试。</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::

更多错误码信息，参见[通用错误码](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)。


