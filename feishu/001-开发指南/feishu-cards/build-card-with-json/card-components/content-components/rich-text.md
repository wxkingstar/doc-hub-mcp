<!--
title: 富文本（Markdown）
id: 7343499772500836356
fullPath: /uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/content-components/rich-text
updatedAt: 1744118577000
source: https://open.feishu.cn/document/feishu-cards/card-components/content-components/rich-text
-->
# 富文本组件

卡片的富文本（Markdown）组件支持渲染表情、表格、图片、代码块、分割线等元素。

本文档介绍富文本组件的 JSON 1.0 结构，要查看新版 JSON 2.0 结构，参考[富文本（Markdown）](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-components/content-components/rich-text)。




![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/78e939f34ac2c78858478abd301e4118_3uRxX4PiGZ.png?height=512&lazyload=true&maxWidth=300&width=800)

## 注意事项

富文本组件中的标题、引用、行内引用、表格、数字角标等语法仅支持在 [JSON 2.0 结构的富文本组件](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-components/content-components/rich-text)中使用。

## 组件属性

### JSON 结构

富文本组件的完整 JSON 1.0 数据如下所示：
```json
{
  "tag": "markdown",
  "text_size": "heading", // 文本大小。默认值 normal。
  "text_align": "center", // 文本对齐的方式。默认值 left。
  "icon": {
    // 前缀图标。
    "tag": "standard_icon", // 图标类型。
    "token": "chat-forbidden_outlined", // 图标的 token。仅在 tag 为 standard_icon 时生效。
    "color": "orange", // 图标颜色。仅在 tag 为 standard_icon 时生效。
    "img_key": "img_v2_38811724" // 图片的 key。仅在 tag 为 custom_icon 时生效。
  },
  "href": {
    // 在此处配置差异化跳转链接，声明 href 参数的变量，实现“不同设备跳转链接不同”的效果。2.0 结构不再支持该语法。
    "urlVal": {
      // 变量名
      "url": "xxx", // 默认链接地址
      "pc_url": "xxx", // PC 端链接地址
      "ios_url": "xxx", // iOS 端链接地址
      "android_url": "xxx" // Android 端链接地址
    }
  },
  "content": "notation字号\n标准emoji 😁😢🌞💼🏆❌✅\n*斜体*\n**粗体**\n~~删除线~~\n[差异化跳转]($urlVal)\n<at id=all></at>" // 采用 mardown 语法编写的内容。2.0 结构不再支持 "[差异化跳转]($urlVal)" 语法
}
```

### 字段说明

富文本组件包含的参数说明如下表所示。

:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 15%;">字段名称</md-th>
      <md-th style="width: 10%;">是否必填</md-th>
      <md-th style="width: 10%;">类型</md-th>
      <md-th style="width: 20%;">默认值</md-th>
      <md-th style="width: 50%;">说明</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>tag</md-td>
      <md-td>是</md-td>
      <md-td>String</md-td>
      <md-td>/</md-td>
      <md-td>组件的标签。富文本组件固定取值为 `markdown`。</md-td>
    </md-tr>
     <md-tr>
            <md-td>text_align</md-td>
            <md-td>否</md-td>
            <md-td>String</md-td>
        <md-td>left</md-td>
            <md-td>
设置文本内容的对齐方式。可取值有：
* left：左对齐
* center：居中对齐
* right：右对齐
            </md-td>
        </md-tr>
    <md-tr>
      <md-td>text_size</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>normal</md-td>
      <md-td>
文本大小。可取值如下所示。如果你填写了其它值，卡片将展示为 `normal` 字段对应的字号。
- heading-0：特大标题（30px）
- heading-1：一级标题（24px）
- heading-2：二级标题（20 px）
- heading-3：三级标题（18px）
- heading-4：四级标题（16px）
- heading：标题（16px）
- normal：正文（14px）
- notation：辅助信息（12px）
- xxxx-large：30px
- xxx-large：24px
- xx-large：20px
- x-large：18px
- large：16px
- medium：14px
- small：12px
- x-small：10px
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
 -   `standard_icon`：使用图标库中的图标。
