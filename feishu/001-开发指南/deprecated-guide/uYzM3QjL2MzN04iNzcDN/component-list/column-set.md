<!--
title: 多列布局
id: 7166810682032390172
fullPath: /ukTMukTMukTM/ucTNwUjL3UDM14yN1ATN/column-set
updatedAt: 1724163244000
source: https://open.feishu.cn/document/common-capabilities/message-card/message-cards-content/column-set
-->
# 多列布局

多列布局是消息卡片搭建工具提供的布局容器能力。你可以使用多列布局横向排布多个列容器，在列容器内自由组合图文内容，解决多列内容对齐问题的同时，还实现了灵活的图文混排。
:::warning
多列布局为历史版本消息卡片搭建工具组件。了解对应新版组件，参考[分栏](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/containers/column-set)。
:::
## 功能介绍

多列布局容器由 **多列布局**（column_set）和 **列**（column）组成。在一个容器内可以横向填充多个列，在每个列内又可以纵向堆叠文本、图片等元素组件，或者是嵌套一个新的多列布局。

多列布局、列、元素组件的嵌套关系如下图所示。

![图片](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9b253ea6e463d2841c8295b26873c3f7_HFdllfNdSZ.png?height=722&lazyload=true&maxWidth=600&width=1942)

列中再嵌套多列布局的层级关系，如下图所示。

![图片](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e2b6909f3881bc78965466cc736d5ec6_DgUY8Y6R9T.png?height=584&lazyload=true&maxWidth=600&width=2034)

布局容器提供了内容对齐方式、容器宽度、交互方式等属性，便于你更好地进行内容排版。基于这种布局方式，你可以搭建出数据表、商品文章列表、差旅信息等图文并茂、交互友好的混排消息卡片。

:::warning
**注意：**
* 多层嵌套可能导致展示空间被压缩，影响卡片的展示品质，因此请尽量避免多层嵌套。
* 列（column）内目前支持添加的组件或模块包括：[文本](/ssl:ttdoc/ukTMukTMukTM/uUzNwUjL1cDM14SN3ATN)、[Markdown](/ssl:ttdoc/ukTMukTMukTM/uADOwUjLwgDM14CM4ATN)、[图片](/ssl:ttdoc/ukTMukTMukTM/uUjNwUjL1YDM14SN2ATN)、[分割线](/ssl:ttdoc/ukTMukTMukTM/uQjNwUjL0YDM14CN2ATN)、[备注](/ssl:ttdoc/ukTMukTMukTM/ucjNwUjL3YDM14yN2ATN)、[双列文本](/ssl:ttdoc/ukTMukTMukTM/uYzNwUjL2cDM14iN3ATN)、[文本 + 按钮](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/component-list/combinations/text-button)、[文本 + 图片](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/component-list/combinations/text-image)、[文本 + 列表选择器](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/component-list/combinations/text-option-picker)、[文本 + 折叠按钮组](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/component-list/combinations/text-overflow-button)、[文本 + 日期选择器](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/component-list/combinations/text-date-picker)。
:::

## 组件展示

在消息卡片搭建工具中，多列布局组件的配置方式如下：

- 设置列比例
	
    在添加多列布局组件时，你可以选择适用的列比例。

	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4c8548ed8fcdeb65ed2433b31a9a0429_yrpZ8poBFj.png?height=1154&lazyload=true&maxWidth=600&width=2274)

- 配置布局样式

	选中多列布局后，支持配置布局的样式与交互。
    
	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/91c66bdf03acec8d31141d4c18b2543d_C5LlsonQ4d.png?height=1138&lazyload=true&maxWidth=600&width=1674)

	- **窄屏自适应布局方式**：设置窄屏场景中，多列布局的展示。可选择 **无（none）**、**每列占满一行（stretch）**、**流式布局（flow）**、**等分双列（bisect）**、**等分三列（trisect）**。具体的参数配置说明，可参见下文 **参数说明** 章节内的 `flex_mode` 参数。
	- **水平分栏间距**：多列布局内各列之间的间距，可选 **默认间距**、**小间距**。
	- **背景色**：可选 **默认**（即默认的白底样式）、**灰色**。
	- **绑定循环变量**：可添加循环对象数组变量。关于变量的说明，可参见[配置卡片变量](/ssl:ttdoc/ukTMukTMukTM/ucTNwUjL3UDM14yN1ATN/configure-card-variables)。
	- **交互**：开启交互后，可以为多列布局配置跳转链接。支持开启差异化跳转，分别为 PC 端、Android 端、iOS 端配置不同的跳转链接。

