<!--
title: 原生审批评论概述
id: 7125425410599845892
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance-comment/overview
updatedAt: 1745207001000
source: https://open.feishu.cn/document/server-docs/approval-v4/instance-comment/overview
-->
# 原生审批评论概述

原生审批实例内，支持员工进行评论、回复评论。评论内容支持文本、@用户以及添加附件。


## 字段说明

:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 30%;">名称</md-dt-th>
      <md-dt-th style="width: 20%;">类型</md-dt-th>
      <md-dt-th style="width: 50%;">描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>

<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	评论内容，包括文本内容、图片、附件等。

**注意**：
- JSON 格式，传入时需要压缩转义为字符串。
- 以下示例值未转义，你可参考请求体示例中的示例 content 进行编辑。
- 对于附件，在 PC 端使用 HTTP 资源链接传图片资源可能会导致缩略图异常，建议使用 HTTPS 传资源附件。

**示例值**："{\"text\":\"最前面艾特展示\",\"files\":[{\"url\":\"xxx\",\"fileSize\":155149,\"title\":\"9a9fedc5cfb01a4a20c715098.png\",\"type\":\"image\",\"extra\":\"\"}]}"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >at_info_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >comment_at_info\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论中艾特人信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	被艾特人的 ID，ID 类型与查询参数 user_id_type 取值一致。

**示例值**："579fd9c4"
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
	被艾特人的姓名

**示例值**："张敏"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >offset</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	被艾特人在评论中的位置，从 0 开始。用于偏移覆盖（注意会覆盖原有位置上的内容）。例如：

- 取值为 0 时的效果：@username 示例文本
- 取值为 2 时的效果：示例 @username 文本
- 取值为 4 时的效果：示例文本 @username

**示例值**："0"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >parent_comment_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	父评论 ID，如果是回复评论，需要传入该值。获取方式：

- 调用当前接口成功后会返回本次评论的 ID，你可以保存用于下次使用。
- 调用[获取评论](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance-comment/list)接口，获取评论 ID。

**示例值**："7081516627711524883"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >comment_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID。如果需要编辑、删除一条评论，则需要将该评论的 ID 传入当前参数。获取方式：

- 调用当前接口成功后会返回本次评论的 ID，你可以保存用于下次使用。
- 调用[获取评论](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance-comment/list)接口，获取评论 ID。

**示例值**："7081516627711524883"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >disable_bot</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否不启用 Bot，取值为 true 时只同步数据，不触发 Bot。

**示例值**：false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >extra</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	附加字段，JSON 格式，传入时需要压缩转义为字符串。

**示例值**："{\"a\":\"a\"}"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::

## 数据示例

```json
{
    "content": "{\"text\":\"agree\",\"files\":[{\"url\":\"xxx\",\"fileSize\":155149,\"title\":\"9a9fedc5cfb01a4a20c715098.png\",\"type\":\"image\",\"extra\":\"\"}]}",
    "at_info_list": [
        {
            "user_id": "579fd9c4",
            "name": "zhangsan",
            "offset": "1"
        }
    ],
    "parent_comment_id": "7081516627711524883",
    "comment_id": "7081516627711524883",
    "disable_bot": false,
    "extra": "{\"a\":\"a\"}"
}
```
