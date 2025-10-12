<!--
title: 添加会话标签页
id: 7111246605500563457
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-tab/create
updatedAt: 1754898941000
source: https://open.feishu.cn/document/server-docs/group/chat-tab/create
-->
# 添加会话标签页

在指定会话内添加自定义会话标签页，仅支持添加文档类型（doc）或 URL （url）类型的标签页。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=im&version=v1&resource=chat.tab&method=create)

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

## 前提条件

- 应用需要开启[机器人能力](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-enable-bot-ability)。
- 调用当前接口的用户或者机器人必须在对应的会话内。

## 使用限制

- 调用该接口仅支持添加 doc、url 类型的标签页，即 tab_type 参数传值时，只能传入 doc 或 url，传入其他枚举值将会报错。如果你需要添加其他类型的会话标签页，需要在飞书客户端内操作，详情参见[会话内标签页](https://www.feishu.cn/hc/zh-CN/articles/536850681075)。
- 如果群组配置了 **仅群主和群管理员可以管理标签页**，则仅群主或者群管理员可以添加会话标签页。
- 操作内部群时，操作者须与群组在同一租户下。

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
      <md-td>https://open.feishu.cn/open-apis/im/v1/chats/:chat_id/chat_tabs</md-td>
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
            <md-perm name="im:chat" desc="获取与更新群组信息" support_app_types="custom,isv" tags="">获取与更新群组信息</md-perm>
            <md-perm name="im:chat.tabs:write_only" desc="操作群会话标签页" support_app_types="custom,isv" tags="">操作群会话标签页</md-perm>
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
或
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
	<md-text type="field-name" >chat_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	群 ID。获取方式：

- [创建群](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/create)，从返回结果中获取该群的 chat_id。
- 调用[获取用户或机器人所在的群列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/list)接口，可以查询用户或机器人所在群的 chat_id。
- 调用[搜索对用户或机器人可见的群列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/search)，可搜索用户或机器人所在的群、对用户或机器人公开的群的 chat_id。

**注意**：仅支持群模式为 **群组（group）**、**单聊（p2p）** 的群组 ID。你可以调用[获取群信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/get)接口，在返回结果中查看 `chat_mode` 参数取值是否为 `group`、`p2p`。

**示例值**："oc_a0553eda9014c201e6969b478895c230"
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
	<md-text type="field-name" >chat_tabs</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >chat.tab\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	会话标签页

**注意**：一个会话内最多只允许添加 20 个自定义会话标签页
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >tab_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	会话标签页名称

**注意**：会话标签页的名称不能超过 60 个字符

**示例值**："文档"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >tab_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	会话标签页类型

**注意**：只支持添加 doc、url 类型的标签页，其他字段为只读字段

**示例值**："doc"

**可选值有**：
<md-enum>
<md-enum-item key="message" >消息类型</md-enum-item>
<md-enum-item key="doc_list" >云文档列表</md-enum-item>
<md-enum-item key="doc" >文档</md-enum-item>
<md-enum-item key="pin" >Pin</md-enum-item>
<md-enum-item key="meeting_minute" >会议纪要</md-enum-item>
<md-enum-item key="chat_announcement" >群公告</md-enum-item>
<md-enum-item key="url" >URL</md-enum-item>
<md-enum-item key="file" >文件</md-enum-item>
<md-enum-item key="files_resources" >合并类型，包含文件、Doc 文档、URL 链接</md-enum-item>
<md-enum-item key="images_videos" >合并类型，包含图片、视频</md-enum-item>
<md-enum-item key="task" >任务</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >tab_content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >chat_tab_content</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	会话标签页的内容
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	URL 地址，在 tab_type 取值为 url 时生效

**注意**：

- tab_type 取值为 url 时url不能为空

- 必须以 http 或 https 开头

**示例值**："https://www.feishu.cn"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >doc</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	云文档链接，在 tab_type 取值为 doc 时生效

**注意**：

- tab_type 取值为 doc 时doc不能为空

- 必须以 http 或 https 开头

- 当前操作者必须有云文档的协作者权限

**示例值**："https://example.feishu.cn/wiki/wikcnPIcqWjJQwkwDzrB9t40123xz"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >meeting_minute</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	会议纪要，因不支持添加 meeting_minute 类型的会话标签页，该字段为只读字段，无需传值。

**示例值**："https://example.feishu.cn/docs/doccnvIXbV22i6hSD3utar4123dx"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >task</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	任务，因不支持添加 task 类型的会话标签页，该字段为只读字段，无需传值。

**示例值**："https://bytedance.feishu.cn/client/todo/task_list?guid=fa03fb6d-344b-47d9-83e3-049e3b3da931"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >tab_config</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >chat_tab_config</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	会话标签页的配置

**注意**：仅当  tab_type 取值为 url 时，该参数生效
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >icon_key</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	会话标签页的图标。需要先调用[上传图片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/create) 接口，图片类型设置为 message 上传图片，然后获取 `image_key` 后传入当前参数。

**示例值**："img_v2_b99741-7628-4abd-aad0-b881e4db83ig"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >is_built_in</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	会话标签页是否在 App 内嵌打开

**示例值**：false
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "chat_tabs": [
        {
            "tab_name": "文档",
            "tab_type": "doc",
            "tab_content": {
                "url": "https://www.feishu.cn",
                "doc": "https://example.feishu.cn/wiki/wikcnPIcqWjJQwkwDzrB9t40123xz",
                "meeting_minute": "https://example.feishu.cn/docs/doccnvIXbV22i6hSD3utar4123dx",
                "task": "https://bytedance.feishu.cn/client/todo/task_list?guid=fa03fb6d-344b-47d9-83e3-049e3b3da931"
            },
            "tab_config": {
                "icon_key": "img_v2_b99741-7628-4abd-aad0-b881e4db83ig",
                "is_built_in": false
            }
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
	<md-text type="field-name" >chat_tabs</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >chat.tab\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	会话标签页
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >tab_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	会话标签页 ID，建议你保存该 ID，后续更新、删除、排序标签页时需要基于该 ID 进行操作。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >tab_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	会话标签页名称

	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >tab_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	会话标签页类型

**可选值有**：
<md-enum>
<md-enum-item key="message" >消息类型</md-enum-item>
<md-enum-item key="doc_list" >云文档列表</md-enum-item>
<md-enum-item key="doc" >文档</md-enum-item>
<md-enum-item key="pin" >Pin</md-enum-item>
<md-enum-item key="meeting_minute" >会议纪要</md-enum-item>
<md-enum-item key="chat_announcement" >群公告</md-enum-item>
<md-enum-item key="url" >URL</md-enum-item>
<md-enum-item key="file" >文件</md-enum-item>
<md-enum-item key="files_resources" >合并类型，包含文件、Doc文档、URL链接</md-enum-item>
<md-enum-item key="images_videos" >合并类型，包含图片、视频</md-enum-item>
<md-enum-item key="task" >任务</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >tab_content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >chat_tab_content</md-text>
	</md-dt-td>
	<md-dt-td>
	会话标签页内容
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	url 类型标签页对应的 URL 地址
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >doc</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文档类型标签页对应的云文档链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >meeting_minute</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	会议纪要类型标签页对应的会议纪要地址
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >task</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	任务
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >tab_config</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >chat_tab_config</md-text>
	</md-dt-td>
	<md-dt-td>
	会话标签页配置
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >icon_key</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	会话标签页图标。可调用[下载图片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/get)（只能下载由当前机器人上传的图片），将图标下载至本地查看
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >is_built_in</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	会话标签页是否在 App 内嵌打开
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
    "msg": "ok",
    "data": {
        "chat_tabs": [
            {
               "tab_id": "7101214603622940633",
               "tab_type": "message"
            },
            {
                "tab_id": "7101214603622940671",
                "tab_name": "文档",
                "tab_type": "doc",
                "tab_content": {
                    "doc": "https://example.feishu.cn/wiki/wikcnPIcqWjJQwkwDzrB9t40123xz"
                }
            },
            {
                "tab_id": "7158333373373759422",
                "tab_name": "测试",
                "tab_type": "url",
                "tab_content": {
                    "url": "https://www.test.cn"
                },
                "tab_config": {
                    "icon_key": "img_v2_b99741-7628-4abd-aad0-b881e4db83ig",
                    "is_built_in": true
                }
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
  <md-td>400</md-td>
  <md-td>232001</md-td>
  <md-td>Your request contains an invalid request parameter.</md-td>
  <md-td>参数错误，参考接口文档提供的参数描述，检查输入参数是否有误。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232006</md-td>
  <md-td>Your request specifies a chat_id which is invalid.</md-td>
  <md-td>无效的 chat_id，请检查 chat_id 是否正确。获取方式：

- [创建群](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/create)，从返回结果中获取该群的 chat_id。
- 调用[获取用户或机器人所在的群列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/list)接口，可以查询用户或机器人所在群的 chat_id。
- 调用[搜索对用户或机器人可见的群列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/search)，可搜索用户或机器人所在的群、对用户或机器人公开的群的 chat_id。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232009</md-td>
  <md-td>Your request specifies a chat which has already been dissolved.</md-td>
  <md-td>群组已被解散，无法操作。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232010</md-td>
  <md-td>Operator and chat can NOT be in different tenants.</md-td>
  <md-td>操作者和被操作的群组应该在同一租户下。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232011</md-td>
  <md-td>Operator can NOT be out of the chat.</md-td>
  <md-td>操作者不在群组中。你需要将当前调用 API 的应用或用户[加入待操作的群组](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-members/create)后重试。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232024</md-td>
  <md-td>Users do not have the visibility of the app, or the operator does not have collaboration permissions with the target users.</md-td>
  <md-td>机器人对用户没有可见性，或操作者与用户间没有协作权限。

- 如果是机器人对用户没有可见性，需要在[开发者后台](https://open.feishu.cn/app) > **应用详情页** > **应用发布** > **版本管理与发布** 编辑应用对用户的可见性并发布应用。具体操作参考[配置应用可用范围](/ssl:ttdoc/home/introduction-to-scope-and-authorization/availability)。

- 如果是操作者与用户之间没有协作权限，请检查是否与目标用户有协作权限，如屏蔽、未添加为联系人等。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232025</md-td>
  <md-td>Bot ability is not activated.</md-td>
  <md-td>应用未启用机器人能力。你需要登录[开发者后台](https://open.feishu.cn/app)，在应用详情页的 **应用能力** > **添加应用能力** 页面内，添加 **机器人** 能力，并发布应用使配置生效。具体操作参见[机器人能力](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-enable-bot-ability)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232033</md-td>
  <md-td>The operator or invited bots does NOT have the authority to manage external chats without the scope.</md-td>
  <md-td>当前被操作的群为外部群，暂不支持操作外部群。只有开启对外共享能力的机器人支持外部群，详情参见[机器人支持外部群和外部用户单聊](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/develop-robots/add-bot-to-external-group)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232034</md-td>
  <md-td>The app is unavailable or inactivated by the tenant.</md-td>
  <md-td>应用在本租户下未安装或未启用。需要先安装应用，再使用应用调用接口。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232046</md-td>
  <md-td>The number of chat tabs has reached the limit.</md-td>
  <md-td>自定义的会话标签页个数超过上限 20 个，无法继续添加。你可以选择[更新会话标签页](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-tab/update_tabs)或者[删除会话标签页](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-tab/delete_tabs)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232047</md-td>
  <md-td>The length of the tab name reaches the limit.</md-td>
  <md-td>会话标签页名称过长。不能超过 60 个字符。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232048</md-td>
  <md-td>The chat tab content is illegal.</md-td>
  <md-td>会话标签页内容非法。检查 tab_content 参数，传入正确值，例如 url 需要以 http、https 开头。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232050</md-td>
  <md-td>Operate chat tab unsupported chat type.</md-td>
  <md-td>请求的群类型不支持会话标签页。仅支持群模式为 **群组（group）**、**单聊（p2p）** 的群组 ID。你可以调用[获取群信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/get)接口，在返回结果中查看 `chat_mode` 参数取值是否为 `group`、`p2p`。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232051</md-td>
  <md-td>The operator does not have doc permission.</md-td>
  <md-td>操作者必须拥有云文档权限。你可以调用[增加协作者权限](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/permission-member/create)接口，为当前操作者添加云文档权限。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232055</md-td>
  <md-td>The operator does not have chat tab, chat menu, chat widget manage permission</md-td>
  <md-td>没有会话标签页、会话菜单和小组件的管理权限。如果在飞书客户端群设置中 **谁可以管理标签页、小组件和会话菜单** 选择了 **仅群主和管理员**，则只允许群主或者管理员进行操作。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232056</md-td>
  <md-td>The operator is not the image's owner, no permission to complete the request.</md-td>
  <md-td>机器人需要使用自己[上传的图片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/create)。 </md-td>
</md-tr>


  </md-tbody>
</md-table>
:::

更多错误码信息，参见[通用错误码](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)。