-   `custom_icon`：使用用自定义图片作为图标。</md-td>
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
      <md-td>href</md-td>
      <md-td>否</md-td>
      <md-td>Object</md-td>
      <md-td>/</md-td>
      <md-td>配置差异化跳转链接，实现“不同设备跳转链接不同”的效果。JSON 2.0 结构不再支持该语法。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└ urlVal</md-td>
      <md-td>否</md-td>
      <md-td>Object</md-td>
      <md-td>/</md-td>
      <md-td>URL 的变量。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└ └ url</md-td>
      <md-td>是</md-td>
      <md-td>String</md-td>
      <md-td>"https://www.baidu.com"</md-td>
      <md-td>默认的链接地址。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└ └ pc_url</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>"https://developer.android.com"</md-td>
      <md-td>PC 端的链接地址。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└ └ ios_url</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>"https://developer.apple.com"</md-td>
      <md-td>iOS 端的链接地址。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└ └ android_url</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>"https://www.windows.com"</md-td>
      <md-td>Android 端的链接地址。</md-td>
    </md-tr>
    <md-tr>
      <md-td>content</md-td>
      <md-td>是</md-td>
      <md-td>String</md-td>
      <md-td>/</md-td>
      <md-td>Markdown 文本内容。了解支持的语法，参考下文。</md-td>
    </md-tr>
  </md-tbody>
</md-table>

:::

### 示例代码

以下的 JSON 示例代码可实现如下图所示的卡片效果：



![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/78e939f34ac2c78858478abd301e4118_3uRxX4PiGZ.png?height=512&lazyload=true&maxWidth=300&width=800)



