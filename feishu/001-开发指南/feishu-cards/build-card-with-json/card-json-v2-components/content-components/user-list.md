<!--
title: 人员列表
id: 7453075757222739970
fullPath: /uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-components/content-components/user-list
updatedAt: 1735638316000
source: https://open.feishu.cn/document/feishu-cards/card-json-v2-components/content-components/user-list
-->
# 人员列表组件

人员列表组件支持展示多个人员的用户名和头像。用户点击头像或姓名后，还可展示人员的个人名片。你需通过传入人员的 `open_id`、`user_id` 或 `union_id` 使用该组件。

本文档介绍人员列表组件的 JSON 2.0 结构，要查看历史 JSON 1.0 结构，参考[人员列表](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/content-components/user-list)。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/52cf9cb6b6af7737c2e98979ee03e62e_DUG2MwjYwJ.gif?height=950&lazyload=true&maxWidth=300&width=862)

## 注意事项

若你要使用指定应用发送含有人员列表组件的卡片，你需保证该应用有访问用户 ID 的权限。否则卡片中的人员列表组件无法展示人员信息。

## JSON 结构

人员列表组件的完整 JSON 2.0 结构如下所示：
```json
{
  "schema": "2.0", // 卡片 JSON 结构的版本。默认为 1.0。要使用 JSON 2.0 结构，必须显示声明 2.0。
  "body": {
    "elements": [
      {
        "tag": "person_list",
        "element_id": "custom_id", // 操作组件的唯一标识。JSON 2.0 新增属性。用于在调用组件相关接口中指定组件。需开发者自定义。
        "margin": "0px 0px 0px 0px", // 组件的外边距。JSON 2.0 新增属性。默认值 "0"，支持范围 [-99,99]px。
        "drop_invalid_user_id": false, // 当人员列表中有无效用户 ID 时，是否忽略无效 ID。默认为 false，表示若存在无效用户 ID，将报错并返回无效的用户 ID 列表。
        "lines": 1, // 最大显示行数，默认关闭不限制最大显示行数。
        "show_name": true, // 是否展示人员对应的用户名。
        "show_avatar": true, // 是否展示人员对应的头像。
        "size": "large", // 人员头像的尺寸。
        "persons": [
          // 人员列表。人员的 ID 支持 open_id, user_id, union_id
          {
            "id": "ou_0fdb0e7663af7128e7d9f8adeb2abcef"
          },
          {
            "id": "ou_0fdb0e7663af7128e7d9f8adeb2abcef"
          }
        ],
        "icon": {
          // 前缀图标。
          "tag": "standard_icon", // 图标类型。
          "token": "chat-forbidden_outlined", // 图标的 token。仅在 tag 为 standard_icon 时生效。
          "color": "orange", // 图标颜色。仅在 tag 为 standard_icon 时生效。
          "img_key": "img_v2_38811724" // 图片的 key。仅在 tag 为 custom_icon 时生效。
        },
        "ud_icon": {
          // 图标库中的前缀图标，和 icon 同时设置时以 icon 为准
          "token": "chat-forbidden_outlined", // 图标的 token
          "style": {
            "color": "red" // 图标颜色。支持设置线性和面性图标（即 token 末尾为 `outlined` 或 `filled` 的图标）的颜色。
          }
        }
      }
    ]
  }
}
```

## 字段说明

人员组件的字段说明如下表。
:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width: 16%;">参数</md-th>
<md-th style="width: 12%;">必须</md-th>
<md-th style="width: 12%;">类型</md-th>
<md-th style="width: 15%;">默认值</md-th>
<md-th>描述</md-th>
</md-tr>
</md-thead>
<md-tbody>
<md-tr>
<md-td>tag</md-td>
<md-td>是</md-td>
<md-td>String</md-td>
<md-td>person_list</md-td>
<md-td>
组件的标签，人员列表组件的取值为 `person_list`。
</md-td>
</md-tr>
  
  <md-tr>
      <md-td>element_id</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>空</md-td>
      <md-td>操作组件的唯一标识。JSON 2.0 新增属性。用于在调用[组件相关接口](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/cardkit-v1/card-element/create)中指定组件。在同一张卡片内，该字段的值全局唯一。仅允许使用字母、数字和下划线，必须以字母开头，不得超过 20 字符。</md-td></md-tr>
  
  
   <md-tr>
      <md-td>margin</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>0</md-td>
      <md-td>组件的外边距。JSON 2.0 新增属性。值的取值范围为 [-99,99]px。可选值：
