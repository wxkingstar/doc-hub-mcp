<!--
title: 折叠面板
id: 7343499772500590596
fullPath: /uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/containers/collapsible-panel
updatedAt: 1735814755000
source: https://open.feishu.cn/document/feishu-cards/card-components/containers/collapsible-panel
-->
# 折叠面板

折叠面板允许在卡片中折叠次要信息，如备注、较长文本等，以突出主要信息。

本文档介绍折叠面板的 JSON 1.0 结构，要查看新版 JSON 2.0 结构，参考[折叠面板](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-components/containers/collapsible-panel)。


![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a8b2044ee3ff261280c034b32b7e9848_kZfxdl7XMn.png?height=1118&lazyload=true&maxWidth=300&width=921)

## 注意事项

- 折叠面板仅支持通过撰写卡片 JSON 代码的方式使用，暂不支持在卡片搭建工具上构建使用。
- 折叠面板支持飞书 V7.9 及以上版本的客户端。在低于该版本的飞书客户端上，折叠面板的内容将展示为“请升级至最新版本客户端，以查看内容”的占位图。
- 容器类组件最多支持嵌套五层组件。建议你避免在折叠面板中嵌套多层组件。多层嵌套会压缩内容的展示空间，影响卡片的展示效果。

## 嵌套规则

折叠面板不支持内嵌表单容器（form）组件。

## 组件属性

本小节介绍折叠面板的属性。

### JSON 结构

以下为一个折叠面板的卡片 JSON 数据：
```json
{
  "tag": "collapsible_panel", // 折叠面板的标签。
  "expanded": true, // 面板是否展开。默认值 false。
  "background_color": "grey", // 折叠面板的背景色，默认为透明
  "header": {
    // 折叠面板的标题设置。
    "title": {
      // 标题文本设置。支持 plain_text 和 markdown。
      "tag": "markdown",
      "content": "**面板标题文本**"
    },
    "vertical_align": "center", // 标题区的垂直居中方式。
    "padding": "4px 0px 4px 8px", // 标题区的内边距。
    "icon": {
      // 标题前缀图标
      "tag": "standard_icon", // 图标类型.
      "token": "chat-forbidden_outlined", // 图标库中图标的 token。当 tag 为 standard_icon 时生效。
      "color": "orange", // 图标的颜色。当 tag 为 standard_icon 时生效。
      "img_key": "img_v2_38811724", // 自定义前缀图标的图片 key。当 tag 为 custom_icon 时生效。
      "size": "16px 16px" // 图标的尺寸。默认值为 10px 10px。
    },
    "icon_position": "follow_text", // 图标的位置。默认值为 right。
    "icon_expanded_angle": -180 // 折叠面板展开时图标旋转的角度，正值为顺时针，负值为逆时针。默认值为 180。
  },
  "border": {
    // 边框设置。默认不显示边框。
    "color": "grey", // 边框的颜色。
    "corner_radius": "5px" // 圆角设置。
  },
  "vertical_spacing": "8px", // 面板内元素垂直边距设置。默认值为 8px。
  "padding": "8px 8px 8px 8px", // 内容区的内边距。
  "elements": [
    // 此处可添加各个组件的 JSON 结构。暂不支持表单（form）组件。
    {
      "tag": "markdown",
      "content": "很长的文本"
    }
  ]
}
```

### 字段说明

折叠面板各字段说明如下表所示：
:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 20%;">字段名称</md-th>
      <md-th style="width: 10%;">是否必填</md-th>
      <md-th style="width: 15%;">类型</md-th>
      <md-th style="width: 15%;">默认值</md-th>
      <md-th style="width: 40%;">说明</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>tag</md-td>
      <md-td>否</md-td>
      <md-td>string</md-td>
      <md-td>/</md-td>
      <md-td>
        组件的标签。折叠面板取固定值为 <code>collapsible_panel</code>。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>expanded</md-td>
      <md-td>否</md-td>
      <md-td>Boolean</md-td>
      <md-td>false</md-td>
      <md-td>
        面板是否展开。可选值：

