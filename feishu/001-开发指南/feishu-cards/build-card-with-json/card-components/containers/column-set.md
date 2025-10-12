<!--
title: 分栏
id: 7343499772500918276
fullPath: /uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/containers/column-set
updatedAt: 1735814721000
source: https://open.feishu.cn/document/feishu-cards/card-components/containers/column-set
-->
# 分栏组件
分栏组件提供卡片内布局的能力，并提供对齐方式、容器宽度、交互方式等属性。你可以使用分栏组件横向排布多个列容器，在列容器内自由组合图文内容，搭建出如数据表、商品或文章列表、差旅信息等图文并茂、交互友好的卡片。

本文档介绍分栏组件的 JSON 1.0 结构，要查看新版 JSON 2.0 结构，参考[分栏](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-components/containers/column-set)。


![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/1af893c0c67b3a0fe89736d649304d48_gT8TUBv9IR.png?height=351&lazyload=true&maxWidth=500&width=822)
## 注意事项

分栏组件最多支持嵌套五层组件。建议你避免在分栏中嵌套多层组件。多层嵌套会压缩内容的展示空间，影响卡片的展示效果。

## 应用场景

- **数据报表推送场景**：使用分栏可以快速构建整齐、自适应屏幕的多列数据表，解决了传统报表构建时繁琐的排版过程，以及无法自适应各类屏幕的样式问题。
- **图文混排场景**：分栏灵活的横纵列排版能力，使你可以快速构建理想的图文卡片。有效降低手动调整图文排版的耗时。

## 嵌套规则

分栏组件由分栏本身的属性（column_set）和列容器（column）组成。一个分栏组件中内可以添加多个列容器，每个列容器中可内嵌多个组件。

[卡片 JSON 2.0 结构](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-structure)支持内嵌除表单容器（form）和表格组件（table）外的其它所有组件。

[卡片 JSON 1.0 结构](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-structure)支持内嵌的组件有：
- 容器类：分栏和循环容器组件
- 展示类：除标题组件、表格组件以外的所有展示组件
- 交互类：除折叠按钮组以外的所有交互类组件



整体的嵌套关系如下图所示。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9b253ea6e463d2841c8295b26873c3f7_8BnIr3afv7.png?height=722&lazyload=true&maxWidth=600&width=1942)

列容器中再嵌套分栏的层级关系如下图所示。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e2b6909f3881bc78965466cc736d5ec6_FKkeg0UCcT.png?height=584&lazyload=true&maxWidth=600&width=2034)

## 组件属性

### JSON 结构

以下为一个分栏组件的卡片 JSON 数据：

```JSON
{
  "tag": "column_set", // 分栏的标签。
  "horizontal_spacing": "large", // 分栏中列容器之间的间距。默认值 default（为 8px）。
  "horizontal_align": "left", // 列容器水平对齐的方式。默认值 left。
  "margin": "0px", // 列容器的外边距。
  "flex_mode": "none", // 移动端和 PC 端的窄屏幕下，各列的自适应方式。默认值 none。
  "background_style": "default", // 分栏的背景色样式。默认值 default。
  "action": { // 在此处设置点击分栏时的交互配置。
    "multi_url": {
      "url": "https://open.feishu.cn",
      "pc_url": "https://open.feishu.com",
      "ios_url": "https://developer.apple.com/",
      "android_url": "https://developer.android.com/"
    }
  },
  "columns": [
    // 列配置
    {
      "tag": "column",
      "background_style": "default", // 列的背景色样式。默认值 default。
      "width": "auto", // 列容器的宽度。默认值 auto。
      "weight": 1, // 当 width 取值 weighted 时生效，表示当前列的宽度占比。
      "vertical_align": "center", // 列垂直居中的方式。
      "vertical_spacing": "4px", // 列内子组件纵向间距。默认值 default（8px）。
      "padding": "8px", // 列容器的内边距。默认值 0px。
      "action": {
        // 在此处设置点击列时的交互配置。
        "multi_url": {
          "url": "https://www.baidu.com",
          "pc_url": "https://www.baidu.com",
          "ios_url": "https://www.google.com",
          "android_url": "https://www.apple.com.cn"
        }
      },
      "elements": [] // 列容器内嵌的组件，不支持内嵌表格组件、多图混排组件和表单容器。
    }
  ]
}
```

### 分栏字段说明

分栏（column_set）各属性字段说明如下表所示。
:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 15%;">字段名称</md-th>
      <md-th style="width: 10%;">是否必填</md-th>
      <md-th style="width: 10%;">类型</md-th>
      <md-th style="width: 10%;">默认值</md-th>
      <md-th style="width: 15%;">客户端版本要求</md-th>
      <md-th style="width: 40%;">说明</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>tag</md-td>
      <md-td>是</md-td>
      <md-td>String</md-td>
      <md-td>/</md-td>
      <md-td>无</md-td>
      <md-td>组件的标签。分栏组件的固定值为 column_set。</md-td>
    </md-tr>
    <md-tr>
      <md-td>horizontal_spacing</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>default</md-td>
      <md-td>无</md-td>
      <md-td>各列之间的水平分栏间距。取值：