- 单值，如 "10px"，表示组件的四个外边距都为 10 px。
- 双值，如 "4px 0"，表示组件的上下外边距为 4 px，左右外边距为 0 px。使用空格间隔（边距为 0 时可不加单位）。
- 多值，如 "4px 0 4px 0"，表示组件的上、右、下、左的外边距分别为 4px，12px，4px，12px。使用空格间隔。</md-td>
    </md-tr> 
  
<md-tr>
<md-td>drop_invalid_user_id</md-td>
<md-td>否</md-td>
<md-td>Boolean</md-td>
<md-td>false</md-td>
<md-td>
当人员列表中有无效用户 ID 时，是否忽略无效 ID。默认为 false，表示若存在无效用户 ID，将报错并返回无效的用户 ID 列表。
  </md-td>
</md-tr>  
  
  
  
  
  
  
  
<md-tr>
<md-td>lines</md-td>
<md-td>否</md-td>
<md-td>Int</md-td>
<md-td>/</md-td>
<md-td>
最大显示行数，默认不限制最大显示行数。不可为 0。
</md-td>
</md-tr>
<md-tr>
<md-td>show_name</md-td>
<md-td>否</md-td>
<md-td>Boolean</md-td>
<md-td>true</md-td>
<md-td>
是否展示人员的用户名。

**提示**：  
若不展示人员用户名，当 persons 字段中有多人 ID 时，人员列表样式将展示为“葫芦串”样式。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c7212ce4016291a052083791eefca8a1_D4fuJKD6j0.png?height=107&lazyload=true&maxWidth=130&width=200)

</md-td>
</md-tr>
<md-tr>
<md-td>show_avatar</md-td>
<md-td>否</md-td>
<md-td>Boolean</md-td>
<md-td>false</md-td>
<md-td>
是否展示人员的头像。
</md-td>
</md-tr>
<md-tr>
<md-td>size</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>medium</md-td>
<md-td>
人员的头像尺寸。可取值：
- extra_small：超小尺寸
- small：小尺寸
- medium：中尺寸
- large：大尺寸
</md-td>
</md-tr>
<md-tr>
<md-td>persons</md-td>
<md-td>是</md-td>
<md-td>Array</md-td>
<md-td>/</md-td>
<md-td>
人员列表。
</md-td>
</md-tr>
<md-tr>
<md-td>└ id</md-td>
<md-td>是</md-td>
<md-td>String</md-td>
<md-td>空</md-td>
<md-td>
人员的 ID。可选值有：
- 人员的 Open ID：标识一个用户在某个应用中的身份。同一个用户在不同应用中的 Open ID 不同。详情参考[如何获取 Open ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)
- 人员的 Union ID：标识一个用户在某个应用开发商下的身份。同一用户在同一开发商下的应用中的 Union ID 是相同的，在不同开发商下的应用中的 Union ID 是不同的。通过 Union ID，应用开发商可以把同个用户在多个应用中的身份关联起来。详情参考[如何获取 Union ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-union-id)
- 人员的 User ID ：标识一个用户在某个租户内的身份。同一个用户在租户 A 和租户 B 内的 User ID 是不同的。在同一个租户内，一个用户的 User ID 在所有应用（包括商店应用）中都保持一致。User ID 主要用于在不同的应用间打通用户数据。详情参考[如何获取User ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-user-id)
</md-td>
</md-tr>
<md-tr>
<md-td>icon</md-td>
<md-td>否</md-td>
<md-td>Object</md-td>
<md-td>/</md-td>
<md-td>添加图标作为文本前缀图标。支持自定义或使用图标库中的图标。</md-td>
</md-tr>
<md-tr>
<md-td>└ tag</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>/</md-td>
<md-td>图标类型的标签。可取值：
- `standard_icon`：使用图标库中的图标。
- `custom_icon`：使用用自定义图片作为图标。</md-td>
</md-tr>
<md-tr>
<md-td>└ token</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>/</md-td>
<md-td>图标库中图标的 token。当 `tag` 为 `standard_icon` 时生效。枚举值参见[图标库](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/enumerations-for-icons)。</md-td>
</md-tr>
<md-tr>
<md-td>└ color</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>/</md-td>
<md-td>图标的颜色。支持设置线性和面性图标（即 token 末尾为 `outlined` 或 `filled` 的图标）的颜色。当 `tag` 为 `standard_icon` 时生效。枚举值参见[颜色枚举值](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/enumerations-for-fields-related-to-color)。</md-td>
</md-tr>
<md-tr>
<md-td>└ img_key</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>/</md-td>
<md-td>自定义前缀图标的图片 key。当 `tag` 为 `custom_icon` 时生效。
  