- <code>true</code>：面板为展开状态<br>
 - <code>false</code>：面板为折叠状态。默认为折叠状态
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>background_color</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>空</md-td>
      <md-td>
        折叠面板的背景色，默认为透明。枚举值参见[颜色枚举值](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/enumerations-for-fields-related-to-color)。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>header</md-td>
      <md-td>是</md-td>
      <md-td>Object</md-td>
      <md-td>-</md-td>
      <md-td>
        折叠面板的标题设置。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>└ title</md-td>
      <md-td>否</md-td>
      <md-td>Object</md-td>
      <md-td>-</md-td>
      <md-td>
        标题文本设置。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>└└ tag</md-td>
      <md-td>是</md-td>
      <md-td>String</md-td>
      <md-td>空</md-td>
      <md-td>
        文本类型的标签。可取值：
- <code>plain_text</code>：普通文本内容<br>
- <code>markdown</code>：富文本内容。了解支持的 Markdown 语法，参考[富文本组件](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/content-components/rich-text)。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>└└ content</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>空</md-td>
      <md-td>
        折叠面板标题的内容。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>└ background_color</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>空</md-td>
      <md-td>
        折叠面板标题区域的背景颜色设置，默认为透明色。枚举值参见[颜色枚举值](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/enumerations-for-fields-related-to-color)。

<strong>注意</strong>：如果你未设置此字段，则折叠面板的标题区域的背景色由 <code>background_color</code> 字段决定。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>└ vertical_align</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>center</md-td>
      <md-td>
        标题区域的垂直居中方式。可取值：
- <code>top</code>：标题区域垂直居中于面板区域的顶部<br>
 - <code>center</code>：标题区域垂直居中于面板区域的中间<br>
 - <code>bottom</code>：标题区域垂直居中于面板区域的底部
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>└ padding</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>0px 0px 0px 0px</md-td>
      <md-td>
        标题区域的内边距。值的取值范围为 [0,28]px。支持填写单值或多值：
- 单值：如 "4px"，表示组件内四个内边距都为 4px<br>
- 多值：如 "4px 12px 4px 12px"，表示容器内上、右、下、左的内边距分别为 4px，12px，4px，12px。四个值必填，使用空格间隔
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>└ icon</md-td>
      <md-td>否</md-td>
      <md-td>Object</md-td>
      <md-td>/</md-td>
      <md-td>
        添加图标作为标题前缀或后缀图标。支持自定义或使用图标库中的图标。示例代码如下：<br>
```json
"icon": {
  "tag": "standard_icon",
  "token": "down-small-ccm_outlined",
  "color": "",
  "size": "16px 16px"
}
```
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>└└ tag</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>/</md-td>
      <md-td>
        图标类型的标签。可取值：<br>
- <code>standard_icon</code>：使用图标库中的图标<br>
 - <code>custom_icon</code>：使用用自定义图片作为图标
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>└ └ token</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>/</md-td>
      <md-td>
        图标库中图标的 token。当 <code>tag</code> 为 <code>standard_icon</code> 时生效。枚举值参见[图标库](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/enumerations-for-icons)。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>└└ color</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>/</md-td>
      <md-td>
        图标的颜色。支持设置线性和面性图标（即 token 末尾为 <code>outlined</code> 或 <code>filled</code> 的图标）的颜色。当 <code>tag</code> 为 <code>standard_icon</code> 时生效。枚举值参见[颜色枚举值](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/enumerations-for-fields-related-to-color)。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>└└ img_key</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>/</md-td>
      <md-td>
        自定义前缀图标的图片 key。当 <code>tag</code> 为 <code>custom_icon</code> 时生效。图标 key 的获取方式：调用[上传图片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/create)接口，上传用于发送消息的图片，并在返回值中获取图片的 image_key。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>└ └ size</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>10px 10px</md-td>
      <md-td>
        图标的尺寸。支持 "[1,999] [1,999]px"。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>└ icon_position</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>right</md-td>
      <md-td>
        图标的位置。可选值：<br>
- <code>left</code>：图标在标题区域最左侧<br>
- <code>right</code>：图标在标题区域最右侧<br>
- <code>follow_text</code>：图标在文本右侧
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>└ icon_expanded_angle</md-td>
      <md-td>否</md-td>
      <md-td>Number</md-td>
      <md-td>180</md-td>
      <md-td>
        折叠面板展开时图标旋转的角度，正值为顺时针，负值为逆时针。可选值：
- <code>-180</code>：逆时针旋转 180 度<br>
 - <code>-90</code>：逆时针旋转 90 度<br>