- 配置列布局

	选中多列布局中的列之后，支持配置列布局的样式。
    
	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/da2ba487db89cea03e43c0d0a924a14a_xkymvLHs2P.png?height=804&lazyload=true&maxWidth=600&width=1676)
    
    - **列宽度模式**：选择 **按占比设置列宽** 后，可手动设置 **列宽占比**，系统会根据比例适配各列宽度。选择 **列宽适应内容** 后，列宽度与列内的元素宽度保持一致。
    - **垂直对齐方式**：可选择 **顶对齐**、**居中对齐**、**底对齐**。

## 应用场景

多列布局常应用在以下场景：

* **数据报表推送场景**：使用多列布局可以快速构建整齐、自适应屏幕的多列数据表，解决了传统报表构建时繁琐的排版过程，以及无法自适应各类屏幕的样式问题。

* **图文混排场景**：多列布局灵活的横纵列排版能力，使你可以快速构建理想的图文消息卡片。有效降低手动调整图文排版的耗时。
  
## 参数说明

多列布局的参数说明如下表所示。

:::html
<md-table>
    <md-thead>
        <md-tr>
            <md-th style="width: 20%">参数</md-th>
            <md-th style="width: 15%">是否必填</md-th>
            <md-th style="width: 15%">类型</md-th>
            <md-th style="width: 50%">描述</md-th>
        </md-tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>tag</md-td>
            <md-td>是</md-td>
            <md-td>String</md-td>
            <md-td>
                多列布局容器的标识，固定取值：column_set。
            </md-td>
        </md-tr>
        <md-tr>
            <md-td>flex_mode</md-td>
            <md-td>是</md-td>
            <md-td>String</md-td>
            <md-td>
移动端和 PC 端的窄屏幕下，各列的自适应方式。取值：
              
* **none**：不做布局上的自适应，在窄屏幕下按比例压缩列宽度。
* **stretch**：列布局变为行布局，且每列（行）宽度强制拉伸为 100%，所有列自适应为上下堆叠排布。
* **flow**：列流式排布（自动换行），当一行展示不下一列时，自动换至下一行展示。
* **bisect**：两列等分布局。
* **trisect**：三列等分布局。

**默认值**：none。
            </md-td>
        </md-tr>
        <md-tr>
            <md-td>
background_style
          </md-td>
            <md-td>否</md-td>
            <md-td>String</md-td>
            <md-td>
多列布局的背景色样式。取值：
* **default**：默认的白底样式，dark mode 下为黑底。
* **grey**：灰底样式。

当存在多列布局的嵌套时，上层多列布局的颜色覆盖下层多列布局的颜色。
            </md-td>
        </md-tr>

        <md-tr>
            <md-td>
horizontal_spacing
            </md-td>
            <md-td>否</md-td>
            <md-td>String</md-td>
            <md-td>
多列布局内，各列之间的水平分栏间距。取值：
* **default**：默认间距。
* **small**：窄间距。
            </md-td>
        </md-tr>
        <md-tr>
            <md-td>columns</md-td>
            <md-td>否</md-td>
            <md-td>column[]</md-td>
            <md-td>
多列布局容器内，各个列容器的配置信息。详情参见下文 **column 参数说明**。
            </md-td>
        </md-tr>
        <md-tr>
            <md-td>action</md-td>
            <md-td>否</md-td>
            <md-td>action</md-td>
            <md-td>
设置点击布局容器时的交互配置。当前仅支持跳转交互。如果布局容器内有交互组件，则优先响应交互组件定义的交互。
              
示例配置如下，其中支持内嵌 url 元素，该元素说明参见 [url](/ssl:ttdoc/ukTMukTMukTM/uczNwUjL3cDM14yN3ATN)。
              
```
{
"action": {
 "multi_url": {
  "url": "https://open.feishu.cn",
  "pc_url": "https://open.feishu.com",
  "ios_url": "https://developer.apple.com/",
  "android_url": "https://developer.android.com/"
  }
 }
}
```
            </md-td>
        </md-tr>
    </md-tbody>
</md-table>
:::

## column 参数说明