- default：默认间距，8px
- small：窄间距，4px
- large：大间距，12px
- [0,28px]：自定义间距</md-td>
    </md-tr>
    <md-tr>
      <md-td>horizontal_align</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>left</md-td>
      <md-td>V7.4 及以上版本</md-td>
      <md-td>列容器水平对齐的方式。可取值：
- left：左对齐
- center：居中对齐
- right：右对齐</md-td>
    </md-tr>
    <md-tr>
      <md-td>margin</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>0px</md-td>
      <md-td>V7.4 及以上版本</md-td>
      <md-td>列的外边距。值的取值范围为 [0,28]px。可选值：
- 单值，如 "10px"，表示列的四个外边距都为 10 px。
- 多值，如 "4px 12px 4px 12px"，表示列的上、右、下、左的外边距分别为 4px，12px，4px，12px。四个值必填，使用空格间隔。

**注意**：首行列的上外边距强制为 0，末行列的下外边距强制为 0。</md-td>
    </md-tr>
    <md-tr>
      <md-td>flex_mode</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>none</md-td>
      <md-td>无</md-td>
      <md-td>移动端和 PC 端的窄屏幕下，各列的自适应方式。取值：
- none：不做布局上的自适应，在窄屏幕下按比例压缩列宽度
- stretch：列布局变为行布局，且每列（行）宽度强制拉伸为 100%，所有列自适应为上下堆叠排布
- flow：列流式排布（自动换行），当一行展示不下一列时，自动换至下一行展示
- bisect：两列等分布局
- trisect：三列等分布局</md-td>
    </md-tr>
    <md-tr>
      <md-td>background_style</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>default</md-td>
      <md-td>无</md-td>
      <md-td>分栏的背景色样式。可取值：
- default：默认的白底样式，客户端深色主题下为黑底样式
- 卡片支持的颜色枚举值和 RGBA 语法自定义颜色。参考[颜色枚举值](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/enumerations-for-fields-related-to-color)。
        
**注意**：当存在分栏的嵌套时，上层分栏的颜色覆盖下层分栏的颜色。</md-td>
    </md-tr>
    <md-tr>
      <md-td>columns</md-td>
      <md-td>是</md-td>
      <md-td>column[]</md-td>
      <md-td>空</md-td>
      <md-td>无</md-td>
      <md-td>分栏中列的配置。</md-td>
    </md-tr>
    <md-tr>
      <md-td>action</md-td>
      <md-td>否</md-td>
      <md-td>Action</md-td>
      <md-td>/</md-td>
      <md-td>无</md-td>
      <md-td>设置点击分栏时的交互配置。当前仅支持跳转交互。如果布局容器内有交互组件，则优先响应交互组件定义的交互。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└ multi_url</md-td>
      <md-td>否</md-td>
      <md-td>Struct</md-td>
      <md-td>空</md-td>
      <md-td>无</md-td>
      <md-td>配置各个端的链接地址。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└└ url</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>空</md-td>
      <md-td>无</md-td>
      <md-td>兜底的跳转链接。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└└ android_url</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>空</md-td>
      <md-td>无</md-td>
      <md-td>Android 端的跳转链接。可配置为 `lark://msgcard/unsupported_action` 声明当前端不允许跳转。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└└ ios_url</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>空</md-td>
      <md-td>无</md-td>
      <md-td>iOS 端的跳转链接。可配置为 `lark://msgcard/unsupported_action` 声明当前端不允许跳转。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└└ pc_url</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>空</md-td>
      <md-td>无</md-td>
      <md-td>PC 端的跳转链接。可配置为 `lark://msgcard/unsupported_action` 声明当前端不允许跳转。</md-td>
    </md-tr>
  </md-tbody>
</md-table>

:::
### 列字段说明

分栏中列（column）的各属性字段说明如下表所示。

:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 15%;">字段名称</md-th>
      <md-th style="width: 10%;">是否必填</md-th>
      <md-th style="width: 10%;">类型</md-th>
      <md-th style="width: 10%;">默认值</md-th>
      <md-th style="width: 15%;">客户端版本要求</md-th>
      <md-th style="width: 40%;">说明</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>tag</md-td>
      <md-td>是</md-td>
      <md-td>String</md-td>
      <md-td>/</md-td>
      <md-td>无</md-td>
      <md-td>列的标签，固定取值为 `column`。</md-td>
    </md-tr>
    <md-tr>
      <md-td>background_style</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>default</md-td>
      <md-td>V7.4 及以上版本</md-td>
      <md-td>列的背景色样式。可取值：
- **default**：默认的白底样式，客户端深色主题下为黑底样式
- 卡片支持的颜色枚举值和 RGBA 语法自定义颜色。参考[颜色枚举值](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/enumerations-for-fields-related-to-color)</md-td>
    </md-tr>
    <md-tr>
      <md-td>width</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>auto</md-td>
      <md-td>无</md-td>
      <md-td>列宽度。仅 `flex_mode` 为 `none` 时，生效此属性。取值：