- <code>90</code>：顺时针旋转 90 度<br>
 - <code>180</code>：顺时针旋转 180 度
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>border</md-td>
      <md-td>否</md-td>
      <md-td>Object</md-td>
      <md-td>空</md-td>
      <md-td>
        边框设置。默认不显示边框。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>└ color</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>grey</md-td>
      <md-td>
        边框颜色设置。枚举值参见[颜色枚举值](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/enumerations-for-fields-related-to-color)。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>└ corner_radius</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>5px</md-td>
      <md-td>
        圆角设置。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>vertical_spacing</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>8px</md-td>
      <md-td>
        面板内元素垂直边距设置。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>padding</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>8px</md-td>
      <md-td>
        内容区的内边距。值的取值范围为 [0,28]px。支持填写单值或多值：<br>
- 单值：如 "4px"，表示组件内四个内边距都为 4px<br>
- 多值：如 "4px 12px 4px 12px"，表示容器内上、右、下、左的内边距分别为 4px，12px，4px，12px。四个值必填，使用空格间隔
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>elements</md-td>
      <md-td>否</md-td>
      <md-td>Array</md-td>
      <md-td>空</md-td>
      <md-td>
        各个组件的 JSON 结构。暂不支持表单（form）组件。
      </md-td>
    </md-tr>
  </md-tbody>
</md-table>

:::

## 示例代码

以下的 JSON 示例代码可实现如下图所示的卡片效果：

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a8b2044ee3ff261280c034b32b7e9848_PfWtBx6CZX.png?height=1118&lazyload=true&maxWidth=300&width=921)
```json
{
  "header": {
    "template": "yellow",
    "title": {
      "tag": "plain_text",
      "content": "折叠面板展示"
    }
  },
  "elements": [
    {
      "tag": "markdown",
      "content": "下面是一个 默认折叠 的折叠面板组件"
    },
    {
      "tag": "collapsible_panel",
      "expanded": false,
      "header": {
        "title": {
          "tag": "plain_text",
          "content": "面板标题文本"
        },
        "vertical_align": "center",
        "icon": {
          "tag": "standard_icon",
          "token": "down-small-ccm_outlined",
          "color": "",
          "size": "16px 16px"
        },
        "icon_position": "right",
        "icon_expanded_angle": -180
      },
      "border": {
        "color": "grey",
        "corner_radius": "5px"
      },
      "vertical_spacing": "8px",
      "padding": "8px 8px 8px 8px",
      "elements": [
        {
          "tag": "markdown",
          "content": "很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本"
        }
      ]
    },
    {
      "tag": "markdown",
      "content": "下面是一个 标题带背景色 且 默认展开 的折叠面板组件"
    },
    {
      "tag": "collapsible_panel",
      "expanded": true,
      "header": {
        "title": {
          "tag": "markdown",
          "content": "**<font color='white'>面板标题文本</font>**"
        },
        "background_color": "yellow",
        "vertical_align": "center",
        "icon": {
          "tag": "standard_icon",
          "token": "down-small-ccm_outlined",
          "color": "white",
          "size": "16px 16px"
        },
        "icon_position": "right",
        "icon_expanded_angle": -180
      },
      "border": {
        "color": "grey",
        "corner_radius": "5px"
      },
      "vertical_spacing": "8px",
      "padding": "8px 8px 8px 8px",
      "elements": [
        {
          "tag": "markdown",
          "content": "很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本"
        }
      ]
    },
    {
      "tag": "markdown",
      "content": "下面是一个无边框折叠面板组件"
    },
    {
      "tag": "collapsible_panel",
      "expanded": true,
      "header": {
        "title": {
          "tag": "markdown",
          "content": "**面板标题文本**"
        },
        "vertical_align": "center",
        "padding": "4px 0px 4px 8px",
        "icon": {
          "tag": "standard_icon",
          "token": "down-small-ccm_outlined",
          "color": "",
          "size": "16px 16px"
        },
        "icon_position": "follow_text",
        "icon_expanded_angle": -180
      },
      "vertical_spacing": "8px",
      "padding": "8px 8px 8px 8px",
      "elements": [
        {
          "tag": "markdown",
          "content": "很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本很长的文本"
        }
      ]
    }
  ]
}
```