:::html
<md-table>
    <md-thead>
    <md-tr>
        <md-th style="width: 20%">参数</md-th>
        <md-th style="width: 15%">是否必填</md-th>
        <md-th style="width: 15%">类型</md-th>
        <md-th style="width: 50%">描述</md-th>
      </md-tr>
    </md-thead>
    <md-tbody>
    <md-tr>
        <md-td>tag</md-td>
        <md-td>是</md-td>
        <md-td>String</md-td>
        <md-td>列容器标识，固定取值：`column`。</md-td>
    </md-tr>
    <md-tr>
        <md-td>width</md-td>
        <md-td>否</md-td>
        <md-td>String</md-td>
        <md-td>
列宽度属性。取值：
* **auto**：列宽度与列内元素宽度一致。
* **weighted**：列宽度按 `weight` 参数定义的权重分布。
        </md-td>
    </md-tr>
    <md-tr>
        <md-td>weight</md-td>
        <md-td>否</md-td>
        <md-td>number</md-td>
        <md-td>当 `width` 取值 `weighted` 时生效，表示当前列的宽度占比。取值范围：1 ~ 5
        </md-td>
    </md-tr>
    <md-tr>
        <md-td>vertical_align</md-td>
        <md-td>否</md-td>
        <md-td>String</md-td>
        <md-td>
列内成员垂直对齐方式。取值：
* **top**：顶对齐。
* **center**：居中对齐。
* **bottom**：底部对齐。
        </md-td>
    </md-tr>
    <md-tr>
        <md-td>elements</md-td>
        <md-td>否</md-td>
        <md-td>
Elements[]

ColumnSet[]
        </md-td>
        <md-td>需要在列内展示的卡片元素。</md-td>
    </md-tr>
    </md-tbody>
</md-table>
:::



## JSON 示例及效果


### 示例一：数据报表

JSON 示例：

```json
{
  "elements": [
    {
      "tag": "markdown",
      "content": "**个人审批效率总览**\n"
    },
    {
      "tag": "column_set",
      "flex_mode": "bisect",
      "background_style": "grey",
      "horizontal_spacing": "default",
      "columns": [
        {
          "tag": "column",
          "width": "weighted",
          "weight": 1,
          "elements": [
            {
              "tag": "markdown",
              "text_align": "center",
              "content": "已审批单量\n**${total_count}单**\n${total_percent}"
            }
          ]
        },
        {
          "tag": "column",
          "width": "weighted",
          "weight": 1,
          "elements": [
            {
              "tag": "markdown",
              "text_align": "center",
              "content": "平均审批耗时\n**${hours}小时**\n${hours_percent}"
            }
          ]
        },
        {
          "tag": "column",
          "width": "weighted",
          "weight": 1,
          "elements": [
            {
              "tag": "markdown",
              "text_align": "center",
              "content": "待批率\n**${pending}**\n${pending_rate}"
            }
          ]
        }
      ]
    },
    {
      "tag": "markdown",
      "content": "**团队审批效率参考：**"
    },
    {
      "tag": "column_set",
      "flex_mode": "none",
      "background_style": "grey",
      "columns": [
        {
          "tag": "column",
          "width": "weighted",
          "weight": 1,
          "vertical_align": "top",
          "elements": [
            {
              "tag": "markdown",
              "content": "**审批人**",
              "text_align": "center"
            }
          ]
        },
        {
          "tag": "column",
          "width": "weighted",
          "weight": 1,
          "vertical_align": "top",
          "elements": [
            {
              "tag": "markdown",
              "content": "**审批时长**",
              "text_align": "center"
            }
          ]
        },
        {
          "tag": "column",
          "width": "weighted",
          "weight": 1,
          "vertical_align": "top",
          "elements": [
            {
              "tag": "markdown",
              "content": "**对比上周变化**",
              "text_align": "center"
            }
          ]
        }
      ]
    },
    {
      "tag": "column_set",
      "flex_mode": "none",
      "background_style": "default",
      "columns": [
        {
          "tag": "column",
          "width": "weighted",
          "weight": 1,
          "vertical_align": "top",
          "elements": [
            {
              "tag": "markdown",
              "content": "${person}",
              "text_align": "center"
            }
          ]
        },
        {
          "tag": "column",
          "width": "weighted",
          "weight": 1,
          "vertical_align": "top",
          "elements": [
            {
              "tag": "markdown",
              "content": "${time}",
              "text_align": "center"
            }
          ]
        },
        {
          "tag": "column",
          "width": "weighted",
          "weight": 1,
          "vertical_align": "top",
          "elements": [
            {
              "tag": "markdown",
              "content": "${week_rate}",
              "text_align": "center"
            }
          ]
        }
      ],
      "_varloop": "${group_table}"
    }
  ]
}
```