- **auto**：列宽度与列内元素宽度一致
- **weighted**：列宽度按 `weight` 参数定义的权重分布
- 具体数值，如 100px。取值范围为 [16,600]px。V7.4 及以上版本支持该枚举</md-td>
    </md-tr>
    <md-tr>
      <md-td>weight</md-td>
      <md-td>否</md-td>
      <md-td>Number</md-td>
      <md-td>1</md-td>
      <md-td>无</md-td>
      <md-td>当 `width` 字段取值为 `weighted` 时生效，表示当前列的宽度占比。取值范围为 1 ~ 5 之间的整数。</md-td>
    </md-tr>
    <md-tr>
      <md-td>vertical_align</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>top</md-td>
      <md-td>无</md-td>
      <md-td>列垂直居中的方式。可取值：
 - **top**：上对齐
- **center**：居中对齐
- **bottom**：下对齐</md-td>
    </md-tr>
    <md-tr>
      <md-td>vertical_spacing</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td></md-td>
      <md-td>V7.4 及以上版本</md-td>
      <md-td>列内组件的纵向间距。取值：
- **default**：默认间距，8px 
- **medium**：中等间距 
- **large**：大间距
- 具体数值，如 8px。取值范围为 [0,28]px</md-td>
    </md-tr>
    <md-tr>
      <md-td>padding</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>0px</md-td>
      <md-td>V7.4 及以上版本</md-td>
      <md-td>列的内边距。值的取值范围为 [0,28]px。可选值：
- 单值，如 "10px"，表示列的四个外边距都为 10 px。
- 多值，如 "4px 12px 4px 12px"，表示列的上、右、下、左的外边距分别为 4px，12px，4px，12px。四个值必填，使用空格间隔。</md-td>
    </md-tr>
    <md-tr>
      <md-td>elements</md-td>
      <md-td>否</md-td>
      <md-td>Element 或 ColumnSet[]</md-td>
      <md-td>空</md-td>
      <md-td>空</md-td>
      <md-td>列容器中内嵌的组件。可内嵌组件参考上文嵌套关系。</md-td>
    </md-tr>
    <md-tr>
      <md-td>action</md-td>
      <md-td>否</md-td>
      <md-td>Action</md-td>
      <md-td>/</md-td>
      <md-td>V7.4 及以上版本</md-td>
      <md-td>设置点击列时的交互配置。当前仅支持跳转交互。如果布局容器内有交互组件，则优先响应交互组件定义的交互。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└ multi_url</md-td>
      <md-td>否</md-td>
      <md-td>Struct</md-td>
      <md-td>空</md-td>
      <md-td>V7.4 及以上版本</md-td>
      <md-td>配置各个端的链接地址。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└└ url</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>空</md-td>
      <md-td>V7.4 及以上版本</md-td>
      <md-td>兜底的链接地址。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└└ android_url</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>空</md-td>
      <md-td>V7.4 及以上版本</md-td>
      <md-td>Android 端的链接地址。可配置为 `lark://msgcard/unsupported_action` 声明当前端不允许跳转。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└└ ios_url</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>空</md-td>
      <md-td>V7.4 及以上版本</md-td>
      <md-td>iOS 端的链接地址。可配置为 `lark://msgcard/unsupported_action` 声明当前端不允许跳转。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└└ pc_url</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>空</md-td>
      <md-td>V7.4 及以上版本</md-td>
      <md-td>PC 端的链接地址。可配置为 `lark://msgcard/unsupported_action` 声明当前端不允许跳转。</md-td>
    </md-tr>
  </md-tbody>
</md-table>

:::

## 示例代码

### 示例一：数据报表

以下的 JSON 示例代码可实现如下图所示的卡片效果：

| 桌面端效果                                                                                                                                                                                                                                                      | 窄屏及移动端自适应效果                                                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f529248b7a996a5ce4b1d85e8fc8fecd_jC7m13DTzU.png?height=702&lazyload=true&maxWidth=400&width=1220) | ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5873cce25e30e42b1a375d342275e655_2WLvg3dEpD.png?height=884&lazyload=true&maxWidth=200&width=636) |
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

### 示例二：差旅卡片

以下的 JSON 示例代码可实现如下图所示的卡片效果：
| 桌面端效果                                                                                                                                                                                                                                                      | 窄屏及移动端自适应效果                                                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/1c03620fb66177d4c1b864ddd9f2f8bd_vmjpIsseTa.png?height=802&lazyload=true&maxWidth=400&width=1218) | ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8c4e0e5674ecfce437e260e1a8a9c377_0lIVHPWXq3.png?height=566&lazyload=true&maxWidth=300&width=580) |
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
      "content": "入住酒店：杭州xxxx酒店\n<font color='grey'>📍 浙江省杭州市西湖区</font>"
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