```json
{
  "i18n_elements": {
    "zh_cn": [
      {
        "tag": "markdown",
        "content": "标准emoji 😁😢🌞💼🏆❌✅\n飞书emoji :OK::THUMBSUP:\n*斜体* **粗体** ~~删除线~~ \n<font color='red'>这是红色文本</font>\n<text_tag color='blue'>标签</text_tag>\n[文字链接](/ssl:ttdoc/home/index)\n<link icon='chat_outlined' url='https://open.feishu.cn' pc_url='' ios_url='' android_url=''>带图标的链接</link>\n<at id=all></at>\n- 无序列表1\n    - 无序列表 1.1\n- 无序列表2\n1. 有序列表1\n    1. 有序列表 1.1\n2. 有序列表2\n```JSON\n{\"This is\": \"JSON demo\"}\n```",
        "text_align": "left",
        "text_size": "normal"
      }
    ]
  }
}
```

## 支持的 Markdown 语法

[卡片 JSON 1.0 结构](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-structure)仅支持 Markdown 语法的子集，详情参见下表。

[卡片 JSON 2.0 结构](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-structure)支持除 `SetextHeading`、`CodeBlock` 和 `HTMLBlock` 外所有标准的 Markdown 语法，以及部分 HTML 语法。详情参考[卡片 JSON 2.0 版本更新说明](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-breaking-changes-release-notes)。

:::html
<md-table>
    <md-thead>
        <md-tr>
            <md-th style="width: 10%">名称</md-th>
            <md-th style="width: 35%">语法</md-th>
            <md-th style="width: 15%">效果</md-th>
            <md-th style="width: 30%">注意事项</md-th>
        </md-tr>

    </md-thead>
    <md-tbody>
    <md-tr>
        <md-td>换行</md-td>
        <md-td>
```
第一行<br />第二行
第一行<br>第二行
```
 </md-td>

        <md-td>
第一行
          
第二行
        </md-td>
              <md-td>
- 如果你使用卡片 JSON 构建卡片，也可使用字符串的换行语法 `\n` 换行。
- 如果你使用卡片搭建工具构建卡片，也可使用回车键换行。
        </md-td>
    </md-tr>
    <md-tr>
        <md-td>斜体</md-td>
        <md-td>
```
*斜体*
```
        </md-td>
        <md-td>*斜体*</md-td>
        <md-td>
无
        </md-td>
    </md-tr>
    <md-tr>
        <md-td>加粗</md-td>
        <md-td>
```
**粗体**
或
__粗体__
```
        </md-td>
        <md-td>__粗体__</md-td>
        <md-td>
不要连续使用 4 个 `*` 或 `_` 加粗。该语法不规范，可能会导致渲染不正确。
        </md-td>
    </md-tr>
    <md-tr>
        <md-td>删除线</md-td>
        <md-td>
```
~~删除线~~
```
        </md-td>
        <md-td>
~~删除线~~
        </md-td>
        <md-td>
无
        </md-td>
    </md-tr>
    <md-tr>
        <md-td>@指定人</md-td>
        <md-td>
```
<at id=open_id></at>
<at id=user_id></at>
<at ids=id_01,id_02,xxx></at>
<at email=test@email.com></at>
```
        </md-td>
        <md-td>@用户名</md-td>
        <md-td>
- [自定义机器人](/ssl:ttdoc/ukTMukTMukTM/ucTM5YjL3ETO24yNxkjN)仅支持使用 `open_id`、`user_id` @指定人。
- 支持使用 `<at ids=id_01,id_02,xxx></at>` 传入多个 ID，使用 `,` 连接。
- 了解如何获取 user_id、open_id，参考[如何获取不同的用户 ID](/ssl:ttdoc/home/user-identity-introduction/open-id)。
        </md-td>
    </md-tr>
    <md-tr>
        <md-td>@所有人</md-td>
        <md-td>
```
<at id=all></at>
```
        </md-td>
        <md-td>@所有人</md-td>
        <md-td>
@所有人需要群主开启权限。若未开启，卡片将发送失败。

        </md-td>
    </md-tr>
    <md-tr>
        <md-td>超链接</md-td>
        <md-td>
```
<a href='https://open.feishu.cn'>
</a>
```
        </md-td>
        <md-td>
[https://open.feishu.cn](https://open.feishu.cn)
        </md-td>
        <md-td>
超链接必须包含 schema 才能生效，目前仅支持 HTTP 和 HTTPS。
        </md-td>
    </md-tr>
    <md-tr>
        <md-td>彩色文本样式</md-td>
        <md-td>
```
<font color='green'>
  这是一个绿色文本 
</font>
<font color='red'>
  这是一个红色文本
</font>
<font color='grey'>
  这是一个灰色文本