效果展示：

:::html
<md-table>
    <md-thead>
        <md-tr>
            <md-th width="69%">桌面端效果</md-th>
            <md-th width="31%">窄屏及移动端自适应效果</md-th>
        </md-tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/72291fe35639c857d0b2b11d5537ed9c_Ut8xrVH0EV.png?height=702&lazyload=true&width=1220)
            </md-td>
            <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/aae07c98f3c7fdd519385cfce21ea1d2_EQd1yB9kZm.png?height=884&lazyload=true&width=636)
            </md-td>
        </md-tr>
    </md-tbody>
</md-table>
:::

### 示例二：差旅卡片

JSON 示例：

```json
{
  "header": {
    "title": {
      "tag": "plain_text",
      "content": "🏨 酒店申请已通过，请选择房型"
    },
    "template": "green"
  },
  "elements": [
    {
      "tag": "markdown",
      "content": "**入住酒店：**[杭州xxxx酒店](https://open.feishu.cn/)\n<font color='grey'>📍 浙江省杭州市西湖区</font>"
    },
    {
      "tag": "hr"
    },
    {
      "tag": "column_set",
      "flex_mode": "none",
      "background_style": "default",
      "horizontal_spacing": "default",
      "action": {
        "multi_url": {
          "url": "https://open.feishu.cn",
          "android_url": "https://developer.android.com/",
          "ios_url": "https://developer.apple.com/",
          "pc_url": "https://www.windows.com"
        }
      },
      "columns": [
        {
          "tag": "column",
          "width": "weighted",
          "weight": 1,
          "vertical_align": "center",
          "elements": [
            {
              "tag": "img",
              "img_key": "img_v2_120b03c8-27e3-456f-89c0-90ede1aa59ag",
              "mode": "fit_horizontal",
              "alt": {
                "tag": "plain_text",
                "content": ""
              }
            }
          ]
        },
        {
          "tag": "column",
          "width": "weighted",
          "weight": 3,
          "elements": [
            {
              "tag": "markdown",
              "text_align": "left",
              "content": "**高级双床房**\n<font color='grey'>双早|40-47㎡|有窗户|双床</font>\n<font color='red'>¥699</font> 起"
            }
          ]
        }
      ]
    },
    {
      "tag": "hr"
    },
    {
      "tag": "column_set",
      "flex_mode": "none",
      "background_style": "default",
      "horizontal_spacing": "default",
      "action": {
        "multi_url": {
          "url": "https://open.feishu.cn",
          "android_url": "https://developer.android.com/",
          "ios_url": "https://developer.apple.com/",
          "pc_url": "https://www.windows.com"
        }
      },
      "columns": [
        {
          "tag": "column",
          "width": "weighted",
          "weight": 1,
          "vertical_align": "center",
          "elements": [
            {
              "tag": "img",
              "img_key": "img_v2_120b03c8-27e3-456f-89c0-90ede1aa59ag",
              "mode": "fit_horizontal",
              "alt": {
                "tag": "plain_text",
                "content": ""
              }
            }
          ]
        },
        {
          "tag": "column",
          "width": "weighted",
          "weight": 3,
          "elements": [
            {
              "tag": "markdown",
              "text_align": "left",
              "content": "**精品大床房**\n<font color='grey'>双早|40-47㎡|有窗户|大床</font>\n<font color='red'>¥666</font> 起"
            }
          ]
        }
      ]
    }
  ]
}
```

:::html
<md-table>
    <md-thead>
        <md-tr>
            <md-th width="59%">桌面端效果</md-th>
            <md-th width="41%">窄屏及移动端自适应效果</md-th>
        </md-tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c420d39951abbdbc968afe14c9333840_rysqrM3cPe.png?height=802&lazyload=true&width=1218)
            </md-td>
            <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/16bcc3c902cf12ec91d05041980328e3_f8mCa9I7RF.png?height=566&lazyload=true&width=580)
            </md-td>
        </md-tr>
    </md-tbody>
</md-table>
:::