图标 key 的获取方式：调用[上传图片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/create)接口，上传用于发送消息的图片，并在返回值中获取图片的 image_key。</md-td>
</md-tr>
  
  <md-tr>
      <md-td>ud_icon</md-td>
      <md-td>否</md-td>
      <md-td>Object</md-td>
    <md-td>/</md-td>
      <md-td>添加图标库中已有的图标。

**注意**：一个人员组件仅可配置一个图标。如果同时配置 `icon` 和 `ud_icon`，仅生效 `icon`。</md-td>
    </md-tr>
  
  
 <md-tr>
      <md-td>└ token</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
   <md-td>/</md-td>
      <md-td>图标库中图标的 token。枚举值参见[图标库](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/enumerations-for-icons)。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└ style</md-td>
      <md-td>否</md-td>
      <md-td>Object</md-td><md-td>/</md-td>
      <md-td>图标的样式。支持自定义图标颜色。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└└ color</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td><md-td>/</md-td>
      <md-td>图标的颜色。支持设置线性和面性图标（即 token 末尾为 `outlined` 或 `filled` 的图标）的颜色。枚举值参见[颜色枚举值](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/enumerations-for-fields-related-to-color)。

**注意**：搭建工具暂不支持自定义图标颜色。</md-td>
    </md-tr>
  
</md-tbody>
</md-table>
  
:::
## Demo 示例

将以下 JSON 2.0 结构示例代码中的 user_id 替换为实际的用户 ID，即可实现如下图示例的卡片效果：

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/52cf9cb6b6af7737c2e98979ee03e62e_Axm1FhIJs5.gif?height=950&lazyload=true&maxWidth=500&width=862)


```json
{
  "schema": "2.0",
  "header": {
    "template": "blue",
    "title": {
      "content": "人员列表示例",
      "tag": "plain_text"
    }
  },
  "body": {
    "elements": [
      {
        "tag": "markdown",
        "content": "仅名字："
      },
      {
        "tag": "person_list",
        "persons": [
          {
            "id": "ou_48d0958ee4b2ab3eaf0b5f6c968abcef"
          },
          {
            "id": "ou_f9d24af786a14340721288cda6aabcef"
          },
          {
            "id": "ou_b824f85713725c632e78887dc7fabcef"
          }
        ]
      },
      {
        "tag": "markdown",
        "content": "名字+头像："
      },
      {
        "tag": "person_list",
        "show_name": true,
        "show_avatar": true,
        "lines": 2,
        "size": "small",
        "persons": [
          {
            "id": "ou_48d0958ee4b2ab3eaf0b5f6c968abcef"
          },
          {
            "id": "ou_f9d24af786a14340721288cda6aabcef"
          },
          {
            "id": "ou_b824f85713725c632e78887dc7fabcef"
          }
        ]
      },
      {
        "tag": "markdown",
        "content": "名字+头像+icon："
      },
      {
        "tag": "person_list",
        "show_name": true,
        "show_avatar": true,
        "lines": 2,
        "size": "small",
        "persons": [
          {
            "id": "ou_48d0958ee4b2ab3eaf0b5f6c968abcef"
          },
          {
            "id": "ou_f9d24af786a14340721288cda6aabcef"
          },
          {
            "id": "ou_b824f85713725c632e78887dc7fabcef"
          }
        ],
        "icon": {
          "tag": "standard_icon",
          "token": "group_outlined",
          "color": "blue"
        }
      },
      {
        "tag": "markdown",
        "content": "名字葫芦串："
      },
      {
        "tag": "person_list",
        "persons": [
          {
            "id": "ou_48d0958ee4b2ab3eaf0b5f6c968abcef"
          },
          {
            "id": "ou_f9d24af786a14340721288cda6aabcef"
          },
          {
            "id": "ou_b824f85713725c632e78887dc7fabcef"
          },
          {
            "id": "ou_48d0958ee4b2ab3eaf0b5f6c968abcef"
          },
          {
            "id": "ou_f9d24af786a14340721288cda6aabcef"
          },
          {
            "id": "ou_b824f85713725c632e78887dc7fabcef"
          }
        ],
        "size": "small",
        "show_avatar": true,
        "show_name": false
      }
    ]
  }
}
```