</font>
```
        </md-td>
        <md-td>
![](https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/3cb544894ff14bd08697aba80d8e45e6~tplv-goo7wpa0wc-image.image?height=46&lazyload=true&width=206)
![](https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/20cf2f954cc34e79b1a9083ddf1c5838~tplv-goo7wpa0wc-image.image?height=46&lazyload=true&width=200)
![](https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/4c1721ac3ea6437fb52661d0f59d5b63~tplv-goo7wpa0wc-image.image?height=40&lazyload=true&width=192)
        </md-td>
        <md-td>
* 彩色文本样式不支持对链接中的文本生效
* color 取值：
  -   **default**：默认的白底黑字样式
  - 卡片支持的颜色枚举值和 RGBA 语法自定义颜色。参考[颜色枚举值](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/enumerations-for-fields-related-to-color)
</md-alert>
        </md-td>
    </md-tr>
<md-tr>
        <md-td>可点击的电话号码</md-td>
        <md-td>
```
 [文本展示的电话号码或其他文案内容](tel://移动端弹窗唤起的电话号码)
```
        </md-td>
        <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/497e911ac70982442571a2671c7c178c_5i91YqPxhx.png?height=99&lazyload=true&width=789)</md-td>
        <md-td>
该语法仅在移动端生效。
        </md-td>
    </md-tr>
    <md-tr>
        <md-td>文字链接</md-td>
        <md-td>
```
[开放平台](https://open.feishu.cn/)
```
        </md-td>
        <md-td>
[开放平台](https://open.feishu.cn/)
        </md-td>
        <md-td>
超链接必须包含 schema 才能生效，目前仅支持 HTTP 和 HTTPS。
        </md-td>
    </md-tr>
    <md-tr>
        <md-td>差异化跳转链接</md-td>
        <md-td>
```
{
 "tag": "markdown",
 "href": {
  "urlVal": {
   "url": "xxx",
   "pc_url":"xxx",
   "ios_url": "xxx",
   "android_url": "xxx"
   }
  },
 "content":
 "[差异化跳转]($urlVal)"
}
```
        </md-td>
        <md-td>\-</md-td>
        <md-td>
* 超链接必须包含 schema 才能生效，目前仅支持 HTTP 和 HTTPS。
- 仅在 PC 端、移动端需要跳转不同链接时使用。
        </md-td>
    </md-tr>
    <md-tr>
        <md-td>图片</md-td>
        <md-td>
```
![hover_text](image_key)
```
        </md-td>
        <md-td>
          <img src="https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/be64df8f4f0c40b79140ba5c92e0b80b~tplv-goo7wpa0wc-image.image?height=582&lazyload=true&maxWidth=100&width=582" style="vertical-align: top;"/>
        </md-td>
        <md-td>
* `hover_text` 指在 PC 端内光标悬浮（hover）图片所展示的文案。
* **image_key** 可以调用[上传图片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/create)接口获取。
        </md-td>
    </md-tr>
    <md-tr>
        <md-td>分割线</md-td>
        <md-td>
```
---
```
        </md-td>
        <md-td>
![](https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/337cdbabf3944d4facd505a9f9883352~tplv-goo7wpa0wc-image.image?height=62&lazyload=true&width=346)
        </md-td>
        <md-td>
分割线必须单独一行使用。即如果分割线前后有文本，你必须在分割线前后添加换行符。
        </md-td>
    </md-tr>
        <md-tr>
        <md-td>飞书表情</md-td>
        <md-td>
```
:DONE:
```
        </md-td>
        <md-td>
![](https://sf3-ttcdn-tos.pstatp.com/obj/lark-reaction-cn/emoji_done.png?height=96&lazyload=true&width=96)
        </md-td>
        <md-td>

支持的 Emoji Key 列表可以参看 [表情文案说明](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-reaction/emojis-introduce)。
        </md-td>
    </md-tr>  
        <md-tr>
        <md-td>标签</md-td>
        <md-td>
```
<text_tag color='red'>标签文本</text_tag>
```
        </md-td>
        <md-td>
        <img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4105178f31cc40ef499feae123754098_W9hZbwm3fv.png?height=646&lazyload=true&maxWidth=68&width=188" style="vertical-align: top;"/>
        </md-td>
    
        <md-td>
`color`支持的枚举值范围包括：
- `neutral`: 中性色
- `blue`: 蓝色
- `turquoise`: 青绿色
- `lime`: 酸橙色
- `orange`: 橙色
- `violet`: 紫罗兰色
- `indigo`: 靛青色
- `wathet`: 天蓝色
- `green`: 绿色
- `yellow`: 黄色
- `red`: 红色
- `purple`: 紫色
- `carmine`: 洋红色
          
          
</md-td>
    </md-tr>  
    <md-tr>
        <md-td>有序列表</md-td>
        <md-td>
```
1. 有序列表1
    1. 有序列表 1.1
2. 有序列表2
```
        </md-td>
        <md-td>
1. 有序列表1
    1. 有序列表 1.1
2. 有序列表2
        </md-td>
        <md-td>
* 序号需在行首使用
* 4 个空格代表一层缩进
<md-alert type="tip">
仅在飞书 7.6 及以上版本生效。在低版本飞书客户端中，包含该语法的 Markdown 组件将展示为升级提示占位图。
</md-alert>
        </md-td>
    </md-tr>
    <md-tr>
        <md-td>无序列表</md-td>
        <md-td>
```
- 无序列表1
    - 无序列表 1.1
- 无序列表2
```
        </md-td>
        <md-td>- 无序列表1
    - 无序列表 1.1
- 无序列表2</md-td>
        <md-td>
* 序号需在行首使用
* 4 个空格代表一层缩进
<md-alert type="tip">
仅在飞书 7.6 及以上版本生效。在低版本飞书客户端中，包含该语法的 Markdown 组件将展示为升级提示占位图。
</md-alert>
        </md-td>
    </md-tr>
    <md-tr>
        <md-td>代码块</md-td>
        <md-td>
`````markdown
```JSON
{"This is": "JSON demo"}
```
`````
        </md-td>
        <md-td>
```JSON
{"This is": "JSON demo"}
```
        </md-td>
        <md-td>
* 代码块语法和代码内容需在行首使用
* 支持指定编程语言解析。未指定默认为 Plain Text
<md-alert type="tip">
仅在飞书 7.6 及以上版本生效。在低版本飞书客户端中，包含该语法的 Markdown 组件将展示为升级提示占位图。
</md-alert>
        </md-td>
    </md-tr>
    <md-tr>
        <md-td>含图标的链接</md-td>
        <md-td>
```
<link icon='chat_outlined' url='https://open.feishu.cn' pc_url='' ios_url='' android_url=''>战略研讨会</link>
```
        </md-td>
        <md-td>
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e6b63f8c225ce6c4cd09dbdc8158397f_HPk70nRLtr.png?height=97&lazyload=true&width=736)
        </md-td>
        <md-td>
该语法中的字段说明如下所示：
- `icon`：链接前缀的图标。仅支持图标库中的图标，枚举值参见[图标库](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/enumerations-for-icons)。图标颜色固定为蓝色。可选。
- `url`：默认的链接地址，未按设备配置下述字段时，该配置生效。必填。
- `pc_url`：pc 端的链接地址，优先级高于 `url`。可选。
- `ios_url`：ios 端的链接地址，优先级高于 `url`。可选。
- `android_url`：android 端的链接地址，优先级高于 `url`。可选。
          
<md-alert type="tip">
图标仅在飞书 7.12 及以上版本生效。
</md-alert>
        </md-td>
    </md-tr>
      <md-tr>
        <md-td>人员</md-td>
        <md-td>
`````markdown
<person id = 'user_id' show_name = true show_avatar = true style = 'normal'></person>
`````
        </md-td>
        <md-td>

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/85c9e79807d0195cd3ecb331a965f418_eFVjQrqRjv.png?height=95&lazyload=true&width=736)
        </md-td>
        <md-td>
该语法中的字段说明如下所示：
- `id`：用户的 ID，支持 open_id、union_id 和 user_id。不填、为空、数据错误时展示为兜底的“未知用户”样式。了解更多，参考[如何获取不同的用户 ID](/ssl:ttdoc/home/user-identity-introduction/open-id)。
- `show_name`：是否展示用户名。默认为 true。
- `show_avatar`：是否展示用户头像，默认为 true。
- `style`：人员组件的展示样式。可选值有：
	- `normal`：普通样式（默认）
	- `capsule`：胶囊样式
        </md-td>
    </md-tr>
 
  </md-tbody>
</md-table>
:::

### 特殊字符转义说明
如果要展示的字符命中了 markdown 语法使用的特殊字符（例如 `*、~、>、<` 这些特殊符号），需要对特殊字符进行 HTML 转义，才可正常展示。常见的转义符号对照表如下所示。查看更多转义符，参考 [HTML 转义通用标准](https://www.w3school.com.cn/charsets/ref_html_8859.asp)实现，转义后的格式为 `&#实体编号;`。


| **特殊字符** | **转义符** | **描述** |
| --- | --- | --- |
| ` ` | `&nbsp;	` | 不换行空格 |
| ` ` | `&ensp;` | 半角空格 |
| `  ` | `&emsp;` | 全角空格 |
| `>` | `&#62;` | 大于号 |
| `<` | `&#60;` | 小于号 |
| `~` | `&sim;` | 飘号 |
| `-` | `&#45;` | 连字符 |
| `!` | `&#33;` | 惊叹号 |
| `*` | `&#42;` | 星号 |
| `/` | `&#47;` | 斜杠 |
| `\` | `&#92;` | 反斜杠 |
| `[` | `&#91;` | 中括号左边部分 |
| `]` | `&#93;` | 中括号右边部分 |
| `(` | `&#40;` | 小括号左边部分 |
| `)` | `&#41;` | 小括号右边部分 |
| `#` | `&#35;` | 井号 |
| `:` | `&#58;` | 冒号 |
| `+` | `&#43;` | 加号 |
| `"` | `&#34;` | 英文引号 |
| `'` | `&#39;` | 英文单引号 |
| \`  | `&#96;` | 反单引号 |
| `$` | `&#36;` | 美金符号 |
| `_` | `&#95;` | 下划线 |
| `-` | `&#45;` | 无序列表 |

### 代码块支持的编程语言

富文本组件支持通过代码块语法渲染代码，支持的编程语言如下列表所示，且对大小写不敏感：
`````markdown
```JSON
{"This is": "JSON demo"}
```
`````
- plain_text 
- abap 
- ada 
- apache 
- apex 
- assembly 
- bash 
- c_sharp 
- cpp 
- c 
- cmake
- cobol 
- css 
- coffee_script 
- d 
- dart 
- delphi 
- diff 
- django 
- docker_file 
- erlang
- fortran 
- gherkin 
- go 
- graphql 
- groovy 
- html 
- htmlbars 
- http 
- haskell 
- json 
- java
- javascript 
- julia 
- kotlin 
- latex 
- lisp 
- lua 
- matlab 
- makefile 
- markdown 
- nginx 
- objective_c
- opengl_shading_language 
- php 
- perl 
- powershell 
- prolog 
- properties 
- protobuf 
- python 
- r 
- ruby
- rust 
- sas 
- scss 
- sql 
- scala 
- scheme 
- shell 
- solidity 
- swift 
- toml 
- thrift 
- typescript
- vbscript 
- visual_basic 
- xml 
- yaml
## 为移动端和桌面端定义不同的字号

在普通文本组件和富文本组件中，你可为同一段文本定义在移动端和桌面端的不同字号。相关字段描述如下表所示。
:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width: 20%;">字段</md-th>
<md-th style="width: 10%;">是否必填</md-th>
<md-th style="width: 10%;">类型</md-th>
<md-th style="width: 10%;">默认值</md-th>
<md-th style="width: 50%;">说明</md-th>
</md-tr>
</md-thead>
<md-tbody>
<md-tr>
<md-td>
text_size
</md-td>
<md-td>否</md-td>
<md-td>Object</md-td>
<md-td>/</md-td>
<md-td>
文本大小。你可在此自定义移动端和桌面端的不同字号。
</md-td>
</md-tr>
<md-tr>
<md-td>
└ custom_text_size_name
</md-td>
<md-td>否</md-td>
<md-td>Object</md-td>
<md-td>/</md-td>
<md-td>
自定义的字号。你需自定义该字段的名称，如 `cus-0`、`cus-1` 等。
</md-td>
</md-tr>
<md-tr>
<md-td>
└└ default
</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>/</md-td>
<md-td>
在无法差异化配置字号的旧版飞书客户端上，生效的字号属性。建议填写此字段。可取值如下所示。
- heading-0：特大标题（30px）
- heading-1：一级标题（24px）
- heading-2：二级标题（20 px）
- heading-3：三级标题（18px）
- heading-4：四级标题（16px）
- heading：标题（16px）
- normal：正文（14px）
- notation：辅助信息（12px）
- xxxx-large：30px
- xxx-large：24px
- xx-large：20px
- x-large：18px
- large：16px
- medium：14px
- small：12px
- x-small：10px
</md-td>
</md-tr>
  <md-tr>
<md-td>
└└ pc
</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>/</md-td>
<md-td>
桌面端的字号。可取值如下所示。
- heading-0：特大标题（30px）
- heading-1：一级标题（24px）
- heading-2：二级标题（20 px）
- heading-3：三级标题（18px）
- heading-4：四级标题（16px）
- heading：标题（16px）
- normal：正文（14px）
- notation：辅助信息（12px）
- xxxx-large：30px
- xxx-large：24px
- xx-large：20px
- x-large：18px
- large：16px
- medium：14px
- small：12px
- x-small：10px
</md-td>
</md-tr>
  <md-tr>
<md-td>
└└ mobile
</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>/</md-td>
<md-td>
移动端的文本字号。可取值如下所示。

  **注意**：部分移动端的字号枚举值的具体大小与 PC 端有差异，使用时请注意区分。
- heading-0：特大标题（26px）
- heading-1：一级标题（24px）
- heading-2：二级标题（20 px）
- heading-3：三级标题（17px）
- heading-4：四级标题（16px）
- heading：标题（16px）
- normal：正文（14px）
- notation：辅助信息（12px）
- xxxx-large：26px
- xxx-large：24px
- xx-large：20px
- x-large：18px
- large：17px
- medium：14px
- small：12px
- x-small：10px
</md-td>
</md-tr>
  </md-tbody>
  </md-table>
:::
  
  
  具体步骤如下所示。
1. 在卡片 JSON 代码的全局行为设置中的 `config` 字段中，配置 `style` 字段，并添加自定义字号：
    ```json
    {
      "config": {
        "style": { // 在此添加并配置 style 字段。
          "text_size": { // 分别为移动端和桌面端添加自定义字号，同时添加兜底字号。用于在组件 JSON 中设置字号属性。支持添加多个自定义字号对象。
            "cus-0": {
              "default": "medium", // 在无法差异化配置字号的旧版飞书客户端上，生效的字号属性。选填。
              "pc": "medium", // 桌面端的字号。
              "mobile": "large" // 移动端的字号。
            },
            "cus-1": {
              "default": "medium", // 在无法差异化配置字号的旧版飞书客户端上，生效的字号属性。选填。
              "pc": "normal", // 桌面端的字号。
              "mobile": "x-large" // 移动的字号。
            }
          }
        }
      }
    }
    ```
1. 在普通文本组件或富文本组件的 `text_size` 属性中，应用自定义字号。以下为在富文本组件中应用自定义字号的示例：
    ```json
    {
      "elements": [
        {
          "tag": "markdown",
          "text_size": "cus-0", // 在此处应用自定义字号。
          "href": {
            "urlVal": {
              "url": "xxx1",
              "pc_url": "xxx2",
              "ios_url": "xxx3",
              "android_url": "xxx4"
            }
          },
          "content": "普通文本\n标准emoji😁😢🌞💼🏆❌✅\n*斜体*\n**粗体**\n~~删除线~~\n文字链接\n差异化跳转\n<at id=all></at>"
        },
        {
          "tag": "hr"
        },
        {
          "tag": "markdown",
          "content": "上面是一行分割线\n!hover_text\n上面是一个图片标签"
        }
      ],
      "header": {
        "template": "blue",
        "title": {
          "content": "这是卡片标题栏",
          "tag": "plain_text"
        }
      }
    }
    ```