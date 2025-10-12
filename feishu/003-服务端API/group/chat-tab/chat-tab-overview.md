<!--
title: 会话标签页概述
id: 7431406318308655107
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-tab/chat-tab-overview
updatedAt: 1730259115000
source: https://open.feishu.cn/document/group/chat-tab/chat-tab-overview
-->
# 会话标签页概述

会话标签页是指飞书客户端某一会话顶部的标签页，如下图所示。通过 OpenAPI 支持添加、删除、更新以及获取会话标签页等操作。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/367d6fb12bb5537cea5140a72d31f941_ubSnJ4Uknk.png?height=1602&lazyload=true&maxWidth=600&width=1840)

## 字段说明

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:25%">名称</md-th>
<md-th style="width:15%">类型</md-th>
<md-th style="width:60%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>chat_tabs</md-td>
<md-td>chat.tab[]</md-td>
<md-td>
会话标签页
  
**注意**：一个会话内最多可添加 20 个自定义会话标签页
</md-td>
</md-tr>

<md-tr>
<md-td>└ tab_name</md-td>
<md-td>string</md-td>
<md-td>标签页名称

**注意**： 不能超过 30 个字符（最多 10 个汉字） 
</md-td>
</md-tr>

<md-tr>
<md-td>└ tab_type</md-td>
<md-td>string</md-td>
<md-td>标签页类型
  
**可选值有**：

- message：消息类型
- doc_list：云文档列表
- doc：文档
- pin：pin
- meeting_minute：会议纪要
- chat_announcement：群公告
- url：url
- file：文件
- files_resources：合并类型，包含文件、Doc 文档、URL 链接
- images_videos：合并类型，包含图片、视频
  
**注意**：调用[添加会话标签页](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-tab/create)接口时，只支持添加 doc、url 类型的标签页。添加其他标签页需要在飞书客户端内操作，详情参见[会话内标签页](https://www.feishu.cn/hc/zh-CN/articles/536850681075)。
  
</md-td>
</md-tr>

<md-tr>
<md-td>└ tab_content</md-td>
<md-td>chat_tab_content</md-td>
<md-td>会话标签页内容</md-td>
</md-tr>

<md-tr>
<md-td>└└ url</md-td>
<md-td>string</md-td>
<md-td>url 类型对应的 URL 地址</md-td>
</md-tr>

<md-tr>
<md-td>└└ doc</md-td>
<md-td>string</md-td>
<md-td>doc 类型对应的文档链接</md-td>
</md-tr>

<md-tr>
<md-td>└└ meeting_minute</md-td>
<md-td>string</md-td>
<md-td>meeting_minute 类型对应的会议纪要链接</md-td>
</md-tr>

<md-tr>
<md-td>└ tab_config</md-td>
<md-td>chat_tab_config</md-td>
<md-td>会话标签页的配置</md-td>
</md-tr>

<md-tr>
<md-td>└└ icon_key</md-td>
<md-td>string</md-td>
<md-td>会话标签页的图标。
  
- 添加会话标签页时，需要先调用[上传图片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/create) 接口，图片类型设置为 message 上传图片，然后获取 `image_key` 后传入当前参数。
- 获取会话标签页信息时，可调用[下载图片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/get)（只能下载由当前机器人上传的图片），将图标下载至本地查看。
</md-td>
</md-tr>

<md-tr>
<md-td>└└ is_built_in</md-td>
<md-td>boolean</md-td>
<md-td>会话标签页是否在 App 内嵌打开</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

## 数据示例

```json
{
    "chat_tabs": [
        {
            "tab_name": "文档",
            "tab_type": "doc",
            "tab_content": {
                "url": "https://www.feishu.cn",
                "doc": "https://example.feishu.cn/wiki/wikcnPIcqWjJQwkwDzrB9t40123xz",
                "meeting_minute": "https://example.feishu.cn/docs/doccnvIXbV22i6hSD3utar4123dx"
            },
            "tab_config": {
                "icon_key": "img_v2_b99741-7628-4abd-aad0-b881e4db83ig",
                "is_built_in": false
            }
        }
    ]
}
```